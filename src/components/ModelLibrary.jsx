import React, { useState } from 'react';
import {
  Folder, Download, Eye, Trash2, Search, Grid3x3, X
} from 'lucide-react';
import ModelResult from './ModelResult';
import EnhancedModelPreviewModal from './ModelPreview';

export default function ModelLibrary({ savedModels, setSavedModels }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedModels, setSelectedModels] = useState([]);
  const [previewModel, setPreviewModel] = useState(null);
  const [showFullPreview, setShowFullPreview] = useState(false);

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

  const filtered = savedModels
    .filter(m =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterBy === 'all' || m.processor === filterBy)
    )
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === 'oldest') return new Date(a.createdAt) - new Date(b.createdAt);
      return a.name.localeCompare(b.name);
    });

  // Get processor badge color
  const getProcessorBadgeColor = (processor) => {
    switch (processor) {
      case 'meshroom':
        return 'bg-blue-100 text-blue-800';
      case 'open3d':
        return 'bg-green-100 text-green-800';
      case 'import':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Download function with proper filename
  const download = (model) => {
    const fileUrl = getModelFileUrl(model);
    if (!fileUrl) {
      console.error('No file URL available for model:', model);
      return;
    }
    
    // Get the actual filename for download
    let downloadFileName = null;
    if (model.objFiles && model.objFiles.length > 0) {
      downloadFileName = model.objFiles[0].filename;
    } else if (model.processor === "open3d" || model.processor === "meshroom") {
      downloadFileName = "texturedMesh.obj";
    } else {
      downloadFileName = model.fileName || `${model.name}.obj`;
    }
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const deleteModels = async (ids) => {
    try {
      for (const id of ids) {
        await fetch(`http://localhost:3001/api/models/${id}`, { method: 'DELETE' });
      }
      setSavedModels(prev => prev.filter(m => !ids.includes(m.id)));
      setSelectedModels([]);
    } catch (error) {
      console.error('Error deleting models:', error);
    }
  };

  const toggleSelect = id =>
    setSelectedModels(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );

  // Select all function
  const selectAll = () => {
    if (selectedModels.length === filtered.length) {
      // If all are selected, deselect all
      setSelectedModels([]);
    } else {
      // Select all filtered models
      setSelectedModels(filtered.map(m => m.id));
    }
  };

  // Preview function with proper filename handling
  const handlePreview = (model) => {
    const fileUrl = getModelFileUrl(model);
    if (!fileUrl) {
      console.error('Cannot generate preview URL for model:', model);
      return;
    }
    
    // Get the actual filename
    let actualFileName = null;
    if (model.objFiles && model.objFiles.length > 0) {
      actualFileName = model.objFiles[0].filename;
    } else if (model.processor === "open3d" || model.processor === "meshroom") {
      actualFileName = "texturedMesh.obj";
    } else {
      actualFileName = model.fileName || `${model.name}.obj`;
    }
    
    const previewModelData = {
      ...model,
      fileUrl: fileUrl,
      // Ensure all required fields are present with correct filename
      name: model.name || 'Untitled Model',
      fileName: actualFileName,
      id: model.id
    };
    
    console.log('Preview model data:', previewModelData); // Debug log
    console.log('Generated URL:', fileUrl); // Debug log
    setPreviewModel(previewModelData);
    setShowFullPreview(true);
  };

  return (
    <div className="w-full max-w-none mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
        {/* Header */}
        <div className="border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Model Library
              </h1>
              <p className="text-gray-600">
                Browse, preview and manage your saved 3D models
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Library View</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="px-8 pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search models..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                className="px-4 py-3 border rounded-lg focus:ring-indigo-500"
                value={filterBy}
                onChange={e => setFilterBy(e.target.value)}
              >
                <option value="all">All Processors</option>
                <option value="meshroom">Meshroom</option>
                <option value="open3d">Open3D</option>
                <option value="import">Import</option>
              </select>
              <select
                className="px-4 py-3 border rounded-lg focus:ring-indigo-500"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Select All and Bulk Actions - Only show when models are selected */}
          {selectedModels.length > 0 && (
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={selectAll}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                >
                  <input
                    type="checkbox"
                    checked={selectedModels.length === filtered.length && filtered.length > 0}
                    onChange={selectAll}
                    className="w-4 h-4"
                  />
                  <span>Select All ({filtered.length})</span>
                </button>
                
                <span className="text-sm text-gray-600">
                  {selectedModels.length} of {filtered.length} selected
                </span>
              </div>

              <button
                onClick={() => deleteModels(selectedModels)}
                className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete Selected ({selectedModels.length})</span>
              </button>
            </div>
          )}

          {/* Grid Cards */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <Folder className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                {searchTerm || filterBy !== 'all' ? 'No models match your search' : 'No models found'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
              {filtered.map(m => (
                <div
                  key={m.id}
                  className={`rounded-xl p-4 border transition-all ${
                    selectedModels.includes(m.id)
                      ? 'bg-blue-50 border-blue-300 shadow-md'
                      : 'bg-gray-50 border-gray-200 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedModels.includes(m.id)}
                        onChange={() => toggleSelect(m.id)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <h3 className="font-semibold truncate text-gray-900">{m.name}</h3>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded font-medium ${getProcessorBadgeColor(m.processor)}`}>
                      {m.processor}
                    </span>
                  </div>
                  
                  <div className="text-gray-500 text-xs mb-4">
                    Created: {new Date(m.createdAt).toLocaleDateString()}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => download(m)}
                      className="flex-1 flex items-center justify-center space-x-1 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    <button
                      onClick={() => handlePreview(m)}
                      className="flex-1 flex items-center justify-center space-x-1 bg-gray-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Preview</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Full Preview Modal */}
      {showFullPreview && previewModel && (
        <EnhancedModelPreviewModal
          model={previewModel}
          onClose={() => {
            setShowFullPreview(false);
            setPreviewModel(null);
          }}
        />
      )}
    </div>
  );
}