#!/usr/bin/env python3
"""
Enhanced Meshroom head-less 3-D reconstruction worker
- Improved error handling and logging
- Better file management and validation
- Support for individual image files
- Enhanced pipeline configuration
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
from typing import List, Optional, Dict, Any

# --------------------------------------------------------------------------- #
MESHROOM_POSSIBLE_PATHS = [
    r"C:\Program Files\Meshroom\meshroom_batch.exe",
    r"C:\Program Files\Meshroom\Meshroom.exe",
    r"C:\Program Files\Meshroom-2023.3.0\meshroom_batch.exe",
    r"C:\Program Files\Meshroom-2023.3.0\Meshroom.exe",
    "meshroom_batch",
    "Meshroom",
]

# Supported image formats
SUPPORTED_FORMATS = {'.jpg', '.jpeg', '.png', '.tiff', '.tif', '.bmp', '.exr', '.hdr'}

def update_status(status: str, progress: int, error: str | None = None) -> None:
    """Update processing status with JSON output"""
    payload = {"status": status, "progress": progress}
    if error:
        payload["error"] = error
    print(json.dumps(payload), flush=True)

def log_message(message: str, level: str = "INFO") -> None:
    """Log messages to stderr for debugging"""
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] {level}: {message}", file=sys.stderr, flush=True)

def find_meshroom() -> Optional[str]:
    """Find Meshroom executable in common locations"""
    for cmd in MESHROOM_POSSIBLE_PATHS:
        if cmd and pathlib.Path(cmd).exists():
            log_message(f"Found Meshroom at: {cmd}")
            return str(pathlib.Path(cmd).resolve())
    
    # Try to find in PATH
    try:
        result = subprocess.run(['which', 'meshroom_batch'], capture_output=True, text=True)
        if result.returncode == 0:
            path = result.stdout.strip()
            log_message(f"Found Meshroom in PATH: {path}")
            return path
    except:
        pass
    
    return None

def validate_images(images: List[str]) -> List[str]:
    """Validate and filter image files"""
    valid_images = []
    for img_path in images:
        path = pathlib.Path(img_path)
        if not path.exists():
            log_message(f"Image file not found: {img_path}", "WARNING")
            continue
        
        if path.suffix.lower() not in SUPPORTED_FORMATS:
            log_message(f"Unsupported image format: {img_path}", "WARNING")
            continue
        
        # Check file size (minimum 1KB)
        if path.stat().st_size < 1024:
            log_message(f"Image file too small: {img_path}", "WARNING")
            continue
        
        valid_images.append(str(path.resolve()))
    
    return valid_images

def prepare_input_folder(images: List[str]) -> pathlib.Path:
    """Create a temporary folder with symlinks to images"""
    temp_dir = pathlib.Path(tempfile.mkdtemp(prefix="meshroom_input_"))
    log_message(f"Created temporary input folder: {temp_dir}")
    
    for i, img_path in enumerate(images):
        src = pathlib.Path(img_path)
        # Create a clean filename
        ext = src.suffix.lower()
        dst = temp_dir / f"image_{i:04d}{ext}"
        
        try:
            # Use copy instead of symlink for better compatibility
            shutil.copy2(src, dst)
            log_message(f"Copied {src.name} -> {dst.name}")
        except Exception as e:
            log_message(f"Failed to copy {src}: {e}", "ERROR")
            raise
    
    return temp_dir

def cleanup_temp_folder(temp_dir: pathlib.Path) -> None:
    """Clean up temporary folder"""
    try:
        if temp_dir.exists():
            shutil.rmtree(temp_dir)
            log_message(f"Cleaned up temporary folder: {temp_dir}")
    except Exception as e:
        log_message(f"Failed to cleanup {temp_dir}: {e}", "WARNING")

# --------------------------------------------------------------------------- #
class MeshroomProcessor:
    def __init__(self, project_id: str, model_name: str, images: List[str], output_dir: str):
        self.project_id = project_id
        self.model_name = model_name
        self.images = images
        self.output_dir = pathlib.Path(output_dir)
        self.meshroom = find_meshroom()
        self.temp_input_dir = None
        
        log_message(f"Initializing MeshroomProcessor for project: {project_id}")
        log_message(f"Model name: {model_name}")
        log_message(f"Number of images: {len(images)}")
        log_message(f"Output directory: {output_dir}")

    def validate_prerequisites(self) -> None:
        """Validate all prerequisites before processing"""
        if not self.images:
            raise ValueError("No images provided")
        
        if len(self.images) < 2:
            raise ValueError(f"At least 2 images required, got {len(self.images)}")
        
        if not self.meshroom:
            raise FileNotFoundError("Meshroom executable not found. Please install Meshroom.")
        
        # Validate images
        valid_images = validate_images(self.images)
        if len(valid_images) < 2:
            raise ValueError(f"Only {len(valid_images)} valid images found, need at least 2")
        
        self.images = valid_images
        log_message(f"Validated {len(self.images)} images")

    def prepare_directories(self) -> None:
        """Prepare output directories"""
        try:
            self.output_dir.mkdir(parents=True, exist_ok=True)
            cache_dir = self.output_dir / "cache"
            cache_dir.mkdir(exist_ok=True)
            
            log_message(f"Created output directory: {self.output_dir}")
            log_message(f"Created cache directory: {cache_dir}")
        except Exception as e:
            raise RuntimeError(f"Failed to create directories: {e}")

    def build_meshroom_command(self) -> List[str]:
        """Build the Meshroom command with proper parameters"""
        cache_dir = self.output_dir / "cache"
        project_file = self.output_dir / "project.mg"
        
        # Use individual image files instead of folder
        cmd = [
            self.meshroom,
            "--input"
        ]
        
        # Add all image files individually
        for img in self.images:
            cmd.append(str(img))
        
        cmd.extend([
            "--cache", str(cache_dir),
            "--output", str(self.output_dir),
            "--save", str(project_file),
            "--verbose", "info"
        ])
        
        # Add pipeline if available
        try:
            # Check if pipeline parameter is supported
            help_result = subprocess.run([self.meshroom, "--help"], 
                                       capture_output=True, text=True, timeout=10)
            if "--pipeline" in help_result.stdout:
                cmd.extend(["--pipeline", "photogrammetry"])
        except:
            pass
        
        return cmd

    def run_meshroom(self) -> None:
        """Execute Meshroom with proper error handling"""
        cmd = self.build_meshroom_command()
        
        log_message(f"Executing Meshroom command: {' '.join(cmd)}")
        
        try:
            # Start process
            proc = subprocess.Popen(
                cmd,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                cwd=str(self.output_dir)
            )
            
            # Monitor output
            output_lines = []
            while True:
                line = proc.stdout.readline()
                if not line and proc.poll() is not None:
                    break
                if line:
                    line = line.rstrip()
                    output_lines.append(line)
                    log_message(f"Meshroom: {line}")
                    
                    # Update progress based on output
                    if "DepthMap" in line:
                        update_status("processing", 40)
                    elif "Meshing" in line:
                        update_status("processing", 70)
                    elif "Texturing" in line:
                        update_status("processing", 90)
            
            # Wait for completion
            proc.wait()
            
            if proc.returncode != 0:
                error_msg = f"Meshroom failed with exit code {proc.returncode}"
                if output_lines:
                    # Get last few lines for error context
                    error_context = "\n".join(output_lines[-10:])
                    error_msg += f"\nLast output:\n{error_context}"
                raise subprocess.CalledProcessError(proc.returncode, cmd, error_msg)
            
            log_message("Meshroom completed successfully")
            
        except subprocess.TimeoutExpired:
            proc.kill()
            raise RuntimeError("Meshroom process timed out")
        except Exception as e:
            raise RuntimeError(f"Meshroom execution failed: {e}")

    def verify_output(self) -> None:
        """Verify that required output files were created"""
        required_files = [
            "texturedMesh.obj",
            "texturedMesh.mtl"
        ]
        
        missing_files = []
        for filename in required_files:
            file_path = self.output_dir / filename
            if not file_path.exists():
                missing_files.append(filename)
        
        if missing_files:
            # Check for alternative output locations
            for subdir in ["MeshroomCache", "Texturing"]:
                subdir_path = self.output_dir / subdir
                if subdir_path.exists():
                    for filename in missing_files[:]:
                        alt_path = subdir_path / filename
                        if alt_path.exists():
                            # Move file to expected location
                            shutil.copy2(alt_path, self.output_dir / filename)
                            missing_files.remove(filename)
                            log_message(f"Found and moved {filename} from {subdir}")
        
        if missing_files:
            # List all files in output directory for debugging
            all_files = []
            for item in self.output_dir.rglob("*"):
                if item.is_file():
                    all_files.append(str(item.relative_to(self.output_dir)))
            
            log_message(f"Files in output directory: {all_files}")
            raise RuntimeError(f"Missing required output files: {missing_files}")
        
        log_message("All required output files verified")

    def run(self) -> None:
        """Main processing pipeline"""
        try:
            update_status("processing", 5)
            
            # Validate prerequisites
            self.validate_prerequisites()
            update_status("processing", 10)
            
            # Prepare directories
            self.prepare_directories()
            update_status("processing", 15)
            
            # Run Meshroom
            log_message("Starting Meshroom processing...")
            self.run_meshroom()
            update_status("processing", 95)
            
            # Verify output
            self.verify_output()
            update_status("completed", 100)
            
            log_message("Processing completed successfully")
            
        except Exception as e:
            error_msg = str(e)
            log_message(f"Processing failed: {error_msg}", "ERROR")
            update_status("failed", 50, error_msg)
            raise
        finally:
            # Cleanup temporary files
            if self.temp_input_dir and self.temp_input_dir.exists():
                cleanup_temp_folder(self.temp_input_dir)

# --------------------------------------------------------------------------- #
def main() -> None:
    """Main entry point"""
    parser = argparse.ArgumentParser(description="Enhanced Meshroom head-less worker")
    parser.add_argument("--project-id", required=True, help="Project ID")
    parser.add_argument("--model-name", required=True, help="Model name")
    parser.add_argument("--images", required=True, help="JSON list of absolute image paths")
    parser.add_argument("--output-dir", required=True, help="Output directory")
    
    args = parser.parse_args()
    
    log_message("Starting Meshroom processor...")
    log_message(f"Project ID: {args.project_id}")
    log_message(f"Model name: {args.model_name}")
    log_message(f"Output directory: {args.output_dir}")
    
    try:
        # Parse images JSON
        images = json.loads(args.images)
        log_message(f"Parsed {len(images)} image paths")
        
    except json.JSONDecodeError as e:
        error_msg = f"Invalid JSON in images parameter: {e}"
        log_message(error_msg, "ERROR")
        update_status("failed", 5, error_msg)
        sys.exit(1)
    
    # Create and run processor
    worker = MeshroomProcessor(args.project_id, args.model_name, images, args.output_dir)
    
    try:
        worker.run()
        log_message("Processing completed successfully")
    except SystemExit:
        raise
    except Exception as e:
        log_message(f"Processing failed with exception: {e}", "ERROR")
        sys.exit(1)

if __name__ == "__main__":
    main()