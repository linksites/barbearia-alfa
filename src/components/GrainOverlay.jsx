/**
 * Camada de grão/textura sutil sobre toda a página, dando aspecto
 * analógico/premium. Usa um SVG de ruído (feTurbulence) inline, fixo na
 * viewport e sem capturar cliques (pointer-events-none).
 */
export default function GrainOverlay() {
  const noise = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/>
      </filter>
      <rect width='100%' height='100%' filter='url(#n)'/>
    </svg>`,
  )

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.06] mix-blend-overlay"
      style={{ backgroundImage: `url("data:image/svg+xml,${noise}")` }}
    />
  )
}
