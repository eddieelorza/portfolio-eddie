import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    /*
     * Honour an assigned port. Vite does not read PORT on its own — it would
     * sit on 5173 — and this project has no reason to hold that port: it is a
     * static SPA whose only external call is a `fetch` to the Web3Forms API,
     * so there is no OAuth callback, webhook or CORS origin pinned to it.
     * Leaving it free lets other dev servers take 5173 without a collision.
     */
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
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
