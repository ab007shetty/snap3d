// components/Alert.js
import React from 'react';
import { AlertCircle, X } from 'lucide-react';

const Alert = ({ type, message, onClose }) => {
  const getAlertStyles = () => {
    switch (type) {
      case 'error':
        return 'bg-red-50 border-red-200 text-red-700';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-700';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-700';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  const getIconColor = () => {
    switch (type) {
      case 'error':
        return 'text-red-500';
      case 'warning':
        return 'text-yellow-500';
      case 'info':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className={`mb-6 border rounded-lg p-4 flex items-center space-x-3 ${getAlertStyles()}`}>
      <AlertCircle className={`w-5 h-5 flex-shrink-0 ${getIconColor()}`} />
      <p className="flex-1">{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className={`ml-auto transition-colors ${
            type === 'error' ? 'text-red-500 hover:text-red-700' : 
            type === 'warning' ? 'text-yellow-500 hover:text-yellow-700' :
            'text-blue-500 hover:text-blue-700'
          }`}
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Alert;