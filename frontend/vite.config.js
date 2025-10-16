import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the React frontend.  The plugin enables
// automatic transformation of JSX and integration with Fast Refresh
// during development.
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy API requests in dev mode to the backend.  This allows
    // calls to /api/* to reach the FastAPI server running on port 8000
    // without needing to specify the full URL in fetch calls.
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});