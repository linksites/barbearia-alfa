import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import { diferenciais } from '../lib/site'
import { iconMap } from './ui/Icons'
import { fadeUp, stagger } from '../lib/animations'

export default function Diferenciais() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          kicker="Por que tratar comigo"
          titulo="O que torna o cuidado diferente"
          sub="Não é sobre uma técnica isolada — é sobre como elas se conectam em torno de você."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {diferenciais.map((d) => {
            const Icon = iconMap[d.icone]
            return (
              <motion.div
                key={d.titulo}
                variants={fadeUp}
                className="group relative rounded-2xl border border-linha bg-white/60 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tinta text-gelo transition-transform duration-500 group-hover:scale-105">
                  <Icon width={24} height={24} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-tinta">
                  {d.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-aco/80">{d.texto}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
