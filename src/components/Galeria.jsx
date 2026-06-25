import { useEffect, useRef } from 'react'
import Foto from './ui/Foto'
import { FOTOS } from '../lib/site'
import { revealMask } from '../lib/animations'

/**
 * Galeria em grade assimétrica (alturas/colunas variadas) com as fotos reais.
 * Cada item revela com máscara ao entrar na tela.
 */
export default function Galeria() {
  const itensRef = useRef([])

  useEffect(() => {
    itensRef.current.forEach((el, i) =>
      revealMask(el, { delay: (i % 3) * 0.08 }),
    )
  }, [])

  // Classes que criam a assimetria do mosaico (col-span / row-span).
  const spans = [
    'md:col-span-2 md:row-span-2',
    'md:col-span-1',
    'md:col-span-1',
    'md:col-span-1',
    'md:col-span-2',
    'md:col-span-1',
  ]

  return (
    <section id="galeria" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-14 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-terracota">
          Nosso trabalho
        </p>
        <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] uppercase text-creme">
          Galeria
        </h2>
      </div>

      <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
        {FOTOS.galeria.map((foto, i) => (
          <div
            key={i}
            ref={(el) => (itensRef.current[i] = el)}
            className={`overflow-hidden rounded-2xl ${spans[i] ?? ''}`}
          >
            <Foto
              foto={foto}
              className="h-full w-full transition-transform duration-500 hover:scale-105"
              imgClassName="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
