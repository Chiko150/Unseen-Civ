import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Esbuild config parameters ko clean kiya taake standalone engine warning na aaye
    rollupOptions: {
      output: {
        // Manual framework bundle isolation strategy
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor-core';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});