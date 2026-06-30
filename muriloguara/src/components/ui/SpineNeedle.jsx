import { motion } from 'framer-motion'

// Peça-assinatura do hero: coluna vertebral desenhada + agulha de acupuntura
// com pontos que "acendem". Reinterpreta o conceito da logo (M = coluna +
// agulha) de forma editorial. Anima o traçado e os pontos de acupuntura.

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.05 },
      opacity: { duration: 0.3, delay: 0.2 + i * 0.05 },
    },
  }),
}

// Pares de vértebras (y) ao longo da coluna
const vertebras = [
  { y: 60, w: 40 },
  { y: 92, w: 46 },
  { y: 124, w: 50 },
  { y: 156, w: 52 },
  { y: 188, w: 50 },
  { y: 220, w: 46 },
  { y: 252, w: 40 },
  { y: 284, w: 34 },
]

// Pontos de acupuntura que acendem em sequência
const pontos = [
  { x: 196, y: 96 },
  { x: 196, y: 150 },
  { x: 196, y: 210 },
  { x: 196, y: 268 },
]

export default function SpineNeedle({ className = '' }) {
  return (
    <svg
      viewBox="0 0 280 360"
      className={className}
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="steel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1b2a38" />
          <stop offset="50%" stopColor="#3f5d78" />
          <stop offset="100%" stopColor="#9fb3c4" />
        </linearGradient>
        <linearGradient id="copper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c98a4b" />
          <stop offset="100%" stopColor="#8a5a33" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c98a4b" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c98a4b" stopOpacity="0" />
        </radialGradient>
      </defs>

      <motion.g initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
        {/* Curva central da coluna */}
        <motion.path
          d="M118 40 C 96 96, 140 120, 118 176 S 96 264, 118 320"
          stroke="url(#steel)"
          strokeWidth="3"
          strokeLinecap="round"
          variants={draw}
        />

        {/* Vértebras */}
        {vertebras.map((v, i) => (
          <motion.path
            key={i}
            d={`M${118 - v.w / 2} ${v.y} Q 118 ${v.y - 10}, ${118 + v.w / 2} ${v.y}`}
            stroke="url(#steel)"
            strokeWidth="2.4"
            strokeLinecap="round"
            custom={i}
            variants={draw}
          />
        ))}

        {/* Agulha de acupuntura (haste + cabo espiralado) */}
        <motion.line
          x1="196"
          y1="70"
          x2="196"
          y2="300"
          stroke="url(#copper)"
          strokeWidth="2.6"
          strokeLinecap="round"
          variants={draw}
          custom={6}
        />
        <motion.path
          d="M196 70 c -7 -2 -7 -8 0 -10 c 7 -2 7 -8 0 -10"
          stroke="url(#copper)"
          strokeWidth="2.4"
          strokeLinecap="round"
          variants={draw}
          custom={7}
        />

        {/* Pontos de acupuntura que acendem */}
        {pontos.map((p, i) => (
          <g key={i}>
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="16"
              fill="url(#glow)"
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: [0, 0.9, 0.35], scale: [0.4, 1.1, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 2.2, delay: 1.4 + i * 0.25, repeat: Infinity, repeatDelay: 1.6 }}
            />
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="3"
              fill="#c98a4b"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 + i * 0.25 }}
            />
          </g>
        ))}
      </motion.g>
    </svg>
  )
}
