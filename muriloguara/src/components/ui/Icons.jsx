// Ícones SVG desenhados sob medida para a marca (linha fina, traço de aço).
// Evita o look genérico de bibliotecas e mantém coerência com a logo
// (coluna vertebral + agulha de acupuntura).

const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 28 28',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

// Coluna vertebral estilizada (quiropraxia / fisioterapia)
export function IconColuna(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 2.5c-1.6 1.2-1.6 2.8 0 4 1.6 1.2 1.6 2.8 0 4-1.6 1.2-1.6 2.8 0 4-1.6 1.2-1.6 2.8 0 4-1.6 1.2-1.6 2.8 0 4" />
      <path d="M11 4.2h6M10.4 8h7.2M10 11.8h8M10.4 15.6h7.2M11 19.4h6M12 22.8h4" />
    </svg>
  )
}

// Agulha de acupuntura com cabo espiralado (acento cobre)
export function IconAgulha(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 22.5 19 12.5" />
      <path d="M18.4 12 9.6 20.8a2.2 2.2 0 0 1-1.2.6l-2 .4.4-2c.08-.46.3-.88.62-1.2L16 9.8" />
      <path d="M17.2 7.4c.7-.7 1.5-1.3 2.4-1.3M19.6 6.1c.9 0 1.7.6 2.4 1.3M22 7.4c0 .9-.6 1.7-1.3 2.4M20.7 9.8c-.7.7-1.5 1.3-2.4 1.3" />
      <circle cx="20.1" cy="7.6" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

// Fisioterapia — movimento articular / amplitude
export function IconFisio(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="6" r="2.3" />
      <path d="M9 8.4v6l-3.2 8M9 14.4l3.4 8" />
      <path d="M9 11 4.5 9.2M9 11l5.5-1.8" />
      <path d="M19.5 8c1.6 1.6 1.6 9.4 0 11" strokeDasharray="0.1 3" />
    </svg>
  )
}

// Mãos / cuidado humano
export function IconPessoa(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="14" cy="7" r="3" />
      <path d="M6.5 23c0-4.7 3.4-8 7.5-8s7.5 3.3 7.5 8" />
    </svg>
  )
}

// Abordagem integrativa (3 frentes convergindo)
export function IconIntegra(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="14" cy="14" r="3" />
      <path d="M14 11V4M14 17v7M11.4 12.5 5.4 8M16.6 12.5l6-4.5M11.4 15.5l-6 4.5M16.6 15.5l6 4.5" />
    </svg>
  )
}

// Evidência / raciocínio clínico (selo de checagem)
export function IconEvidencia(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 2.5 23 6v6c0 5.4-3.7 8.9-9 11.5C8.7 20.9 5 17.4 5 12V6l9-3.5Z" />
      <path d="M10 13.2 13 16l5-5.5" />
    </svg>
  )
}

// Foco em movimento (seta de amplitude)
export function IconMovimento(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 18a10 10 0 0 1 20 0" />
      <path d="M4 18h3M21 18h3" />
      <path d="m14 7-3 4h6l-3 4" />
    </svg>
  )
}

// Setas / chevrons utilitários
export function IconArrow(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 14h17M16 8l6 6-6 6" />
    </svg>
  )
}

export function IconChevron(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 11l7 7 7-7" />
    </svg>
  )
}

export function IconWhats(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 25c6.1 0 11-4.9 11-11S20.1 3 14 3 3 7.9 3 14c0 2 .5 3.8 1.4 5.4L3 25l5.8-1.4A11 11 0 0 0 14 25Z" />
      <path d="M10.4 9.5c.3 0 .6.2.8.6l.7 1.6c.1.3 0 .6-.2.8l-.6.7c-.2.2-.2.4-.1.6.5 1 1.4 1.9 2.4 2.4.2.1.5.1.7-.1l.6-.7c.2-.2.5-.3.8-.2l1.6.7c.4.2.6.5.6.8 0 1.4-1.2 2.3-2.5 2.1-3.5-.4-6.3-3.2-6.7-6.7-.1-1.3.7-2.5 2.1-2.5Z" />
    </svg>
  )
}

export function IconPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 24s8-6.4 8-12a8 8 0 1 0-16 0c0 5.6 8 12 8 12Z" />
      <circle cx="14" cy="12" r="2.6" />
    </svg>
  )
}

export function IconClock(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="14" cy="14" r="10" />
      <path d="M14 8.5V14l3.5 2.2" />
    </svg>
  )
}

export function IconInstagram(props) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="5" width="18" height="18" rx="5" />
      <circle cx="14" cy="14" r="4" />
      <circle cx="19" cy="9" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

// Mapa de nomes → componente, para uso a partir dos dados em site.js
export const iconMap = {
  fisio: IconFisio,
  agulha: IconAgulha,
  coluna: IconColuna,
  integra: IconIntegra,
  evidencia: IconEvidencia,
  pessoa: IconPessoa,
  movimento: IconMovimento,
}
