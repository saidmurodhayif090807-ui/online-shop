import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // this makes it accessible on your network
    port: 5173, // or any port you prefer
  }
})
