import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  // When the MERN backend is added, requests to /api are proxied to Express in dev.
  // In production, point VITE_API_URL (see src/config/api.js) at the deployed API.
});
