import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // Ensuring public directory is correctly handled
  build: {
    rollupOptions: {
      // Explicitly ensure public assets are handled correctly
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});
