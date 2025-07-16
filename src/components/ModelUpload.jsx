import React from 'react';
import { Upload, Image, Box, Trash2, Plus, CheckCircle } from 'lucide-react';

export default function ModelUpload({
  selectedImages,
  setSelectedImages,
  selectedObjFiles,
  setSelectedObjFiles,
  uploadType,
  setUploadType,
  error,
  setError,
  onNext
}) {
  const fileInputRef = React.useRef(null);

  const handleSelect = (e) => {
    const files = Array.from(e.target.files);

    if (uploadType === 'images') {
      const imageFiles = files.filter(f => f.type.startsWith('image/'));
      const imgs = imageFiles.map(f => ({
        file: f,
        url: URL.createObjectURL(f),
        name: f.name,
        size: f.size,
      }));
      setSelectedImages(prev => [...prev, ...imgs]);
    } else {
      const objFiles = files.filter(f => f.name.toLowerCase().endsWith('.obj'));
      const objs = objFiles.map(f => ({
        file: f,
        name: f.name,
        size: f.size,
      }));
      setSelectedObjFiles(prev => [...prev, ...objs]);
    }

    setError(null);
  };

  const removeItem = (index, type) => {
    if (type === 'images') {
      setSelectedImages(prev => prev.filter((_, i) => i !== index));
    } else {
      setSelectedObjFiles(prev => prev.filter((_, i) => i !== index));
    }
  };

  const ready =
    (uploadType === 'images' && selectedImages.length >= 2) ||
    (uploadType === 'import' && selectedObjFiles.length >= 1);

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="w-full max-w-none mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Create New 3D Model
              </h1>
              <p className="text-gray-600">
                Upload images or import existing 3D models to get started
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Step 1 of 2</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Upload Toggle */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Choose Input Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setUploadType('images')}
                className={`p-6 rounded-xl border-2 ${uploadType === 'images' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${uploadType === 'images' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                    <Image className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">From Images</h4>
                    <p className="text-sm text-gray-600">Generate 3D model from photos</p>
                  </div>
                </div>
              </button>
              <button
                onClick={() => setUploadType('import')}
                className={`p-6 rounded-xl border-2 ${uploadType === 'import' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${uploadType === 'import' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                    <Box className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">Import OBJ</h4>
                    <p className="text-sm text-gray-600">Use existing 3D model files</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* File Dropzone */}
          <label onClick={() => fileInputRef.current?.click()} className="block mb-8 cursor-pointer">
            <div className="border-2 border-dashed border-gray-300 p-12 rounded-2xl text-center hover:border-blue-500 hover:bg-blue-50">
              <Upload className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <p className="text-lg font-semibold">
                {uploadType === 'images' ? 'Upload Images' : 'Upload OBJ Files'}
              </p>
              <p className="text-gray-600">
                {uploadType === 'images' ? 'Minimum 2 images required' : 'Single OBJ required'}
              </p>
            </div>
          </label>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={uploadType === 'images' ? 'image/*' : '.obj'}
            onChange={handleSelect}
            className="hidden"
          />

          {/* File Preview */}
          {uploadType === 'images' && selectedImages.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {selectedImages.map((img, i) => (
                <div key={i} className="relative group">
                  <img src={img.url} className="rounded-lg object-cover aspect-square" />
                  <button onClick={() => removeItem(i, 'images')} className="absolute top-2 right-2 bg-red-600 p-1 rounded-full text-white">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="text-sm mt-1 text-gray-700 truncate">{img.name}</div>
                </div>
              ))}
            </div>
          )}

          {uploadType === 'import' && selectedObjFiles.length > 0 && (
            <div className="space-y-3 mb-8">
              {selectedObjFiles.map((file, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-sm">{file.name}</span>
                  <button onClick={() => removeItem(i, 'import')} className="text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="border-t pt-6 mt-4 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              {ready ? (
                <div className="text-green-600 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Ready to continue
                </div>
              ) : (
                uploadType === 'images'
                  ? `${selectedImages.length}/2 images required`
                  : `${selectedObjFiles.length}/1 OBJ required`
              )}
            </div>
            <button
              onClick={onNext}
              disabled={!ready}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                ready ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue to Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
