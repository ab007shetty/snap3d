import React, { useState, useRef, useEffect } from 'react';
import { Maximize2, Clock, CheckCircle, Box, Sparkles, RefreshCw, Download } from 'lucide-react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { TextureLoader } from 'three';
import ModelPreview from './ModelPreview';

export default function ModelResult({
  generated3DModel,
  onNewModel,
  onDownload,
  processingTime,
  modelStats,
  isLibraryView = false
}) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const modelObjectRef = useRef(null);
  const animationIdRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [showFullPreview, setShowFullPreview] = useState(false);
  let maxDim = 1;

  // Get model base folder URL - returns directory path only
  const getModelBaseUrl = (model) => {
    if (!model || !model.id || !model.processor) return null;
    return `http://localhost:3001/models/${model.processor}/${model.id}`;
  };

  // Get model file details
  const getModelFileDetails = (model) => {
    let objFilename = null;
    let mtlFilename = null;

    if (model.objFiles && model.objFiles.length > 0) {
      // Prefer objFiles from status.json
      objFilename = model.objFiles.find(f => f.filename.endsWith('.obj'))?.filename || `${model.name}.obj`;
      mtlFilename = model.objFiles.find(f => f.filename.endsWith('.mtl'))?.filename || `${model.name}.mtl`;
    } else if (model.processor === "open3d" || model.processor === "meshroom") {
      objFilename = "texturedMesh.obj";
      mtlFilename = "texturedMesh.mtl";
    } else {
      objFilename = model.fileName || `${model.name}.obj`;
      mtlFilename = `${model.name}.mtl`;
    }

    return { objFilename, mtlFilename };
  };

  const downloadModelAsZip = async () => {
    try {
      const modelId = generated3DModel.id;
      const response = await fetch(`http://localhost:3001/api/models/${modelId}/download-all`, {
        method: 'GET',
        headers: {
          'Accept': 'application/zip',
        },
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to download ZIP: ${response.status} ${response.statusText}. ${errorText}`);
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${generated3DModel.name || modelId}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      console.log('Download initiated for model:', modelId);
      if (onDownload) onDownload(); // Callback to parent if provided
    } catch (err) {
      console.error('Download error:', err);
      alert(`Failed to download the model: ${err.message}`);
    }
  };

  // Handle preview with proper model data structure
  const handleFullPreview = () => {
    const baseUrl = getModelBaseUrl(generated3DModel);
    if (!baseUrl) {
      console.error('Cannot generate base URL for model:', generated3DModel);
      alert('Unable to open preview - model URL not available');
      return;
    }

    const { objFilename, mtlFilename } = getModelFileDetails(generated3DModel);

    const previewModelData = {
      ...generated3DModel,
      fileUrl: baseUrl,
      objFilename,
      mtlFilename,
      name: generated3DModel.name || 'Untitled Model',
      id: generated3DModel.id,
      processor: generated3DModel.processor || 'import'
    };

    console.log('Preview model data:', previewModelData);
    console.log('OBJ URL:', `${baseUrl}/${objFilename}`);
    console.log('MTL URL:', `${baseUrl}/${mtlFilename}`);
    
    setShowFullPreview(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!mountRef.current || !generated3DModel) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f9fa);
    sceneRef.current = scene;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100000);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.domElement.style.pointerEvents = 'auto';
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    const gl = renderer.getContext();
    console.log('WebGL Capabilities:', {
      version: gl.getParameter(gl.VERSION),
      maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
      renderer: renderer.info.render
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(10, 10, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-10, -10, -10);
    scene.add(directionalLight2);
    const pointLight = new THREE.PointLight(0xffffff, 0.8, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    const loadModel = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Use the same URL structure as ModelLibrary
        const baseFolder = generated3DModel.fileUrl || getModelBaseUrl(generated3DModel);
        if (!baseFolder) throw new Error('No model folder available');
        console.log('Base folder:', baseFolder);

        // Get proper filenames
        const { objFilename, mtlFilename } = getModelFileDetails(generated3DModel);

        const mtlLoader = new MTLLoader();
        mtlLoader.setPath(baseFolder + '/');
        mtlLoader.setResourcePath(baseFolder + '/');
        const mtlUrl = `${baseFolder}/${mtlFilename}`;
        console.log('Attempting to load MTL:', mtlUrl);
        let materials;
        try {
          materials = await new Promise((resolve, reject) => {
            mtlLoader.load(
              mtlFilename,
              resolve,
              (xhr) => console.log(`MTL loading: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`),
              (err) => reject(new Error(`MTL load failed: ${err.message} for URL: ${mtlUrl}`))
            );
          });
          const textureLoader = new TextureLoader();
          for (const mat of Object.values(materials.materials)) {
            if (mat.map) {
              const textureUrl = baseFolder + '/' + mat.map.sourceFile;
              console.log('Loading texture:', textureUrl);
              try {
                const texture = await textureLoader.loadAsync(textureUrl);
                texture.flipY = false;
                mat.map = texture;
                mat.needsUpdate = true;
                console.log('Texture loaded:', textureUrl);
              } catch (texError) {
                console.warn('Texture load failed:', textureUrl, texError);
                mat.map = null;
                mat.needsUpdate = true;
              }
            }
          }
          materials.preload();
          console.log('MTL materials loaded:', materials);
        } catch (mtlError) {
          console.warn('MTL loading failed, using fallback material:', mtlError);
          materials = null;
        }

        const objLoader = new OBJLoader();
        if (materials) {
          objLoader.setMaterials(materials);
        }
        objLoader.setPath(baseFolder + '/');
        const objUrl = `${baseFolder}/${objFilename}`;
        console.log('Attempting to load OBJ:', objUrl);
        const object = await new Promise((resolve, reject) => {
          objLoader.load(
            objFilename,
            resolve,
            (xhr) => console.log(`OBJ loading: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`),
            (err) => reject(new Error(`OBJ load failed: ${err.message} for URL: ${objUrl}`))
          );
        });

        let hasValidGeometry = false;
        object.traverse(child => {
          if (child.isMesh && child.geometry && child.geometry.attributes.position) {
            console.log('Mesh geometry:', {
              vertices: child.geometry.attributes.position.count,
              faces: child.geometry.index ? child.geometry.index.count / 3 : 0
            });
            hasValidGeometry = true;
          }
        });
        if (!hasValidGeometry) {
          throw new Error('No valid geometry found in model');
        }

        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        object.position.sub(center); // Center the model at origin
        maxDim = Math.max(size.x, size.y, size.z, 0.0001);
        const scale = Math.min(3 / maxDim, 10);
        object.scale.setScalar(scale);
        object.position.x += maxDim * 0.75; // Top-right offset
        object.position.y += maxDim * 0.75; // Top-right offset
        console.log('Model bounds:', { center, size, scale, newPosition: object.position });

        object.traverse(child => {
          if (child.isMesh) {
            if (!child.material || child.material.length === 0) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0xcccccc,
                side: THREE.DoubleSide
              });
              console.warn('Applied fallback material to mesh:', child);
            }
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        camera.position.set(maxDim * 0.8, maxDim * 0.8, maxDim * 0.8); // Increased default zoom
        camera.far = maxDim * 1000;
        camera.lookAt(object.position);
        camera.updateProjectionMatrix();

        modelObjectRef.current = object;
        scene.add(object);
        setIsLoading(false);
      } catch (err) {
        console.error('Model loading error:', err);
        setError(err.message || `Failed to load model`);
        setIsLoading(false);
      }
    };

    loadModel();

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      if (modelObjectRef.current && autoRotate) {
        modelObjectRef.current.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [generated3DModel, autoRotate]);

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

  // Prepare model data for preview with proper structure
  const previewModelData = (() => {
    const baseUrl = getModelBaseUrl(generated3DModel);
    if (!baseUrl) return null;

    const { objFilename, mtlFilename } = getModelFileDetails(generated3DModel);

    return {
      ...generated3DModel,
      fileUrl: baseUrl,
      objFilename,
      mtlFilename,
      name: generated3DModel.name || 'Untitled Model',
      id: generated3DModel.id,
      processor: generated3DModel.processor || 'import'
    };
  })();

  return (
    <div className="w-full max-w-none mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="border-b border-gray-200 px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
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
          <div className="mb-8">
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 overflow-hidden h-[300px] sm:h-[400px]">
              <div ref={mountRef} className="w-full h-full" />
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
                      onClick={() => {
                        setError(null);
                        setIsLoading(true);
                        // The useEffect will handle reloading
                      }}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      <RefreshCw className="w-4 h-4 mr-2 inline" /> Reload
                    </button>
                  </div>
                </div>
              )}
              <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  className={`p-2 rounded-full transition shadow-lg ${
                    autoRotate 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <button
                  onClick={downloadModelAsZip}
                  className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition shadow-lg"
                  title="Download Model"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={handleFullPreview}
                className="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
                title="View Fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {processingTime && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Processing time: {processingTime}s</span>
                {modelStats && (
                  <>
                    <span>•</span>
                    <span>Vertices: {modelStats.vertices}</span>
                    <span>•</span>
                    <span>Faces: {modelStats.faces}</span>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {showFullPreview && previewModelData && (
        <ModelPreview
          model={previewModelData}
          onClose={() => setShowFullPreview(false)}
        />
      )}
    </div>
  );
}