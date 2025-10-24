import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    proxy: {
      // forward any call to /api/* to backend running on port 5000
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        // no path rewrite required when target is origin
      },
    },
  }
})
