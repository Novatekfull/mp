import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  server: {
    port: 3000,
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  build: {
    outDir: "dist", // Indique où placer les fichiers générés
    assetsDir: "assets", // Le dossier pour les fichiers d'assets
    rollupOptions: {
      input: "./index.html", // Point d'entrée pour l'application
    },
  },
});
