const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const { spawn } = require("child_process");
const fs = require("fs").promises;
const FileUtils = require("./utils/fileUtils");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Serve static files (models, uploads)
app.use("/models", express.static(path.join(__dirname, "models")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = path.join(__dirname, "uploads");
    await FileUtils.ensureDirectory(uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${uuidv4()}${path.extname(
      file.originalname
    )}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB per file
    files: 50, // Maximum 50 files
  },
  fileFilter: (req, file, cb) => {
    if (FileUtils.validateImageFile(file)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type or size"), false);
    }
  },
});

// In-memory storage for models (replace with database later)
let models = [];

// Initialize models file
const initializeModels = async () => {
  try {
    const modelsDir = path.join(__dirname, "models");
    await FileUtils.ensureDirectory(modelsDir);

    const modelsFile = path.join(modelsDir, "models.json");
    if (await FileUtils.fileExists(modelsFile)) {
      const data = await fs.readFile(modelsFile, "utf8");
      models = JSON.parse(data);
    } else {
      await fs.writeFile(modelsFile, JSON.stringify([], null, 2));
    }
  } catch (error) {
    console.error("Error initializing models:", error);
  }
};

// Save models to file
const saveModels = async () => {
  try {
    const modelsFile = path.join(__dirname, "models", "models.json");
    await fs.writeFile(modelsFile, JSON.stringify(models, null, 2));
  } catch (error) {
    console.error("Error saving models:", error);
  }
};

// Routes

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

// Upload images and start 3D model generation
app.post("/api/upload", upload.array("images", 50), async (req, res) => {
  try {
    const { modelName } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No images uploaded" });
    }

    if (req.files.length < 2) {
      return res.status(400).json({
        error: "At least 2 images are required for 3D model generation",
      });
    }

    // Create model entry
    const modelId = uuidv4();
    const model = {
      id: modelId,
      name: modelName || `Model_${Date.now()}`,
      status: "queued",
      progress: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      imageCount: req.files.length,
      images: req.files.map((file) => ({
        filename: file.filename,
        originalName: file.originalname,
        size: file.size,
        path: file.path,
      })),
    };

    models.push(model);
    await saveModels();

    // Start 3D model generation in background
    generateModel(modelId, req.files);

    res.json({
      message: "Images uploaded successfully",
      modelId,
      imageCount: req.files.length,
      model: {
        id: model.id,
        name: model.name,
        status: model.status,
        progress: model.progress,
        imageCount: model.imageCount,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Upload failed" });
  }
});

// Get all models
app.get("/api/models", (req, res) => {
  const publicModels = models.map((model) => ({
    id: model.id,
    name: model.name,
    status: model.status,
    progress: model.progress,
    createdAt: model.createdAt,
    updatedAt: model.updatedAt,
    imageCount: model.imageCount,
    outputPath: model.outputPath,
    vertices: model.vertices,
    faces: model.faces,
    quality: model.quality,
    error: model.error,
  }));

  res.json(publicModels);
});

// Get specific model
app.get("/api/models/:id", (req, res) => {
  const model = models.find((m) => m.id === req.params.id);

  if (!model) {
    return res.status(404).json({ error: "Model not found" });
  }

  const publicModel = {
    id: model.id,
    name: model.name,
    status: model.status,
    progress: model.progress,
    createdAt: model.createdAt,
    updatedAt: model.updatedAt,
    imageCount: model.imageCount,
    outputPath: model.outputPath,
    vertices: model.vertices,
    faces: model.faces,
    quality: model.quality,
    error: model.error,
    images: model.images?.map((img) => ({
      filename: img.filename,
      originalName: img.originalName,
      size: img.size,
    })),
  };

  res.json(publicModel);
});

// Get model status
app.get("/api/models/:id/status", (req, res) => {
  const model = models.find((m) => m.id === req.params.id);

  if (!model) {
    return res.status(404).json({ error: "Model not found" });
  }

  res.json({
    id: model.id,
    status: model.status,
    progress: model.progress,
    updatedAt: model.updatedAt,
    error: model.error,
  });
});

// Download model files
app.get("/api/models/:id/download/:filename", async (req, res) => {
  try {
    const { id, filename } = req.params;
    const model = models.find((m) => m.id === id);

    if (!model) {
      return res.status(404).json({ error: "Model not found" });
    }

    if (model.status !== "completed") {
      return res.status(400).json({ error: "Model not ready for download" });
    }

    const filePath = path.join(__dirname, "models", id, filename);

    if (!(await FileUtils.fileExists(filePath))) {
      return res.status(404).json({ error: "File not found" });
    }

    // Set appropriate headers for download
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Type", "application/octet-stream");

    const fileStream = require("fs").createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    console.error("Download error:", error);
    res.status(500).json({ error: "Download failed" });
  }
});

// List model files
app.get("/api/models/:id/files", async (req, res) => {
  try {
    const { id } = req.params;
    const model = models.find((m) => m.id === id);

    if (!model) {
      return res.status(404).json({ error: "Model not found" });
    }

    if (model.status !== "completed") {
      return res.json({ files: [] });
    }

    const modelDir = path.join(__dirname, "models", id);

    if (!(await FileUtils.fileExists(modelDir))) {
      return res.json({ files: [] });
    }

    const files = await fs.readdir(modelDir);
    const fileDetails = await Promise.all(
      files.map(async (filename) => {
        const filePath = path.join(modelDir, filename);
        const stats = await fs.stat(filePath);
        return {
          filename,
          size: stats.size,
          sizeFormatted: await FileUtils.getFileSize(filePath),
          extension: FileUtils.getFileExtension(filename),
          downloadUrl: `/api/models/${id}/download/${filename}`,
        };
      })
    );

    res.json({ files: fileDetails });
  } catch (error) {
    console.error("Files listing error:", error);
    res.status(500).json({ error: "Failed to list files" });
  }
});

// Delete model
app.delete("/api/models/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const modelIndex = models.findIndex((m) => m.id === id);

    if (modelIndex === -1) {
      return res.status(404).json({ error: "Model not found" });
    }

    const model = models[modelIndex];

    // Delete model files
    const modelDir = path.join(__dirname, "models", id);
    await FileUtils.deleteDirectory(modelDir);

    // Delete uploaded images
    if (model.images) {
      for (const image of model.images) {
        try {
          await fs.unlink(image.path);
        } catch (error) {
          console.log(`Could not delete image: ${image.path}`);
        }
      }
    }

    // Remove from models array
    models.splice(modelIndex, 1);
    await saveModels();

    res.json({ message: "Model deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ error: "Failed to delete model" });
  }
});

// Function to generate 3D model using Python script
async function generateModel(modelId, imageFiles) {
  try {
    // Update model status
    const model = models.find((m) => m.id === modelId);
    if (!model) return;

    model.status = "processing";
    model.progress = 5;
    model.updatedAt = Date.now();
    await saveModels();

    // Prepare image paths
    const imagePaths = imageFiles.map((file) => file.path);

    // Run Python script
    const pythonScript = path.join(
      __dirname,
      "python",
      "meshroom_processor.py"
    );
    const args = [
      "--project-id",
      modelId,
      "--images",
      JSON.stringify(imagePaths),
      "--model-name",
      model.name,
    ];

    const pythonProcess = spawn("python3", [pythonScript, ...args]);

    pythonProcess.stdout.on("data", (data) => {
      console.log(`Python stdout: ${data}`);
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error(`Python stderr: ${data}`);
    });

    pythonProcess.on("close", async (code) => {
      console.log(`Python process exited with code ${code}`);

      // Reload models from file (updated by Python script)
      try {
        const modelsFile = path.join(__dirname, "models", "models.json");
        const data = await fs.readFile(modelsFile, "utf8");
        models = JSON.parse(data);
      } catch (error) {
        console.error("Error reloading models:", error);
      }
    });
  } catch (error) {
    console.error("Model generation error:", error);

    // Update model status to failed
    const model = models.find((m) => m.id === modelId);
    if (model) {
      model.status = "failed";
      model.error = error.message;
      model.updatedAt = Date.now();
      await saveModels();
    }
  }
}

// Cleanup old files periodically
setInterval(async () => {
  try {
    const uploadsDir = path.join(__dirname, "uploads");
    const tempDir = path.join(__dirname, "temp");

    await FileUtils.cleanupOldFiles(uploadsDir, 7); // Keep for 7 days
    await FileUtils.cleanupOldFiles(tempDir, 1); // Keep for 1 day

    console.log("Cleanup completed");
  } catch (error) {
    console.error("Cleanup error:", error);
  }
}, 24 * 60 * 60 * 1000); // Run every 24 hours

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Error:", error);

  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error: "File too large" });
    }
    if (error.code === "LIMIT_FILE_COUNT") {
      return res.status(400).json({ error: "Too many files" });
    }
  }

  res.status(500).json({ error: "Internal server error" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Start server
const startServer = async () => {
  try {
    await initializeModels();

    app.listen(PORT, () => {
      console.log(`🚀 Snap3D Backend Server running on port ${PORT}`);
      console.log(`📁 Models directory: ${path.join(__dirname, "models")}`);
      console.log(`📁 Uploads directory: ${path.join(__dirname, "uploads")}`);
      console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("SIGINT received, shutting down gracefully");
  process.exit(0);
});
