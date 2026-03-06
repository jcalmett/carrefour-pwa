import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/carrefour-pwa/",
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 3000,
  },
});
