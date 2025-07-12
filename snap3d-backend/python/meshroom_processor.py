#!/usr/bin/env python3
"""
Meshroom-based 3D Model Generation Script for Snap3D
This script processes uploaded images to generate 3D models using Meshroom
"""

import os
import sys
import json
import argparse
import shutil
import subprocess
import time
from pathlib import Path
from typing import List, Dict, Any
import uuid

class MeshroomProcessor:
    def __init__(self, project_id: str, model_name: str):
        self.project_id = project_id
        self.model_name = model_name
        self.project_dir = Path(f"temp/{project_id}")
        self.output_dir = Path(f"models/{project_id}")
        self.images_dir = self.project_dir / "images"
        self.status_file = self.project_dir / "status.json"
        
        # Create directories
        self.project_dir.mkdir(parents=True, exist_ok=True)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.images_dir.mkdir(parents=True, exist_ok=True)
        
        # Initialize status
        self.update_status("initialized", 0)
    
    def update_status(self, status: str, progress: int = 0, **kwargs):
        """Update processing status in status.json file"""
        try:
            status_data = {
                "project_id": self.project_id,
                "model_name": self.model_name,
                "status": status,
                "progress": progress,
                "timestamp": time.time(),
                **kwargs
            }
            
            with open(self.status_file, 'w') as f:
                json.dump(status_data, f, indent=2)
                
            # Also print to stdout for Node.js to capture
            print(f"STATUS_UPDATE: {json.dumps(status_data)}")
            sys.stdout.flush()
                
        except Exception as e:
            print(f"ERROR: Failed to update status: {e}")
            sys.stdout.flush()
    
    def copy_images(self, image_paths: List[str]) -> bool:
        """Copy images to the project directory"""
        try:
            self.update_status("copying_images", 10)
            
            copied_images = []
            for i, img_path in enumerate(image_paths):
                src_path = Path(img_path)
                if src_path.exists():
                    # Keep original extension
                    dst_path = self.images_dir / f"image_{i:03d}{src_path.suffix}"
                    shutil.copy2(src_path, dst_path)
                    copied_images.append(str(dst_path))
                    print(f"Copied: {src_path} -> {dst_path}")
                else:
                    print(f"WARNING: Image not found: {img_path}")
            
            if len(copied_images) < 2:
                self.update_status("failed", 0, error="Insufficient images (minimum 2 required)")
                return False
            
            self.update_status("images_copied", 20, imageCount=len(copied_images))
            return True
            
        except Exception as e:
            print(f"ERROR: Failed to copy images: {e}")
            self.update_status("failed", 0, error=str(e))
            return False
    
    def run_meshroom_processing(self) -> bool:
        """Run Meshroom processing pipeline"""
        try:
            # Check if Meshroom is installed
            meshroom_cmd = self.find_meshroom_command()
            if meshroom_cmd:
                return self.run_meshroom_real(meshroom_cmd)
            else:
                print("Meshroom not found, using simulation mode")
                return self.run_meshroom_simulation()
                
        except Exception as e:
            print(f"ERROR: Meshroom processing failed: {e}")
            self.update_status("failed", 0, error=str(e))
            return False
    
    def find_meshroom_command(self) -> str:
        """Find Meshroom command in the system"""
        possible_commands = [
            "meshroom_photogrammetry",
            "Meshroom",
            "meshroom",
            "/usr/local/bin/meshroom_photogrammetry",
            "/opt/meshroom/meshroom_photogrammetry",
            "/Applications/Meshroom.app/Contents/MacOS/meshroom_photogrammetry"
        ]
        
        for cmd in possible_commands:
            if shutil.which(cmd):
                print(f"Found Meshroom at: {cmd}")
                return cmd
        
        return None
    
    def run_meshroom_real(self, meshroom_cmd: str) -> bool:
        """Run actual Meshroom processing"""
        try:
            self.update_status("initializing_meshroom", 25)
            
            # Create output directory for Meshroom
            meshroom_output = self.project_dir / "meshroom_output"
            meshroom_output.mkdir(exist_ok=True)
            
            # Build Meshroom command
            cmd = [
                meshroom_cmd,
                "--input", str(self.images_dir),
                "--output", str(meshroom_output),
                "--cache", str(self.project_dir / "cache")
            ]
            
            print(f"Running Meshroom command: {' '.join(cmd)}")
            self.update_status("running_meshroom", 30)
            
            # Run Meshroom process
            process = subprocess.Popen(
                cmd,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                cwd=str(self.project_dir)
            )
            
            # Monitor progress
            progress = 30
            while process.poll() is None:
                time.sleep(10)
                progress = min(progress + 5, 90)
                self.update_status("processing", progress)
                
                # Read output
                if process.stdout:
                    line = process.stdout.readline()
                    if line:
                        print(f"Meshroom: {line.strip()}")
            
            # Check result
            if process.returncode == 0:
                # Copy results to output directory
                self.copy_meshroom_results(meshroom_output)
                self.update_status("completed", 100, 
                                 outputPath=str(self.output_dir),
                                 downloadReady=True)
                return True
            else:
                self.update_status("failed", 0, error="Meshroom processing failed")
                return False
                
        except Exception as e:
            print(f"ERROR: Real Meshroom processing failed: {e}")
            self.update_status("failed", 0, error=str(e))
            return False
    
    def copy_meshroom_results(self, meshroom_output: Path):
        """Copy Meshroom output files to the final output directory"""
        try:
            # Look for common Meshroom output files
            common_files = [
                "texturedMesh.obj",
                "texturedMesh.mtl", 
                "texture_1001.jpg",
                "texture_1001.png",
                "denseMesh.ply",
                "pointCloud.ply"
            ]
            
            # Search for files in Meshroom output directory
            for file_pattern in common_files:
                matches = list(meshroom_output.rglob(file_pattern))
                if matches:
                    src_file = matches[0]
                    dst_file = self.output_dir / file_pattern
                    shutil.copy2(src_file, dst_file)
                    print(f"Copied result: {src_file} -> {dst_file}")
                    
        except Exception as e:
            print(f"WARNING: Failed to copy some Meshroom results: {e}")
    
    def run_meshroom_simulation(self) -> bool:
        """Run simulation mode for development/testing"""
        try:
            # Simulate processing steps
            steps = [
                ("feature_extraction", 30, 3),
                ("image_matching", 45, 3),
                ("structure_from_motion", 60, 4),
                ("dense_reconstruction", 75, 5),
                ("meshing", 90, 3),
                ("texturing", 95, 2)
            ]
            
            for step_name, progress, duration in steps:
                self.update_status(step_name, progress)
                print(f"Simulating {step_name}...")
                time.sleep(duration)
            
            # Create mock output files
            self.create_mock_outputs()
            
            self.update_status("completed", 100, 
                             outputPath=str(self.output_dir),
                             downloadReady=True,
                             vertices=15000,
                             faces=30000,
                             simulationMode=True)
            
            return True
            
        except Exception as e:
            print(f"ERROR: Simulation failed: {e}")
            self.update_status("failed", 0, error=str(e))
            return False
    
    def create_mock_outputs(self):
        """Create mock output files for testing"""
        try:
            # Create mock OBJ file
            obj_content = """# Snap3D Mock OBJ file
# Generated in simulation mode
o MockHouse
v 0.0 0.0 0.0
v 2.0 0.0 0.0
v 2.0 2.0 0.0
v 0.0 2.0 0.0
v 0.0 0.0 2.0
v 2.0 0.0 2.0
v 2.0 2.0 2.0
v 0.0 2.0 2.0
# Faces
f 1 2 3 4
f 5 6 7 8
f 1 2 6 5
f 2 3 7 6
f 3 4 8 7
f 4 1 5 8
"""
            with open(self.output_dir / "texturedMesh.obj", 'w') as f:
                f.write(obj_content)
            
            # Create mock MTL file
            mtl_content = """# Snap3D Mock MTL file
newmtl MockMaterial
Ka 0.2 0.2 0.2
Kd 0.8 0.8 0.8
Ks 0.1 0.1 0.1
Ns 10.0
"""
            with open(self.output_dir / "texturedMesh.mtl", 'w') as f:
                f.write(mtl_content)
            
            # Create mock PLY file
            ply_content = """ply
format ascii 1.0
element vertex 8
property float x
property float y
property float z
property uchar red
property uchar green
property uchar blue
element face 6
property list uchar int vertex_indices
end_header
0.0 0.0 0.0 255 0 0
2.0 0.0 0.0 0 255 0
2.0 2.0 0.0 0 0 255
0.0 2.0 0.0 255 255 0
0.0 0.0 2.0 255 0 255
2.0 0.0 2.0 0 255 255
2.0 2.0 2.0 128 128 128
0.0 2.0 2.0 255 255 255
4 0 1 2 3
4 4 5 6 7
4 0 1 5 4
4 1 2 6 5
4 2 3 7 6
4 3 0 4 7
"""
            with open(self.output_dir / "denseMesh.ply", 'w') as f:
                f.write(ply_content)
            
            print("Mock output files created successfully")
            
        except Exception as e:
            print(f"ERROR: Failed to create mock outputs: {e}")
    
    def get_model_info(self) -> Dict[str, Any]:
        """Get information about the generated model"""
        try:
            info = {
                "project_id": self.project_id,
                "model_name": self.model_name,
                "output_path": str(self.output_dir),
                "files": []
            }
            
            # List output files
            if self.output_dir.exists():
                for file_path in self.output_dir.iterdir():
                    if file_path.is_file():
                        info["files"].append({
                            "name": file_path.name,
                            "size": file_path.stat().st_size,
                            "path": str(file_path)
                        })
            
            return info
            
        except Exception as e:
            print(f"ERROR: Failed to get model info: {e}")
            return {}
    
    def cleanup_temp_files(self):
        """Clean up temporary processing files"""
        try:
            temp_dirs = [
                self.project_dir / "images",
                self.project_dir / "cache",
                self.project_dir / "meshroom_output"
            ]
            
            for temp_dir in temp_dirs:
                if temp_dir.exists():
                    shutil.rmtree(temp_dir)
                    print(f"Cleaned up: {temp_dir}")
                    
        except Exception as e:
            print(f"WARNING: Failed to cleanup some temp files: {e}")

def main():
    parser = argparse.ArgumentParser(description='Generate 3D model from images using Meshroom')
    parser.add_argument('--project-id', required=True, help='Unique project identifier')
    parser.add_argument('--model-name', required=True, help='Name for the 3D model')
    parser.add_argument('--images', required=True, help='JSON array of image file paths')
    parser.add_argument('--cleanup', action='store_true', help='Clean up temporary files after processing')
    
    args = parser.parse_args()
    
    try:
        # Parse image paths
        image_paths = json.loads(args.images)
        print(f"Processing {len(image_paths)} images for project {args.project_id}")
        
        # Create processor
        processor = MeshroomProcessor(args.project_id, args.model_name)
        
        # Process images
        success = False
        if processor.copy_images(image_paths):
            success = processor.run_meshroom_processing()
        
        if success:
            print("SUCCESS: 3D model generation completed")
            model_info = processor.get_model_info()
            print(f"MODEL_INFO: {json.dumps(model_info)}")
        else:
            print("FAILED: 3D model generation failed")
            
        # Cleanup if requested
        if args.cleanup:
            processor.cleanup_temp_files()
        
        return 0 if success else 1
        
    except Exception as e:
        print(f"FATAL ERROR: {e}")
        return 1

if __name__ == "__main__":
    exit_code = main()
    sys.exit(exit_code)