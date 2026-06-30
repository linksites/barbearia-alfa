/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta extraída das logos (metal aço-azulado + agulha de cobre)
        // sobre fundo CLARO, conforme briefing.
        tinta: '#0E141B',     // azul-tinta quase preto — texto/estrutura
        aco: '#2C4156',       // azul-aço profundo
        petroleo: '#3F5D78',  // azul petróleo — secundária
        prata: '#9FB3C4',     // prata metálica fria
        cobre: '#B0764A',     // cobre/bronze — acento (agulha de acupuntura)
        cobreClaro: '#C98A4B',
        teal: '#5B7D8F',      // teal sóbrio (caixa "a sua consulta")
        // Tons claros de fundo
        gelo: '#F6F8FA',      // off-white frio — fundo principal
        nevoa: '#EDF1F5',     // cinza-névoa — seções alternadas
        linha: '#DBE3EB',     // hairlines
      },
      fontFamily: {
        // Serifa elegante (evoca o wordmark) + sans limpa
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        drawNeedle: {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
      backgroundImage: {
        'mesh-cool':
          'radial-gradient(1200px 600px at 10% -10%, rgba(63,93,120,0.10), transparent 60%), radial-gradient(900px 500px at 100% 0%, rgba(176,118,74,0.08), transparent 55%)',
        'grid-blueprint':
          'linear-gradient(rgba(63,93,120,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(63,93,120,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(14,20,27,0.04), 0 12px 40px -12px rgba(14,20,27,0.12)',
        lift: '0 24px 60px -20px rgba(44,65,86,0.28)',
      },
    },
  },
  plugins: [],
}
