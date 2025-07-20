import React, { useRef, useEffect, useState, useCallback } from 'react';
import { X, Maximize2, Minimize2, Move, ZoomOut, ZoomIn, Minus, RefreshCw } from 'lucide-react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

export default function ModelPreview({ model, onClose }) {
  const mountRef = useRef(null);
  const fullscreenRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const modelObjectRef = useRef(null);
  const animationIdRef = useRef(null);
  const lightsRef = useRef([]);
  const controlsRef = useRef({
    isDragging: false,
    isPanning: false,
    lastX: 0,
    lastY: 0,
    rotation: { x: 0, y: 0 },
    pan: { x: 0, y: 0 },
    zoom: 1,
    initialTouchDistance: 0,
    isPinching: false,
    autoRotateSpeed: 0.005,
    dampingFactor: 0.1,
    autoRotate: true,
  });
  const initialCameraDistance = useRef(5);
  const modelBounds = useRef({ center: new THREE.Vector3(), size: new THREE.Vector3() });

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wireframe, setWireframe] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [showBoundingBox, setShowBoundingBox] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [modelInfo, setModelInfo] = useState({ vertices: 0, faces: 0, materials: 0 });
  const [fps, setFps] = useState(0);
  const fpsRef = useRef({ frames: 0, lastTime: performance.now() });
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;
  const [baseFolder, setBaseFolder] = useState(
    model?.processor && model?.id
      ? `http://localhost:3001/models/${model.processor}/${model.id}/`
      : ''
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.matches('input, textarea, button')) return;
      if (e.key === 'Escape') {
        isFullscreen ? exitFullscreen() : onClose();
      } else if (e.key === 'r') {
        resetView();
      } else if (e.key === 'f') {
        toggleFullscreen();
      } else if (e.key === 'w') {
        toggleWireframe();
      } else if (e.key === 'b') {
        setShowBoundingBox(prev => !prev);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, onClose]);

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (modelObjectRef.current) {
      modelObjectRef.current.traverse(child => {
        if (child.isMesh && child.material) {
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          materials.forEach(mat => {
            if (mat.userData.originalWireframe === undefined) {
              mat.userData.originalWireframe = mat.wireframe;
            }
            mat.wireframe = wireframe;
            mat.needsUpdate = true;
          });
        }
      });
    }
  }, [wireframe]);

  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.children.forEach(child => {
        if (child instanceof THREE.BoxHelper) {
          child.visible = showBoundingBox;
        }
      });
    }
  }, [showBoundingBox]);

  const setupLighting = useCallback((scene) => {
    lightsRef.current.forEach(light => scene.remove(light));
    lightsRef.current = [];

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight1.position.set(10, 10, 10);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.set(1024, 1024);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight2.position.set(-10, -10, -10);

    const pointLight = new THREE.PointLight(0xffffff, 0.8, 100);
    pointLight.position.set(0, 0, 10);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);

    [dirLight1, dirLight2, pointLight, ambientLight].forEach(light => {
      scene.add(light);
      lightsRef.current.push(light);
    });
  }, []);

  useEffect(() => {
    const updateFps = () => {
      fpsRef.current.frames++;
      const now = performance.now();
      if (now - fpsRef.current.lastTime >= 1000) {
        setFps(fpsRef.current.frames);
        fpsRef.current.frames = 0;
        fpsRef.current.lastTime = now;
      }
    };
    const interval = setInterval(updateFps, 16);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!mountRef.current || !model) return;

    console.log('ModelPreview - Model data:', model);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f9fa);
    scene.fog = new THREE.Fog(0xf8f9fa, 50, 200);
    sceneRef.current = scene;

    const width = isFullscreen ? window.innerWidth : mountRef.current.clientWidth;
    const height = isFullscreen ? window.innerHeight : mountRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      precision: 'mediump',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    console.log('WebGL Capabilities:', {
      version: renderer.getContext().getParameter(renderer.getContext().VERSION),
      maxTextureSize: renderer.getContext().getParameter(renderer.getContext().MAX_TEXTURE_SIZE),
      renderer: renderer.info.render,
    });

    setupLighting(scene);

    const loadModel = async () => {
      try {
        setIsLoading(true);
        setError(null);
        setLoadingProgress(0);

        controlsRef.current.rotation = { x: 0, y: 0 };
        controlsRef.current.pan = { x: 0, y: 0 };
        controlsRef.current.zoom = 1;
        controlsRef.current.autoRotate = true;

        if (!baseFolder || !model.objFilename) {
          throw new Error('Missing model file URLs or filenames');
        }

        console.log('Base folder:', baseFolder);
        console.log('OBJ Filename:', model.objFilename);
        console.log('MTL Filename:', model.mtlFilename);

        const progressInterval = setInterval(() => {
          setLoadingProgress(prev => Math.min(prev + 10, 90));
        }, 100);

        const mtlLoader = new MTLLoader();
        mtlLoader.setPath(baseFolder);
        mtlLoader.setResourcePath(baseFolder);
        const mtlUrl = model.mtlFilename ? `${baseFolder}${model.mtlFilename}` : null;

        let materials;
        if (mtlUrl) {
          try {
            materials = await mtlLoader.loadAsync(model.mtlFilename, xhr => {
              console.log(`MTL loading: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
              setLoadingProgress((xhr.loaded / xhr.total) * 50);
            });

            const textureLoader = new THREE.TextureLoader();
            for (const mat of Object.values(materials.materials)) {
              if (mat.map?.sourceFile) {
                const textureUrl = `${baseFolder}${mat.map.sourceFile}`;
                try {
                  const texture = await textureLoader.loadAsync(textureUrl);
                  texture.flipY = false;
                  texture.encoding = THREE.sRGBEncoding;
                  mat.map = texture;
                  mat.needsUpdate = true;
                } catch (texError) {
                  console.warn('Texture load failed:', textureUrl, texError);
                  mat.map = null;
                  mat.needsUpdate = true;
                }
              }
              mat.roughness = mat.roughness ?? 0.8;
              mat.metalness = mat.metalness ?? 0.2;
              mat.side = THREE.DoubleSide;
              mat.needsUpdate = true;
            }
            materials.preload();
          } catch (mtlError) {
            console.warn('MTL loading failed, using fallback material:', mtlError.message);
            materials = null;
          }
        }

        const objLoader = new OBJLoader();
        if (materials) objLoader.setMaterials(materials);
        objLoader.setPath(baseFolder);
        const object = await objLoader.loadAsync(model.objFilename, xhr => {
          console.log(`OBJ loading: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
          setLoadingProgress(50 + (xhr.loaded / xhr.total) * 50);
        });

        clearInterval(progressInterval);
        setLoadingProgress(100);

        let vertexCount = 0;
        let faceCount = 0;
        let materialCount = 0;
        let hasValidGeometry = false;

        object.traverse(child => {
          if (child.isMesh && child.geometry?.attributes.position) {
            vertexCount += child.geometry.attributes.position.count;
            faceCount += child.geometry.index ? child.geometry.index.count / 3 : child.geometry.attributes.position.count / 3;
            hasValidGeometry = true;
            const materials = Array.isArray(child.material) ? child.material : [child.material];
            materialCount += materials.length;
            materials.forEach(mat => {
              mat.wireframe = wireframe;
              mat.side = THREE.DoubleSide;
              mat.needsUpdate = true;
            });
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        if (!hasValidGeometry) throw new Error('No valid geometry found in model');

        setModelInfo({ vertices: vertexCount, faces: faceCount, materials: materialCount });

        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        modelBounds.current.center = center;
        modelBounds.current.size = size;

        object.position.sub(center);
        const maxDim = Math.max(size.x, size.y, size.z, 0.0001);
        const targetSize = 6;
        const scale = Math.min(targetSize / maxDim, 10);
        object.scale.setScalar(scale);
        object.position.set(2, 2, 0);

        console.log('Model bounds:', { center, size, scale, maxDim });

        initialCameraDistance.current = Math.max(maxDim * 1.5, 5);
        camera.position.set(3, maxDim + 2, initialCameraDistance.current);
        camera.lookAt(2, 2, 0);
        camera.far = maxDim * 100;
        camera.updateProjectionMatrix();

        const boxHelper = new THREE.BoxHelper(object, 0xff0000);
        boxHelper.visible = showBoundingBox;
        scene.add(boxHelper);

        if (modelObjectRef.current) scene.remove(modelObjectRef.current);
        modelObjectRef.current = object;
        scene.add(object);
        setIsLoading(false);
        setRetryCount(0);
      } catch (err) {
        console.error('Model loading error:', err);
        setError(err.message || `Failed to load model from ${baseFolder}${model.objFilename}`);
        setIsLoading(false);
        if (retryCount < maxRetries) {
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
            setReloadKey(prev => prev + 1);
          }, 2000);
        }
      }
    };

    loadModel();

    const canvas = renderer.domElement;
    canvas.style.cursor = 'grab';
    canvas.style.touchAction = 'none';

    let velocity = { x: 0, y: 0 };
    let lastMoveTime = performance.now();

    const handleMouseDown = (e) => {
      e.preventDefault();
      controlsRef.current.isDragging = true;
      controlsRef.current.isPanning = e.shiftKey || e.button === 1;
      controlsRef.current.lastX = e.clientX;
      controlsRef.current.lastY = e.clientY;
      controlsRef.current.autoRotate = false;
      canvas.style.cursor = controlsRef.current.isPanning ? 'move' : 'grabbing';
      velocity = { x: 0, y: 0 };
    };

    const handleMouseMove = (e) => {
      if (!controlsRef.current.isDragging || !modelObjectRef.current) return;

      const deltaX = e.clientX - controlsRef.current.lastX;
      const deltaY = e.clientY - controlsRef.current.lastY;
      const currentTime = performance.now();
      const deltaTime = currentTime - lastMoveTime;

      if (deltaTime > 0) {
        velocity.x = deltaX / deltaTime;
        velocity.y = deltaY / deltaTime;
      }

      const rotateSpeed = 0.008;
      const panSpeed = 0.005;

      if (controlsRef.current.isPanning) {
        controlsRef.current.pan.x += deltaX * panSpeed * (initialCameraDistance.current / 5);
        controlsRef.current.pan.y -= deltaY * panSpeed * (initialCameraDistance.current / 5);
      } else {
        controlsRef.current.rotation.y += deltaX * rotateSpeed;
        controlsRef.current.rotation.x += deltaY * rotateSpeed;
        controlsRef.current.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, controlsRef.current.rotation.x));
      }

      controlsRef.current.lastX = e.clientX;
      controlsRef.current.lastY = e.clientY;
      lastMoveTime = currentTime;
    };

    const handleMouseUp = () => {
      controlsRef.current.isDragging = false;
      controlsRef.current.isPanning = false;
      canvas.style.cursor = 'grab';
    };

    const handleWheel = (e) => {
      e.preventDefault();
      const zoomSpeed = 0.1;
      const delta = e.deltaY > 0 ? -zoomSpeed : zoomSpeed;
      controlsRef.current.zoom = Math.max(0.1, Math.min(10, controlsRef.current.zoom + delta));
    };

    const handleTouchStart = (e) => {
      e.preventDefault();
      controlsRef.current.autoRotate = false;
      if (e.touches.length === 1) {
        controlsRef.current.isDragging = true;
        controlsRef.current.lastX = e.touches[0].clientX;
        controlsRef.current.lastY = e.touches[0].clientY;
        controlsRef.current.isPinching = false;
      } else if (e.touches.length === 2) {
        controlsRef.current.isPinching = true;
        controlsRef.current.isDragging = false;
        controlsRef.current.initialTouchDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      if (controlsRef.current.isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - controlsRef.current.lastX;
        const deltaY = e.touches[0].clientY - controlsRef.current.lastY;
        const rotateSpeed = 0.008;
        controlsRef.current.rotation.y += deltaX * rotateSpeed;
        controlsRef.current.rotation.x += deltaY * rotateSpeed;
        controlsRef.current.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, controlsRef.current.rotation.x));
        controlsRef.current.lastX = e.touches[0].clientX;
        controlsRef.current.lastY = e.touches[0].clientY;
      } else if (controlsRef.current.isPinching && e.touches.length === 2) {
        const distance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const delta = (distance - controlsRef.current.initialTouchDistance) * 0.003;
        controlsRef.current.zoom = Math.max(0.1, Math.min(10, controlsRef.current.zoom + delta));
        controlsRef.current.initialTouchDistance = distance;
      }
    };

    const handleTouchEnd = (e) => {
      e.preventDefault();
      if (e.touches.length === 0) {
        controlsRef.current.isDragging = false;
        controlsRef.current.isPinching = false;
      } else if (e.touches.length === 1) {
        controlsRef.current.isPinching = false;
        controlsRef.current.isDragging = true;
        controlsRef.current.lastX = e.touches[0].clientX;
        controlsRef.current.lastY = e.touches[0].clientY;
      }
    };

    const handleContextMenu = (e) => e.preventDefault();

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('wheel', handleWheel, { passive: false });
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false });
    canvas.addEventListener('contextmenu', handleContextMenu);

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      if (modelObjectRef.current) {
        if (controlsRef.current.autoRotate && !controlsRef.current.isDragging && !controlsRef.current.isPinching) {
          controlsRef.current.rotation.y += controlsRef.current.autoRotateSpeed;
          controlsRef.current.rotation.x *= 0.98;
          modelObjectRef.current.rotation.set(0, controlsRef.current.rotation.y, 0);
        } else {
          modelObjectRef.current.rotation.x = controlsRef.current.rotation.x;
          modelObjectRef.current.rotation.y = controlsRef.current.rotation.y;
        }

        const targetPosition = new THREE.Vector3(
          controlsRef.current.pan.x + 2,
          controlsRef.current.pan.y + 2,
          initialCameraDistance.current / controlsRef.current.zoom
        );
        camera.position.lerp(targetPosition, controlsRef.current.dampingFactor);
        camera.lookAt(2, 2, 0);
        renderer.render(scene, camera);
      }
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      const width = isFullscreen ? window.innerWidth : mountRef.current.clientWidth;
      const height = isFullscreen ? window.innerHeight : mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('wheel', handleWheel);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('contextmenu', handleContextMenu);

      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      if (mountRef.current && renderer.domElement) mountRef.current.removeChild(renderer.domElement);

      scene.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) child.material.forEach(mat => mat.dispose());
          else child.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, [model, isFullscreen, reloadKey, showBoundingBox, setupLighting]);

  const enterFullscreen = () => fullscreenRef.current?.requestFullscreen?.();
  const exitFullscreen = () => document.exitFullscreen?.();
  const toggleFullscreen = useCallback(() => (isFullscreen ? exitFullscreen() : enterFullscreen()), [isFullscreen]);

  const resetView = useCallback(() => {
    controlsRef.current.rotation = { x: 0, y: 0 };
    controlsRef.current.pan = { x: 0, y: 0 };
    controlsRef.current.zoom = 1;
  }, []);

  const toggleWireframe = useCallback(() => setWireframe(prev => !prev), []);

  const zoomIn = useCallback(() => {
    controlsRef.current.zoom = Math.min(10, controlsRef.current.zoom + 0.3);
  }, []);

  const zoomOut = useCallback(() => {
    controlsRef.current.zoom = Math.max(0.1, controlsRef.current.zoom - 0.3);
  }, []);

  const reloadModel = useCallback(() => {
    resetView();
    setWireframe(false);
    setShowBoundingBox(false);
    setIsLoading(true);
    setError(null);
    setRetryCount(0);
    setReloadKey(prev => prev + 1);
    controlsRef.current.autoRotate = true;
  }, [resetView]);

  if (!model || !model.fileUrl || !model.objFilename) {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-2 sm:p-4">
        <div className="bg-white rounded-xl p-3 sm:p-6 text-center max-w-sm">
          <div className="text-red-500 text-2xl sm:text-3xl mb-3">⚠️</div>
          <h3 className="text-base sm:text-lg font-bold mb-2">Invalid Model Data</h3>
          <p className="text-gray-600 text-sm sm:text-base mb-3">Required model files are missing</p>
          <button
            onClick={onClose}
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={fullscreenRef}
      className={`fixed inset-0 z-50 ${isFullscreen ? 'bg-black' : 'bg-black/80 flex items-center justify-center p-1 sm:p-2'}`}
    >
      <div className={`${isFullscreen ? 'w-full h-full' : 'relative bg-white shadow-2xl w-full max-w-7xl h-[85vh] sm:h-[90vh] rounded-xl overflow-hidden'}`}>
        <div className={`${isFullscreen ? 'absolute top-0 left-0 right-0 z-10 bg-black/70 backdrop-blur-sm' : 'bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-xl border-b'} p-2 sm:p-4`}>
          <div className="flex items-center justify-between flex-col sm:flex-row gap-2 sm:gap-0">
            <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
              <h3 className={`text-base sm:text-lg font-bold truncate max-w-[80%] ${isFullscreen ? 'text-white' : 'text-gray-800'}`}>
                {model.name || 'Untitled Model'}
              </h3>
              <div className={`text-xs sm:text-sm ${isFullscreen ? 'text-gray-300' : 'text-gray-600'} hidden md:block ml-2 sm:ml-4`}>
                {modelInfo.vertices > 0 && (
                  <span>
                    {modelInfo.vertices.toLocaleString()} vertices • {modelInfo.faces.toLocaleString()} faces • {modelInfo.materials} materials • {fps} FPS
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-end flex-wrap gap-1 sm:gap-2">
              <button
                onClick={reloadModel}
                title="Reload Model (R)"
                className="p-1.5 sm:p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all text-xs sm:text-sm"
              >
                <RefreshCw size={16} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={toggleWireframe}
                title={`Wireframe ${wireframe ? 'ON' : 'OFF'} (W)`}
                className={`p-1.5 sm:p-2 rounded-lg transition-all ${wireframe ? 'bg-blue-500 text-white shadow-lg hover:bg-blue-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} text-xs sm:text-sm`}
              >
                <Move size={16} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={zoomIn}
                title="Zoom In (+)"
                className="p-1.5 sm:p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all text-xs sm:text-sm"
              >
                <ZoomIn size={16} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={zoomOut}
                title="Zoom Out (-)"
                className="p-1.5 sm:p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all text-xs sm:text-sm"
              >
                <ZoomOut size={16} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={resetView}
                title="Reset View (R)"
                className="p-1.5 sm:p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all text-xs sm:text-sm"
              >
                <Minus size={16} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setShowBoundingBox(prev => !prev)}
                title={`Bounding Box ${showBoundingBox ? 'ON' : 'OFF'} (B)`}
                className={`p-1.5 sm:p-2 rounded-lg transition-all ${showBoundingBox ? 'bg-blue-500 text-white shadow-lg hover:bg-blue-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} text-xs sm:text-sm`}
              >
                {showBoundingBox ? (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
              <button
                onClick={toggleFullscreen}
                title={isFullscreen ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)'}
                className="p-1.5 sm:p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all text-xs sm:text-sm"
              >
                {isFullscreen ? <Minimize2 size={16} className="sm:w-5 sm:h-5" /> : <Maximize2 size={16} className="sm:w-5 sm:h-5" />}
              </button>
              <button
                onClick={onClose}
                title="Close (Esc)"
                className="p-1.5 sm:p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all text-xs sm:text-sm"
              >
                <X size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className={`relative ${isFullscreen ? 'w-full h-full' : 'w-full h-[calc(100%-56px)] sm:h-[calc(100%-80px)] rounded-xl overflow-hidden'}`}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-blue-600 mb-3 sm:mb-4"></div>
                <p className="text-gray-600 text-sm sm:text-base">Loading 3D model... {Math.round(loadingProgress)}%</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-2">{baseFolder}{model.objFilename}</p>
                {retryCount > 0 && (
                  <p className="text-yellow-600 text-xs sm:text-sm mt-2">Retry attempt {retryCount} of {maxRetries}</p>
                )}
              </div>
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
              <div className="text-center">
                <div className="text-red-500 text-2xl sm:text-3xl mb-3 sm:mb-4">⚠️</div>
                <p className="text-red-600 text-sm sm:text-base mb-2">Error loading model</p>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{error}</p>
                <button
                  onClick={reloadModel}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm"
                >
                  Retry
                </button>
              </div>
            </div>
          )}
          <div ref={mountRef} className="w-full h-full bg-[#f8f9fa]" />
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/70 text-white p-1 sm:p-2 rounded-lg text-xs sm:text-sm hidden md:block">
            <p>• Drag to rotate (stops auto-rotation)</p>
            <p>• Shift + Drag or Middle Click to pan</p>
            <p>• Scroll or pinch to zoom</p>
            <p>• R: Reset | W: Wireframe | F: Fullscreen</p>
            <p>• B: Bounding Box</p>
          </div>
        </div>
      </div>
    </div>
  );
}