import React, { useState, useEffect } from 'react';
import { Upload, Sparkles, Folder } from 'lucide-react';
import Alert from '../components/common/Alert';
import ModelUpload from '../components/ModelUpload';
import ModelGenerate from '../components/ModelGenerate';
import ModelLibrary from '../components/ModelLibrary';
import ModelResult from '../components/ModelResult';

export default function Snap3d() {
  const [uploadType, setUploadType] = useState('images');
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedObjFiles, setSelectedObjFiles] = useState({});
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
    'Finalizing export...'
  ];

  const fetchModels = async () => {
    if (!backendUp) return;
    try {
      const response = await fetch('http://localhost:3001/api/models');
      if (response.ok) {
        const models = await response.json();
        setSavedModels(models);
        console.log('Fetched models:', models);
      } else {
        console.error('Failed to fetch models, status:', response.status);
      }
    } catch (error) {
      console.error('Failed to fetch models:', error);
    }
  };

  useEffect(() => {
    fetch('http://localhost:3001/api/health')
      .then(res => {
        setBackendUp(res.ok);
        console.log('Backend health check:', res.ok ? 'Up' : 'Down');
      })
      .catch(() => {
        setBackendUp(false);
        console.log('Backend health check failed');
      });
  }, []);

  useEffect(() => {
    if (backendUp) fetchModels();
  }, [backendUp]);

  const handleNext = () => {
    const valid =
      (uploadType === 'images' && selectedImages.length >= 2) ||
      (uploadType === 'import' && selectedObjFiles.obj);
    if (!valid) {
      setError(
        uploadType === 'images'
          ? 'Upload at least 2 images'
          : 'Upload at least one .obj file (MTL is optional)'
      );
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
      console.log('Preparing FormData:', { uploadType, modelName, processor, selectedImagesLength: selectedImages.length, selectedObjFiles });
      if (uploadType === 'images') {
        if (selectedImages.length < 2) throw new Error('At least 2 images are required');
        selectedImages.forEach((img, index) => {
          formData.append(`images[${index}]`, img.file, img.name);
        });
        formData.append('processor', processor);
      } else {
        if (!selectedObjFiles.obj) throw new Error('Please select an .obj file');
        formData.append('obj', selectedObjFiles.obj.file, selectedObjFiles.obj.name);
        if (selectedObjFiles.mtl) {
          formData.append('mtl', selectedObjFiles.mtl.file, selectedObjFiles.mtl.name);
        }
        formData.append('processor', 'import');
      }
      if (modelName.trim()) formData.append('modelName', modelName.trim());

      const formDataEntries = {};
      formData.forEach((value, key) => {
        formDataEntries[key] = value instanceof File ? value.name : value;
      });
      console.log('FormData sent:', formDataEntries);

      const response = await fetch('http://localhost:3001/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Upload failed: ${response.status} - ${errorText}`);
      }
      const { modelId } = await response.json();
      console.log('Model uploaded, ID:', modelId);

      let status = 'processing';
      let pollStep = 0;
      if (uploadType === 'images') {
        while (status === 'processing' || status === 'queued') {
          setProcessingStep(Math.min(pollStep, processingSteps.length - 1));
          await new Promise(r => setTimeout(r, 2000));
          const statusResponse = await fetch(`http://localhost:3001/api/models/${modelId}/status`);
          if (!statusResponse.ok) throw new Error(`Status check failed: ${statusResponse.statusText}`);
          const { status: newStatus, error: e } = await statusResponse.json();
          status = newStatus;
          if (e) throw new Error(e);
          pollStep++;
        }
      } else {
        status = 'completed';
      }

      const infoResponse = await fetch(`http://localhost:3001/api/models/${modelId}`);
      if (!infoResponse.ok) throw new Error(`Failed to fetch model info: ${infoResponse.statusText}`);
      const infoJson = await infoResponse.json();
      const files = await fetchModelFiles(modelId);
      const file = files.find(f => ['obj', 'stl', 'ply'].includes(f.extension));

      let cleanModelName = modelName.trim() || selectedObjFiles.obj?.name.replace(/\.obj$/i, '') || `Model_${Date.now()}`;
      if (infoJson.name) {
        cleanModelName = infoJson.name.replace(/^\d+-[0-9a-f-]+/i, '').replace(/\.obj$/i, '') || infoJson.name;
      }
      const objFilename = `${cleanModelName}.obj`;
      const mtlFilename = selectedObjFiles.mtl ? `${cleanModelName}.mtl` : null;

      const fileUrl = `http://localhost:3001/models/${infoJson.processor}/${modelId}`; // Force fileUrl even if files is empty

      const newModel = {
        id: modelId,
        name: cleanModelName,
        fileUrl,
        objFilename,
        mtlFilename,
        format: file?.extension?.toUpperCase() || 'OBJ',
        files,
        thumbnail: uploadType === 'images'
          ? infoJson.images?.[0]?.filename
            ? `http://localhost:3001/uploads/${infoJson.images[0].filename}`
            : selectedImages[0]?.url || '/placeholder-3d.png'
          : '/placeholder-3d.png',
        createdAt: new Date().toISOString(),
        imageCount: infoJson.images?.length || selectedImages.length,
        objCount: uploadType === 'import' ? (selectedObjFiles.mtl ? 2 : 1) : 0,
        processor: infoJson.processor,
        type: uploadType,
        objFiles: infoJson.objFiles || (uploadType === 'import' ? [
          { filename: objFilename },
          ...(selectedObjFiles.mtl ? [{ filename: mtlFilename }] : [])
        ] : []),
        vertices: infoJson.vertices || 0,
        triangles: infoJson.triangles || 0,
        sizeX: infoJson.sizeX || 0,
        sizeY: infoJson.sizeY || 0,
        sizeZ: infoJson.sizeZ || 0,
        size: file?.size || 0,
      };

      console.log('New model data:', newModel);
      setGenerated3DModel(newModel);
      fetchModels();
    } catch (err) {
      console.error('Error in handleGenerate:', err);
      setError(err.message || 'Processing failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const fetchModelFiles = async id => {
    try {
      const response = await fetch(`http://localhost:3001/api/models/${id}/files`);
      if (!response.ok) throw new Error(`Failed to fetch model files: ${response.statusText}`);
      const { files } = await response.json();
      return files || [];
    } catch (err) {
      console.error('Failed to fetch model files:', err);
      return [];
    }
  };

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

  const handleNewModel = () => clearAll();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'library') {
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