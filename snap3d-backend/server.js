const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs-extra");
const { v4: uuidv4 } = require("uuid");
const { spawn } = require("child_process");
const archiver = require("archiver");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3001;

// Function to clean up temporary folders
const { cleanupTempFolders } = require("./utils/cleanUp.js");
cleanupTempFolders();

// Middleware
app.use(helmet());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000,
    message: "Too many requests, please try again later.",
  })
);

// Status endpoint rate limit
const statusRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30,
  message: "Too many status requests, please wait and try again.",
});

// Long-term status rate limit
const longTermStatusRateLimit = rateLimit({
  windowMs: 1000 * 1000, // ~16.67 minutes
  max: 500,
  message: "Reached maximum request limit (500), please wait and try again.",
});

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());

// Serve static files for all processors
const ROOT_MODELS = path.join(__dirname, "models");
["open3d", "meshroom", "import"].forEach((proc) => {
  app.use(`/models/${proc}`, express.static(path.join(ROOT_MODELS, proc)));
});
app.use("/uploads", express.static(path.join(__dirname, "Uploads")));

// Multer config
const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, path.join(__dirname, "Uploads")),
  filename: (_, file, cb) =>
    cb(null, `${Date.now()}-${uuidv4()}${path.extname(file.originalname)}`),
});

const upload = multer({
  storage,
  limits: { fileSize: 200 * 1024 * 1024 },
  fileFilter: (_, file, cb) =>
    cb(
      null,
      /(image\/.*|\.obj|\.mtl)$/i.test(file.mimetype) ||
        /\.(obj|mtl|ply|stl)$/i.test(file.originalname)
    ),
});

// Model paths
fs.ensureDirSync(ROOT_MODELS);
["open3d", "meshroom", "import"].forEach((dir) =>
  fs.ensureDirSync(path.join(ROOT_MODELS, dir))
);

// In-memory state
const modelStatus = new Map();

// Helper: Recursive file listing
async function listFiles(dir) {
  const files = [];
  async function walk(curr, rel) {
    const items = await fs.readdir(curr, { withFileTypes: true });
    for (const item of items) {
      const abs = path.join(curr, item.name);
      const relPath = path.join(rel, item.name);
      if (item.isDirectory()) await walk(abs, relPath);
      else
        files.push({
          filename: item.name,
          path: relPath,
          size: (await fs.stat(abs)).size,
          downloadUrl: `/models/${path.basename(
            path.dirname(curr)
          )}/${path.basename(path.dirname(abs))}/${item.name}`,
          extension: path.extname(item.name).slice(1).toLowerCase(),
        });
    }
  }
  await walk(dir, "");
  return files;
}

// Helper: Safe file reading
async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filePath}: ${error.message}`);
    return null;
  }
}

// API Routes

// Upload route
app.post(
  "/api/upload",
  upload.fields([
    { name: "images", maxCount: 100 },
    { name: "obj", maxCount: 1 },
    { name: "mtl", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const id = uuidv4();
      const modelName = req.body.modelName || `Model_${id}`;
      const processor = req.body.processor || "open3d";
      if (!["open3d", "meshroom", "import"].includes(processor)) {
        return res.status(400).json({ error: "Invalid processor specified" });
      }

      const images = (req.files.images || []).map((f) =>
        path.join(__dirname, "Uploads", f.filename).replace(/\\/g, "/")
      );
      const obj = req.files.obj
        ? path
            .join(__dirname, "Uploads", req.files.obj[0].filename)
            .replace(/\\/g, "/")
        : null;
      const mtl = req.files.mtl
        ? path
            .join(__dirname, "Uploads", req.files.mtl[0].filename)
            .replace(/\\/g, "/")
        : null;

      if (images.length < 2 && !obj) {
        return res
          .status(400)
          .json({ error: "Need ≥2 images or at least one OBJ file" });
      }

      const modelDir = path.join(ROOT_MODELS, processor, id);
      await fs.ensureDir(modelDir);

      if (processor === "import") {
        if (!obj) throw new Error("No OBJ file provided for import");
        const objDest = path.join(modelDir, `${modelName}.obj`);
        await fs.copy(obj, objDest);
        const objFiles = [{ filename: `${modelName}.obj`, type: "mesh" }];
        if (mtl) {
          const mtlDest = path.join(modelDir, `${modelName}.mtl`);
          await fs.copy(mtl, mtlDest);
          objFiles.push({ filename: `${modelName}.mtl`, type: "material" });
        }

        const status = {
          id,
          name: modelName,
          processor,
          status: "completed",
          progress: 100,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          images: [],
          objFiles,
        };

        modelStatus.set(id, status);
        await fs.writeJson(path.join(modelDir, "status.json"), status);
        return res.json({ modelId: id });
      }

      const status = {
        id,
        name: modelName,
        processor,
        status: "queued",
        progress: 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        images: images.map((f) => ({ filename: path.basename(f) })),
        objFiles: [],
      };

      modelStatus.set(id, status);
      await fs.writeJson(path.join(modelDir, "status.json"), status);

      const script =
        processor === "open3d"
          ? "open3d_processor.py"
          : "meshroom_processor.py";
      const py = spawn(
        "python",
        [
          path.join(__dirname, "python", script),
          "--project-id",
          id,
          "--model-name",
          modelName,
          "--images",
          JSON.stringify(images),
          "--output-dir",
          modelDir,
        ],
        { stdio: ["ignore", "pipe", "pipe"] }
      );

      py.stdout.on("data", (d) => {
        const line = d.toString().trim();
        if (line.startsWith("{")) {
          try {
            const upd = JSON.parse(line);
            const currentStatus = modelStatus.get(id) || status;
            const s = {
              ...currentStatus,
              ...upd,
              updatedAt: Date.now(),
              processor,
            };
            modelStatus.set(id, s);
            fs.writeJson(path.join(modelDir, "status.json"), s).catch((err) => {
              console.error(
                `Failed to write status.json for ${id}: ${err.message}`
              );
            });
          } catch (err) {
            console.error(
              `Failed to parse status update for ${id}: ${err.message}`
            );
          }
        }
      });

      py.stderr.on("data", (d) => console.error("[Py]", d.toString()));
      py.on("close", (code) => {
        const s = modelStatus.get(id) || status;
        if (code !== 0 && s.status !== "failed") {
          modelStatus.set(id, {
            ...s,
            status: "failed",
            error: "Python process exited with error",
            updatedAt: Date.now(),
            processor,
          });
          fs.writeJson(
            path.join(modelDir, "status.json"),
            modelStatus.get(id)
          ).catch((err) => {
            console.error(
              `Failed to update status.json on close for ${id}: ${err.message}`
            );
          });
        }
      });

      res.json({ modelId: id });
    } catch (e) {
      console.error("Upload Error:", e);
      res.status(500).json({ error: e.message });
    }
  }
);

// Model status
app.get(
  "/api/models/:modelId/status",
  longTermStatusRateLimit,
  statusRateLimit,
  async (req, res) => {
    const modelId = req.params.modelId;
    const status = modelStatus.get(modelId);
    if (!status) {
      const processors = ["open3d", "meshroom", "import"];
      for (const proc of processors) {
        const statusPath = path.join(ROOT_MODELS, proc, modelId, "status.json");
        if (await fs.pathExists(statusPath)) {
          const data = await readFile(statusPath);
          if (data) {
            modelStatus.set(modelId, data);
            return res.json(data);
          }
        }
      }
      return res.status(404).json({ error: "Model not found" });
    }
    res.json(status);
  }
);

// Model info
app.get("/api/models/:modelId", async (req, res) => {
  const modelId = req.params.modelId;
  const processors = ["open3d", "meshroom", "import"];
  for (const proc of processors) {
    const statusPath = path.join(ROOT_MODELS, proc, modelId, "status.json");
    if (await fs.pathExists(statusPath)) {
      const status = await readFile(statusPath);
      if (!status)
        return res.status(500).json({ error: "Invalid status file" });
      return res.json(status);
    }
  }
  res.status(404).json({ error: "Model not found" });
});

// List model files
app.get("/api/models/:modelId/files", async (req, res) => {
  const modelId = req.params.modelId;
  const processors = ["open3d", "meshroom", "import"];
  for (const proc of processors) {
    const dir = path.join(ROOT_MODELS, proc, modelId);
    if (await fs.pathExists(dir)) {
      return res.json({ files: await listFiles(dir) });
    }
  }
  res.status(404).json({ error: "Model not found" });
});

// Download single file
app.get("/api/models/:modelId/download/:filename", async (req, res) => {
  const { modelId, filename } = req.params;
  const processors = ["open3d", "meshroom", "import"];
  for (const proc of processors) {
    const file = path.join(ROOT_MODELS, proc, modelId, filename);
    if (await fs.pathExists(file)) {
      res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
      return res.sendFile(file);
    }
  }
  res.status(404).json({ error: "File not found" });
});

// Download all model files as ZIP
app.get("/api/models/:modelId/download-all", async (req, res) => {
  const modelId = req.params.modelId;
  const processors = ["open3d", "meshroom", "import"];
  let modelDir = null;
  for (const proc of processors) {
    const dir = path.join(ROOT_MODELS, proc, modelId);
    if (await fs.pathExists(dir)) {
      modelDir = dir;
      break;
    }
  }

  if (!modelDir) {
    return res.status(404).json({ error: "Model directory not found" });
  }

  res.setHeader("Content-Type", "application/zip");
  res.setHeader("Content-Disposition", `attachment; filename=${modelId}.zip`);
  const archive = archiver("zip");
  archive.pipe(res);
  archive.directory(modelDir, false);
  archive.finalize();
});

// Get all models
app.get("/api/models", async (req, res) => {
  try {
    const result = [];
    const processors = ["open3d", "meshroom", "import"];
    for (const proc of processors) {
      const baseDir = path.join(ROOT_MODELS, proc);
      const modelIds = await fs.readdir(baseDir, { withFileTypes: true });
      for (const dirent of modelIds) {
        if (!dirent.isDirectory()) continue;
        const id = dirent.name;
        const statusPath = path.join(baseDir, id, "status.json");
        if (await fs.pathExists(statusPath)) {
          const json = await readFile(statusPath);
          if (json) {
            if (!json.createdAt) json.createdAt = Date.now();
            result.push(json);
          }
        }
      }
    }
    result.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    res.json(result);
  } catch (err) {
    console.error("Error in /api/models:", err);
    res
      .status(500)
      .json({ error: "Failed to fetch models", details: err.message });
  }
});

// Delete model
app.delete("/api/models/:modelId", async (req, res) => {
  try {
    const modelId = req.params.modelId;
    const processors = ["open3d", "meshroom", "import"];
    let modelPath = null;
    for (const proc of processors) {
      const dir = path.join(ROOT_MODELS, proc, modelId);
      if (await fs.pathExists(dir)) {
        modelPath = dir;
        break;
      }
    }

    if (!modelPath) return res.status(404).json({ error: "Model not found" });

    await fs.remove(modelPath);
    modelStatus.delete(modelId);
    res.json({ success: true });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Failed to delete model" });
  }
});

// Health check
app.get("/api/health", (_, res) => res.json({ status: "ok" }));

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
