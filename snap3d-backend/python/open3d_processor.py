#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import sys
import traceback
from pathlib import Path
from typing import List, Tuple, Dict, Optional
import logging
import os
import psutil
import time
import numpy as np
import open3d as o3d
import cv2
import torch
import torchvision.transforms as transforms
from scipy.spatial.transform import Rotation as R
import shutil
import textwrap
import nksr
from filelock import FileLock

# Set up logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler('open3d_processor.log')
    ]
)
logger = logging.getLogger(__name__)

def update_status(status: str, progress: int, error: str | None = None, output_dir: str | None = None, 
                 project_id: str | None = None, model_name: str | None = None, 
                 images: List[str] | None = None, created_at: int | None = None,
                 obj_files: List[Dict[str, str]] | None = None) -> None:
    """Update status with complete project information and atomic file writing to avoid [WinError 183]."""
    payload = {
        "status": status, 
        "progress": progress, 
        "updatedAt": int(time.time() * 1000)
    }
    
    # Add complete project metadata
    if project_id:
        payload["id"] = project_id
    if model_name:
        payload["name"] = model_name
        payload["processor"] = "open3d"
    if created_at:
        payload["createdAt"] = created_at
    if images:
        payload["images"] = images
    if obj_files:
        payload["objFiles"] = obj_files
    else:
        payload["objFiles"] = []
    
    if error:
        payload["error"] = error
    
    logger.debug(f"Updating status: {payload}")
    print(json.dumps(payload), flush=True)
    
    if output_dir:
        max_retries = 3
        for attempt in range(max_retries):
            try:
                status_path = Path(output_dir) / "status.json"
                lock_path = status_path.with_suffix('.lock')
                with FileLock(lock_path, timeout=10):
                    temp_path = status_path.with_suffix(f'.tmp.{os.getpid()}')
                    try:
                        with temp_path.open('w', encoding='utf-8') as f:
                            json.dump(payload, f, indent=2)
                        if status_path.exists():
                            try:
                                status_path.unlink()
                            except PermissionError:
                                logger.warning(f"Attempt {attempt + 1}/{max_retries}: Could not delete {status_path}, retrying")
                                time.sleep(0.5)
                                continue
                        temp_path.rename(status_path)
                        logger.debug(f"Wrote status to {status_path}")
                        return
                    finally:
                        if temp_path.exists():
                            try:
                                temp_path.unlink()
                            except:
                                pass
            except Exception as e:
                logger.error(f"Attempt {attempt + 1}/{max_retries}: Failed to write status.json: {e}")
                if attempt < max_retries - 1:
                    time.sleep(0.5)
                continue
        logger.error(f"Failed to write status.json after {max_retries} attempts")

class EnhancedOpen3DProcessor:
    def _acquire_lock(self):
        """Acquire a lock to prevent concurrent executions (Windows-compatible)."""
        lock_path = Path(self.out) / "processing.lock"
        max_attempts = 10
        attempt_delay = 2
        for attempt in range(max_attempts):
            try:
                if not lock_path.exists():
                    with lock_path.open('w') as f:
                        f.write(str(os.getpid()))
                    return
                else:
                    with lock_path.open('r') as f:
                        pid = int(f.read().strip())
                        if not psutil.pid_exists(pid):
                            lock_path.unlink()
                            with lock_path.open('w') as f:
                                f.write(str(os.getpid()))
                            return
            except Exception as e:
                logger.warning(f"Lock acquisition attempt {attempt + 1}/{max_attempts} failed: {e}")
            time.sleep(attempt_delay)
        raise RuntimeError("Failed to acquire lock after multiple attempts, another instance may be running")

    def _release_lock(self):
        """Release the lock."""
        lock_path = Path(self.out) / "processing.lock"
        if lock_path.exists():
            lock_path.unlink(missing_ok=True)

    def __init__(self, project_id: str, model_name: str, images: List[str], output_dir: str, output_filename: str = None):
        self.project_id = project_id
        self.model_name = output_filename if output_filename else model_name
        self.images = [Path(p) for p in images]
        self.image_paths = images
        self.out = Path(output_dir)
        self.out.mkdir(parents=True, exist_ok=True)
        self.created_at = int(time.time() * 1000)
        
        self.target_width = 800
        self.target_height = 600
        self.voxel_size = 0.005
        self.depth_scale = 1000.0
        
        self.camera_intrinsics = o3d.camera.PinholeCameraIntrinsic(
            width=self.target_width,
            height=self.target_height,
            fx=0.8 * self.target_width,
            fy=0.8 * self.target_width,
            cx=self.target_width / 2,
            cy=self.target_height / 2
        )
        
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        logger.info(f"Using device: {self.device}")
        if self.device.type == "cuda":
            logger.info(f"GPU: {torch.cuda.get_device_name(0)}")
            logger.info(f"CUDA Memory: {torch.cuda.get_device_properties(0).total_memory / 1024**3:.2f} GB")
            torch.cuda.empty_cache()
            torch.backends.cudnn.benchmark = True
            torch.backends.cudnn.deterministic = False
        
        self._load_midas_model()
        self.sift = cv2.SIFT_create(nfeatures=5000, contrastThreshold=0.02, edgeThreshold=10)
        self.orb = cv2.ORB_create(nfeatures=3000)
        self.matcher = cv2.BFMatcher()
        self.flann_matcher = cv2.FlannBasedMatcher()
        
        self.processed_images = []
        self.depth_maps = []
        self.stereo_depths = []
        self.keypoints_sift = []
        self.descriptors_sift = []
        self.keypoints_orb = []
        self.descriptors_orb = []
        self.camera_poses = []
        self.camera_matrix = None
        self.dist_coeffs = None

        self._acquire_lock()

    def __del__(self):
        self._release_lock()

    def _update_status_with_context(self, status: str, progress: int, error: str = None, obj_files: List[Dict[str, str]] = None):
        """Helper method to update status with full context."""
        update_status(
            status=status,
            progress=progress,
            error=error,
            output_dir=str(self.out),
            project_id=self.project_id,
            model_name=self.model_name,
            images=self.image_paths,
            created_at=self.created_at,
            obj_files=obj_files
        )

    def _load_midas_model(self):
        cache_dir = Path(os.path.expanduser("~/.cache/torch/hub/checkpoints"))
        model_path = cache_dir / "dpt_hybrid_384.pt"
        expected_size = 469 * 1024 * 1024

        if not model_path.exists():
            raise RuntimeError(f"MiDaS model dpt_hybrid_384.pt not found in {model_path}. Please download it manually and place it in {cache_dir}")
        if model_path.stat().st_size < expected_size:
            raise RuntimeError(f"MiDaS model dpt_hybrid_384.pt is incomplete (size: {model_path.stat().st_size / 1024 / 1024:.2f}MB). Expected at least 470MB.")

        try:
            self.midas = torch.hub.load("intel-isl/MiDaS", "DPT_Hybrid", pretrained=False, trust_repo=True)
            state_dict = torch.load(model_path, map_location=self.device)
            self.midas.load_state_dict(state_dict)
            self.midas = self.midas.to(self.device).eval()
            self.midas_transforms = torch.hub.load("intel-isl/MiDaS", "transforms").dpt_transform
            logger.info("Loaded DPT_Hybrid MiDaS model with local checkpoint")
        except Exception as e:
            raise RuntimeError(f"Failed to load DPT_Hybrid MiDaS model: {e}")

    def _load_and_preprocess_images(self) -> List[np.ndarray]:
        logger.info(f"Loading and preprocessing {len(self.images)} images")
        rgbs = []
        
        for i, p in enumerate(self.images):
            self._update_status_with_context("loading", 5 + (i * 10) // len(self.images))
            logger.debug(f"Processing image {i+1}/{len(self.images)}: {p}")
            
            p = Path(p)
            if not p.exists():
                raise FileNotFoundError(f"Image file does not exist: {p}")
            
            bgr = cv2.imread(str(p), cv2.IMREAD_COLOR)
            if bgr is None:
                raise RuntimeError(f"Cannot read image: {p}")
            
            rgb = cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB)
            h, w = rgb.shape[:2]
            if w > h:
                new_w = self.target_width
                new_h = int(h * self.target_width / w)
            else:
                new_h = self.target_height
                new_w = int(w * self.target_height / h)
            
            rgb = cv2.resize(rgb, (new_w, new_h), interpolation=cv2.INTER_LANCZOS4)
            pad_h = max(0, self.target_height - new_h)
            pad_w = max(0, self.target_width - new_w)
            rgb = cv2.copyMakeBorder(rgb, pad_h//2, pad_h-pad_h//2, pad_w//2, pad_w-pad_w//2, cv2.BORDER_REFLECT)
            rgb = cv2.resize(rgb, (self.target_width, self.target_height))
            rgb = self._enhance_image_quality(rgb)
            rgbs.append(rgb)
        
        self.processed_images = rgbs
        logger.info(f"Successfully loaded {len(rgbs)} images")
        return rgbs

    def _enhance_image_quality(self, image: np.ndarray) -> np.ndarray:
        try:
            lab = cv2.cvtColor(image, cv2.COLOR_RGB2LAB)
            clahe = cv2.createCLAHE(clipLimit=2.5, tileGridSize=(12, 12))
            lab[:, :, 0] = clahe.apply(lab[:, :, 0])
            enhanced = cv2.cvtColor(lab, cv2.COLOR_LAB2RGB)
            enhanced = cv2.bilateralFilter(enhanced, 9, 75, 75)
            kernel = np.array([[-1,-1,-1], [-1,9,-1], [-1,-1,-1]]) * 0.7
            kernel[1,1] = 7.1
            sharpened = cv2.filter2D(enhanced, -1, kernel)
            enhanced = cv2.addWeighted(enhanced, 0.8, sharpened, 0.2, 0)
            enhanced = np.clip(enhanced, 0, 255).astype(np.uint8)
            return enhanced
        except Exception as e:
            logger.error(f"Error in image enhancement: {e}")
            return image

    def _extract_features(self) -> None:
        logger.info("Extracting SIFT and ORB features from images")
        for i, img in enumerate(self.processed_images):
            self._update_status_with_context("feature_extraction", 15 + (i * 10) // len(self.images))
            gray = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)
            kp_sift, desc_sift = self.sift.detectAndCompute(gray, None)
            self.keypoints_sift.append(kp_sift)
            self.descriptors_sift.append(desc_sift)
            kp_orb, desc_orb = self.orb.detectAndCompute(gray, None)
            self.keypoints_orb.append(kp_orb)
            self.descriptors_orb.append(desc_orb)
            logger.debug(f"Image {i+1}: Found {len(kp_sift)} SIFT and {len(kp_orb)} ORB keypoints")

    def _calibrate_camera_from_features(self) -> Tuple[np.ndarray, np.ndarray]:
        logger.info("Calibrating camera from feature matches")
        try:
            if len(self.processed_images) >= 3:
                F_matrices = []
                for i in range(len(self.processed_images)-1):
                    matches = self._match_features(i, i+1, use_sift=True)
                    if len(matches) > 50:
                        pts1 = np.float32([self.keypoints_sift[i][m.queryIdx].pt for m in matches])
                        pts2 = np.float32([self.keypoints_sift[i+1][m.trainIdx].pt for m in matches])
                        F, _ = cv2.findFundamentalMat(pts1, pts2, cv2.FM_RANSAC)
                        if F is not None:
                            F_matrices.append(F)
                if F_matrices:
                    fx = fy = 0.8 * max(self.target_width, self.target_height)
                    cx = self.target_width / 2
                    cy = self.target_height / 2
                    self.camera_matrix = np.array([
                        [fx, 0, cx],
                        [0, fy, cy],
                        [0, 0, 1]
                    ], dtype=np.float32)
                    self.dist_coeffs = np.zeros((4,1), dtype=np.float32)
                    self.camera_intrinsics = o3d.camera.PinholeCameraIntrinsic(
                        self.target_width, self.target_height, fx, fy, cx, cy
                    )
                    logger.info(f"Calibrated camera: fx={fx:.1f}, fy={fy:.1f}")
                    return self.camera_matrix, self.dist_coeffs
            logger.warning("Insufficient data for calibration, using default intrinsics")
        except Exception as e:
            logger.warning(f"Camera calibration failed: {e}, using default intrinsics")
        fx = fy = 0.8 * max(self.target_width, self.target_height)
        self.camera_matrix = np.array([
            [fx, 0, self.target_width/2],
            [0, fy, self.target_height/2],
            [0, 0, 1]
        ], dtype=np.float32)
        self.dist_coeffs = np.zeros((4,1), dtype=np.float32)
        return self.camera_matrix, self.dist_coeffs

    def _match_features(self, idx1: int, idx2: int, use_sift: bool = True, ratio_threshold: float = 0.7) -> List[cv2.DMatch]:
        try:
            if use_sift and self.descriptors_sift[idx1] is not None and self.descriptors_sift[idx2] is not None:
                FLANN_INDEX_KDTREE = 1
                index_params = dict(algorithm=FLANN_INDEX_KDTREE, trees=5)
                search_params = dict(checks=50)
                flann = cv2.FlannBasedMatcher(index_params, search_params)
                matches = flann.knnMatch(self.descriptors_sift[idx1], self.descriptors_sift[idx2], k=2)
            else:
                matches = self.matcher.knnMatch(self.descriptors_orb[idx1], self.descriptors_orb[idx2], k=2)
            good_matches = []
            for match_pair in matches:
                if len(match_pair) == 2:
                    m, n = match_pair
                    if m.distance < ratio_threshold * n.distance:
                        good_matches.append(m)
            return good_matches
        except Exception as e:
            logger.error(f"Error matching features between {idx1} and {idx2}: {e}")
            return []

    def _estimate_camera_poses_advanced(self) -> List[np.ndarray]:
        logger.info("Estimating camera poses using advanced SfM")
        poses = [np.eye(4)]
        if self.camera_matrix is None:
            self._calibrate_camera_from_features()
        for i in range(1, len(self.processed_images)):
            self._update_status_with_context("pose_estimation", 25 + (i * 15) // len(self.processed_images))
            try:
                matches = self._match_features(i-1, i, use_sift=True)
                if len(matches) < 30:
                    matches = self._match_features(i-1, i, use_sift=True, ratio_threshold=0.8)
                if len(matches) < 15:
                    logger.warning(f"Insufficient matches, using identity transform")
                    poses.append(poses[-1])
                    continue
                pts1 = np.float32([self.keypoints_sift[i-1][m.queryIdx].pt for m in matches])
                pts2 = np.float32([self.keypoints_sift[i][m.trainIdx].pt for m in matches])
                E, mask = cv2.findEssentialMat(pts1, pts2, self.camera_matrix, method=cv2.RANSAC, prob=0.99, threshold=0.5)
                if E is not None and np.sum(mask) > 10:
                    _, R, t, pose_mask = cv2.recoverPose(E, pts1, pts2, self.camera_matrix, mask=mask)
                    if self._validate_pose(R, t):
                        T = np.eye(4)
                        T[:3, :3] = R
                        T[:3, 3] = t.flatten()
                        pose = poses[-1] @ T
                        poses.append(pose)
                        inliers = np.sum(pose_mask) if pose_mask is not None else np.sum(mask)
                        logger.debug(f"Estimated pose for image {i}: {inliers} inliers")
                    else:
                        logger.warning(f"Invalid pose for image {i}, using previous")
                        poses.append(poses[-1])
                else:
                    logger.warning(f"Failed to estimate essential matrix for image {i}")
                    poses.append(poses[-1])
            except Exception as e:
                logger.error(f"Error estimating pose for image {i}: {e}")
                poses.append(poses[-1])
        self.camera_poses = poses
        return poses

    def _validate_pose(self, R: np.ndarray, t: np.ndarray, max_translation: float = 2.0) -> bool:
        try:
            if not self._is_rotation_matrix(R):
                return False
            t_norm = np.linalg.norm(t)
            if t_norm > max_translation:
                return False
            return True
        except:
            return False

    def _is_rotation_matrix(self, R: np.ndarray, tolerance: float = 1e-6) -> bool:
        try:
            should_be_identity = np.dot(R, R.T)
            identity = np.identity(3)
            n = np.linalg.norm(identity - should_be_identity)
            if n > tolerance:
                return False
            det = np.linalg.det(R)
            if abs(det - 1.0) > tolerance:
                return False
            return True
        except:
            return False

    def _compute_stereo_depth(self) -> List[np.ndarray]:
        logger.info("Computing stereo depth from image pairs")
        stereo_depths = []
        stereo = cv2.StereoBM_create(numDisparities=96, blockSize=15)
        stereo.setMinDisparity(0)
        stereo.setTextureThreshold(10)
        stereo.setUniquenessRatio(5)
        stereo.setSpeckleRange(4)
        stereo.setSpeckleWindowSize(100)
        for i in range(len(self.processed_images)):
            self._update_status_with_context("stereo_depth", 40 + (i * 10) // len(self.processed_images))
            best_depth = None
            max_valid_pixels = 0
            for j in range(len(self.processed_images)):
                if i == j:
                    continue
                try:
                    gray1 = cv2.cvtColor(self.processed_images[i], cv2.COLOR_RGB2GRAY)
                    gray2 = cv2.cvtColor(self.processed_images[j], cv2.COLOR_RGB2GRAY)
                    depth = self._compute_rectified_stereo_depth(gray1, gray2, i, j, stereo)
                    if depth is not None:
                        valid_pixels = np.sum(depth > 0)
                        if valid_pixels > max_valid_pixels:
                            max_valid_pixels = valid_pixels
                            best_depth = depth
                except Exception as e:
                    logger.debug(f"Stereo depth failed for pair {i}-{j}: {e}")
                    continue
            if best_depth is not None:
                stereo_depths.append(best_depth)
            else:
                stereo_depths.append(None)
        self.stereo_depths = stereo_depths
        return stereo_depths

    def _compute_rectified_stereo_depth(self, gray1: np.ndarray, gray2: np.ndarray, idx1: int, idx2: int, stereo) -> Optional[np.ndarray]:
        try:
            pose1 = self.camera_poses[idx1]
            pose2 = self.camera_poses[idx2]
            relative_pose = np.linalg.inv(pose1) @ pose2
            R_rel = relative_pose[:3, :3]
            t_rel = relative_pose[:3, 3]
            baseline = np.linalg.norm(t_rel)
            if baseline < 0.1 or baseline > 1.0:
                return None
            R1, R2, P1, P2, Q, _, _ = cv2.stereoRectify(
                self.camera_matrix, self.dist_coeffs,
                self.camera_matrix, self.dist_coeffs,
                (self.target_width, self.target_height),
                R_rel, t_rel
            )
            map1x, map1y = cv2.initUndistortRectifyMap(
                self.camera_matrix, self.dist_coeffs, R1, P1,
                (self.target_width, self.target_height), cv2.CV_32FC1
            )
            map2x, map2y = cv2.initUndistortRectifyMap(
                self.camera_matrix, self.dist_coeffs, R2, P2,
                (self.target_width, self.target_height), cv2.CV_32FC1
            )
            rect1 = cv2.remap(gray1, map1x, map1y, cv2.INTER_LINEAR)
            rect2 = cv2.remap(gray2, map2x, map2y, cv2.INTER_LINEAR)
            disparity = stereo.compute(rect1, rect2).astype(np.float32) / 16.0
            depth = cv2.reprojectImageTo3D(disparity, Q)[:, :, 2]
            depth[depth <= 0] = 0
            depth[depth > 10] = 0
            return depth
        except Exception as e:
            logger.debug(f"Rectified stereo failed: {e}")
            return None

    def _estimate_depth_enhanced(self) -> List[np.ndarray]:
        logger.info("Enhanced depth estimation using MiDaS and stereo fusion")
        midas_depths = self._estimate_depth_batch()
        stereo_depths = self._compute_stereo_depth()
        final_depths = []
        for i, (midas_depth, stereo_depth) in enumerate(zip(midas_depths, stereo_depths)):
            if stereo_depth is not None:
                fused_depth = self._fuse_depths(midas_depth, stereo_depth)
                final_depths.append(fused_depth)
            else:
                scaled_depth = self._scale_midas_depth(midas_depth, i)
                final_depths.append(scaled_depth)
        self.depth_maps = final_depths
        return final_depths

    def _fuse_depths(self, midas_depth: np.ndarray, stereo_depth: np.ndarray) -> np.ndarray:
        try:
            midas_normalized = midas_depth / np.max(midas_depth) * np.max(stereo_depth[stereo_depth > 0])
            stereo_valid = stereo_depth > 0
            stereo_confidence = np.ones_like(stereo_depth)
            stereo_confidence[~stereo_valid] = 0
            total_weight = stereo_confidence + 0.3
            fused = (stereo_depth * stereo_confidence + midas_normalized * 0.3) / total_weight
            fused[~stereo_valid] = midas_normalized[~stereo_valid]
            return fused
        except Exception as e:
            logger.error(f"Depth fusion failed: {e}")
            return midas_depth

    def _scale_midas_depth(self, midas_depth: np.ndarray, image_idx: int) -> np.ndarray:
        try:
            depth_norm = (midas_depth - np.min(midas_depth)) / (np.max(midas_depth) - np.min(midas_depth))
            min_depth = 0.3
            max_depth = 5.0
            scaled_depth = min_depth + depth_norm * (max_depth - min_depth)
            scaled_depth = cv2.medianBlur(scaled_depth.astype(np.float32), 5)
            return scaled_depth
        except Exception as e:
            logger.error(f"Depth scaling failed: {e}")
            return midas_depth

    def _estimate_depth_batch(self) -> List[np.ndarray]:
        logger.info("Estimating depth maps using enhanced MiDaS")
        depth_maps = []
        for i, img in enumerate(self.processed_images):
            self._update_status_with_context("depth_estimation", 35 + (i * 15) // len(self.processed_images))
            try:
                img_bgr = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
                input_tensor = self.midas_transforms(img_bgr).to(self.device)
                with torch.no_grad():
                    depth = self.midas(input_tensor)
                depth = torch.nn.functional.interpolate(
                    depth.unsqueeze(1),
                    size=(self.target_height, self.target_width),
                    mode="bicubic",
                    align_corners=False
                ).squeeze()
                depth_np = depth.cpu().numpy()
                depth_np = self._process_depth_map(depth_np)
                depth_maps.append(depth_np)
                if self.device.type == "cuda":
                    torch.cuda.empty_cache()
            except Exception as e:
                logger.error(f"Depth estimation failed for image {i}: {e}")
                depth_maps.append(np.ones((self.target_height, self.target_width)) * 2.0)
        return depth_maps

    def _process_depth_map(self, depth: np.ndarray) -> np.ndarray:
        try:
            depth = np.clip(depth, np.percentile(depth, 1), np.percentile(depth, 99))
            depth_min, depth_max = depth.min(), depth.max()
            if depth_max - depth_min > 1e-8:
                depth = (depth - depth_min) / (depth_max - depth_min)
            depth = 0.2 + depth * 7.8
            depth = cv2.bilateralFilter(depth.astype(np.float32), 9, 80, 80)
            return depth
        except Exception as e:
            logger.error(f"Depth processing failed: {e}")
            return depth

    def _create_colored_point_clouds_advanced(self) -> List[o3d.geometry.PointCloud]:
        logger.info("Creating advanced colored point clouds")
        point_clouds = []
        for i, (img, depth) in enumerate(zip(self.processed_images, self.depth_maps)):
            self._update_status_with_context("point_cloud_generation", 50 + (i * 15) // len(self.processed_images))
            try:
                rgb_o3d = o3d.geometry.Image(img.astype(np.uint8))
                depth_o3d = o3d.geometry.Image((depth * self.depth_scale).astype(np.uint16))
                rgbd = o3d.geometry.RGBDImage.create_from_color_and_depth(
                    rgb_o3d, depth_o3d, depth_scale=self.depth_scale,
                    depth_trunc=8.0, convert_rgb_to_intensity=False
                )
                pcd = o3d.geometry.PointCloud.create_from_rgbd_image(
                    rgbd, self.camera_intrinsics, extrinsic=np.linalg.inv(self.camera_poses[i])
                )
                if len(pcd.points) == 0:
                    logger.warning(f"Empty point cloud for image {i}")
                    continue
                pcd = self._filter_point_cloud_advanced(pcd, i)
                if len(pcd.points) > 0:
                    point_clouds.append(pcd)
                    logger.debug(f"Point cloud {i}: {len(pcd.points)} points after filtering")
            except Exception as e:
                logger.error(f"Failed to create point cloud {i}: {e}")
                continue
        return point_clouds

    def _filter_point_cloud_advanced(self, pcd: o3d.geometry.PointCloud, idx: int) -> o3d.geometry.PointCloud:
        """Advanced point cloud filtering with multiple techniques."""
        try:
            if len(pcd.points) == 0:
                return pcd
            
            # Remove statistical outliers
            pcd, _ = pcd.remove_statistical_outlier(nb_neighbors=20, std_ratio=2.0)
            
            # Remove radius outliers
            pcd, _ = pcd.remove_radius_outlier(nb_points=16, radius=0.05)
            
            # Voxel downsampling (increased voxel_size for faster processing)
            pcd = pcd.voxel_down_sample(voxel_size=0.02)  # Increased from 0.005
            
            # Remove points too close or too far
            points = np.asarray(pcd.points)
            distances = np.linalg.norm(points, axis=1)
            mask = (distances > 0.1) & (distances < 8.0)
            pcd = pcd.select_by_index(np.where(mask)[0])
            
            # Estimate normals for better surface reconstruction
            if len(pcd.points) > 10:
                pcd.estimate_normals(
                    search_param=o3d.geometry.KDTreeSearchParamHybrid(
                        radius=0.1, max_nn=30
                    )
                )
                pcd.orient_normals_consistent_tangent_plane(30)
            
            logger.debug(f"Filtered point cloud {idx}: {len(pcd.points)} points")
            return pcd
        except Exception as e:
            logger.error(f"Point cloud filtering failed for cloud {idx}: {e}")
            return pcd

    def _merge_point_clouds_icp(self, point_clouds: List[o3d.geometry.PointCloud]) -> o3d.geometry.PointCloud:
        """Merge point clouds using ICP registration."""
        logger.info(f"Merging {len(point_clouds)} point clouds using ICP")
        
        if not point_clouds:
            return o3d.geometry.PointCloud()
        
        if len(point_clouds) == 1:
            return point_clouds[0]
        
        merged = point_clouds[0]
        
        for i in range(1, len(point_clouds)):
            self._update_status_with_context("merging_clouds", 65 + (i * 10) // len(point_clouds))
            
            try:
                source = point_clouds[i]
                target = merged
                
                # Initial alignment using pose estimates
                source_transformed = source.transform(self.camera_poses[i])
                
                # Point-to-plane ICP for fine alignment
                threshold = 0.02
                trans_init = np.eye(4)
                
                reg_p2p = o3d.pipelines.registration.registration_icp(
                    source_transformed, target, threshold, trans_init,
                    o3d.pipelines.registration.TransformationEstimationPointToPlane(),
                    o3d.pipelines.registration.ICPConvergenceCriteria(max_iteration=100)
                )
                
                if reg_p2p.fitness > 0.3:
                    source_aligned = source_transformed.transform(reg_p2p.transformation)
                    merged += source_aligned
                    logger.debug(f"ICP registration {i}: fitness={reg_p2p.fitness:.3f}")
                else:
                    # Fallback to pose-based alignment
                    merged += source_transformed
                    logger.warning(f"ICP failed for cloud {i}, using pose alignment")
                    
            except Exception as e:
                logger.error(f"Failed to merge point cloud {i}: {e}")
                continue
        
        # Final cleanup of merged cloud
        merged = self._filter_point_cloud_advanced(merged, -1)
        logger.info(f"Merged point cloud has {len(merged.points)} points")
        return merged

    def _create_mesh_advanced(self, pcd: o3d.geometry.PointCloud) -> o3d.geometry.TriangleMesh:
        """Create a mesh from a point cloud using NVIDIA NKSR for GPU acceleration."""
        logger.info("Creating mesh using NVIDIA NKSR")
        try:
            # Ensure point cloud has normals
            if not pcd.has_normals():
                logger.info("Estimating normals for point cloud")
                pcd.estimate_normals(search_param=o3d.geometry.KDTreeSearchParamHybrid(radius=0.1, max_nn=30))
                pcd.orient_normals_consistent_tangent_plane(k=30)
            
            # Convert Open3D point cloud to torch tensors
            device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
            input_xyz = torch.from_numpy(np.asarray(pcd.points)).float().to(device)
            input_normal = torch.from_numpy(np.asarray(pcd.normals)).float().to(device) if pcd.has_normals() else None
            
            # Initialize NKSR reconstructor
            reconstructor = nksr.Reconstructor(device)
            field = reconstructor.reconstruct(input_xyz, input_normal)
            
            # Extract mesh
            mesh = field.extract_dual_mesh(mise_iter=2)
            
            # Convert to Open3D mesh
            o3d_mesh = o3d.geometry.TriangleMesh()
            o3d_mesh.vertices = o3d.utility.Vector3dVector(mesh.v)
            o3d_mesh.triangles = o3d.utility.Vector3iVector(mesh.f)
            o3d_mesh.compute_vertex_normals()
            
            logger.info(f"NKSR mesh created with {len(o3d_mesh.vertices)} vertices and {len(o3d_mesh.triangles)} faces")
            return o3d_mesh
        
        except Exception as e:
            logger.error(f"NKSR mesh creation failed: {e}")
            logger.info("Using alpha shape reconstruction as fallback")
            mesh = o3d.geometry.TriangleMesh.create_from_point_cloud_alpha_shape(pcd, alpha=0.1)
            if len(mesh.vertices) > 0:
                mesh = self._clean_mesh(mesh)
                logger.info(f"Alpha shape mesh: {len(mesh.vertices)} vertices, {len(mesh.triangles)} faces")
            return mesh

    def _create_mesh_alpha_shape(self, pcd: o3d.geometry.PointCloud) -> o3d.geometry.TriangleMesh:
        """Fallback mesh creation using alpha shapes."""
        try:
            logger.info("Using alpha shape reconstruction as fallback")
            alpha = 0.1
            mesh = o3d.geometry.TriangleMesh.create_from_point_cloud_alpha_shape(pcd, alpha)
            
            if len(mesh.vertices) == 0:
                # Try different alpha values
                for alpha in [0.05, 0.2, 0.3]:
                    mesh = o3d.geometry.TriangleMesh.create_from_point_cloud_alpha_shape(pcd, alpha)
                    if len(mesh.vertices) > 0:
                        break
            
            if len(mesh.vertices) > 0:
                mesh = self._clean_mesh(mesh)
                logger.info(f"Alpha shape mesh: {len(mesh.vertices)} vertices, {len(mesh.triangles)} faces")
            
            return mesh
        except Exception as e:
            logger.error(f"Alpha shape reconstruction failed: {e}")
            return o3d.geometry.TriangleMesh()

    def _clean_mesh(self, mesh: o3d.geometry.TriangleMesh) -> o3d.geometry.TriangleMesh:
        """Clean and optimize mesh."""
        try:
            # Remove degenerate triangles
            mesh.remove_degenerate_triangles()
            mesh.remove_duplicated_triangles()
            mesh.remove_duplicated_vertices()
            mesh.remove_non_manifold_edges()
            
            # Smooth mesh
            mesh = mesh.filter_smooth_simple(number_of_iterations=1)
            
            # Compute vertex normals for better rendering
            mesh.compute_vertex_normals()
            
            return mesh
        except Exception as e:
            logger.error(f"Mesh cleaning failed: {e}")
            return mesh

    def _save_results(self, merged_pcd: o3d.geometry.PointCloud, mesh: o3d.geometry.TriangleMesh) -> List[Dict[str, str]]:
        """Save mesh as OBJ with MTL file."""
        logger.info("Saving results")
        obj_files = []
        
        try:
            # Save mesh as OBJ with MTL
            if len(mesh.vertices) > 0 and len(mesh.triangles) > 0:
                # Define paths
                obj_path = self.out / f"{self.model_name}.obj"
                mtl_path = self.out / f"{self.model_name}.mtl"
                
                # Create MTL file with basic material
                material_name = f"{self.model_name}_material"
                if len(merged_pcd.colors) > 0:
                    avg_color = np.mean(np.asarray(merged_pcd.colors), axis=0)
                    kd = avg_color  # Diffuse color (RGB normalized to [0,1])
                else:
                    kd = [0.8, 0.8, 0.8]  # Default grey color
                
                mtl_content = textwrap.dedent(f"""\
                    newmtl {material_name}
                    Ka 0.2 0.2 0.2
                    Kd {kd[0]:.6f} {kd[1]:.6f} {kd[2]:.6f}
                    Ks 0.0 0.0 0.0
                    Ns 10.0
                    illum 2
                    """)
                
                try:
                    with mtl_path.open('w', encoding='utf-8') as f:
                        f.write(mtl_content)
                    logger.info(f"Saved MTL file: {mtl_path}")
                    obj_files.append({
                        "filename": f"{self.model_name}.mtl",
                        "path": str(mtl_path),
                        "type": "material"
                    })
                except Exception as e:
                    logger.error(f"Failed to save MTL file: {e}")
                
                # Save OBJ with MTL reference
                mesh.compute_vertex_normals()
                o3d.io.write_triangle_mesh(str(obj_path), mesh, write_triangle_uvs=True, write_vertex_normals=True)
                with obj_path.open('r', encoding='utf-8') as f:
                    obj_content = f.read()
                obj_content = f"mtllib {self.model_name}.mtl\nusemtl {material_name}\n" + obj_content
                with obj_path.open('w', encoding='utf-8') as f:
                    f.write(obj_content)
                
                obj_files.append({
                    "filename": f"{self.model_name}.obj",
                    "path": str(obj_path),
                    "type": "mesh"
                })
                logger.info(f"Saved mesh: {obj_path}")
            
            # Save processing metadata
            metadata = {
                "project_id": self.project_id,
                "model_name": self.model_name,
                "num_images": len(self.images),
                "num_points": len(merged_pcd.points),
                "num_vertices": len(mesh.vertices),
                "num_faces": len(mesh.triangles),
                "processing_time": int(time.time() * 1000) - self.created_at,
                "camera_poses": [pose.tolist() for pose in self.camera_poses],
                "voxel_size": self.voxel_size
            }
            
            metadata_path = self.out / "metadata.json"
            with metadata_path.open('w') as f:
                json.dump(metadata, f, indent=2)
            
            return obj_files
        
        except Exception as e:
            logger.error(f"Failed to save results: {e}")
            return obj_files

    def process(self) -> None:
        """Main processing pipeline."""
        try:
            self._update_status_with_context("starting", 0)
            logger.info(f"Starting 3D reconstruction for project {self.project_id}")
            
            # Load and preprocess images
            self._update_status_with_context("loading", 5)
            self._load_and_preprocess_images()
            
            # Extract features
            self._update_status_with_context("feature_extraction", 15)
            self._extract_features()
            
            # Camera calibration and pose estimation
            self._update_status_with_context("calibration", 25)
            self._calibrate_camera_from_features()
            self._estimate_camera_poses_advanced()
            
            # Depth estimation
            self._update_status_with_context("depth_estimation", 35)
            self._estimate_depth_enhanced()
            
            # Create point clouds
            self._update_status_with_context("point_cloud_generation", 50)
            point_clouds = self._create_colored_point_clouds_advanced()
            
            if not point_clouds:
                raise RuntimeError("No valid point clouds generated")
            
            # Merge point clouds
            self._update_status_with_context("merging_clouds", 65)
            merged_pcd = self._merge_point_clouds_icp(point_clouds)
            
            if len(merged_pcd.points) == 0:
                raise RuntimeError("Failed to create merged point cloud")
            
            # Create mesh
            self._update_status_with_context("mesh_generation", 75)
            mesh = self._create_mesh_advanced(merged_pcd)
            
            # Save results
            self._update_status_with_context("saving", 90)
            obj_files = self._save_results(merged_pcd, mesh)
            
            # Complete
            self._update_status_with_context("completed", 100, obj_files=obj_files)
            logger.info("3D reconstruction completed successfully")
            
        except Exception as e:
            error_msg = str(e)
            logger.error(f"Processing failed: {error_msg}")
            logger.error(traceback.format_exc())
            self._update_status_with_context("failed", -1, error=error_msg)
            raise

def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Enhanced Open3D 3D Reconstruction')
    parser.add_argument('--project-id', required=True, help='Project ID')
    parser.add_argument('--model-name', required=True, help='Model name')
    parser.add_argument('--images', required=True, help='Input image paths (JSON string or list)')
    parser.add_argument('--output-dir', required=True, help='Output directory')
    parser.add_argument('--output-filename', help='Output filename (optional)')
    
    args = parser.parse_args()
    
    try:
        # Try to parse images as JSON if it's a string
        images = args.images
        if isinstance(args.images, str):
            try:
                images = json.loads(args.images)
                if not isinstance(images, list):
                    raise ValueError("Images argument must be a list of paths")
            except json.JSONDecodeError:
                logger.error("Failed to parse images as JSON, treating as single path")
                images = [args.images]
        elif not isinstance(args.images, list):
            images = [args.images]
        
        # Validate image paths
        for img_path in images:
            if not Path(img_path).exists():
                raise FileNotFoundError(f"Image file does not exist: {img_path}")
        
        processor = EnhancedOpen3DProcessor(
            project_id=args.project_id,
            model_name=args.model_name,
            images=images,
            output_dir=args.output_dir,
            output_filename=args.output_filename
        )
        
        processor.process()
        
    except Exception as e:
        logger.error(f"Main execution failed: {e}")
        logger.error(traceback.format_exc())
        
        try:
            update_status(
                status="failed",
                progress=-1,
                error=str(e),
                output_dir=args.output_dir if hasattr(args, 'output_dir') else None,
                project_id=args.project_id,
                model_name=args.model_name,
                images=images,
                created_at=int(time.time() * 1000)
            )
        except:
            pass
        
        sys.exit(1)

if __name__ == "__main__":
    main()