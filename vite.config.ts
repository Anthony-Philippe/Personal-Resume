import MillionLint from '@million/lint';
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
const _plugins = [react()];
_plugins.unshift([MillionLint.vite()])
export default defineConfig({
  plugins: _plugins,
  resolve: {
    alias: {
      "@components": "/src/components",
      "@layouts": "/src/layouts",
      "@assets": "/src/assets"
    }
  }
});