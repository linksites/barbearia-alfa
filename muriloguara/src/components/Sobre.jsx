import { motion } from 'framer-motion'
import Reveal from './ui/Reveal'
import { profissional, linkWhatsApp } from '../lib/site'
import { IconEvidencia, IconPessoa, IconIntegra, IconWhats } from './ui/Icons'

const valores = [
  { Icon: IconEvidencia, t: 'Técnica e estudo', d: 'Condutas atualizadas e raciocínio clínico em cada sessão.' },
  { Icon: IconPessoa, t: 'Escuta de verdade', d: 'Tempo para entender você e a sua história de dor.' },
  { Icon: IconIntegra, t: 'Visão integrativa', d: 'Fisio, acupuntura e quiropraxia trabalhando juntas.' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="relative bg-nevoa py-24 md:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Retrato */}
        <Reveal variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}>
          <div className="relative mx-auto max-w-md">
            {/* moldura de aço */}
            <div className="absolute -inset-3 rounded-[1.6rem] bg-gradient-to-br from-petroleo/15 via-transparent to-cobre/15" />
            <div className="relative overflow-hidden rounded-[1.4rem] border border-white/70 shadow-lift">
              <img
                src="/assets/murilo-retrato.jpeg"
                alt={`${profissional.nome}, fisioterapeuta`}
                className="aspect-[4/5] w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-tinta/85 via-tinta/30 to-transparent p-6">
                <div className="font-display text-2xl font-semibold text-gelo">
                  {profissional.nome}
                </div>
                <div className="text-sm text-prata">
                  {profissional.titulo} · {profissional.crefito}
                </div>
              </div>
            </div>
            {/* selo flutuante */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 top-8 rounded-2xl border border-linha bg-white/90 px-4 py-3 text-center shadow-soft backdrop-blur"
            >
              <div className="font-display text-2xl font-semibold text-tinta">3</div>
              <div className="text-[0.6rem] uppercase tracking-widest text-petroleo">
                especialidades
              </div>
            </motion.div>
          </div>
        </Reveal>

        {/* Texto */}
        <div>
          <Reveal>
            <span className="kicker">
              <span className="h-px w-8 bg-cobre" />
              Sobre o profissional
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-5 text-4xl text-tinta sm:text-5xl">
              Um cuidado que enxerga você por inteiro
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-aco/85">
              <p>
                Sou <strong className="font-semibold text-tinta">{profissional.nome}</strong>,
                fisioterapeuta dedicado ao tratamento da dor e à recuperação do
                movimento. Atuo de forma integrativa, combinando{' '}
                <strong className="font-semibold text-tinta">fisioterapia</strong>,{' '}
                <strong className="font-semibold text-tinta">acupuntura</strong> e{' '}
                <strong className="font-semibold text-tinta">quiropraxia</strong> para
                oferecer o caminho mais eficiente para cada pessoa.
              </p>
              <p>
                Meu compromisso é tratar a <span className="text-copper">causa</span>, e não
                apenas silenciar o sintoma. Por isso, tudo começa por uma avaliação
                criteriosa — porque dois corpos nunca são iguais.
              </p>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {valores.map((v, i) => (
              <Reveal key={v.t} delay={0.12 + i * 0.06}>
                <div className="h-full rounded-xl border border-linha bg-white/60 p-5">
                  <v.Icon width={24} height={24} className="text-cobre" />
                  <div className="mt-3 text-sm font-semibold text-tinta">{v.t}</div>
                  <div className="mt-1 text-xs leading-relaxed text-aco/75">{v.d}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-9">
            <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <IconWhats width={18} height={18} />
              Conversar no WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
