import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
 
   base: './', // this makes asset paths relative
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // ← this line is important!
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})
