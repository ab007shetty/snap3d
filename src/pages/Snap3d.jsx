import React, { useState, useEffect } from 'react';
import { Upload, Sparkles, Folder } from 'lucide-react';
import Alert from '../components/common/Alert';
import ModelUpload from '../components/ModelUpload';
import ModelGenerate from '../components/ModelGenerate';
import ModelLibrary from '../components/ModelLibrary';
import ModelResult from '../components/ModelResult';

export default function Snap3d() {
  // State management for UI and data
  const [uploadType, setUploadType] = useState('images'); // 'images' or 'import'
  const [selectedImages, setSelectedImages] = useState([]); // Array of image files for open3d/meshroom
  const [selectedObjFiles, setSelectedObjFiles] = useState({}); // { obj, mtl } for import
  const [modelName, setModelName] = useState(''); // User-provided model name
  const [processor, setProcessor] = useState('open3d'); // 'open3d', 'meshroom', or 'import'
  const [isProcessing, setIsProcessing] = useState(false); // Processing state
  const [processingStep, setProcessingStep] = useState(0); // Current processing step index
  const [generated3DModel, setGenerated3DModel] = useState(null); // Generated model data
  const [savedModels, setSavedModels] = useState([]); // Library of saved models
  const [backendUp, setBackendUp] = useState(false); // Backend availability
  const [error, setError] = useState(null); // Error message
  const [activeTab, setActiveTab] = useState('generate'); // 'generate' or 'library'
  const [showGenerateUI, setShowGenerateUI] = useState(false); // Show generate UI

  const validProcessors = ['open3d', 'meshroom', 'import']; // Valid processor options
  const processingSteps = [
    'Analyzing image quality...',
    'Detecting features...',
    'Computing depth maps...',
    'Reconstructing point cloud...',
    'Generating mesh...',
    'Applying textures...',
    'Optimizing model...',
    'Finalizing export...',
  ]; // Progress messages for images processing

  const BACKEND_URL = 'http://localhost:3001'; // Backend API URL

  // Fetch with retry logic for handling network issues
  const fetchWithRetry = async (url, options, retries = 3, delay = 2000) => {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url, options);
        if (response.status === 429) {
          console.warn(`Rate limit exceeded for ${url}, retrying after ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
        return response;
      } catch (err) {
        if (i === retries - 1) throw err;
        console.warn(`Request to ${url} failed, retrying (${i + 1}/${retries})...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  };

  // Fetch saved models from backend
  const fetchModels = async () => {
    if (!backendUp) return;
    try {
      const response = await fetchWithRetry(`${BACKEND_URL}/api/models`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const models = await response.json();
        const sanitizedModels = models.map(model => ({
          ...model,
          fileUrl: `/models/${model.processor}/${model.id}`,
        }));
        setSavedModels(sanitizedModels);
        console.log('Fetched models:', sanitizedModels);
      } else {
        throw new Error(`Failed to fetch models: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Failed to fetch models:', error);
      setError('Failed to fetch models: Network error');
    }
  };

  // Check backend health on mount
  useEffect(() => {
    fetchWithRetry(`${BACKEND_URL}/api/health`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        setBackendUp(res.ok);
        console.log('Backend health check:', res.ok ? 'Up' : 'Down');
      })
      .catch(() => {
        setBackendUp(false);
        console.log('Backend health check failed');
        setError('Backend unavailable');
      });
  }, []);

  // Fetch models when backend is up
  useEffect(() => {
    if (backendUp) fetchModels();
  }, [backendUp]);

  // Validate inputs before proceeding to generate UI
  const handleNext = () => {
    const valid =
      (uploadType === 'images' && selectedImages.length >= 2) ||
      (uploadType === 'import' && selectedObjFiles.obj);
    if (!valid) {
      setError(
        uploadType === 'images'
          ? 'Upload at least 2 images'
          : 'Upload at least one .obj file'
      );
      return;
    }
    if (uploadType === 'images' && !validProcessors.includes(processor)) {
      setError('Invalid processor selected. Choose open3d or meshroom.');
      return;
    }
    setShowGenerateUI(true);
  };

  // Poll model status until completed or failed
  const pollStatus = async (modelId, maxAttempts = 600) => {
    let pollStep = 0;
    while (pollStep < maxAttempts) {
      try {
        setProcessingStep(Math.min(Math.floor((pollStep / maxAttempts) * processingSteps.length), processingSteps.length - 1));
        const response = await fetchWithRetry(`${BACKEND_URL}/api/models/${modelId}/status`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          if (response.status === 429) {
            console.warn(`Rate limit exceeded, retrying after 2 seconds...`);
            await new Promise(resolve => setTimeout(resolve, 2000));
            pollStep++;
            continue;
          }
          throw new Error(`Status check failed: ${response.statusText}`);
        }
        const statusData = await response.json();
        console.log(`Poll attempt ${pollStep + 1}: status=${statusData.status}, name=${statusData.name || 'none'}, processor=${statusData.processor || 'none'}, fullResponse=${JSON.stringify(statusData)}`);
        if (statusData.status === 'completed' || statusData.status === 'failed') {
          return statusData;
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        pollStep++;
      } catch (error) {
        console.error('Polling error:', error);
        setError(`Polling error: ${error.message}`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        pollStep++;
      }
    }
    throw new Error('Processing timed out after 20 minutes');
  };

  // Fetch model files from backend
  const fetchModelFiles = async (id) => {
    try {
      const response = await fetchWithRetry(`${BACKEND_URL}/api/models/${id}/files`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error(`Failed to fetch model files: ${response.statusText}`);
      const { files } = await response.json();
      console.log(`Fetched model files for ${id}:`, files);
      return files || [];
    } catch (err) {
      console.error('Failed to fetch model files:', err);
      setError(`Failed to fetch model files: ${err.message}`);
      return [];
    }
  };

  // Handle model generation or import
  const handleGenerate = async () => {
    if (!backendUp) {
      setError('Backend unavailable');
      return;
    }
    setIsProcessing(true);
    setError(null);
    setProcessingStep(0);

    try {
      // Prepare form data for upload
      const formData = new FormData();
      console.log('Preparing FormData:', { uploadType, modelName, processor });

      // Set processor based on upload type
      const currentProcessor = uploadType === 'import' ? 'import' : processor;

      if (uploadType === 'images') {
        if (selectedImages.length < 2) throw new Error('At least 2 images are required');
        if (!validProcessors.includes(processor)) throw new Error('Invalid processor selected');
        selectedImages.forEach(img => formData.append('images', img.file, img.name));
        formData.append('processor', processor);
      } else if (uploadType === 'import') {
        if (!selectedObjFiles.obj || !selectedObjFiles.obj.name) throw new Error('Please select a valid .obj file');
        formData.append('obj', selectedObjFiles.obj.file, selectedObjFiles.obj.name);
        if (selectedObjFiles.mtl) {
          formData.append('mtl', selectedObjFiles.mtl.file, selectedObjFiles.mtl.name);
        }
        formData.append('processor', 'import');
      }
      if (modelName.trim()) formData.append('modelName', modelName.trim());

      // Upload files to backend
      const response = await fetchWithRetry(`${BACKEND_URL}/api/upload`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error(`Upload failed: ${response.statusText}`);
      const { modelId } = await response.json();
      console.log('Model uploaded, ID:', modelId);

      // Poll status: single attempt for import, multiple for images
      const statusData = await pollStatus(modelId, uploadType === 'import' ? 1 : 600);
      if (statusData.status === 'failed') throw new Error(statusData.error || `Model ${uploadType} failed`);

      // Fetch model metadata
      const infoResponse = await fetchWithRetry(`${BACKEND_URL}/api/models/${modelId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!infoResponse.ok) throw new Error(`Failed to fetch model info: ${infoResponse.statusText}`);
      const infoJson = await infoResponse.json();

      // Fetch model files for all processors
      const files = await fetchModelFiles(modelId);
      const objFile = files.find(f => f.extension === 'obj');
      const mtlFile = files.find(f => f.extension === 'mtl');
      if (!objFile) throw new Error('No .obj file found in model files');

      // Determine model name: prioritize status.json name, then user input, then default
      const statusModelName = typeof statusData.name === 'string' && statusData.name.trim() ? statusData.name.trim() : null;
      const userModelName = modelName.trim();
      const cleanModelName = statusModelName || userModelName || 'Model';
      console.log(`Model name selection (${uploadType}):`, { statusModelName, userModelName, fallback: 'Model', selected: cleanModelName });

      // Set filenames and URL
      const objFilename = objFile.filename;
      const mtlFilename = mtlFile ? mtlFile.filename : null;
      const fileUrl = `/models/${currentProcessor}/${modelId}`;

      // Create model object
      const newModel = {
        id: modelId,
        name: cleanModelName,
        fileUrl,
        objFilename,
        mtlFilename,
        format: 'OBJ',
        files,
        thumbnail: uploadType === 'import'
          ? '/placeholder-3d.png'
          : (infoJson.images?.[0]?.filename
              ? `/uploads/${infoJson.images[0].filename}`
              : selectedImages[0]?.url || '/placeholder-3d.png'),
        createdAt: new Date(statusData.createdAt || Date.now()).toISOString(),
        imageCount: uploadType === 'import' ? 0 : selectedImages.length,
        objCount: mtlFilename ? 2 : 1,
        processor: currentProcessor,
        type: uploadType,
        objFiles: [
          { filename: objFilename },
          ...(mtlFilename ? [{ filename: mtlFilename }] : []),
        ],
        vertices: infoJson.vertices || 0,
        triangles: infoJson.triangles || 0,
        size: objFile.size || 0,
      };

      console.log(`New model data (${uploadType}):`, newModel);
      setGenerated3DModel(newModel);
      fetchModels();
      setIsProcessing(false);
    } catch (err) {
      console.error('Error in handleGenerate:', err);
      setError(err.message || 'Processing failed');
    } finally {
      setIsProcessing(false);
    }
  };

  // Clear all states for new model creation
  const clearAll = () => {
    setSelectedImages([]);
    setSelectedObjFiles({});
    setModelName('');
    setGenerated3DModel(null);
    setShowGenerateUI(false);
    setError(null);
    setIsProcessing(false);
    setProcessingStep(0);
    setActiveTab('generate');
  };

  // Handle new model button click
  const handleNewModel = () => clearAll();

  // Handle tab switching between generate and library
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'library') {
      fetchModels();
      setGenerated3DModel(null);
    } else if (tab === 'generate') {
      clearAll();
    }
  };

  // Render UI
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
      <nav className="bg-white rounded-xl shadow-lg p-2 mb-8 border">
        <div className="flex space-x-2">
          <button
            onClick={() => handleTabChange('generate')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === 'generate' ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Sparkles className="w-5 h-5 mr-2 inline" /> Generate
          </button>
          <button
            onClick={() => handleTabChange('library')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === 'library' ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Folder className="w-5 h-5 mr-2 inline" /> Library ({savedModels.length})
          </button>
        </div>
      </nav>

      {!backendUp && <Alert type="warning" message="Backend not available." />}
      {error && <Alert type="error" message={error} onClose={() => setError(null)} />}

      {activeTab === 'generate' && (
        <>
          {!showGenerateUI && !generated3DModel && (
            <ModelUpload
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
              selectedObjFiles={selectedObjFiles}
              setSelectedObjFiles={setSelectedObjFiles}
              uploadType={uploadType}
              setUploadType={setUploadType}
              error={error}
              setError={setError}
              onNext={handleNext}
            />
          )}
          {showGenerateUI && !generated3DModel && (
            <ModelGenerate
              selectedImages={selectedImages}
              selectedObjFiles={selectedObjFiles}
              uploadType={uploadType}
              modelName={modelName}
              setModelName={setModelName}
              processor={processor}
              setProcessor={setProcessor}
              isProcessing={isProcessing}
              processingStep={processingStep}
              processingSteps={processingSteps}
              handleGenerate={handleGenerate}
              backendUp={backendUp}
            />
          )}
          {generated3DModel && (
            <ModelResult
              generated3DModel={generated3DModel}
              onDownload={null}
              onNewModel={handleNewModel}
            />
          )}
        </>
      )}
      {activeTab === 'library' && (
        <ModelLibrary
          savedModels={savedModels}
          setSavedModels={setSavedModels}
          setActiveTab={setActiveTab}
          setError={setError}
          onRefresh={fetchModels}
        />
      )}
    </div>
  );
}