import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/snap3d/", // For GitHub Pages
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3001", // Proxy API requests
    },
  },
});
