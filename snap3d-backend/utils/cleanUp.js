// utils/cleanup.js
import fs from "fs-extra";
import path from "path";

const foldersToDelete = ["temp", "uploads"];

export async function cleanupTempFolders() {
  for (const folder of foldersToDelete) {
    const dirPath = path.join(process.cwd(), folder);
    try {
      if (await fs.pathExists(dirPath)) {
        const files = await fs.readdir(dirPath);
        for (const file of files) {
          if (file !== ".gitkeep") {
            const filePath = path.join(dirPath, file);
            await fs.remove(filePath);
          }
        }
        console.log(`✅ Cleaned (preserved .gitkeep): ${dirPath}`);
      }
    } catch (err) {
      console.error(`❌ Failed to clean ${dirPath}:`, err);
    }
  }
}
