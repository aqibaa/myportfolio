import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
    optimizeDeps: {
    exclude: ['lucide-react'], // lucide-react ko optimization se exclude karein
  },
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});


