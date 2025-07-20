import React, { useState, useRef, useEffect } from 'react';
import { Maximize2, CheckCircle, Box, Sparkles, Download, RefreshCw } from 'lucide-react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import ModelPreview from './ModelPreview';

export default function ModelResult({ generated3DModel, onNewModel }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const modelObjectRef = useRef(null);
  const animationIdRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const BACKEND_URL = 'http://localhost:3001';

  const getModelBaseUrl = (model) => {
    if (!model.id || !model.processor) throw new Error('Invalid model data');
    const fileUrl = `/models/${model.processor}/${model.id}`;
    console.log('Base URL:', fileUrl);
    return fileUrl;
  };

  const getModelFileDetails = (model) => {
    if (!model.objFilename) throw new Error('Missing .obj file');
    console.log('File details:', { objFilename: model.objFilename, mtlFilename: model.mtlFilename || 'none' });
    return { objFilename: model.objFilename, mtlFilename: model.mtlFilename };
  };

  const downloadModelAsZip = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/models/${generated3DModel.id}/download-all`, {
        method: 'GET',
        headers: { 'Accept': 'application/zip' },
      });
      if (!response.ok) throw new Error(`Failed to download ZIP: ${response.statusText}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${generated3DModel.name || generated3DModel.id}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      console.log('Download initiated for model:', generated3DModel.id);
    } catch (err) {
      console.error('Download error:', err);
      alert(`Failed to download the model: ${err.message}`);
    }
  };

  const handleFullPreview = () => {
    const baseUrl = getModelBaseUrl(generated3DModel);
    const { objFilename, mtlFilename } = getModelFileDetails(generated3DModel);
    console.log('Preview data:', { fileUrl: baseUrl, objFilename, mtlFilename });
    setShowFullPreview(true);
  };

  const reloadModel = () => {
    setReloadKey(prev => prev + 1);
    setIsLoading(true);
    setError(null);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!mountRef.current || !generated3DModel) {
      setError('No model data available');
      setIsLoading(false);
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f9fa);
    sceneRef.current = scene;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(10, 10, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-10, -10, -10);
    scene.add(directionalLight2);

    const loadModel = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const baseUrl = getModelBaseUrl(generated3DModel);
        const { objFilename, mtlFilename } = getModelFileDetails(generated3DModel);

        let materials = null;
        if (mtlFilename) {
          const mtlLoader = new MTLLoader();
          mtlLoader.setPath(`${BACKEND_URL}${baseUrl}/`);
          console.log('Loading MTL:', `${BACKEND_URL}${baseUrl}/${mtlFilename}`);
          try {
            materials = await mtlLoader.loadAsync(mtlFilename);
          } catch (mtlError) {
            console.warn('Failed to load MTL file:', mtlError);
            // Continue without materials if MTL fails
          }
        } else {
          console.log('No MTL file provided, skipping MTL loading');
        }

        const objLoader = new OBJLoader();
        if (materials) {
          objLoader.setMaterials(materials);
        }
        objLoader.setPath(`${BACKEND_URL}${baseUrl}/`);
        console.log('Loading OBJ:', `${BACKEND_URL}${baseUrl}/${objFilename}`);
        const object = await objLoader.loadAsync(objFilename);

        let hasValidGeometry = false;
        object.traverse(child => {
          if (child.isMesh && child.geometry && child.geometry.attributes.position) {
            hasValidGeometry = true;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        if (!hasValidGeometry) throw new Error('No valid geometry found in model');

        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        object.position.sub(center);
        const maxDim = Math.max(size.x, size.y, size.z, 0.0001);
        const scale = Math.min(3 / maxDim, 10);
        object.scale.setScalar(scale);
        object.position.set(2, 2, 0);

        camera.position.set(3, maxDim + 2, maxDim * 1.5);
        camera.lookAt(2, 2, 0);
        camera.far = maxDim * 100;
        camera.updateProjectionMatrix();

        modelObjectRef.current = object;
        scene.add(object);
        setIsLoading(false);
      } catch (err) {
        console.error('Model loading error:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    loadModel();

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      if (modelObjectRef.current) {
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
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [generated3DModel, reloadKey]);

  if (!generated3DModel) {
    return (
      <div className="w-full max-w-none mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
          <div className="p-16 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Box className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Model Generated</h3>
            <p className="text-gray-500 mb-6">No model data available. Please generate a model first.</p>
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

  return (
    <div className="w-full max-w-none mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="border-b border-gray-200 px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">3D Model Ready</h1>
              </div>
              <p className="hidden md:block text-gray-600">Your 3D model "{generated3DModel.name}" is ready for preview</p>
            </div>
            <button
              onClick={onNewModel}
              className="hidden md:block items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-medium"
            >
              <Sparkles className="w-5 h-5" />
              <span>Generate New Model</span>
            </button>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 overflow-hidden h-[300px] sm:h-[400px]">
              <div ref={mountRef} className="w-full h-full" />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
                    <p className="text-gray-600">Loading 3D model...</p>
                  </div>
                </div>
              )}
              {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Box className="w-8 h-8 text-red-500" />
                    </div>
                    <p className="text-red-600 font-medium mb-2">Failed to load model</p>
                    <p className="text-gray-500 text-sm">{error}</p>
                    <button
                      onClick={reloadModel}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      <RefreshCw className="w-4 h-4 mr-2 inline" /> Reload
                    </button>
                  </div>
                </div>
              )}
              <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                <button
                  onClick={reloadModel}
                  title="Reload Model"
                  className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
                <button
                  onClick={downloadModelAsZip}
                  className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition shadow-lg"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={handleFullPreview}
                className="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showFullPreview && (
        <ModelPreview
          model={{
            ...generated3DModel,
            fileUrl: getModelBaseUrl(generated3DModel),
            objFilename: generated3DModel.objFilename,
            mtlFilename: generated3DModel.mtlFilename,
          }}
          onClose={() => setShowFullPreview(false)}
        />
      )}
    </div>
  );
}