// Wordmark da marca: monograma "M" (haste de coluna + agulha) + nome em serifa.
// Versão vetorial leve para o header/footer (a logo completa fica nos assets).
export default function Logo({ compact = false, className = '', invert = false }) {
  const ink = invert ? '#F6F8FA' : '#0E141B'
  const sub = invert ? 'rgba(246,248,250,0.62)' : 'rgba(44,65,86,0.7)'
  return (
    <a href="#inicio" className={`group flex items-center gap-3 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        className="shrink-0 transition-transform duration-500 group-hover:rotate-[-4deg]"
        aria-hidden
      >
        <defs>
          <linearGradient id="mk" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={invert ? '#c3d2de' : '#1b2a38'} />
            <stop offset="100%" stopColor={invert ? '#9fb3c4' : '#3f5d78'} />
          </linearGradient>
        </defs>
        {/* M estilizado */}
        <path
          d="M7 31V11l8 12 8-12v20"
          stroke="url(#mk)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Agulha (acento cobre) */}
        <line x1="30" y1="9" x2="30" y2="31" stroke="#b0764a" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="30" cy="9" r="2" stroke="#b0764a" strokeWidth="1.6" fill="none" />
      </svg>
      {!compact && (
        <span className="leading-none">
          <span
            className="block font-display text-[1.35rem] font-semibold tracking-tight"
            style={{ color: ink }}
          >
            Murilo Guará
          </span>
          <span
            className="block text-[0.6rem] font-medium uppercase tracking-widest2"
            style={{ color: sub }}
          >
            Fisio · Acupuntura · Quiro
          </span>
        </span>
      )}
    </a>
  )
}
