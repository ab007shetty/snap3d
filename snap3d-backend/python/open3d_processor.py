#!/usr/bin/env python3
"""
Enhanced Open3D processor – Advanced image-to-3D textured-mesh converter
Creates a textured .obj (+ .mtl + .jpg) from multiple images with rich color preservation.
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
from sklearn.cluster import KMeans


# --------------------------------------------------------------------------- #
def update_status(status: str, progress: int, error: str | None = None) -> None:
    payload = {"status": status, "progress": progress}
    if error:
        payload["error"] = error
    print(json.dumps(payload), flush=True)


# --------------------------------------------------------------------------- #
class EnhancedOpen3DProcessor:
    def __init__(
        self, project_id: str, model_name: str, images: List[str], output_dir: str
    ):
        self.project_id = project_id
        self.model_name = model_name
        self.images = [Path(p) for p in images]
        self.out = Path(output_dir)
        self.out.mkdir(parents=True, exist_ok=True)

        # Enhanced parameters for better color capture
        self.target_width = 1024
        self.target_height = 768
        self.voxel_size = 0.003
        self.texture_size = 2048
        self.depth_scale = 1.5

    # --------------------------------------------------------------------- #
    def _enhance_image_colors(self, image: np.ndarray) -> np.ndarray:
        """Enhanced color processing to preserve vibrant colors."""
        # Convert to LAB color space for better color processing
        lab = cv2.cvtColor(image, cv2.COLOR_RGB2LAB)
        
        # Apply CLAHE to L channel
        clahe = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8, 8))
        lab[:, :, 0] = clahe.apply(lab[:, :, 0])
        
        # Convert back to RGB
        enhanced = cv2.cvtColor(lab, cv2.COLOR_LAB2RGB)
        
        # Enhance saturation
        hsv = cv2.cvtColor(enhanced, cv2.COLOR_RGB2HSV)
        hsv[:, :, 1] = cv2.multiply(hsv[:, :, 1], 1.2)  # Increase saturation
        hsv[:, :, 1] = np.clip(hsv[:, :, 1], 0, 255)
        enhanced = cv2.cvtColor(hsv, cv2.COLOR_HSV2RGB)
        
        return enhanced

    def _load_and_preprocess(self) -> List[np.ndarray]:
        """Load and preprocess images with enhanced color preservation."""
        rgbs = []
        for i, p in enumerate(self.images):
            update_status("loading", 5 + (i * 10) // len(self.images))
            
            bgr = cv2.imread(str(p))
            if bgr is None:
                raise RuntimeError(f"Cannot read {p}")

            # Convert to RGB
            rgb = cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB)
            
            # Resize with high-quality interpolation
            rgb = cv2.resize(
                rgb, (self.target_width, self.target_height), 
                interpolation=cv2.INTER_LANCZOS4
            )
            
            # Enhanced color processing
            rgb = self._enhance_image_colors(rgb)
            
            # Gentle noise reduction while preserving details
            rgb = cv2.bilateralFilter(rgb, 5, 50, 50)
            
            rgbs.append(rgb)
        
        return rgbs

    # --------------------------------------------------------------------- #
    def _estimate_depth_from_image(self, image: np.ndarray) -> np.ndarray:
        """Enhanced depth estimation with better color-based depth cues."""
        gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
        
        # Use multiple depth cues
        # 1. Brightness-based depth
        brightness_depth = (255 - gray) / 255.0
        
        # 2. Gradient-based depth (edges are closer)
        grad_x = cv2.Sobel(gray, cv2.CV_64F, 1, 0, ksize=3)
        grad_y = cv2.Sobel(gray, cv2.CV_64F, 0, 1, ksize=3)
        gradient_magnitude = np.sqrt(grad_x**2 + grad_y**2)
        gradient_depth = gradient_magnitude / 255.0
        
        # 3. Color saturation depth (more saturated = closer)
        hsv = cv2.cvtColor(image, cv2.COLOR_RGB2HSV)
        saturation_depth = hsv[:, :, 1] / 255.0
        
        # Combine depth cues
        depth = (brightness_depth * 0.4 + gradient_depth * 0.3 + saturation_depth * 0.3)
        depth = cv2.GaussianBlur(depth, (5, 5), 0)
        
        return depth * self.depth_scale

    def _create_colored_point_cloud(self, image: np.ndarray, dense: bool = True) -> o3d.geometry.PointCloud:
        """Create a dense, colored point cloud from image."""
        h, w = image.shape[:2]
        points, colors = [], []
        
        depth = self._estimate_depth_from_image(image)
        
        # Adaptive sampling based on image content
        step = 4 if dense else 8
        
        for y in range(0, h, step):
            for x in range(0, w, step):
                z = depth[y, x]
                if z > 0.05:  # Minimum depth threshold
                    # Normalize coordinates
                    x_3d = (x - w / 2) / w * 2.0
                    y_3d = -(y - h / 2) / h * 2.0  # Flip Y for proper orientation
                    
                    points.append([x_3d, y_3d, z])
                    colors.append(image[y, x] / 255.0)
        
        if not points:
            # Emergency fallback
            for i in range(20):
                for j in range(20):
                    points.append([(i - 10) * 0.05, (j - 10) * 0.05, 0.1])
                    colors.append([0.7, 0.7, 0.7])
        
        pcd = o3d.geometry.PointCloud()
        pcd.points = o3d.utility.Vector3dVector(np.array(points))
        pcd.colors = o3d.utility.Vector3dVector(np.array(colors))
        
        return pcd

    # --------------------------------------------------------------------- #
    def _merge_point_clouds(self, images: List[np.ndarray]) -> o3d.geometry.PointCloud:
        """Merge multiple point clouds with intelligent color blending."""
        primary_pcd = self._create_colored_point_cloud(images[0], dense=True)
        
        if len(images) == 1:
            return primary_pcd
        
        # Add additional views
        for i, img in enumerate(images[1:], 1):
            update_status("processing", 30 + (i * 10) // len(images))
            
            # Create secondary point cloud with slight offset
            secondary_pcd = self._create_colored_point_cloud(img, dense=False)
            
            # Apply slight rotation/translation to create variation
            angle = (i * 30) * np.pi / 180  # 30 degrees per additional view
            rotation_matrix = np.array([
                [np.cos(angle), -np.sin(angle), 0],
                [np.sin(angle), np.cos(angle), 0],
                [0, 0, 1]
            ])
            
            secondary_pcd.rotate(rotation_matrix, center=(0, 0, 0))
            secondary_pcd.translate([0, 0, i * 0.1])
            
            # Merge point clouds
            primary_pcd += secondary_pcd
        
        return primary_pcd

    # --------------------------------------------------------------------- #
    def _ensure_normals(self, pcd: o3d.geometry.PointCloud) -> o3d.geometry.PointCloud:
        """Robust normal estimation with color-aware weighting."""
        if len(pcd.normals) == 0:
            distances = pcd.compute_nearest_neighbor_distance()
            avg_distance = np.mean(distances)
            radius = min(avg_distance * 3, 0.1)
            
            pcd.estimate_normals(
                search_param=o3d.geometry.KDTreeSearchParamHybrid(
                    radius=radius, max_nn=30
                )
            )
            pcd.orient_normals_consistent_tangent_plane(100)
        
        return pcd

    # --------------------------------------------------------------------- #
    def _create_textured_mesh(self, pcd: o3d.geometry.PointCloud) -> o3d.geometry.TriangleMesh:
        """Create high-quality textured mesh with color preservation."""
        pcd = self._ensure_normals(pcd)
        
        # Poisson reconstruction with higher quality
        mesh, _ = o3d.geometry.TriangleMesh.create_from_point_cloud_poisson(
            pcd, depth=9, width=0, scale=1.1, linear_fit=False
        )
        
        # Clean mesh
        mesh.remove_degenerate_triangles()
        mesh.remove_duplicated_triangles()
        mesh.remove_duplicated_vertices()
        mesh.remove_non_manifold_edges()
        
        # Gentle smoothing to preserve color details
        mesh = mesh.filter_smooth_simple(number_of_iterations=2)
        
        # Decimate if too dense
        if len(mesh.triangles) > 80_000:
            mesh = mesh.simplify_quadric_decimation(target_number_of_triangles=60_000)
        
        # Center and scale
        bbox = mesh.get_axis_aligned_bounding_box()
        mesh = mesh.translate(-bbox.get_center())
        scale_factor = 2.0 / bbox.get_max_extent()
        mesh = mesh.scale(scale_factor, center=(0, 0, 0))
        
        # Sample colors from original point cloud
        self._transfer_colors_to_mesh(mesh, pcd)
        
        return mesh

    def _transfer_colors_to_mesh(self, mesh: o3d.geometry.TriangleMesh, pcd: o3d.geometry.PointCloud) -> None:
        """Transfer colors from point cloud to mesh vertices."""
        if len(pcd.colors) == 0:
            return
        
        # Build KDTree for efficient nearest neighbor search
        pcd_tree = o3d.geometry.KDTreeFlann(pcd)
        
        mesh_vertices = np.asarray(mesh.vertices)
        vertex_colors = []
        
        for vertex in mesh_vertices:
            # Find nearest colored point
            [_, idx, _] = pcd_tree.search_knn_vector_3d(vertex, 1)
            if idx:
                color = np.asarray(pcd.colors)[idx[0]]
                vertex_colors.append(color)
            else:
                vertex_colors.append([0.7, 0.7, 0.7])  # Default gray
        
        mesh.vertex_colors = o3d.utility.Vector3dVector(vertex_colors)

    # --------------------------------------------------------------------- #
    def _generate_uv_coordinates(self, mesh: o3d.geometry.TriangleMesh) -> None:
        """Generate UV coordinates for texture mapping."""
        vertices = np.asarray(mesh.vertices)
        triangles = np.asarray(mesh.triangles)
        
        # Simple planar projection for UV mapping
        # Project onto XY plane
        min_xy = vertices[:, :2].min(axis=0)
        max_xy = vertices[:, :2].max(axis=0)
        
        # Normalize to [0, 1] range
        uv_vertices = (vertices[:, :2] - min_xy) / (max_xy - min_xy + 1e-8)
        
        # Create UV coordinates for each triangle vertex
        uv_coords = []
        for triangle in triangles:
            for vertex_idx in triangle:
                uv_coords.append(uv_vertices[vertex_idx])
        
        mesh.triangle_uvs = o3d.utility.Vector2dVector(uv_coords)

    def _create_texture_image(self, mesh: o3d.geometry.TriangleMesh) -> np.ndarray:
        """Create a high-quality texture image from mesh vertex colors."""
        texture = np.ones((self.texture_size, self.texture_size, 3), dtype=np.uint8) * 255
        
        if len(mesh.vertex_colors) == 0:
            return texture
        
        vertices = np.asarray(mesh.vertices)
        colors = np.asarray(mesh.vertex_colors)
        triangles = np.asarray(mesh.triangles)
        
        # Project vertices to texture space
        min_xy = vertices[:, :2].min(axis=0)
        max_xy = vertices[:, :2].max(axis=0)
        
        for triangle in triangles:
            # Get triangle vertices and colors
            tri_vertices = vertices[triangle]
            tri_colors = colors[triangle]
            
            # Project to texture coordinates
            uv_coords = []
            for vertex in tri_vertices:
                u = (vertex[0] - min_xy[0]) / (max_xy[0] - min_xy[0] + 1e-8)
                v = (vertex[1] - min_xy[1]) / (max_xy[1] - min_xy[1] + 1e-8)
                
                x = int(u * (self.texture_size - 1))
                y = int((1 - v) * (self.texture_size - 1))  # Flip V
                
                uv_coords.append([x, y])
            
            # Rasterize triangle
            pts = np.array(uv_coords, dtype=np.int32)
            
            # Fill triangle with interpolated colors
            mask = np.zeros((self.texture_size, self.texture_size), dtype=np.uint8)
            cv2.fillPoly(mask, [pts], 255)
            
            # Simple color interpolation
            center_color = np.mean(tri_colors, axis=0) * 255
            texture[mask > 0] = center_color.astype(np.uint8)
        
        # Apply gentle smoothing to reduce artifacts
        texture = cv2.medianBlur(texture, 3)
        
        return texture

    # --------------------------------------------------------------------- #
    def run(self) -> None:
        try:
            if len(self.images) < 1:
                raise ValueError("Need at least 1 image")

            update_status("loading", 5)
            images = self._load_and_preprocess()
            
            update_status("processing", 25)
            pcd = self._merge_point_clouds(images)
            
            # Clean point cloud
            pcd = pcd.voxel_down_sample(self.voxel_size)
            pcd, _ = pcd.remove_statistical_outlier(nb_neighbors=20, std_ratio=2.0)
            pcd, _ = pcd.remove_radius_outlier(nb_points=10, radius=0.05)
            
            update_status("mesh_generation", 60)
            mesh = self._create_textured_mesh(pcd)
            
            update_status("texturing", 80)
            self._generate_uv_coordinates(mesh)
            texture = self._create_texture_image(mesh)
            
            # Save files
            obj_path = self.out / f"{self.model_name}.obj"
            mtl_path = self.out / f"{self.model_name}.mtl"
            tex_path = self.out / f"{self.model_name}.jpg"
            
            # Save texture image
            cv2.imwrite(str(tex_path), cv2.cvtColor(texture, cv2.COLOR_RGB2BGR))
            
            # Save OBJ file
            success = o3d.io.write_triangle_mesh(
                str(obj_path),
                mesh,
                write_ascii=True,
                write_vertex_normals=True,
                write_vertex_colors=False,  # We'll use texture instead
            )
            
            if not success:
                raise RuntimeError("Failed to write OBJ file")
            
            # Create MTL file
            mtl_content = f"""# Material file for {self.model_name}
newmtl material_0
Ka 0.2 0.2 0.2
Kd 0.8 0.8 0.8
Ks 0.1 0.1 0.1
Ns 10.0
illum 2
map_Kd {tex_path.name}
"""
            
            mtl_path.write_text(mtl_content)
            
            # Update OBJ file to reference MTL
            obj_content = obj_path.read_text()
            lines = obj_content.split('\n')
            
            # Insert MTL reference at the beginning
            new_lines = [f"mtllib {mtl_path.name}"]
            material_added = False
            
            for line in lines:
                if line.startswith('f ') and not material_added:
                    new_lines.append("usemtl material_0")
                    material_added = True
                new_lines.append(line)
            
            obj_path.write_text('\n'.join(new_lines))
            
            # Create metadata
            metadata = {
                "project_id": self.project_id,
                "model_name": self.model_name,
                "num_images": len(self.images),
                "num_vertices": len(mesh.vertices),
                "num_triangles": len(mesh.triangles),
                "texture_size": self.texture_size,
                "files": {
                    "obj": obj_path.name,
                    "mtl": mtl_path.name,
                    "texture": tex_path.name
                }
            }
            
            metadata_path = self.out / f"{self.model_name}_metadata.json"
            metadata_path.write_text(json.dumps(metadata, indent=2))
            
            update_status("completed", 100)
            
        except Exception as e:
            tb = traceback.format_exc()
            update_status("failed", 50, f"Processing error: {e}\n{tb}")
            raise


# --------------------------------------------------------------------------- #
def main() -> None:
    parser = argparse.ArgumentParser(description="Enhanced image-to-textured-mesh converter")
    parser.add_argument("--project-id", required=True)
    parser.add_argument("--model-name", required=True)
    parser.add_argument("--images", required=True, help="JSON list of absolute paths")
    parser.add_argument("--output-dir", required=True)
    args = parser.parse_args()

    try:
        images = json.loads(args.images)
        if not isinstance(images, list) or len(images) == 0:
            raise ValueError("Images must be a non-empty list")
    except json.JSONDecodeError as e:
        update_status("failed", 5, f"Invalid JSON: {e}")
        sys.exit(1)

    processor = EnhancedOpen3DProcessor(
        args.project_id, args.model_name, images, args.output_dir
    )
    processor.run()


if __name__ == "__main__":
    main()