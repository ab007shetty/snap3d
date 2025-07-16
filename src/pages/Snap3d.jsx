import React, { useState, useEffect } from 'react';
import { Upload, Sparkles, Folder } from 'lucide-react';
import Alert from '../components/common/Alert';
import ModelUpload from '../components/ModelUpload';
import GenerateModel from '../components/GenerateModel';
import ModelLibrary from '../components/ModelLibrary';
import ModelResult from '../components/ModelResult';

export default function Snap3d() {
  const [uploadType, setUploadType] = useState('images');
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedObjFiles, setSelectedObjFiles] = useState([]);
  const [modelName, setModelName] = useState('');
  const [processor, setProcessor] = useState('meshroom');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [generated3DModel, setGenerated3DModel] = useState(null);
  const [savedModels, setSavedModels] = useState([]);
  const [backendUp, setBackendUp] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('generate');
  const [showGenerateUI, setShowGenerateUI] = useState(false);

  const processingSteps = [
    'Analyzing image quality...',
    'Detecting features...',
    'Computing depth maps...',
    'Reconstructing point cloud...',
    'Generating mesh...',
    'Applying textures...',
    'Optimizing model...',
    'Finalizing export...',
  ];

  // Function to fetch models from backend
  const fetchModels = async () => {
    if (!backendUp) return;
    
    try {
      const response = await fetch('http://localhost:3001/api/models');
      if (response.ok) {
        const models = await response.json();
        setSavedModels(models);
      }
    } catch (error) {
      console.error('Failed to fetch models:', error);
    }
  };

  useEffect(() => {
    fetch('http://localhost:3001/api/health')
      .then(res => (res.ok ? setBackendUp(true) : setBackendUp(false)))
      .catch(() => setBackendUp(false));
  }, []);

  // Initial fetch when backend comes up
  useEffect(() => {
    if (backendUp) {
      fetchModels();
    }
  }, [backendUp]);

  const handleNext = () => {
    const valid =
      (uploadType === 'images' && selectedImages.length >= 2) ||
      (uploadType === 'import' && selectedObjFiles.length > 0);
    if (!valid) {
      setError(uploadType === 'images' ? 'Upload at least 2 images' : 'Upload at least 1 OBJ file');
      return;
    }
    setShowGenerateUI(true);
  };

  const handleGenerate = async () => {
    if (!backendUp) return setError('Backend unavailable');

    setIsProcessing(true);
    setError(null);
    setProcessingStep(0);

    try {
      const formData = new FormData();
      selectedImages.forEach(img => formData.append('images', img.file));
      selectedObjFiles.forEach(obj => formData.append('objFiles', obj.file));
      if (modelName) formData.append('modelName', modelName);
      formData.append('processor', processor);

      const { modelId } = await (await fetch('http://localhost:3001/api/upload', { method: 'POST', body: formData })).json();

      let status = 'processing';
      let pollStep = 0;
      while (status === 'processing' || status === 'queued') {
        setProcessingStep(Math.min(pollStep, processingSteps.length - 1));
        await new Promise(r => setTimeout(r, 2000));
        const { status: newStatus, error: e } = await (await fetch(`http://localhost:3001/api/models/${modelId}/status`)).json();
        status = newStatus;
        if (e) throw new Error(e);
        pollStep++;
      }

      const infoJson = await (await fetch(`http://localhost:3001/api/models/${modelId}`)).json();
      const files = await fetchModelFiles(modelId);
      const file = files.find(f => ['obj', 'stl', 'ply'].includes(f.extension));
      const fileUrl = file ? `http://localhost:3001/models/import/${modelId}/${file.name}` : null;

      /* build final model object WITH stats */
      const newModel = {
        id: modelId,
        name: modelName || `Model_${Date.now()}`,
        fileUrl,
        format: file?.extension?.toUpperCase() || null,
        files,
        thumbnail: infoJson.images?.[0]?.filename
          ? `http://localhost:3001/uploads/${infoJson.images[0].filename}`
          : selectedImages[0]?.url || '/placeholder-3d.png',
        createdAt: new Date().toISOString(),
        imageCount: selectedImages.length,
        objCount: selectedObjFiles.length,
        processor: uploadType === 'images' ? processor : 'import',
        type: uploadType,
        /* new stats */
        vertices: infoJson.vertices || 0,
        triangles: infoJson.triangles || 0,
        sizeX: infoJson.sizeX || 0,
        sizeY: infoJson.sizeY || 0,
        sizeZ: infoJson.sizeZ || 0,
        size: file?.size || 0,
      };

      setGenerated3DModel(newModel);
      
      // Refresh library after successful generation
      fetchModels();
      
    } catch (err) {
      setError(err.message || 'Processing failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const fetchModelFiles = async id => {
    try {
      const { files } = await (await fetch(`http://localhost:3001/api/models/${id}/files`)).json();
      return files || [];
    } catch {
      return [];
    }
  };

  const clearAll = () => {
    setSelectedImages([]);
    setSelectedObjFiles([]);
    setModelName('');
    setGenerated3DModel(null);
    setShowGenerateUI(false);
    setError(null);
    setIsProcessing(false);
    setProcessingStep(0);
    setActiveTab('generate');
  };

  const handleNewModel = () => clearAll();
  
  const handleDownloadModel = () => {
    if (generated3DModel?.fileUrl) {
      const a = document.createElement('a');
      a.href = generated3DModel.fileUrl;
      a.download = `${generated3DModel.name}.${generated3DModel.format?.toLowerCase()}`;
      a.click();
    }
  };

  // Updated tab change handler that fetches models when switching to library
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    if (tab === 'library') {
      // Refresh library when switching to library tab
      fetchModels();
      setGenerated3DModel(null);
    } else if (tab === 'generate') {
      clearAll();
    }
  };

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
            <GenerateModel
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
            />
          )}
          {generated3DModel && (
            <ModelResult
              generated3DModel={generated3DModel}
              onDownload={handleDownloadModel}
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
          onRefresh={fetchModels} // Pass refresh function to library
        />
      )}
    </div>
  );
}