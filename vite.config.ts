import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    exclude: ['@photo-sphere-viewer/core']
  },
  define: {
    // Add global variables for Vite
    'process.env': process.env
  }
});