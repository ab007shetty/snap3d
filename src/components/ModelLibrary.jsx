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

  const getModelBaseUrl = (model) => {
    if (!model || !model.id || !model.processor) return null;
    return `/models/${model.processor}/${model.id}`; // Relative path for proxy
  };

  const getModelFileDetails = (model) => {
    let objFilename = null;
    let mtlFilename = null;

    if (model.objFiles && Array.isArray(model.objFiles) && model.objFiles.length > 0) {
      objFilename = model.objFiles.find(f => f.filename?.endsWith('.obj'))?.filename;
      mtlFilename = model.objFiles.find(f => f.filename?.endsWith('.mtl'))?.filename;
    }

    if (!objFilename) {
      objFilename = `${model.name || 'Model'}.obj`; // Use model.name without timestamp
    }
    if (!mtlFilename) {
      mtlFilename = `${model.name || 'Model'}.mtl`; // Use model.name without timestamp
    }

    return { objFilename, mtlFilename };
  };

  const filtered = (savedModels || [])
    .filter(m => {
      const name = m.name || '';
      const processor = m.processor || '';
      return name.toLowerCase().includes(searchTerm.toLowerCase()) &&
             (filterBy === 'all' || processor === filterBy);
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
      if (sortBy === 'oldest') return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
      return (a.name || '').localeCompare(b.name || '');
    });

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

  const downloadModel = async (model) => {
    try {
      const modelId = model.id;
      setDownloadingModels(prev => new Set([...prev, modelId]));
      
      console.log('Attempting download for model ID:', modelId, 'Model data:', model);
      
      const response = await fetch(`/api/models/${modelId}/download-all`, {
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

  const downloadSelectedModels = async () => {
    const modelsToDownload = filtered.filter(m => selectedModels.includes(m.id));
    
    if (modelsToDownload.length === 0) {
      alert('No models selected for download');
      return;
    }

    for (const model of modelsToDownload) {
      await downloadModel(model);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

  const deleteModels = async (ids) => {
    try {
      for (const id of ids) {
        await fetch(`/api/models/${id}`, { method: 'DELETE' });
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

  const selectAll = () => {
    if (selectedModels.length === filtered.length) {
      setSelectedModels([]);
    } else {
      setSelectedModels(filtered.map(m => m.id));
    }
  };

  const handlePreview = (model) => {
    const baseUrl = getModelBaseUrl(model);
    if (!baseUrl) {
      console.error('Invalid model data - missing id or processor:', model);
      alert('Cannot preview: Model data is incomplete.');
      return;
    }

    const { objFilename, mtlFilename } = getModelFileDetails(model);
    if (!objFilename) {
      console.error('No OBJ filename available for model:', model);
      alert('Cannot preview: Required OBJ file is missing.');
      return;
    }

    const previewModelData = {
      ...model,
      fileUrl: baseUrl,
      objFilename,
      mtlFilename,
      name: model.name || 'Untitled Model',
      id: model.id || '',
      processor: model.processor || 'import',
      objFiles: [
        { filename: objFilename },
        ...(mtlFilename ? [{ filename: mtlFilename }] : [])
      ]
    };

    console.log('Preview model data:', previewModelData);
    setPreviewModel(previewModelData);
    setShowFullPreview(true);
  };

  return (
    <div className="w-full max-w-none mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="border-b border-gray-200 px-4 sm:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Model Library
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Browse, preview and manage your saved 3D models
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 hidden sm:inline">Library View</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-8 pt-6">
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
            <div className="flex flex-col sm:flex-row gap-2">
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

          {selectedModels.length > 0 && (
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={selectAll}
                  className="flex items-center justify-center sm:justify-start space-x-2 px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition border border-gray-200 min-h-[42px]"
                >
                  <input
                    type="checkbox"
                    checked={selectedModels.length === filtered.length && filtered.length > 0}
                    onChange={selectAll}
                    className="w-4 h-4"
                  />
                  <span className="text-sm sm:text-base">Select All ({filtered.length})</span>
                </button>
                <div className="text-sm text-gray-600 text-center sm:text-left">
                  {selectedModels.length} of {filtered.length} selected
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                <button
                  onClick={downloadSelectedModels}
                  disabled={selectedModels.length === 0}
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base min-h-[42px]"
                >
                  <Archive className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">Download ({selectedModels.length})</span>
                </button>
                <button
                  onClick={() => deleteModels(selectedModels)}
                  className="flex items-center justify-center space-x-2 bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm sm:text-base min-h-[42px]"
                >
                  <Trash2 className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">Delete ({selectedModels.length})</span>
                </button>
              </div>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <Folder className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                {searchTerm || filterBy !== 'all' ? 'No models match your search' : 'No models found'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-8">
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
                    <div className="flex items-center space-x-2 min-w-0 flex-1">
                      <input
                        type="checkbox"
                        checked={selectedModels.includes(m.id)}
                        onChange={() => toggleSelect(m.id)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 flex-shrink-0"
                      />
                      <h3 className="font-semibold truncate text-gray-900 text-sm sm:text-base">{m.name || 'Untitled Model'}</h3>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded font-medium flex-shrink-0 ml-2 ${getProcessorBadgeColor(m.processor || 'unknown')}`}>
                      {m.processor || 'Unknown'}
                    </span>
                  </div>
                  <div className="text-gray-500 text-xs mb-4">
                    Created: {new Date(m.createdAt || 0).toLocaleDateString()}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => downloadModel(m)}
                      disabled={downloadingModels.has(m.id)}
                      className="flex-1 flex items-center justify-center space-x-1 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed min-h-[36px]"
                    >
                      {downloadingModels.has(m.id) ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white flex-shrink-0"></div>
                          <span className="truncate">Downloading...</span>
                        </>
                      ) : (
                        <>
                          <Archive className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">Download ZIP</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => handlePreview(m)}
                      className="flex-1 flex items-center justify-center space-x-1 bg-gray-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-700 transition min-h-[36px]"
                    >
                      <Eye className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">Preview</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

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