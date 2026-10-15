import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// For GitHub Pages project sites set BASE_PATH=/personal-portfolio/ at build time.
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
