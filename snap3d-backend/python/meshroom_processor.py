#!/usr/bin/env python3
"""
Meshroom head-less 3-D reconstruction worker
- Uses meshroom_batch with explicit --input folder
- Removes the non-existent --forceCpu flag
"""

from __future__ import annotations

import argparse
import json
import os
import pathlib
import shutil
import subprocess
import sys
from typing import List, Optional

# --------------------------------------------------------------------------- #
MESHROOM_POSSIBLE_PATHS = [
    r"C:\Program Files\Meshroom\meshroom_batch.exe",
    r"C:\Program Files\Meshroom\Meshroom.exe",
    "meshroom_batch",
    "Meshroom",
]


def update_status(status: str, progress: int, error: str | None = None) -> None:
    payload = {"status": status, "progress": progress}
    if error:
        payload["error"] = error
    print(json.dumps(payload), flush=True)

def find_meshroom() -> Optional[str]:
    for cmd in MESHROOM_POSSIBLE_PATHS:
        if cmd and pathlib.Path(cmd).exists():
            print(f"Found Meshroom at: {cmd}", file=sys.stderr)
            return str(pathlib.Path(cmd).resolve())
    return None

# --------------------------------------------------------------------------- #
class MeshroomProcessor:
    def __init__(self, project_id: str, model_name: str, images: List[str], output_dir: str):
        self.project_id = project_id
        self.model_name = model_name
        self.images = images
        self.output_dir = pathlib.Path(output_dir)
        self.meshroom = find_meshroom()

    def run(self) -> None:
        try:
            if not self.images:
                raise ValueError("No images provided")
            for img in self.images:
                if not pathlib.Path(img).exists():
                    raise FileNotFoundError(img)

            update_status("processing", 5)

            if not self.meshroom:
                raise FileNotFoundError("Meshroom executable not found")

            self.output_dir.mkdir(parents=True, exist_ok=True)
            cache_dir = self.output_dir / "cache"
            cache_dir.mkdir(exist_ok=True)

            input_folder = pathlib.Path(self.images[0]).parent

            cmd = [
                self.meshroom,
                "--input", str(input_folder),
                "--cache", str(cache_dir),
                "--output", str(self.output_dir),
                "--save", str(self.output_dir / "project.mg"),
                "--pipeline", "photogrammetry",
                "--verbose", "info",
                # "--forceCpu" removed – does NOT exist
            ]

            update_status("processing", 15)
            proc = subprocess.Popen(
                cmd,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
            )
            for line in proc.stdout:
                print(line.rstrip(), file=sys.stderr)
            proc.wait()
            if proc.returncode != 0:
                raise subprocess.CalledProcessError(proc.returncode, cmd)

            final = self.output_dir / "texturedMesh.obj"
            if not final.exists():
                raise RuntimeError("Meshroom did not produce texturedMesh.obj")

            update_status("completed", 100)

        except subprocess.CalledProcessError as e:
            update_status("failed", 50, f"Meshroom failed: {e}")
            raise
        except Exception as e:
            update_status("failed", 50, str(e))
            raise

# --------------------------------------------------------------------------- #
def main() -> None:
    parser = argparse.ArgumentParser(description="Meshroom head-less worker")
    parser.add_argument("--project-id", required=True)
    parser.add_argument("--model-name", required=True)
    parser.add_argument("--images", required=True, help="JSON list of absolute paths")
    parser.add_argument("--output-dir", required=True)
    args = parser.parse_args()

    try:
        images = json.loads(args.images)
    except json.JSONDecodeError as e:
        update_status("failed", 5, f"Bad JSON images: {e}")
        sys.exit(1)

    worker = MeshroomProcessor(args.project_id, args.model_name, images, args.output_dir)
    try:
        worker.run()
    except SystemExit:
        raise
    except:
        sys.exit(1)

if __name__ == "__main__":
    main()