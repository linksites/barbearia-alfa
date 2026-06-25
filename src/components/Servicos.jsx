import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { GiRazor, GiBeard, GiScissors } from 'react-icons/gi'
import Button from './ui/Button'
import { revealMask } from '../lib/animations'

const SERVICOS = [
  {
    icon: GiScissors,
    nome: 'Corte',
    desc: 'Corte na tesoura ou máquina, finalizado do seu jeito.',
    preco: 'a partir de R$ —',
  },
  {
    icon: GiBeard,
    nome: 'Barba',
    desc: 'Toalha quente, navalha e desenho preciso.',
    preco: 'a partir de R$ —',
    destaque: true,
  },
  {
    icon: GiRazor,
    nome: 'Combo',
    desc: 'Corte + barba: a experiência completa Padrão Alpha.',
    preco: 'a partir de R$ —',
  },
]

/**
 * Serviços: cards de Corte, Barba e Combo. Preço como placeholder.
 * Reveal por máscara ao entrar na tela + micro-interação no hover (Framer).
 */
export default function Servicos() {
  const tituloRef = useRef(null)
  useEffect(() => revealMask(tituloRef.current), [])

  return (
    <section id="servicos" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div ref={tituloRef} className="mb-14 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-terracota">
          O que fazemos
        </p>
        <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] uppercase text-creme">
          Serviços
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {SERVICOS.map(({ icon: Icon, nome, desc, preco, destaque }) => (
          <motion.article
            key={nome}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`flex flex-col rounded-2xl border p-8 ${
              destaque
                ? 'border-terracota/60 bg-terracota/[0.06]'
                : 'border-creme/10 bg-creme/[0.02]'
            }`}
          >
            <Icon className="mb-6 text-4xl text-terracota" aria-hidden="true" />
            <h3 className="font-display text-3xl uppercase text-creme">{nome}</h3>
            <p className="mt-3 flex-1 text-creme/70">{desc}</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-creme/50">
              {preco}
            </p>
            <div className="mt-6">
              <Button
                variant={destaque ? 'solid' : 'outline'}
                className="w-full"
              >
                Agendar {nome}
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
