import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  theme: {
    screens: {
      sm: '430px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px',
    }
  },
  server: {
    watch: {
      usePolling: true, // useful in some environments (like WSL, Docker, or VM)
    },
    hmr: true, // enabled by default
  }
})
