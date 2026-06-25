import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_URL } from '../../lib/site'

/**
 * Botão de ação (WhatsApp) com micro-interação no hover/tap via Framer Motion.
 * Abre sempre em nova aba e aponta para o mesmo link de agendamento.
 *
 * Variantes:
 *  - "solid"   → terracota preenchido (CTA principal)
 *  - "outline" → contorno creme (uso secundário, ex.: header)
 */
export default function Button({
  children = 'Agendar pelo WhatsApp',
  variant = 'solid',
  className = '',
  href = WHATSAPP_URL,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-offset-4'

  const variants = {
    solid:
      'bg-terracota text-carvao px-7 py-3.5 hover:bg-[#d97339] shadow-lg shadow-terracota/20',
    outline:
      'border border-creme/30 text-creme px-5 py-2.5 hover:border-terracota hover:text-terracota',
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener"
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <FaWhatsapp className="text-lg" aria-hidden="true" />
      <span>{children}</span>
    </motion.a>
  )
}
