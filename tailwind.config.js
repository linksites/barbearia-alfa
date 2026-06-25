/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta da marca (briefing)
        carvao: '#0E0E0E',      // fundo preto/quase preto
        terracota: '#C8602C',   // laranja terracota — cor de ação
        petroleo: '#2C5872',    // azul petróleo — secundária
        creme: '#F0E6D2',       // off-white — texto
      },
      fontFamily: {
        // Display forte em caixa-alta + corpo limpo
        display: ['Anton', 'Oswald', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
}
