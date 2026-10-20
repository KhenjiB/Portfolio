import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Tailwind CSS v4 is configured through its Vite plugin.
// No tailwind.config.js or postcss.config.js is needed.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
