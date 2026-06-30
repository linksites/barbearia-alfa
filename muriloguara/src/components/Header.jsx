import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './ui/Logo'
import { nav, linkWhatsApp } from '../lib/site'
import { IconWhats, IconChevron } from './ui/Icons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-linha/70 bg-gelo/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-aco/80 transition-colors hover:text-tinta"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cobre transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden md:inline-flex"
          >
            <IconWhats width={18} height={18} />
            Agendar
          </a>

          {/* Toggle mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-linha bg-white/60 text-aco lg:hidden"
            aria-label="Abrir menu"
          >
            <motion.div animate={{ rotate: open ? 180 : 0 }}>
              <IconChevron width={20} height={20} />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-linha/70 bg-gelo/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="container-x flex flex-col py-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-linha/60 py-3 text-sm font-medium text-aco"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={linkWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4"
              >
                <IconWhats width={18} height={18} />
                Agendar consulta
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
