import { motion } from 'framer-motion'
import GridBackdrop from './ui/GridBackdrop'
import Reveal from './ui/Reveal'
import { condicoes, linkWhatsApp } from '../lib/site'
import { stagger, scaleIn } from '../lib/animations'
import { IconWhats } from './ui/Icons'

export default function Tratamentos() {
  return (
    <section id="tratamentos" className="relative overflow-hidden py-24 md:py-32">
      <GridBackdrop faded />
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Coluna sticky */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <Reveal>
            <span className="kicker">
              <span className="h-px w-8 bg-cobre" />
              Quando procurar
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-5 text-4xl text-tinta sm:text-5xl">
              Condições que tratamos com frequência
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-aco/80">
              Da dor aguda ao desconforto que já virou rotina. Se a sua queixa não
              está na lista, fale comigo — a avaliação esclarece o melhor caminho.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <IconWhats width={18} height={18} />
              Falar sobre o meu caso
            </a>
          </Reveal>
        </div>

        {/* Grade de condições */}
        <motion.ul
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {condicoes.map((c, i) => (
            <motion.li
              key={c}
              variants={scaleIn}
              className="group flex items-center gap-4 rounded-xl border border-linha bg-white/70 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-cobre/40 hover:shadow-soft"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-nevoa font-display text-sm font-semibold text-petroleo transition-colors group-hover:bg-cobre/10 group-hover:text-cobre">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-sm font-medium text-aco group-hover:text-tinta">{c}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
