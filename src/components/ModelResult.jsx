import React, { useState, useRef, useEffect } from 'react';
import { 
  Download, 
  RotateCcw, 
  Eye, 
  Share2, 
  Maximize2,
  Clock,
  CheckCircle,
  Info,
  Sparkles,
  Box,
  Palette,
  Settings
} from 'lucide-react';
import * as THREE from 'three';
import EnhancedModelPreviewModal from './ModelPreview';

export default function ModelResult({
  generated3DModel,
  onDownload,
  onNewModel,
  onSave,
  processingTime,
  modelStats,
  isLibraryView = false
}) {
  const [showPreview, setShowPreview] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullPreview, setShowFullPreview] = useState(false);
  
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const modelObjectRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);

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
    if (!mountRef.current || !generated3DModel) return;

    setupThreeJS();
    loadModel();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && rendererRef.current?.domElement) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [generated3DModel]);

  const setupThreeJS = () => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);

    // Add basic mouse controls
    let mouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let rotationX = 0;
    let rotationY = 0;

    const handleMouseDown = (event) => {
      mouseDown = true;
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseUp = () => {
      mouseDown = false;
    };

    const handleMouseMove = (event) => {
      if (!mouseDown || !modelObjectRef.current) return;
      
      const deltaX = event.clientX - mouseX;
      const deltaY = event.clientY - mouseY;
      
      rotationY += deltaX * 0.01;
      rotationX += deltaY * 0.01;
      
      modelObjectRef.current.rotation.y = rotationY;
      modelObjectRef.current.rotation.x = rotationX;
      
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleWheel = (event) => {
      if (!modelObjectRef.current) return;
      
      const scale = modelObjectRef.current.scale.x;
      const newScale = scale * (1 - event.deltaY * 0.001);
      modelObjectRef.current.scale.setScalar(Math.max(0.1, Math.min(5, newScale)));
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('wheel', handleWheel);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      if (modelObjectRef.current && autoRotate && !mouseDown) {
        modelObjectRef.current.rotation.y += 0.005;
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
  };

  const loadModel = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const modelUrl = getModelFileUrl(generated3DModel);
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
        side: THREE.DoubleSide
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

  // Enhanced OBJ parser
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

  if (!generated3DModel) {
    return (
      <div className="w-full max-w-none mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
          <div className="p-16 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Box className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Model Generated</h3>
            <p className="text-gray-500 mb-6">
              No model data available. Please generate a model first.
            </p>
            <button
              onClick={onNewModel}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Start Creating
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    const modelUrl = getModelFileUrl(generated3DModel);
    if (modelUrl) {
      if (onDownload) {
        onDownload();
      } else {
        const link = document.createElement('a');
        link.href = modelUrl;
        link.download = generated3DModel.fileName || `${generated3DModel.name}.obj`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  const handleFullPreview = () => {
    const modelWithUrl = {
      ...generated3DModel,
      fileUrl: getModelFileUrl(generated3DModel)
    };
    setShowFullPreview(true);
  };

  return (
    <div className="w-full max-w-none mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
        {/* Header */}
<div className="border-b border-gray-200 px-8 py-6">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    {/* Left: Title and subtitle */}
    <div>
      <div className="flex items-center space-x-3 mb-2">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">
          {isLibraryView ? 'Model Preview' : '3D Model Ready'}
        </h1>
      </div>
      <p className="hidden sm:block text-gray-600">
        {isLibraryView ? 'Previewing' : 'Your 3D model'} "{generated3DModel.name}"
        {isLibraryView ? '' : ' is ready for preview'}
      </p>
    </div>

    {/* Right: New Model Button */}
    {!isLibraryView && (
      <button
        onClick={onNewModel}
        className="hidden sm:flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-medium w-fit"
      >
        <Sparkles className="w-5 h-5" />
        <span>Generate New Model</span>
      </button>
    )}
  </div>
</div>


        <div className="p-8">
          {/* 3D Model Viewer */}
          <div className="mb-8">

            {/* 3D Viewer Container */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 overflow-hidden">
              {/* 3D Viewer */}
              <div 
                ref={mountRef} 
                className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200"
              >
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
                      <p className="text-gray-600">Loading 3D model...</p>
                    </div>
                  </div>
                )}
                
                {error && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Box className="w-8 h-8 text-red-500" />
                      </div>
                      <p className="text-red-600 font-medium mb-2">Failed to load model</p>
                      <p className="text-gray-500 text-sm">{error}</p>
                      <button
                        onClick={loadModel}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Retry
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 3D Viewer Controls */}
              <div className="hidden sm:block absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>Click and drag to rotate</span>
                  <span>•</span>
                  <span>Scroll to zoom</span>
                </div>
              </div>

              <div className="absolute bottom-4 right-4">
              <button
                onClick={handleFullPreview}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>

            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-4">           
              {onSave && !isLibraryView && (
                <button
                  onClick={onSave}
                  className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Save to Library</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Model Preview Modal */}
      {showFullPreview && (
        <EnhancedModelPreviewModal
          model={{
            ...generated3DModel,
            fileUrl: getModelFileUrl(generated3DModel)
          }}
          onClose={() => setShowFullPreview(false)}
        />
      )}
    </div>
  );
}