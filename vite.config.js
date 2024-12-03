import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/marenas1.github.io/marenas1.github.io',
  plugins: [react()],
})
