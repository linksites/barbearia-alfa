import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { linkWhatsApp } from '../../lib/site'
import { IconWhats } from './Icons'

// Botão flutuante de WhatsApp — aparece após rolar um pouco.
export default function FloatingWhats() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar pelo WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.06 }}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-tinta text-gelo shadow-lift"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-cobre/30" />
          <IconWhats width={26} height={26} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
