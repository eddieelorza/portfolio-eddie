import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          motion: ['motion'],
          embla: ['embla-carousel-react'],
          icons: ['lucide-react', 'react-icons'],
        },
      },
    },
  },
});
