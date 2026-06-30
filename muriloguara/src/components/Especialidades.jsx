import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'
import { especialidades } from '../lib/site'
import { iconMap, IconArrow } from './ui/Icons'
import { stagger, fadeUp } from '../lib/animations'

export default function Especialidades() {
  return (
    <section id="especialidades" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          kicker="Três frentes, um só cuidado"
          titulo="Especialidades que se complementam"
          sub="Cada técnica trata um aspecto da sua queixa. Juntas, formam uma abordagem completa para a dor e o movimento."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {especialidades.map((e, i) => {
            const Icon = iconMap[e.icone]
            return (
              <motion.article
                key={e.id}
                variants={fadeUp}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-linha bg-white/70 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-petroleo/30 hover:shadow-lift"
              >
                {/* índice */}
                <span className="absolute right-6 top-6 font-display text-5xl font-semibold text-linha/80 transition-colors group-hover:text-cobre/30">
                  0{i + 1}
                </span>

                <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-linha bg-nevoa text-aco transition-colors group-hover:border-cobre/40 group-hover:text-cobre">
                  <Icon width={28} height={28} />
                </span>

                <h3 className="mt-6 font-display text-2xl font-semibold text-tinta">
                  {e.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-aco/80">{e.resumo}</p>

                <ul className="mt-6 space-y-2.5 border-t border-linha pt-5">
                  {e.pontos.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-aco/85">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobre" />
                      {p}
                    </li>
                  ))}
                </ul>

                {/* brilho inferior no hover */}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cobre/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.article>
            )
          })}
        </motion.div>

        <Reveal delay={0.1} className="mt-12 text-center">
          <a href="#tratamentos" className="btn-ghost">
            Ver condições tratadas
            <IconArrow width={18} height={18} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
