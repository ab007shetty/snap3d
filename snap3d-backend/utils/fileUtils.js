const fs = require("fs").promises;
const path = require("path");

/**
 * File utility functions for Snap3D backend
 */

class FileUtils {
  /**
   * Ensure directory exists, create if it doesn't
   * @param {string} dirPath - Directory path
   */
  static async ensureDirectory(dirPath) {
    try {
      await fs.mkdir(dirPath, { recursive: true });
    } catch (error) {
      if (error.code !== "EEXIST") {
        throw error;
      }
    }
  }

  /**
   * Delete directory and all its contents
   * @param {string} dirPath - Directory path
   */
  static async deleteDirectory(dirPath) {
    try {
      await fs.rm(dirPath, { recursive: true, force: true });
    } catch (error) {
      console.error(`Error deleting directory ${dirPath}:`, error);
    }
  }

  /**
   * Get file size in MB
   * @param {string} filePath - File path
   * @returns {string} File size in MB
   */
  static async getFileSize(filePath) {
    try {
      const stats = await fs.stat(filePath);
      return (stats.size / (1024 * 1024)).toFixed(2) + "MB";
    } catch (error) {
      return "Unknown";
    }
  }

  /**
   * Check if file exists
   * @param {string} filePath - File path
   * @returns {boolean} True if file exists
   */
  static async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get file extension
   * @param {string} fileName - File name
   * @returns {string} File extension
   */
  static getFileExtension(fileName) {
    return path.extname(fileName).toLowerCase().substring(1);
  }

  /**
   * Validate image file
   * @param {Object} file - Multer file object
   * @returns {boolean} True if valid image
   */
  static validateImageFile(file) {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/tiff"];
    const maxSize = 10 * 1024 * 1024; // 10MB

    return allowedTypes.includes(file.mimetype) && file.size <= maxSize;
  }

  /**
   * Validate 3D model file
   * @param {Object} file - Multer file object
   * @returns {boolean} True if valid model file
   */
  static validateModelFile(file) {
    const allowedExtensions = [".obj", ".stl", ".ply", ".gltf", ".fbx"];
    const maxSize = 50 * 1024 * 1024; // 50MB

    const extension = this.getFileExtension(file.originalname);
    return allowedExtensions.includes("." + extension) && file.size <= maxSize;
  }

  /**
   * Clean up old files (older than specified days)
   * @param {string} directory - Directory to clean
   * @param {number} days - Number of days to keep files
   */
  static async cleanupOldFiles(directory, days = 7) {
    try {
      const files = await fs.readdir(directory);
      const cutoffTime = Date.now() - days * 24 * 60 * 60 * 1000;

      for (const file of files) {
        const filePath = path.join(directory, file);
        const stats = await fs.stat(filePath);

        if (stats.mtime.getTime() < cutoffTime) {
          if (stats.isDirectory()) {
            await this.deleteDirectory(filePath);
          } else {
            await fs.unlink(filePath);
          }
          console.log(`Cleaned up old file: ${file}`);
        }
      }
    } catch (error) {
      console.error(`Error cleaning up directory ${directory}:`, error);
    }
  }

  /**
   * Get directory size
   * @param {string} dirPath - Directory path
   * @returns {number} Size in bytes
   */
  static async getDirectorySize(dirPath) {
    try {
      const files = await fs.readdir(dirPath);
      let totalSize = 0;

      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = await fs.stat(filePath);

        if (stats.isDirectory()) {
          totalSize += await this.getDirectorySize(filePath);
        } else {
          totalSize += stats.size;
        }
      }

      return totalSize;
    } catch (error) {
      console.error(`Error getting directory size for ${dirPath}:`, error);
      return 0;
    }
  }

  /**
   * Format bytes to human readable format
   * @param {number} bytes - Bytes to format
   * @returns {string} Formatted size
   */
  static formatBytes(bytes) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  /**
   * Get file MIME type from extension
   * @param {string} fileName - File name
   * @returns {string} MIME type
   */
  static getMimeType(fileName) {
    const extension = this.getFileExtension(fileName);
    const mimeTypes = {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      gif: "image/gif",
      bmp: "image/bmp",
      tiff: "image/tiff",
      obj: "application/octet-stream",
      stl: "application/octet-stream",
      ply: "application/octet-stream",
      gltf: "model/gltf+json",
      fbx: "application/octet-stream",
    };

    return mimeTypes[extension] || "application/octet-stream";
  }
}

module.exports = FileUtils;
