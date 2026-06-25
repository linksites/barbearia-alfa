import { FaCamera } from 'react-icons/fa'

/**
 * Imagem com fallback de placeholder.
 *
 * Se `foto.src` existir, renderiza a imagem real (com lazy-load).
 * Se for null, mostra um bloco com a paleta da marca + etiqueta do que
 * precisa ser entregue — para o layout não quebrar enquanto as fotos
 * reais não chegam.
 *
 * `showLabel={false}` oculta o ícone/etiqueta, deixando apenas o fundo em
 * gradiente da marca — usado no Hero, para o placeholder parecer um fundo
 * intencional (sem texto de "foto a definir" aparecendo ao visitante).
 */
export default function Foto({
  foto,
  className = '',
  imgClassName = '',
  showLabel = true,
}) {
  if (foto?.src) {
    return (
      <img
        src={foto.src}
        alt={foto.alt}
        loading="lazy"
        decoding="async"
        className={`${className} ${imgClassName}`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`Placeholder — ${foto?.label ?? 'foto a definir'}`}
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-petroleo/40 via-carvao to-terracota/30 ${className}`}
    >
      {/* Hachura sutil para diferenciar de um bloco chapado */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #F0E6D2 0, #F0E6D2 1px, transparent 1px, transparent 12px)',
        }}
      />
      {showLabel && (
        <div className="relative flex flex-col items-center gap-2 px-4 text-center">
          <FaCamera className="text-2xl text-creme/60" aria-hidden="true" />
          <span className="max-w-[16rem] text-xs font-semibold uppercase tracking-widest text-creme/70">
            {foto?.label ?? 'Foto a definir'}
          </span>
        </div>
      )}
    </div>
  )
}
