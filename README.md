# Snap3D Backend

Backend server for Snap3D: 3D Model Generation from House Photos using Meshroom.

## Features

- Upload multiple house images and generate a 3D model using Meshroom photogrammetry.
- Track processing progress and status.
- Download generated 3D models in .obj, .ply, and other formats.
- Import existing models.
- No database required—models and metadata are file-based.
- Automatic cleanup of old files.

## Requirements

- Node.js (v16+)
- Python 3.8+
- [Meshroom](https://alicevision.org/#meshroom) with CLI installed and accessible in PATH
- pip: Install Python dependencies

## Quick Start

```bash
# Clone repo
git clone <your-repo-url>
cd snap3d-backend

# Install Node.js dependencies
npm install

# Install Python dependencies
cd python
pip install -r requirements.txt
cd ..

# Start server
npm run start
# or for development with auto-reload
npm run dev
```

Server runs on [http://localhost:3001](http://localhost:3001).

## API Endpoints

- `POST /api/upload` — Upload images to start 3D model generation.
- `GET /api/models` — List all models.
- `GET /api/models/:id` — Get model info.
- `GET /api/models/:id/status` — Get model status.
- `GET /api/models/:id/files` — List all output files for a model.
- `GET /api/models/:id/download/:filename` — Download specific output file (e.g. .obj, .ply).
- `DELETE /api/models/:id` — Delete a model and all its files.

## House Image Recommendations

- Upload at least 8-10 clear, sharp images covering all sides of the house, ideally with some roof/top views.
- Avoid motion blur, dark/night images, and large occlusions (e.g., trees covering the house).
- Good lighting and overlap between images will improve 3D reconstruction.

## Tips

- For best quality, use images taken in daylight and avoid extreme angles.
- The more angles and overlap, the better the 3D model.
- Processing may take several minutes depending on image count and system performance.

## Meshroom Installation

- Download from [official site](https://alicevision.org/#meshroom).
- Ensure `meshroom_photogrammetry` or `Meshroom` is in your system PATH.

## Docker (Optional)

You can add a `Dockerfile` for container deployment. See documentation for guidance.

## License

MIT License

---

Built by [AB Shetty]