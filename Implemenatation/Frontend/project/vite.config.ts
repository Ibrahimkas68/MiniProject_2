import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude specific dependencies from pre-bundling
  },
  build: {
    chunkSizeWarningLimit: 2000, // Adjust warning limit if necessary
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('lucide-react')) {
              return 'vendor-react'; // Separate React and related dependencies
            }
            return 'vendor'; // General vendor bundle
          }
        },
      },
    },
  },
});
