import React, { useRef, useEffect, useState } from 'react';
import { X, Maximize2, Minimize2, Download, RotateCcw, ZoomIn, ZoomOut, Move } from 'lucide-react';
import * as THREE from 'three';

export default function EnhancedModelPreviewModal({ model, onClose }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const modelObjectRef = useRef(null);
  const animationIdRef = useRef(null);
  const fullscreenRef = useRef(null);
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [wireframe, setWireframe] = useState(false);

  // Get model file URL - consistent with backend structure
  const getModelFileUrl = (model) => {
    if (!model || !model.id || !model.processor) return null;
    
    const processor = model.processor;
    let fileName = null;
    
    if (model.objFiles && model.objFiles.length > 0) {
      fileName = model.objFiles[0].filename;
    } else if (processor === "open3d" || processor === "meshroom") {
      fileName = "texturedMesh.obj";
    } else {
      fileName = model.fileName || `${model.name}.obj`;
    }
    
    return `http://localhost:3001/models/${processor}/${model.id}/${fileName}`;
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-10, -10, -5);
    scene.add(directionalLight2);

    // Controls (basic mouse controls)
    const controls = {
      isMouseDown: false,
      previousMousePosition: { x: 0, y: 0 },
      rotation: { x: 0, y: 0 },
      zoom: 1,
      pan: { x: 0, y: 0 }
    };
    controlsRef.current = controls;

    // Mouse event handlers
    const handleMouseDown = (event) => {
      controls.isMouseDown = true;
      controls.previousMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
    };

    const handleMouseUp = () => {
      controls.isMouseDown = false;
    };

    const handleMouseMove = (event) => {
      if (!controls.isMouseDown) return;

      const deltaMove = {
        x: event.clientX - controls.previousMousePosition.x,
        y: event.clientY - controls.previousMousePosition.y
      };

      if (event.shiftKey) {
        // Pan
        controls.pan.x += deltaMove.x * 0.01;
        controls.pan.y -= deltaMove.y * 0.01;
      } else {
        // Rotate
        controls.rotation.y += deltaMove.x * 0.01;
        controls.rotation.x += deltaMove.y * 0.01;
      }

      controls.previousMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
    };

    const handleWheel = (event) => {
      event.preventDefault();
      controls.zoom += event.deltaY * -0.001;
      controls.zoom = Math.max(0.1, Math.min(5, controls.zoom));
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('wheel', handleWheel);

    // Load model
    loadModel();

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      if (modelObjectRef.current) {
        // Apply controls
        if (autoRotate && !controls.isMouseDown) {
          modelObjectRef.current.rotation.y += 0.005;
        }
        
        modelObjectRef.current.rotation.x = controls.rotation.x;
        modelObjectRef.current.rotation.y += controls.rotation.y * 0.1;
        
        // Apply zoom
        camera.position.z = 5 / controls.zoom;
        
        // Apply pan
        camera.position.x = controls.pan.x;
        camera.position.y = controls.pan.y;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      renderer.domElement.removeEventListener('mouseup', handleMouseUp);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('wheel', handleWheel);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, [model, autoRotate]);

  const loadModel = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Use the model's fileUrl if available, otherwise generate it
      const modelUrl = model.fileUrl || getModelFileUrl(model);
      console.log('Loading model from URL:', modelUrl); // Debug log

      if (!modelUrl) {
        throw new Error('No model URL available');
      }

      // Fetch the model file
      let objText;
      if (modelUrl.startsWith('blob:')) {
        // Handle blob URL
        const response = await fetch(modelUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch blob: ${response.status} ${response.statusText}`);
        }
        objText = await response.text();
      } else {
        // Handle regular URL
        const response = await fetch(modelUrl);
        if (!response.ok) {
          throw new Error(`Failed to load model: ${response.status} ${response.statusText}`);
        }
        objText = await response.text();
      }
      
      console.log('OBJ file loaded, length:', objText.length); // Debug log
      
      // Parse OBJ file
      const geometry = parseOBJ(objText);
      
      if (!geometry || geometry.attributes.position.count === 0) {
        throw new Error('Invalid model data - no vertices found');
      }
      
      console.log('Geometry created, vertices:', geometry.attributes.position.count); // Debug log
      
      // Create material with better appearance
      const material = new THREE.MeshLambertMaterial({
        color: 0x606060,
        side: THREE.DoubleSide,
        wireframe: wireframe
      });
      
      // Create mesh
      const mesh = new THREE.Mesh(geometry, material);
      
      // Center and scale the model
      geometry.computeBoundingBox();
      const box = geometry.boundingBox;
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      // Center the geometry
      geometry.translate(-center.x, -center.y, -center.z);
      
      // Scale to fit in view
      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim > 0) {
        const scale = 3 / maxDim;
        mesh.scale.setScalar(scale);
      }
      
      // Add to scene
      if (modelObjectRef.current) {
        sceneRef.current.remove(modelObjectRef.current);
      }
      
      modelObjectRef.current = mesh;
      sceneRef.current.add(mesh);
      
      // Position camera to view the model
      cameraRef.current.position.set(0, 0, 5);
      cameraRef.current.lookAt(0, 0, 0);
      
      console.log('Model loaded successfully'); // Debug log
      setIsLoading(false);
    } catch (err) {
      console.error('Model loading error:', err);
      setError(err.message || 'Failed to load model');
      setIsLoading(false);
    }
  };

  // Enhanced OBJ parser (same as ModelResult)
  const parseOBJ = (objText) => {
    const vertices = [];
    const faces = [];
    
    const lines = objText.split('\n');
    
    for (let line of lines) {
      line = line.trim();
      if (!line || line.startsWith('#')) continue;
      
      if (line.startsWith('v ')) {
        // Parse vertex
        const parts = line.split(/\s+/);
        if (parts.length >= 4) {
          vertices.push(
            parseFloat(parts[1]) || 0,
            parseFloat(parts[2]) || 0,
            parseFloat(parts[3]) || 0
          );
        }
      } else if (line.startsWith('f ')) {
        // Parse face
        const parts = line.split(/\s+/).slice(1);
        if (parts.length >= 3) {
          // Convert to triangles if needed
          const indices = parts.map(part => {
            const index = parseInt(part.split('/')[0]) - 1;
            return index >= 0 ? index : 0;
          });
          
          // Triangulate if more than 3 vertices
          for (let i = 1; i < indices.length - 1; i++) {
            faces.push(indices[0], indices[i], indices[i + 1]);
          }
        }
      }
    }
    
    if (vertices.length === 0) {
      throw new Error('No vertices found in OBJ file');
    }
    
    if (faces.length === 0) {
      throw new Error('No faces found in OBJ file');
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(faces);
    geometry.computeVertexNormals();
    
    return geometry;
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      fullscreenRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  const downloadModel = () => {
    const modelUrl = model.fileUrl || getModelFileUrl(model);
    if (!modelUrl) return;
    
    // Get the proper filename for download
    let downloadFileName = null;
    if (model.objFiles && model.objFiles.length > 0) {
      downloadFileName = model.objFiles[0].filename;
    } else if (model.processor === "open3d" || model.processor === "meshroom") {
      downloadFileName = "texturedMesh.obj";
    } else {
      downloadFileName = model.fileName || `${model.name}.obj`;
    }
    
    const link = document.createElement('a');
    link.href = modelUrl;
    link.download = downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.rotation = { x: 0, y: 0 };
      controlsRef.current.zoom = 1;
      controlsRef.current.pan = { x: 0, y: 0 };
    }
  };

  const toggleWireframe = () => {
    setWireframe(!wireframe);
    if (modelObjectRef.current) {
      modelObjectRef.current.material.wireframe = !wireframe;
    }
  };

  return (
    <div
      ref={fullscreenRef}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    >
      <div className={`relative bg-white rounded-lg shadow-xl ${isFullscreen ? 'w-full h-full' : 'w-full max-w-6xl h-[80vh]'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-50 rounded-t-lg">
          <h3 className="text-lg font-bold text-gray-800">{model.name}</h3>
          <div className="flex space-x-2">
            <button 
              onClick={() => setAutoRotate(!autoRotate)} 
              title="Toggle Auto Rotate"
              className={`p-2 rounded-md transition-colors ${autoRotate ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600`}
            >
              <RotateCcw size={18} />
            </button>
            <button 
              onClick={toggleWireframe}
              title="Toggle Wireframe"
              className={`p-2 rounded-md transition-colors ${wireframe ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600`}
            >
              <Move size={18} />
            </button>
            <button 
              onClick={resetView}
              title="Reset View"
              className="p-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
            >
              <ZoomOut size={18} />
            </button>
            <button 
              onClick={downloadModel} 
              title="Download" 
              className="p-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
            >
              <Download size={18} />
            </button>
            <button 
              onClick={toggleFullscreen} 
              title="Toggle Fullscreen" 
              className="p-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
            >
              {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
            <button 
              onClick={onClose} 
              title="Close" 
              className="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* 3D Model Viewer */}
        <div className="relative w-full h-full">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-600">Loading 3D model...</p>
              </div>
            </div>
          )}
          
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <p className="text-red-600 mb-2">Error loading model</p>
                <p className="text-gray-600 text-sm">{error}</p>
                <button 
                  onClick={loadModel}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Retry
                </button>
              </div>
            </div>
          )}
          
          <div 
            ref={mountRef} 
            className="w-full h-full"
            style={{ cursor: controlsRef.current?.isMouseDown ? 'grabbing' : 'grab' }}
          />
          
          {/* Controls Info */}
          <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg text-sm">
            <p>• Drag to rotate</p>
            <p>• Shift + Drag to pan</p>
            <p>• Scroll to zoom</p>
          </div>
        </div>
      </div>
    </div>
  );
}