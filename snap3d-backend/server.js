/* eslint-disable no-console */
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

// --- middleware ---
app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 500 }));
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());

// Serve model files
app.use(
  "/models/import",
  express.static(path.join(__dirname, "models", "import"))
);
app.use(
  "/models/open3d",
  express.static(path.join(__dirname, "models", "open3d"))
);
app.use(
  "/models/meshroom",
  express.static(path.join(__dirname, "models", "meshroom"))
);

// --- multer config ---
const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, path.join(__dirname, "Uploads")),
  filename: (_, file, cb) =>
    cb(null, `${Date.now()}-${uuidv4()}${path.extname(file.originalname)}`),
});

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter: (_, file, cb) =>
    cb(
      null,
      /(image\/.*|\.obj|\.mtl)$/i.test(file.mimetype) ||
        /\.(obj|mtl|ply|stl)$/i.test(file.originalname)
    ),
});

// --- model paths ---
const ROOT_MODELS = path.join(__dirname, "models");
fs.ensureDirSync(ROOT_MODELS);
["meshroom", "open3d", "import"].forEach((dir) =>
  fs.ensureDirSync(path.join(ROOT_MODELS, dir))
);

// --- in-memory state ---
const modelStatus = new Map();

// --- helper: recursive file listing ---
async function listFiles(dir) {
  const files = [];
  await walk(dir, "");
  return files;

  async function walk(curr, rel) {
    for (const item of await fs.readdir(curr, { withFileTypes: true })) {
      const abs = path.join(curr, item.name);
      const relPath = path.join(rel, item.name);
      if (item.isDirectory()) await walk(abs, relPath);
      else
        files.push({
          name: item.name,
          path: relPath,
          size: (await fs.stat(abs)).size,
          downloadUrl: `/api/models/${path.basename(
            path.dirname(curr)
          )}/download/${item.name}`,
          extension: path.extname(item.name).slice(1).toLowerCase(),
        });
    }
  }
}

// --- API routes ---

// Upload route: Handles image processing + OBJ/MTL import
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
      const name = req.body.modelName || `Model_${Date.now()}`;
      const processor = req.body.processor || "meshroom";
      const images = (req.files.images || []).map((f) =>
        path.join(__dirname, "Uploads", f.filename).replace(/\\/g, "/")
      );
      const obj = req.files.obj
        ? [
            path
              .join(__dirname, "Uploads", req.files.obj[0].filename)
              .replace(/\\/g, "/"),
          ]
        : [];
      const mtl = req.files.mtl
        ? [
            path
              .join(__dirname, "Uploads", req.files.mtl[0].filename)
              .replace(/\\/g, "/"),
          ]
        : [];

      // Updated validation: Allow at least 2 images or at least 1 OBJ (MTL optional)
      if (images.length < 2 && obj.length === 0) {
        return res
          .status(400)
          .json({ error: "Need ≥2 images or at least one OBJ file" });
      }

      // Handle OBJ/MTL import
      if (obj.length > 0 && images.length === 0) {
        const modelDir = path.join(ROOT_MODELS, "import", id);
        await fs.ensureDir(modelDir);
        const objDest = path.join(modelDir, name + ".obj");
        await fs.copy(obj[0], objDest);

        const objFiles = [{ filename: name + ".obj" }];
        if (mtl.length > 0) {
          const mtlDest = path.join(modelDir, name + ".mtl");
          await fs.copy(mtl[0], mtlDest);
          objFiles.push({ filename: name + ".mtl" });
        }

        const status = {
          id,
          name,
          processor: "import",
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

      // Handle image-based processing
      const modelDir = path.join(ROOT_MODELS, processor, id);
      await fs.ensureDir(modelDir);

      const status = {
        id,
        name,
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
          name,
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
            const s = { ...modelStatus.get(id), ...upd, updatedAt: Date.now() };
            modelStatus.set(id, s);
            fs.writeJson(path.join(modelDir, "status.json"), s).catch(() => {});
          } catch {}
        }
      });

      py.stderr.on("data", (d) => console.error("[Py]", d.toString()));
      py.on("close", (code) => {
        const s = modelStatus.get(id);
        if (code !== 0 && s.status !== "failed") {
          modelStatus.set(id, {
            ...s,
            status: "failed",
            error: "Python crashed",
          });
          fs.writeJson(path.join(modelDir, "status.json"), modelStatus.get(id));
        }
      });

      res.json({ modelId: id });
    } catch (e) {
      console.error("Upload Error:", e);
      res.status(500).json({ error: e.message });
    }
  }
);

// Get model status
app.get("/api/models/:modelId/status", (req, res) => {
  const s = modelStatus.get(req.params.modelId);
  if (!s) return res.status(404).json({ error: "Model not found" });
  res.json(s);
});

// Get full model info
app.get("/api/models/:modelId", async (req, res) => {
  const proc = modelStatus.get(req.params.modelId)?.processor;
  const dir = path.join(ROOT_MODELS, proc || "meshroom", req.params.modelId);
  const statFile = path.join(dir, "status.json");
  if (!(await fs.pathExists(statFile)))
    return res.status(404).json({ error: "Model not found" });
  res.json(await fs.readJson(statFile));
});

// List model files
app.get("/api/models/:modelId/files", async (req, res) => {
  const proc = modelStatus.get(req.params.modelId)?.processor;
  const dir = path.join(ROOT_MODELS, proc || "meshroom", req.params.modelId);
  if (!(await fs.pathExists(dir)))
    return res.status(404).json({ error: "Model not found" });
  res.json({ files: await listFiles(dir) });
});

// Download a single file
app.get("/api/models/:modelId/download/:filename", async (req, res) => {
  const proc = modelStatus.get(req.params.modelId)?.processor;
  const file = path.join(
    ROOT_MODELS,
    proc || "meshroom",
    req.params.modelId,
    req.params.filename
  );
  if (!(await fs.pathExists(file)))
    return res.status(404).json({ error: "File not found" });
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${req.params.filename}`
  );
  res.sendFile(file);
});

app.get("/api/models/:modelId/download-all", async (req, res) => {
  const modelId = req.params.modelId;

  // Try to get processor from status, otherwise try all processors
  const status = modelStatus.get(modelId);
  const processors = status
    ? [status.processor]
    : ["meshroom", "open3d", "import"];

  let foundDir = null;
  for (const proc of processors) {
    const dir = path.join(ROOT_MODELS, proc, modelId);
    if (await fs.pathExists(dir)) {
      foundDir = dir;
      break;
    }
  }

  if (!foundDir) {
    return res
      .status(404)
      .json({ error: "Model directory not found in any processor folder" });
  }

  res.setHeader("Content-Type", "application/zip");
  res.setHeader("Content-Disposition", `attachment; filename=${modelId}.zip`);
  const archive = archiver("zip");
  archive.pipe(res);
  archive.directory(foundDir, false);
  archive.finalize();
});

// Get all models
app.get("/api/models", async (req, res) => {
  try {
    const result = [];
    const processors = ["meshroom", "open3d", "import"];
    for (const proc of processors) {
      const baseDir = path.join(ROOT_MODELS, proc);
      const modelIds = await fs.readdir(baseDir);
      for (const id of modelIds) {
        const statusPath = path.join(baseDir, id, "status.json");
        if (await fs.pathExists(statusPath)) {
          const json = await fs.readJson(statusPath);
          result.push(json);
        }
      }
    }
    result.sort((a, b) => b.createdAt - a.createdAt);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch models" });
  }
});

// Delete model
app.delete("/api/models/:modelId", async (req, res) => {
  try {
    const id = req.params.modelId;
    const match = await Promise.any(
      ["meshroom", "open3d", "import"].map(async (processor) => {
        const modelPath = path.join(ROOT_MODELS, processor, id);
        if (await fs.pathExists(modelPath)) return modelPath;
        throw new Error("Not found");
      })
    ).catch(() => null);

    if (!match) return res.status(404).json({ error: "Model not found" });

    await fs.remove(match);
    modelStatus.delete(id);
    res.json({ success: true });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Failed to delete model" });
  }
});

// Health check
app.get("/api/health", (_, res) => res.json({ status: "ok" }));

// Serve uploads
app.use("/uploads", express.static(path.join(__dirname, "Uploads")));

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
