const fs = require("fs").promises;
const path = require("path");

class FileUtils {
  static async ensureDirectory(dirPath) {
    try {
      await fs.mkdir(dirPath, { recursive: true });
    } catch (error) {
      if (error.code !== "EEXIST") throw error;
    }
  }

  static async deleteDirectory(dirPath) {
    try {
      await fs.rm(dirPath, { recursive: true, force: true });
    } catch (error) {
      console.error(`Error deleting directory ${dirPath}:`, error);
    }
  }

  static async getFileSize(filePath) {
    try {
      const stats = await fs.stat(filePath);
      return (stats.size / (1024 * 1024)).toFixed(2) + "MB";
    } catch {
      return "Unknown";
    }
  }

  static async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  static getFileExtension(fileName) {
    return path.extname(fileName).toLowerCase().substring(1);
  }

  static validateImageFile(file) {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/tiff",
      "image/webp",
    ];
    const allowedExts = [
      ".jpg",
      ".jpeg",
      ".png",
      ".tiff",
      ".webp",
      ".obj",
      ".ply",
    ];
    return (
      allowedTypes.includes(file.mimetype) ||
      (!file.mimetype.includes("application/octet-stream") &&
        allowedExts.includes(path.extname(file.originalname).toLowerCase()))
    );
  }
}

module.exports = FileUtils;
