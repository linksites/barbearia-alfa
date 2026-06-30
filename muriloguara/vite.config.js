import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base relativa no build para funcionar em qualquer subcaminho (GitHub Pages,
// subpasta, etc.) sem precisar reconstruir. No dev local, raiz "/".
export default defineConfig(({ command }) => ({
  base: command === 'build' ? './' : '/',
  plugins: [react()],
}))
