import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Button from './ui/Button'
import Foto from './ui/Foto'
import { MARCA, LOGO } from '../lib/site'
import { parallax, staggerIn } from '../lib/animations'

/**
 * Hero em tela cheia: foto real de fundo com parallax, slogan que se monta
 * com stagger (palavras entrando em sequência), descrição e CTA grande.
 */
export default function Hero() {
  const fotoRef = useRef(null)
  const palavrasRef = useRef([])

  // Quebra o slogan em palavras para o efeito stagger.
  const palavras = MARCA.slogan.split(' ')

  useEffect(() => {
    parallax(fotoRef.current, { amount: 140 })
    staggerIn(palavrasRef.current, { stagger: 0.12, y: 50, delay: 0.2 })
  }, [])

  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      {/* Foto de fundo com parallax (vai um pouco além da viewport) */}
      <div className="absolute inset-0 -z-10">
        <div ref={fotoRef} className="absolute inset-0 -top-[10%] h-[120%]">
          <Foto
            foto={{
              src: null,
              label: 'HERO · barbeiro em ação ou fachada/ambiente (horizontal)',
              alt: 'Ambiente da Barbearia Alfa',
            }}
            showLabel={false}
            className="h-full w-full"
            imgClassName="h-full w-full object-cover"
          />
        </div>
        {/* Gradiente para legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-carvao via-carvao/70 to-carvao/30" />
      </div>

      {/* Logo em destaque, preenchendo a área superior do hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        className="pointer-events-none absolute inset-x-0 top-[20%] flex justify-center md:top-[16%]"
      >
        <div className="relative">
          {/* Brilho suave atrás da logo */}
          <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-terracota/20 blur-3xl" />
          <img
            src={LOGO}
            alt={MARCA.nome}
            className="w-44 rounded-full shadow-2xl shadow-black/50 ring-1 ring-creme/10 sm:w-52 md:w-64"
          />
        </div>
      </motion.div>

      {/* Conteúdo */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-32 md:px-8 md:pb-28">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-terracota">
          {MARCA.endereco}
        </p>

        <h1 className="font-display text-[clamp(2.75rem,9vw,8rem)] uppercase text-creme">
          {palavras.map((p, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <span
                ref={(el) => (palavrasRef.current[i] = el)}
                className="mr-[0.25em] inline-block"
              >
                {p}
              </span>
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-creme/80 md:text-lg">
          {MARCA.descricao}
        </p>

        <div className="mt-9">
          <Button className="text-base md:text-lg">Agendar pelo WhatsApp</Button>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-creme/50 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Role</span>
        <span className="h-10 w-px animate-pulse bg-creme/40" />
      </div>
    </section>
  )
}
