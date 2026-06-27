import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { PROMOS, WHATSAPP_URL } from '../lib/site'
import { revealMask } from '../lib/animations'

/**
 * Promoções: artes prontas (9:16) que abrem o WhatsApp ao clicar.
 * As imagens já trazem o texto da campanha — aqui só damos moldura,
 * hover e o CTA de agendamento.
 */
export default function Promocoes() {
  const tituloRef = useRef(null)
  const itensRef = useRef([])

  useEffect(() => {
    revealMask(tituloRef.current)
    itensRef.current.forEach((el, i) => revealMask(el, { delay: i * 0.1 }))
  }, [])

  return (
    <section id="promocoes" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div ref={tituloRef} className="mb-14 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-terracota">
          Fique de olho
        </p>
        <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] uppercase text-creme">
          Promoções
        </h2>
        <p className="mt-4 text-creme/70">
          Toque em uma arte para agendar pelo WhatsApp.
        </p>
      </div>

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {PROMOS.map((promo, i) => (
          <motion.a
            key={i}
            ref={(el) => (itensRef.current[i] = el)}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            aria-label="Agendar pelo WhatsApp"
            className="group relative block aspect-[9/16] overflow-hidden rounded-2xl border border-creme/10 bg-carvao"
          >
            <img
              src={promo.src}
              alt={promo.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-terracota px-5 py-2.5 text-sm font-semibold text-carvao opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <FaWhatsapp aria-hidden="true" />
              Agendar
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
