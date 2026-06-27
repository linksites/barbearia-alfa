import { useEffect, useRef, useState } from 'react'
import VideoReel from './ui/VideoReel'
import VideoLightbox from './ui/VideoLightbox'
import { VIDEOS } from '../lib/site'
import { revealMask } from '../lib/animations'

/**
 * Seção de vídeos (Reels verticais) — substitui a antiga galeria de fotos.
 *
 * Parede de cards 9:16: rola na horizontal com scroll-snap no mobile e vira
 * uma fileira no desktop. Cada card dá autoplay mudo quando visível; ao clicar,
 * abre o lightbox estilo Stories (com som, progresso e navegação).
 */
export default function Videos() {
  const tituloRef = useRef(null)
  const itensRef = useRef([])
  const [aberto, setAberto] = useState(null)

  useEffect(() => {
    revealMask(tituloRef.current)
    itensRef.current.forEach((el, i) => revealMask(el, { delay: (i % 3) * 0.08 }))
  }, [])

  return (
    <section id="videos" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div ref={tituloRef} className="mb-14 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-terracota">
          Nosso trabalho
        </p>
        <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] uppercase text-creme">
          Vídeos
        </h2>
        <p className="mt-4 text-creme/70">
          Toque em um vídeo para assistir em tela cheia, com som.
        </p>
      </div>

      {/* Mobile: carrossel horizontal com snap · Desktop: fileira */}
      <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-5 md:gap-5 md:overflow-visible md:px-0">
        {VIDEOS.map((video, i) => (
          <div
            key={i}
            ref={(el) => (itensRef.current[i] = el)}
            className="w-[68vw] shrink-0 snap-center sm:w-[44vw] md:w-auto"
          >
            <VideoReel video={video} onOpen={() => setAberto(i)} />
          </div>
        ))}
      </div>

      <VideoLightbox
        videos={VIDEOS}
        index={aberto}
        onClose={() => setAberto(null)}
        onIndexChange={setAberto}
      />
    </section>
  )
}
