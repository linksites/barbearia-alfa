import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do Vite + React.
// No build (GitHub Pages) servimos a partir do subcaminho do repositório;
// no dev local mantemos a raiz "/".
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/barbearia-alfa/' : '/',
  plugins: [react()],
}))
