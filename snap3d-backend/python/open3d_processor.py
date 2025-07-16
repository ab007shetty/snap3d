#!/usr/bin/env python3
"""
Open3D processor – single output: texturedMesh.obj
Keeps your original logic, but removes every PLY / extra file write.
"""

from __future__ import annotations

import argparse
import json
import sys
import traceback
from pathlib import Path
from typing import List, Tuple

import cv2
import numpy as np
import open3d as o3d


# --------------------------------------------------------------------------- #
def update_status(status: str, progress: int, error: str | None = None) -> None:
    payload = {"status": status, "progress": progress}
    if error:
        payload["error"] = error
    print(json.dumps(payload), flush=True)


# --------------------------------------------------------------------------- #
class SafeOpen3DProcessor:
    def __init__(
        self, project_id: str, model_name: str, images: List[str], output_dir: str
    ):
        self.project_id = project_id
        self.model_name = model_name
        self.images = [Path(p) for p in images]
        self.out = Path(output_dir)
        self.out.mkdir(parents=True, exist_ok=True)

    # --------------------------------------------------------------------- #
    def _load_and_resize(self, target_size: Tuple[int, int]) -> List[np.ndarray]:
        """Return list of RGB images all of identical size."""
        rgbs = []
        for p in self.images:
            bgr = cv2.imread(str(p))
            if bgr is None:
                raise RuntimeError(f"Cannot read {p}")
            rgb = cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB)
            rgb = cv2.resize(rgb, target_size, interpolation=cv2.INTER_AREA)
            rgbs.append(rgb)
        return rgbs

    def run(self) -> None:
        try:
            if len(self.images) < 2:
                raise ValueError("Need at least 2 images")

            # 1. Resize to the same size ------------------------------------ #
            h0, w0 = cv2.imread(str(self.images[0])).shape[:2]
            rgbs = self._load_and_resize((w0, h0))

            update_status("processing", 20)

            # 2. Stereo depth (dummy but safe) ------------------------------ #
            gray0 = cv2.cvtColor(rgbs[0], cv2.COLOR_RGB2GRAY)
            gray1 = cv2.cvtColor(rgbs[1], cv2.COLOR_RGB2GRAY)

            stereo = cv2.StereoBM_create(numDisparities=64, blockSize=15)
            disp = stereo.compute(gray0, gray1).astype(np.float32) / 16.0
            disp[disp <= 0] = 0.1

            # 3. Back-project ------------------------------------------------ #
            fx = fy = 1000.0
            cx, cy = w0 / 2, h0 / 2
            Q = np.float32(
                [
                    [1, 0, 0, -cx],
                    [0, 1, 0, -cy],
                    [0, 0, 0, fx],
                    [0, 0, -1 / 100.0, 0],
                ]
            )
            points = cv2.reprojectImageTo3D(disp, Q)

            mask = disp > 0
            xyz = points[mask]
            colors = rgbs[0][mask]

            update_status("processing", 60)

            # 4. Point cloud ------------------------------------------------ #
            pcd = o3d.geometry.PointCloud()
            pcd.points = o3d.utility.Vector3dVector(xyz.reshape(-1, 3))
            pcd.colors = o3d.utility.Vector3dVector(colors.reshape(-1, 3) / 255.0)
            pcd = pcd.voxel_down_sample(0.02)

            # 5. Mesh ------------------------------------------------------- #
            pcd.estimate_normals()
            mesh, _ = o3d.geometry.TriangleMesh.create_from_point_cloud_poisson(
                pcd, depth=9
            )
            mesh.remove_degenerate_triangles()
            mesh.remove_duplicated_vertices()

            # 6. Center and color ----------------------------------------- #
            mesh.scale(
                1 / np.linalg.norm(mesh.get_max_bound() - mesh.get_min_bound()),
                center=mesh.get_center(),
            )
            mesh.paint_uniform_color([0.8, 0.8, 0.8])

            # 7. Save only OBJ -------------------------------------------- #
            obj_path = self.out / "texturedMesh.obj"
            o3d.io.write_triangle_mesh(str(obj_path), mesh)

            update_status("completed", 100)

        except Exception as e:
            tb = traceback.format_exc()
            update_status("failed", 50, f"Open3D error: {e}\n{tb}")
            raise


# --------------------------------------------------------------------------- #
def main() -> None:
    parser = argparse.ArgumentParser(description="Safe Open3D photogrammetry")
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

    proc = SafeOpen3DProcessor(args.project_id, args.model_name, images, args.output_dir)
    try:
        proc.run()
    except SystemExit:
        raise
    except:
        sys.exit(1)


if __name__ == "__main__":
    main()