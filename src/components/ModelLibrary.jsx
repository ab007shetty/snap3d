import React, { useState } from 'react';
import {
  Folder, Download, Eye, Trash2, Search, Grid3x3, X, Archive
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
  const [downloadingModels, setDownloadingModels] = useState(new Set());

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

  // Download single model as ZIP
  const downloadModel = async (model) => {
    try {
      const modelId = model.id;
      setDownloadingModels(prev => new Set([...prev, modelId]));
      
      console.log('Attempting download for model ID:', modelId, 'Model data:', model);
      
      const response = await fetch(`http://localhost:3001/api/models/${modelId}/download-all`, {
        method: 'GET',
        headers: {
          'Accept': 'application/zip',
        },
      });
      
      if (!response.ok) {
        throw new Error(`Download failed: ${response.status} ${response.statusText}`);
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${model.name || modelId}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      console.log('Download completed for model:', modelId);
    } catch (err) {
      console.error('Download error:', err);
      alert(`Failed to download the model: ${err.message}`);
    } finally {
      setDownloadingModels(prev => {
        const newSet = new Set(prev);
        newSet.delete(model.id);
        return newSet;
      });
    }
  };

  // Download multiple models as individual ZIPs
  const downloadSelectedModels = async () => {
    const modelsToDownload = filtered.filter(m => selectedModels.includes(m.id));
    
    if (modelsToDownload.length === 0) {
      alert('No models selected for download');
      return;
    }

    if (modelsToDownload.length === 1) {
      await downloadModel(modelsToDownload[0]);
      return;
    }

    // Download multiple models sequentially to avoid overwhelming the server
    for (const model of modelsToDownload) {
      await downloadModel(model);
      // Small delay between downloads
      await new Promise(resolve => setTimeout(resolve, 500));
    }
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
      alert('Failed to delete some models. Please try again.');
    }
  };

  const toggleSelect = id =>
    setSelectedModels(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );

  // Select all function
  const selectAll = () => {
    if (selectedModels.length === filtered.length) {
      setSelectedModels([]);
    } else {
      setSelectedModels(filtered.map(m => m.id));
    }
  };

  // Preview function with proper filename handling
  const handlePreview = (model) => {
    const baseUrl = getModelBaseUrl(model);
    if (!baseUrl) {
      console.error('Cannot generate base URL for model:', model);
      return;
    }

    const { objFilename, mtlFilename } = getModelFileDetails(model);

    const previewModelData = {
      ...model,
      fileUrl: baseUrl,
      objFilename,
      mtlFilename,
      name: model.name || 'Untitled Model',
      id: model.id,
      processor: model.processor || 'import'
    };

    console.log('Preview model data:', previewModelData);
    console.log('OBJ URL:', `${baseUrl}/${objFilename}`);
    console.log('MTL URL:', `${baseUrl}/${mtlFilename}`);
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

          {/* Select All and Bulk Actions */}
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

              <div className="flex items-center space-x-2">
                <button
                  onClick={downloadSelectedModels}
                  disabled={selectedModels.length === 0}
                  className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Archive className="w-4 h-4" />
                  <span>Download Selected ({selectedModels.length})</span>
                </button>
                
                <button
                  onClick={() => deleteModels(selectedModels)}
                  className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete Selected ({selectedModels.length})</span>
                </button>
              </div>
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
                      onClick={() => downloadModel(m)}
                      disabled={downloadingModels.has(m.id)}
                      className="flex-1 flex items-center justify-center space-x-1 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {downloadingModels.has(m.id) ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Downloading...</span>
                        </>
                      ) : (
                        <>
                          <Archive className="w-4 h-4" />
                          <span>Download ZIP</span>
                        </>
                      )}
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