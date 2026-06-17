import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],

  resolve: {
    alias: {
      "@": "/src",
      "@shared": "/src/shared",
      "@features": "/src/features",
      "@pages": "/src/pages",
      "@entities": "/src/entities",
      "@widgets": "/src/widgets",
    },
  },

  optimizeDeps: {
    include: ["@/*"],
  },
});
