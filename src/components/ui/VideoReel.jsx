import { useEffect, useRef, useState } from 'react'
import { FaPlay } from 'react-icons/fa'

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Card de vídeo vertical (Reel 9:16).
 *
 * - Mudo + `playsInline` + `loop` para autoplay sem fricção no mobile.
 * - `preload="none"` e poster: não baixa o vídeo até precisar (LCP rápido).
 * - IntersectionObserver toca só quando está visível e pausa ao sair da tela,
 *   economizando bateria e dados. Respeita `prefers-reduced-motion`: nesse
 *   caso fica no poster e o usuário abre no lightbox por escolha.
 * - O card inteiro é um botão que dispara `onOpen` (abre o lightbox Stories).
 */
export default function VideoReel({ video, onOpen, className = '' }) {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion()) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Abrir vídeo: ${video.titulo}`}
      className={`group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl bg-carvao ${className}`}
    >
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="none"
        poster={video.poster}
        onLoadedData={() => setReady(true)}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      >
        <source src={video.webm} type="video/webm" />
        <source src={video.mp4} type="video/mp4" />
      </video>

      {/* Gradiente para legibilidade do título */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carvao/80 via-transparent to-carvao/10" />

      {/* Selo de play (some quando o vídeo já está rodando) */}
      <span
        className={`pointer-events-none absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-carvao/60 text-creme backdrop-blur transition-opacity duration-300 ${
          ready ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <FaPlay className="ml-0.5 text-xs" aria-hidden="true" />
      </span>

      {/* Título */}
      <span className="pointer-events-none absolute bottom-3 left-4 right-4 text-left font-display text-lg uppercase leading-tight text-creme drop-shadow">
        {video.titulo}
      </span>
    </button>
  )
}
