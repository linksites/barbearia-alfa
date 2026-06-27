import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do Vite + React.
// No build usamos base relativa ('./') para que o mesmo build funcione em
// qualquer subcaminho do GitHub Pages (ex.: /alpha/ ou /alfa/) sem precisar
// reconstruir caso o repositório seja renomeado. No dev local, raiz "/".
export default defineConfig(({ command }) => ({
  base: command === 'build' ? './' : '/',
  plugins: [react()],
}))
