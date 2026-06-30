import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'
import { faq, linkWhatsApp } from '../lib/site'
import { IconChevron, IconWhats } from './ui/Icons'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative bg-nevoa py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionHeader
            center={false}
            kicker="Dúvidas frequentes"
            titulo="Antes de agendar, talvez você se pergunte…"
            sub="E se a sua dúvida não estiver aqui, é só me chamar. Respondo pessoalmente."
          />
          <Reveal delay={0.15} className="mt-8">
            <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <IconWhats width={18} height={18} />
              Tirar uma dúvida
            </a>
          </Reveal>
        </div>

        <div className="space-y-3">
          {faq.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white/70 backdrop-blur transition-colors ${
                    isOpen ? 'border-cobre/40' : 'border-linha'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-display text-lg font-semibold text-tinta">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        isOpen ? 'bg-cobre/10 text-cobre' : 'bg-nevoa text-petroleo'
                      }`}
                    >
                      <IconChevron width={16} height={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-aco/80">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
