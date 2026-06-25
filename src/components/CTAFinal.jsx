import { useEffect, useRef } from 'react'
import Button from './ui/Button'
import { revealMask } from '../lib/animations'

/**
 * CTA final: chamada forte para agendar, sobre fundo terracota intenso.
 */
export default function CTAFinal() {
  const ref = useRef(null)
  useEffect(() => revealMask(ref.current), [])

  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div
        ref={ref}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-terracota px-6 py-16 text-center md:py-24"
      >
        {/* Textura sutil no fundo do bloco */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, #0E0E0E 0, transparent 40%), radial-gradient(circle at 80% 80%, #0E0E0E 0, transparent 40%)',
          }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.5rem,7vw,6rem)] uppercase leading-none text-carvao">
            Sua próxima visita começa agora
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-carvao/80">
            Garanta seu horário em segundos. O barbeiro confirma com você pelo
            WhatsApp.
          </p>
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              className="border-carvao/40 bg-carvao text-creme hover:border-carvao hover:text-creme"
            >
              Agendar pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
