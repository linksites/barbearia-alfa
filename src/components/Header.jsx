import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import { MARCA, WHATSAPP_URL } from '../lib/site'

const LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#videos', label: 'Vídeos' },
  { href: '#localizacao', label: 'Localização' },
]

/**
 * Header fixo: logo + menu com rolagem suave + botão "Agendar" sempre visível.
 * Ganha fundo sólido ao rolar. Menu mobile recolhível.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-carvao/85 backdrop-blur-md border-b border-creme/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <a
          href="#topo"
          className="font-display text-2xl uppercase tracking-wide text-creme"
        >
          {MARCA.nome.split(' ')[0]}
          <span className="text-terracota">.</span>
          <span className="text-creme/70">{MARCA.nome.split(' ')[1]}</span>
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium uppercase tracking-widest text-creme/80 transition-colors hover:text-terracota"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop + botão menu mobile */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2 rounded-full bg-terracota px-5 py-2.5 text-sm font-semibold text-carvao transition-colors hover:bg-[#d97339] sm:inline-flex"
          >
            <FaWhatsapp aria-hidden="true" />
            Agendar
          </a>
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={aberto}
            className="text-2xl text-creme md:hidden"
          >
            {aberto ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Menu mobile recolhível */}
      {aberto && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="flex flex-col gap-1 border-t border-creme/10 bg-carvao/95 px-5 py-4 md:hidden"
        >
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setAberto(false)}
                className="block py-2 text-sm font-medium uppercase tracking-widest text-creme/80 hover:text-terracota"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-terracota px-5 py-2.5 text-sm font-semibold text-carvao"
            >
              <FaWhatsapp aria-hidden="true" />
              Agendar pelo WhatsApp
            </a>
          </li>
        </motion.ul>
      )}
    </motion.header>
  )
}
