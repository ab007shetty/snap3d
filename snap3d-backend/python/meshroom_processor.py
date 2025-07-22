#!/usr/bin/env python3
"""
Enhanced Meshroom head-less 3-D reconstruction worker
- Uses simple input/output execution strategy
- Strict image validation for Meshroom compatibility
- Detailed error handling and logging
- Ensures OBJ and MTL output files
"""

from __future__ import annotations

import argparse
import json
import os
import pathlib
import shutil
import subprocess
import sys
import tempfile
import time
import re
from typing import List, Optional, Dict, Any
from PIL import Image
import exifread
import logging

# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stderr),
        logging.FileHandler('meshroom_processor.log')
    ]
)
logger = logging.getLogger(__name__)

MESHROOM_POSSIBLE_PATHS = [
    r"C:\Program Files\Meshroom\meshroom_batch.exe",
    r"C:\Program Files\Meshroom\Meshroom.exe",
]

SUPPORTED_FORMATS = {'.jpg', '.jpeg', '.png', '.tiff', '.tif', '.bmp', '.exr', '.hdr'}

def update_status(status: str, progress: int, error: str = None, output_dir: str = None, 
                 project_id: str = None, model_name: str = None, 
                 images: List[str] = None, created_at: int = None,
                 obj_files: List[Dict[str, str]] = None) -> None:
    """Update status with complete project information"""
    payload = {
        "status": status, 
        "progress": progress, 
        "updatedAt": int(time.time() * 1000)
    }
    if project_id:
        payload["id"] = project_id
    if model_name:
        payload["name"] = model_name
        payload["processor"] = "meshroom"
    if created_at:
        payload["createdAt"] = created_at
    if images:
        payload["images"] = [{"filename": pathlib.Path(img).name} for img in images]
    if obj_files:
        payload["objFiles"] = obj_files
    else:
        payload["objFiles"] = []
    if error:
        payload["error"] = error
    
    logger.debug(f"Updating status: {payload}")
    print(json.dumps(payload), flush=True)
    
    if output_dir:
        status_path = pathlib.Path(output_dir) / "status.json"
        try:
            with open(status_path, 'w', encoding='utf-8') as f:
                json.dump(payload, f, indent=2)
            logger.debug(f"Wrote status to {status_path}")
        except Exception as e:
            logger.error(f"Failed to write status.json: {e}")

def check_cuda_available() -> bool:
    """Check if CUDA is available"""
    try:
        result = subprocess.run(['nvidia-smi'], capture_output=True, text=True, timeout=10)
        if result.returncode == 0:
            logger.info("CUDA GPU detected")
            return True
    except:
        pass
    logger.warning("No CUDA detected, using CPU")
    return False

def check_meshroom_version(meshroom_path: str) -> str:
    """Check Meshroom version"""
    try:
        result = subprocess.run([meshroom_path, '--version'], capture_output=True, text=True, timeout=10)
        version = result.stdout.strip()
        logger.info(f"Meshroom version: {version}")
        return version
    except Exception as e:
        logger.error(f"Failed to check Meshroom version: {e}")
        return "unknown"

def find_meshroom() -> Optional[str]:
    """Find Meshroom executable, preferring meshroom_batch.exe"""
    for cmd in MESHROOM_POSSIBLE_PATHS:
        if cmd and pathlib.Path(cmd).exists() and 'meshroom_batch.exe' in cmd.lower():
            logger.info(f"Found preferred Meshroom batch executable: {cmd}")
            version = check_meshroom_version(cmd)
            return str(pathlib.Path(cmd).resolve())
    for cmd in MESHROOM_POSSIBLE_PATHS:
        if cmd and pathlib.Path(cmd).exists():
            logger.info(f"Found Meshroom executable: {cmd}")
            version = check_meshroom_version(cmd)
            return str(pathlib.Path(cmd).resolve())
    logger.error("Meshroom executable not found")
    return None

def validate_images(images: List[str]) -> List[str]:
    """Validate images for Meshroom compatibility"""
    valid_images = []
    for img_path in images:
        path = pathlib.Path(img_path)
        if not path.exists():
            logger.warning(f"Image not found: {img_path}")
            continue
        
        if path.suffix.lower() not in SUPPORTED_FORMATS:
            logger.warning(f"Unsupported format: {img_path}")
            continue
        
        try:
            if path.stat().st_size < 1024:
                logger.warning(f"Image too small: {img_path}")
                continue
            
            with Image.open(path) as img:
                width, height = img.size
                logger.info(f"Image {path.name}: {width}x{height}")
                if width < 1024 or height < 1024:
                    logger.warning(f"Image resolution too low (<1024x1024): {path.name}")
                    continue
            
            with open(path, 'rb') as f:
                tags = exifread.process_file(f, details=False)
                if 'EXIF FocalLength' not in tags:
                    logger.warning(f"No EXIF focal length for {path.name}")
                    continue
                if 'EXIF DateTimeOriginal' not in tags:
                    logger.warning(f"No EXIF timestamp for {path.name}")
        
        except Exception as e:
            logger.warning(f"Error validating {img_path}: {e}")
            continue
        
        valid_images.append(str(path.resolve()))
    
    # Basic overlap check using timestamps
    if len(valid_images) >= 4:
        try:
            timestamps = []
            for img in valid_images:
                with open(img, 'rb') as f:
                    tags = exifread.process_file(f, details=False)
                    if 'EXIF DateTimeOriginal' in tags:
                        ts = tags['EXIF DateTimeOriginal'].values
                        from datetime import datetime
                        ts = datetime.strptime(ts, '%Y:%m:%d %H:%M:%S')
                        timestamps.append(ts.timestamp())
            timings = sorted(timestamps)
            if timings and (timings[-1] - timings[0]) > 300:
                logger.warning("Images have large time gaps, possible insufficient overlap")
        except:
            logger.warning("Could not check image timestamps for overlap")
    
    return valid_images

def create_input_folder(images: List[str]) -> pathlib.Path:
    """Create temporary input folder with images"""
    temp_dir = pathlib.Path(tempfile.mkdtemp(prefix="meshroom_input_"))
    logger.info(f"Created input folder: {temp_dir}")
    
    for i, img_path in enumerate(images):
        src = pathlib.Path(img_path)
        base_name = src.stem
        ext = src.suffix
        dst = temp_dir / f"{base_name}_{i:03d}{ext}"
        try:
            shutil.copy2(src, dst)
            logger.info(f"Copied {src.name} -> {dst.name}")
        except Exception as e:
            logger.error(f"Failed to copy {src}: {e}")
            raise
    return temp_dir

def cleanup_temp_folder(temp_dir: pathlib.Path) -> None:
    """Clean up temporary folder"""
    try:
        if temp_dir.exists():
            shutil.rmtree(temp_dir)
            logger.info(f"Cleaned up {temp_dir}")
    except Exception as e:
        logger.warning(f"Failed to cleanup {temp_dir}: {e}")

class MeshroomProcessor:
    def __init__(self, project_id: str, model_name: str, images: List[str], output_dir: str):
        self.project_id = project_id
        self.model_name = model_name
        self.images = images
        self.output_dir = pathlib.Path(output_dir)
        self.meshroom = find_meshroom()
        self.temp_input_dir = None
        self.cuda_available = check_cuda_available()
        self.created_at = int(time.time() * 1000)
        
        logger.info(f"Initializing project: {project_id}, model: {model_name}, images: {len(images)}, output: {output_dir}")

    def _update_status_with_context(self, status: str, progress: int, error: str = None, obj_files: List[Dict[str, str]] = None):
        """Update status with full context"""
        update_status(
            status=status,
            progress=progress,
            error=error,
            output_dir=str(self.output_dir),
            project_id=self.project_id,
            model_name=self.model_name,
            images=self.images,
            created_at=self.created_at,
            obj_files=obj_files
        )

    def validate_prerequisites(self) -> None:
        """Validate prerequisites"""
        if not self.images:
            raise ValueError("No images provided")
        
        if len(self.images) < 4:
            raise ValueError(f"Only {len(self.images)} images provided; need at least 4")
        
        if not self.meshroom:
            raise FileNotFoundError("Meshroom executable not found")
        
        self.images = validate_images(self.images)
        if len(self.images) < 4:
            raise ValueError(f"Only {len(self.images)} valid images found; need at least 4")
        
        logger.info(f"Validated {len(self.images)} images")

    def prepare_directories(self) -> None:
        """Prepare output and cache directories"""
        try:
            self.output_dir.mkdir(parents=True, exist_ok=True)
            cache_dir = self.output_dir / "cache"
            cache_dir.mkdir(parents=True, exist_ok=True)
            
            if os.name == 'nt':
                try:
                    subprocess.run(['icacls', str(self.output_dir), '/grant', 'Everyone:(OI)(CI)F'], check=True, capture_output=True)
                    subprocess.run(['icacls', str(cache_dir), '/grant', 'Everyone:(OI)(CI)F'], check=True, capture_output=True)
                    logger.info(f"Set permissions for {self.output_dir} and {cache_dir}")
                except subprocess.CalledProcessError as e:
                    logger.warning(f"Failed to set permissions: {e}")
            
            # Check disk space
            total, used, free = shutil.disk_usage(self.output_dir)
            if free < 10 * 1024 * 1024 * 1024:  # Less than 10GB
                logger.warning(f"Low disk space: {free / (1024**3):.2f} GB free")
        except Exception as e:
            raise RuntimeError(f"Failed to prepare directories: {e}")

    def run_meshroom(self) -> None:
        """Run Meshroom with simple input/output"""
        logger.info("Executing Meshroom...")
        self.temp_input_dir = create_input_folder(self.images)
        cmd = [self.meshroom, "-i", str(self.temp_input_dir), "-o", str(self.output_dir), "--verbose", "info"]
        
        env = os.environ.copy()
        if self.cuda_available:
            env['CUDA_VISIBLE_DEVICES'] = '0'
            env['MESHROOM_USE_CUDA'] = '1'
        else:
            env['MESHROOM_FORCE_CPU'] = '1'
        
        log_file = self.output_dir / "meshroom_log.txt"
        logger.info(f"Logging to: {log_file}")
        
        try:
            with open(log_file, 'w', encoding='utf-8') as f_log:
                proc = subprocess.Popen(
                    cmd,
                    stdout=subprocess.PIPE,
                    stderr=subprocess.STDOUT,
                    text=True,
                    cwd=str(self.output_dir),
                    env=env,
                    bufsize=1
                )
                
                output_lines = []
                progress_patterns = [
                    (r'(\d+)%', lambda x: int(x)),
                    (r'(\d+)/(\d+)', lambda x: int((int(x[0]) / int(x[1])) * 100)),
                    (r'CameraInit.*completed', 20),
                    (r'FeatureExtraction.*completed', 30),
                    (r'FeatureMatching.*completed', 40),
                    (r'StructureFromMotion.*completed', 50),
                    (r'PrepareDenseScene.*completed', 60),
                    (r'DepthMap.*completed', 70),
                    (r'Meshing.*completed', 80),
                    (r'MeshFiltering.*completed', 85),
                    (r'Texturing.*completed', 95)
                ]
                error_patterns = [
                    (r'No valid camera found', "Images lack valid EXIF data"),
                    (r'Failed to find.*matches', "Insufficient image overlap or quality"),
                    (r'CUDA.*error', "CUDA failure, retrying with CPU"),
                    (r'No 3D points', "StructureFromMotion failed"),
                    (r'Failed to open file', "File access error"),
                    (r'Invalid parameter', "Invalid Meshroom command parameters"),
                    (r'Failed to initialize.*pipeline', "Meshroom pipeline initialization failed"),
                    (r'Out of memory', "Insufficient memory or disk space")
                ]
                
                while True:
                    line = proc.stdout.readline()
                    if not line and proc.poll() is not None:
                        break
                    if line:
                        line = line.rstrip()
                        output_lines.append(line)
                        f_log.write(line + "\n")
                        f_log.flush()
                        logger.debug(f"Meshroom: {line}")
                        
                        for pattern, error_msg in error_patterns:
                            if re.search(pattern, line, re.IGNORECASE):
                                logger.error(f"Error: {error_msg}")
                                if "CUDA" in error_msg and self.cuda_available:
                                    logger.info("Retrying without CUDA...")
                                    env['MESHROOM_FORCE_CPU'] = '1'
                                    env.pop('CUDA_VISIBLE_DEVICES', None)
                                    env.pop('MESHROOM_USE_CUDA', None)
                                    self.cuda_available = False
                                    proc.kill()
                                    proc = subprocess.Popen(
                                        cmd,
                                        stdout=subprocess.PIPE,
                                        stderr=subprocess.STDOUT,
                                        text=True,
                                        cwd=str(self.output_dir),
                                        env=env,
                                        bufsize=1
                                    )
                                    output_lines = []
                                    continue
                                raise RuntimeError(error_msg)
                        
                        for pattern, progress_func in progress_patterns:
                            match = re.search(pattern, line, re.IGNORECASE)
                            if match:
                                try:
                                    if callable(progress_func):
                                        if len(match.groups()) == 1:
                                            progress = progress_func(match.group(1))
                                        else:
                                            progress = progress_func(match.groups())
                                    else:
                                        progress = progress_func
                                    progress = max(20, min(95, progress))
                                    self._update_status_with_context("processing", progress)
                                    break
                                except:
                                    pass
                
                return_code = proc.wait()
                if return_code != 0:
                    error_msg = "\n".join(output_lines[-50:]) if output_lines else "No output captured"
                    f_log.write(f"Command failed with exit code {return_code}\nLast output:\n{error_msg}\n")
                    f_log.flush()
                    raise subprocess.CalledProcessError(return_code, cmd, error_msg)
        
        except subprocess.CalledProcessError as e:
            logger.error(f"Meshroom failed: {e.output}")
            raise RuntimeError(f"Meshroom execution failed: {e.output}")

    def find_and_copy_output_files(self) -> List[Dict[str, str]]:
        """Find and copy output files"""
        search_dirs = [
            self.output_dir,
            self.output_dir / "MeshroomCache",
            self.output_dir / "cache",
            self.output_dir / "MeshroomCache" / "Texturing",
            self.output_dir / "cache" / "Texturing"
        ]
        
        obj_files = []
        mtl_files = []
        for search_dir in search_dirs:
            if search_dir.exists():
                obj_files.extend(search_dir.rglob("*.obj"))
                mtl_files.extend(search_dir.rglob("*.mtl"))
        
        result = []
        if obj_files:
            best_obj = max(obj_files, key=lambda f: f.stat().st_size)
            target_obj = self.output_dir / f"{self.model_name}.obj"
            shutil.copy2(best_obj, target_obj)
            logger.info(f"Copied OBJ: {best_obj} -> {target_obj}")
            result.append({"filename": f"{self.model_name}.obj", "type": "mesh"})
        
        if mtl_files:
            best_mtl = max(mtl_files, key=lambda f: f.stat().st_size)
            target_mtl = self.output_dir / f"{self.model_name}.mtl"
            shutil.copy2(best_mtl, target_mtl)
            logger.info(f"Copied MTL: {best_mtl} -> {target_mtl}")
            result.append({"filename": f"{self.model_name}.mtl", "type": "material"})
        
        texture_files = []
        for search_dir in search_dirs:
            if search_dir.exists():
                texture_files.extend(search_dir.rglob("*.png"))
                texture_files.extend(search_dir.rglob("*.jpg"))
        
        for tex_file in texture_files:
            target_tex = self.output_dir / tex_file.name
            shutil.copy2(tex_file, target_tex)
            logger.info(f"Copied texture: {tex_file} -> {target_tex}")
            result.append({"filename": tex_file.name, "type": "texture"})
        
        self.cleanup_extra_files()
        return result

    def cleanup_extra_files(self) -> None:
        """Keep only OBJ, MTL, and textures"""
        keep_extensions = {".obj", ".mtl", ".png", ".jpg", ".json"}
        keep_files = {f"{self.model_name}.obj", f"{self.model_name}.mtl", "status.json"}
        for item in self.output_dir.iterdir():
            if item.is_file() and (item.name not in keep_files and item.suffix.lower() not in keep_extensions):
                try:
                    item.unlink()
                    logger.info(f"Removed file: {item}")
                except:
                    pass
            elif item.is_dir() and item.name not in {"cache", "MeshroomCache"}:
                try:
                    shutil.rmtree(item)
                    logger.info(f"Removed directory: {item}")
                except:
                    pass

    def verify_output(self) -> None:
        """Verify output files"""
        obj_files = self.find_and_copy_output_files()
        obj_file = self.output_dir / f"{self.model_name}.obj"
        if not obj_file.exists():
            all_files = list(self.output_dir.rglob("*"))
            file_list = [f"{f.relative_to(self.output_dir)} ({f.stat().st_size} bytes)" 
                        for f in all_files if f.is_file()]
            logger.error(f"Output files: {file_list}")
            raise RuntimeError("No OBJ file generated. Check image quality or Meshroom logs.")
        
        obj_size = obj_file.stat().st_size
        if obj_size < 1000:
            raise RuntimeError(f"OBJ file too small ({obj_size} bytes)")
        
        logger.info(f"Generated OBJ: {obj_size} bytes")
        self._update_status_with_context("completed", 100, obj_files=obj_files)

    def run(self) -> None:
        """Main pipeline"""
        try:
            self._update_status_with_context("processing", 5)
            self.validate_prerequisites()
            self._update_status_with_context("processing", 10)
            self.prepare_directories()
            self._update_status_with_context("processing", 15)
            self.run_meshroom()
            self._update_status_with_context("processing", 98)
            self.verify_output()
            logger.info("Processing completed")
        except Exception as e:
            logger.error(f"Processing failed: {e}")
            self._update_status_with_context("failed", 50, str(e))
            raise
        finally:
            if self.temp_input_dir and self.temp_input_dir.exists():
                cleanup_temp_folder(self.temp_input_dir)

def main() -> None:
    """Main entry point"""
    parser = argparse.ArgumentParser(description="Meshroom worker")
    parser.add_argument("--project-id", required=True, help="Project ID")
    parser.add_argument("--model-name", required=True, help="Model name")
    parser.add_argument("--images", required=True, help="JSON list of image paths")
    parser.add_argument("--output-dir", required=True, help="Output directory")
    
    args = parser.parse_args()
    logger.info("Starting Meshroom processor...")
    
    try:
        images = json.loads(args.images)
        logger.info(f"Parsed {len(images)} images")
    except json.JSONDecodeError as e:
        error_msg = f"Invalid JSON in images: {e}"
        logger.error(error_msg)
        update_status("failed", 5, error_msg, args.output_dir, args.project_id, args.model_name)
        sys.exit(1)
    
    worker = MeshroomProcessor(args.project_id, args.model_name, images, args.output_dir)
    try:
        worker.run()
    except Exception as e:
        logger.error(f"Fatal error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()