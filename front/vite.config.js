// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  esbuild: {
    loader: "jsx",
    include: [
      "src//*.js",
      "node_modules//*.js"
    ]
  }
}));