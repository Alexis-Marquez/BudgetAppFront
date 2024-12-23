import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://192.168.1.82:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
