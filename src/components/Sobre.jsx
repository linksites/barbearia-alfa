import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Foto from './ui/Foto'
import { FOTOS } from '../lib/site'

gsap.registerPlugin(ScrollTrigger)

const BLOCOS = [
  {
    k: 'Experiência',
    t: 'Mais que um corte. Um ritual.',
    d: 'Da recepção à navalha, cada etapa é pensada para você desacelerar e sair com a sensação de renovado.',
  },
  {
    k: 'Técnica',
    t: 'Precisão em cada detalhe.',
    d: 'Barbeiros de elite, ferramentas afiadas e um olhar treinado para realçar o seu estilo.',
  },
  {
    k: 'Atitude',
    t: 'A nova era das barbearias.',
    d: 'Ambiente moderno, urbano e sem firulas — feito para quem leva a própria imagem a sério.',
  },
]

/**
 * Sobre / Experiência — a seção mais cinematográfica.
 *
 * Com movimento: seção FIXADA (pin) — a foto faz um leve zoom e os blocos de
 * texto trocam UM POR VEZ conforme o scroll (crossfade sequencial, sem que
 * dois blocos fiquem visíveis ao mesmo tempo).
 *
 * Com "reduzir movimento": sem pin; os blocos viram uma lista vertical
 * estática e legível (sem empilhamento absoluto, sem sobreposição).
 */
export default function Sobre() {
  const root = useRef(null)
  const fotoRef = useRef(null)
  const blocosRef = useRef([])

  // Detecta a preferência de movimento já na montagem, para escolher o layout.
  const [reduzido, setReduzido] = useState(false)
  useEffect(() => {
    setReduzido(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    )
  }, [])

  useEffect(() => {
    // No modo reduzido os blocos ficam em fluxo normal e visíveis: nada a animar.
    if (reduzido) return

    const ctx = gsap.context(() => {
      // Estado inicial: apenas o primeiro bloco visível; os demais ocultos.
      gsap.set(blocosRef.current, { opacity: 0, y: 30 })
      gsap.set(blocosRef.current[0], { opacity: 1, y: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: '+=220%',
          pin: true,
          scrub: 1,
        },
      })

      // Zoom lento e contínuo na foto durante todo o pin.
      tl.to(fotoRef.current, { scale: 1.12, ease: 'none' }, 0)

      // Troca dos blocos: o anterior some POR COMPLETO antes do próximo entrar
      // (posições sequenciais com '>'), evitando dois textos no mesmo lugar.
      blocosRef.current.forEach((bloco, i) => {
        if (i === 0) return
        const anterior = blocosRef.current[i - 1]
        tl.to(anterior, { opacity: 0, y: -30, duration: 0.5 }, '>')
        tl.to(bloco, { opacity: 1, y: 0, duration: 0.5 }, '>')
      })
    }, root)

    return () => ctx.revert()
  }, [reduzido])

  return (
    <section
      id="sobre"
      ref={root}
      className={`relative overflow-hidden ${
        reduzido ? 'min-h-screen py-24' : 'h-[100svh]'
      }`}
    >
      {/* Foto de fundo (zoom no scroll) */}
      <div ref={fotoRef} className="absolute inset-0 -z-10 will-change-transform">
        <Foto
          foto={FOTOS.retrato}
          className="h-full w-full"
          imgClassName="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carvao via-carvao/85 to-carvao/30" />
      </div>

      {/* Blocos de texto */}
      <div className="mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
        <div className={`relative w-full max-w-xl ${reduzido ? 'space-y-16' : ''}`}>
          {BLOCOS.map((b, i) => (
            <div
              key={b.k}
              ref={(el) => (blocosRef.current[i] = el)}
              // Com movimento: do 2º bloco em diante ficam sobrepostos (absolute)
              // e começam invisíveis (opacity 0 inline) para não "piscar" no load.
              // No modo reduzido: fluxo normal, todos visíveis.
              className={!reduzido && i > 0 ? 'absolute inset-0' : ''}
              style={!reduzido && i > 0 ? { opacity: 0 } : undefined}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-terracota">
                {b.k}
              </p>
              <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] uppercase leading-none text-creme">
                {b.t}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-creme/80">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
