// utils/cleanup.js
import fs from "fs-extra";
import path from "path";

const foldersToDelete = ["temp", "uploads"];

export async function cleanupTempFolders() {
  for (const folder of foldersToDelete) {
    const dirPath = path.join(process.cwd(), folder);
    try {
      if (await fs.pathExists(dirPath)) {
        await fs.emptyDir(dirPath); // safer: clears but keeps folder
        console.log(`✅ Cleaned: ${dirPath}`);
      }
    } catch (err) {
      console.error(`❌ Failed to clean ${dirPath}:`, err);
    }
  }
}
