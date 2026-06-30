import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import { jornada } from '../lib/site'
import { fadeUp, stagger } from '../lib/animations'

export default function Jornada() {
  return (
    <section id="jornada" className="relative bg-nevoa py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          kicker="Como funciona"
          titulo="A sua jornada, passo a passo"
          sub="Um processo claro, do primeiro contato à sua autonomia. Você sempre sabe onde está e para onde vamos."
        />

        <motion.ol
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mx-auto mt-16 max-w-3xl"
        >
          {/* linha vertical */}
          <span className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-linha to-transparent md:left-1/2" />

          {jornada.map((etapa, i) => (
            <motion.li
              key={etapa.n}
              variants={fadeUp}
              className={`relative mb-10 flex items-start gap-6 md:mb-12 md:w-1/2 ${
                i % 2 === 0 ? 'md:ml-0 md:pr-12 md:text-right' : 'md:ml-auto md:flex-row-reverse md:pl-12'
              }`}
            >
              {/* nó */}
              <span
                className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-linha bg-white font-display text-lg font-semibold text-petroleo shadow-soft ${
                  i % 2 === 0 ? 'md:order-2 md:-mr-7' : 'md:-ml-7'
                }`}
              >
                {etapa.n}
                <span className="absolute inset-0 rounded-full ring-1 ring-cobre/0 transition-all" />
              </span>

              <div className={`pt-1 ${i % 2 === 0 ? 'md:order-1' : ''}`}>
                <h3 className="font-display text-xl font-semibold text-tinta">
                  {etapa.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-aco/80">{etapa.texto}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
