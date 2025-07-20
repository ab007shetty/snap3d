import React, { useEffect, useState } from 'react';
import { Loader2, CheckCircle, Zap, Cpu } from 'lucide-react';

export default function ModelGenerate({
  uploadType,
  selectedImages,
  selectedObjFiles,
  modelName,
  setModelName,
  processor,
  setProcessor,
  isProcessing,
  processingStep,
  processingSteps,
  handleGenerate,
  backendUp,
}) {
  // State for model name validation
  const [modelNameError, setModelNameError] = useState(false);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Validate model name on change
  const handleModelNameChange = (e) => {
    const value = e.target.value;
    setModelName(value);
    setModelNameError(!value.trim()); // Set error if empty or whitespace
  };

  // Validate model name on blur
  const handleModelNameBlur = () => {
    setModelNameError(!modelName.trim()); // Set error if empty or whitespace
  };

  return (
    <div className="w-full max-w-none mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
        {/* Header section */}
        <div className="border-b px-8 py-6 border-gray-200">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Generate 3D Model</h1>
          <p className="text-gray-600">
            {uploadType === 'images'
              ? `${selectedImages.length} images selected`
              : `${Object.keys(selectedObjFiles).length} OBJ file(s) selected`}
          </p>
        </div>

        {/* Main content */}
        <div className="p-8 space-y-6">
          {/* Model name input */}
          <div>
            <label className="block mb-2 font-semibold">Model Name <span className="text-red-500">*</span></label>
            <input
              value={modelName}
              onChange={handleModelNameChange}
              onBlur={handleModelNameBlur}
              placeholder="Enter model name..."
              className={`w-full px-4 py-3 border rounded-lg ${
                modelNameError ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {modelNameError && (
              <p className="text-red-500 text-sm mt-1">Model name is required</p>
            )}
          </div>

          {/* Processor selection for images */}
          {uploadType === 'images' && (
            <div>
              <label className="block mb-2 font-semibold">Select Processor</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['meshroom', 'open3d'].map((p) => (
                  <button
                    key={p}
                    onClick={() => setProcessor(p)}
                    className={`p-4 border-2 rounded-xl ${
                      processor === p ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          processor === p ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {p === 'meshroom' ? <Cpu className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="font-semibold capitalize">{p}</div>
                        <div className="text-xs text-gray-500">
                          {p === 'meshroom' ? 'Photogrammetry based' : 'Point cloud based'}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Processing or action section */}
          {isProcessing ? (
            <div className="space-y-2">
              <div className="text-gray-800 font-semibold">Processing...</div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-300"
                  style={{ width: `${((processingStep + 1) / processingSteps.length) * 100}%` }}
                />
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                {processingSteps[processingStep]}
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center pt-4 border-t">
              <div className="text-green-600 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Ready to {uploadType === 'images' ? 'Generate' : 'Import'}
              </div>
              <button
                onClick={handleGenerate}
                disabled={!backendUp || isProcessing || !modelName.trim() || modelNameError}
                className={`px-6 py-3 rounded-lg font-medium shadow transition ${
                  !backendUp || isProcessing || !modelName.trim() || modelNameError
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {uploadType === 'images' ? 'Generate Model' : 'Import Model'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}