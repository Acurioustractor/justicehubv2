import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png'],
  server: {
    hmr: {
      overlay: false
    },
    port: 5179,
    open: true
  },
  optimizeDeps: {
    include: ['leaflet', 'react-leaflet']
  },
  base: '/justicehub/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
}) 