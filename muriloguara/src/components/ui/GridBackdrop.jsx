// Fundo claro "sofisticado": grade blueprint + brilhos radiais (mesh) +
// uma linha de meridiano sutil. Decorativo, não captura cliques.
export default function GridBackdrop({ className = '', faded = false }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {/* Mesh de gradientes frios + cobre */}
      <div className="absolute inset-0 bg-mesh-cool" />

      {/* Grade blueprint com fade radial nas bordas */}
      <div
        className="absolute inset-0 bg-grid-blueprint"
        style={{
          backgroundSize: '46px 46px',
          maskImage:
            'radial-gradient(120% 90% at 50% 0%, black 35%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(120% 90% at 50% 0%, black 35%, transparent 78%)',
          opacity: faded ? 0.5 : 1,
        }}
      />

      {/* Brilho superior */}
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-petroleo/10 blur-3xl" />
    </div>
  )
}
