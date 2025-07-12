import React, { useState, useRef, useCallback } from 'react';
import {Link} from 'react-router-dom';
import { Camera, Upload, Download, Zap, Sparkles, Star, Play, ArrowRight, Check, X, AlertCircle, Eye, RotateCcw, Maximize2, FileText, Folder, Save, Import } from 'lucide-react';

export default function Snap3DRealApp() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [generated3DModel, setGenerated3DModel] = useState(null);
  const [savedModels, setSavedModels] = useState([]);
  const [activeTab, setActiveTab] = useState('create'); // 'create' or 'models'
  const [error, setError] = useState(null);
  const [cameraStream, setCameraStream] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImages, setCapturedImages] = useState([]);
  const [modelName, setModelName] = useState('');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const modelInputRef = useRef(null);

  const processingSteps = [
    "Analyzing image quality and content...",
    "Detecting architectural features...",
    "Computing depth maps from images...",
    "Reconstructing 3D point cloud...",
    "Generating mesh geometry...",
    "Applying textures and materials...",
    "Optimizing 3D model...",
    "Finalizing export formats..."
  ];

  const handleImageUpload = useCallback((event) => {
    const files = Array.from(event.target.files);
    
    const validFiles = files.filter(file => {
      const isImage = file.type.startsWith('image/');
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit
      return isImage && isValidSize;
    });

    if (validFiles.length !== files.length) {
      setError('Some files were skipped. Please ensure all files are images under 10MB.');
    }

    const imagePromises = validFiles.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            resolve({
              file,
              url: e.target.result,
              width: img.width,
              height: img.height,
              name: file.name
            });
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then(imageData => {
      setSelectedImages(prev => [...prev, ...imageData]);
      setError(null);
    });
  }, []);

  const handleModelImport = useCallback((event) => {
    const files = Array.from(event.target.files);
    
    // For now, we'll simulate importing model files
    // In the future, this would integrate with actual model file formats
    files.forEach(file => {
      if (file.name.includes('.obj') || file.name.includes('.stl') || file.name.includes('.ply')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const importedModel = {
            id: Date.now() + Math.random(),
            name: file.name.replace(/\.[^/.]+$/, ""),
            vertices: Math.floor(Math.random() * 50000) + 10000,
            faces: Math.floor(Math.random() * 30000) + 5000,
            textures: Math.floor(Math.random() * 5) + 1,
            formats: ['OBJ', 'STL', 'PLY'],
            size: (file.size / (1024 * 1024)).toFixed(1) + 'MB',
            preview: null, // Would be generated from model
            quality: Math.floor(Math.random() * 20) + 80,
            dateCreated: new Date().toLocaleDateString(),
            type: 'imported'
          };
          
          setSavedModels(prev => [importedModel, ...prev]);
        };
        reader.readAsDataURL(file);
      }
    });
    
    setError(null);
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 1920 },
          height: { ideal: 1080 },
          facingMode: 'environment' 
        } 
      });
      setCameraStream(stream);
      setShowCamera(true);
      
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 100);
    } catch (error) {
      setError('Camera access denied. Please allow camera permissions and try again.');
    }
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
    setShowCamera(false);
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0);
      
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const imageData = {
          file: blob,
          url,
          width: canvas.width,
          height: canvas.height,
          name: `capture_${Date.now()}.jpg`
        };
        
        setCapturedImages(prev => [...prev, imageData]);
        setSelectedImages(prev => [...prev, imageData]);
      }, 'image/jpeg', 0.9);
    }
  };

  const removeImage = (index) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const processImages = async () => {
    if (selectedImages.length < 2) {
      setError('Please upload at least 2 images from different angles for better 3D reconstruction.');
      return;
    }

    setIsProcessing(true);
    setError(null);
    setProcessingStep(0);

    try {
      for (let i = 0; i < processingSteps.length; i++) {
        setProcessingStep(i);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      const mockModel = {
        id: Date.now(),
        name: modelName || `House_3D_Model_${Date.now()}`,
        vertices: Math.floor(Math.random() * 50000) + 10000,
        faces: Math.floor(Math.random() * 30000) + 5000,
        textures: selectedImages.length,
        formats: ['OBJ', 'STL', 'PLY', 'GLTF', 'FBX'],
        size: (Math.random() * 15 + 5).toFixed(1) + 'MB',
        preview: selectedImages[0].url,
        quality: Math.floor(Math.random() * 20) + 80,
        processingTime: Math.floor(Math.random() * 120) + 30,
        dateCreated: new Date().toLocaleDateString(),
        sourceImages: selectedImages.length,
        type: 'generated'
      };

      setGenerated3DModel(mockModel);
      setIsProcessing(false);
      
    } catch (error) {
      setError('Processing failed. Please try again with different images.');
      setIsProcessing(false);
    }
  };

  const saveModel = () => {
    if (generated3DModel) {
      setSavedModels(prev => [generated3DModel, ...prev]);
      setError(null);
      // Show success message briefly
      setTimeout(() => setError(null), 3000);
    }
  };

  const deleteModel = (modelId) => {
    setSavedModels(prev => prev.filter(model => model.id !== modelId));
  };

  const downloadModel = (format, model = generated3DModel) => {
    if (model) {
      const link = document.createElement('a');
      link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(
        `# ${model.name} - ${format} format\n` +
        `# Generated by Snap3D\n` +
        `# Vertices: ${model.vertices}\n` +
        `# Faces: ${model.faces}\n` +
        `# Date: ${model.dateCreated}\n` +
        `# This is a demonstration file.`
      );
      link.download = `${model.name}.${format.toLowerCase()}`;
      link.click();
    }
  };

  const reset = () => {
    setSelectedImages([]);
    setCapturedImages([]);
    setGenerated3DModel(null);
    setError(null);
    setIsProcessing(false);
    setProcessingStep(0);
    setModelName('');
    stopCamera();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
<Link to="/" className="flex items-center space-x-3 group">
  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
    <Sparkles className="w-6 h-6 text-white" />
  </div>
  <span className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
    Snap 3D
  </span>
</Link>
            </div>
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('create')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'create'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Create Model
              </button>
              <button
                onClick={() => setActiveTab('models')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'models'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                My Models ({savedModels.length})
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <p className="text-red-700">{error}</p>
            <button
              onClick={() => setError(null)}
              className="ml-auto text-red-500 hover:text-red-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Create Model Tab */}
        {activeTab === 'create' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New 3D Model</h2>
                
                {/* Model Name Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Model Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={modelName}
                    onChange={(e) => setModelName(e.target.value)}
                    placeholder="Enter model name..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                
                {/* Upload Area */}
                <div className="border-2 border-dashed border-indigo-300 rounded-xl p-8 text-center hover:border-indigo-400 transition-colors mb-6">
                  <Upload className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Drop images here or click to upload</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Upload multiple images from different angles for best results
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Choose Images
                  </button>
                </div>

                {/* Camera Section */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Camera Capture</h3>
                    {showCamera ? (
                      <button
                        onClick={stopCamera}
                        className="text-red-600 hover:text-red-700 text-sm"
                      >
                        Stop Camera
                      </button>
                    ) : (
                      <button
                        onClick={startCamera}
                        className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        <Camera className="w-4 h-4" />
                        <span>Start Camera</span>
                      </button>
                    )}
                  </div>

                  {showCamera && (
                    <div className="space-y-4">
                      <div className="relative bg-black rounded-lg overflow-hidden">
                        <video
                          ref={videoRef}
                          autoPlay
                          playsInline
                          className="w-full h-64 object-cover"
                        />
                        <button
                          onClick={captureImage}
                          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          Capture
                        </button>
                      </div>
                      <canvas ref={canvasRef} className="hidden" />
                    </div>
                  )}
                </div>
              </div>

              {/* Selected Images */}
              {selectedImages.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Selected Images ({selectedImages.length})
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {selectedImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image.url}
                          alt={`Selected ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                          {image.width}x{image.height}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Processing/Results Section */}
            <div className="space-y-6">
              {/* Processing Status */}
              {isProcessing && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Processing 3D Model</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-gray-700">{processingSteps[processingStep]}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((processingStep + 1) / processingSteps.length) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500">
                      Step {processingStep + 1} of {processingSteps.length}
                    </p>
                  </div>
                </div>
              )}

              {/* 3D Model Result */}
              {generated3DModel && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Generated 3D Model</h3>
                    <button
                      onClick={saveModel}
                      className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Model</span>
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src={generated3DModel.preview}
                        alt="3D Model Preview"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                        <div className="text-white text-center">
                          <Maximize2 className="w-8 h-8 mx-auto mb-2" />
                          <p className="text-sm">3D Model Preview</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-500">Vertices</p>
                        <p className="font-semibold text-gray-900">{generated3DModel.vertices.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-500">Faces</p>
                        <p className="font-semibold text-gray-900">{generated3DModel.faces.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-500">Quality</p>
                        <p className="font-semibold text-gray-900">{generated3DModel.quality}%</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-500">File Size</p>
                        <p className="font-semibold text-gray-900">{generated3DModel.size}</p>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Download Formats</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {generated3DModel.formats.map((format) => (
                          <button
                            key={format}
                            onClick={() => downloadModel(format)}
                            className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                          >
                            <Download className="w-4 h-4" />
                            <span>{format}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Generate Button */}
              {!isProcessing && !generated3DModel && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Generate 3D Model</h3>
                    <button
                      onClick={reset}
                      className="flex items-center space-x-2 px-3 py-1 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset</span>
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Upload at least 2 images from different angles to start the 3D reconstruction process.
                  </p>
                  <button
                    onClick={processImages}
                    disabled={selectedImages.length < 2}
                    className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <Zap className="w-5 h-5" />
                    <span>Generate 3D Model</span>
                  </button>
                  {selectedImages.length > 0 && selectedImages.length < 2 && (
                    <p className="text-sm text-gray-500 mt-2">
                      Add {2 - selectedImages.length} more image(s) to proceed
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* My Models Tab */}
        {activeTab === 'models' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">My 3D Models</h2>
                <div className="flex space-x-3">
                  <input
                    ref={modelInputRef}
                    type="file"
                    multiple
                    accept=".obj,.stl,.ply,.gltf,.fbx"
                    onChange={handleModelImport}
                    className="hidden"
                  />
                  <button
                    onClick={() => modelInputRef.current?.click()}
                    className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Import className="w-4 h-4" />
                    <span>Import Model</span>
                  </button>
                </div>
              </div>

              {savedModels.length === 0 ? (
                <div className="text-center py-12">
                  <Folder className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No models yet</h3>
                  <p className="text-gray-600 mb-4">Create your first 3D model or import existing ones</p>
                  <button
                    onClick={() => setActiveTab('create')}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Create New Model
                  </button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedModels.map((model) => (
                    <div key={model.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900 truncate">{model.name}</h3>
                        <button
                          onClick={() => deleteModel(model.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      
                      {model.preview && (
                        <div className="relative mb-4">
                          <img
                            src={model.preview}
                            alt="Model preview"
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                            <Maximize2 className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                        <div>
                          <p className="text-gray-500">Vertices</p>
                          <p className="font-semibold text-gray-900">{model.vertices.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Quality</p>
                          <p className="font-semibold text-gray-900">{model.quality}%</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Size</p>
                          <p className="font-semibold text-gray-900">{model.size}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Date</p>
                          <p className="font-semibold text-gray-900">{model.dateCreated}</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button
                          onClick={() => downloadModel('OBJ', model)}
                          className="flex-1 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm flex items-center justify-center space-x-1"
                        >
                          <Download className="w-3 h-3" />
                          <span>Download</span>
                        </button>
                        <button className="flex-1 bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm flex items-center justify-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>View</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
  </div>
        </div>
  )};