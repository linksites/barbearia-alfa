import { motion } from 'framer-motion'
import Reveal from './ui/Reveal'
import { profissional, linkWhatsApp } from '../lib/site'
import { IconWhats, IconPin, IconClock, IconArrow } from './ui/Icons'

export default function CTAFinal() {
  return (
    <section id="agendar" className="relative overflow-hidden bg-tinta py-24 text-gelo md:py-32">
      {/* fundo: mesh escuro + grade */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(159,179,196,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(159,179,196,0.5) 1px, transparent 1px)',
            backgroundSize: '54px 54px',
            maskImage: 'radial-gradient(80% 80% at 50% 30%, black, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(80% 80% at 50% 30%, black, transparent 75%)',
          }}
        />
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-petroleo/30 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-cobre/20 blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="kicker text-prata">
              <span className="h-px w-8 bg-cobre" />
              Vamos começar
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-6 text-4xl text-gelo sm:text-6xl">
              Sua dor tem uma causa.
              <br />
              <span className="italic text-copper">Vamos encontrá-la juntos.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-prata/85">
              Agende sua avaliação com {profissional.nome} e dê o primeiro passo para
              voltar a se mover com liberdade.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <motion.a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gelo px-8 py-4 text-sm font-semibold text-tinta shadow-lift transition-shadow hover:shadow-[0_24px_60px_-16px_rgba(176,118,74,0.5)]"
            >
              <IconWhats width={20} height={20} />
              Agendar pelo WhatsApp
              <IconArrow width={18} height={18} />
            </motion.a>
          </Reveal>
        </div>

        {/* cartões de info */}
        <Reveal delay={0.2}>
          <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
            <InfoCard Icon={IconPin} titulo="Onde" linhas={[profissional.clinica, profissional.cidade]} />
            <InfoCard Icon={IconClock} titulo="Atendimento" linhas={['Com hora marcada', 'Seg a Sex']} />
            <InfoCard Icon={IconWhats} titulo="Contato" linhas={[profissional.whatsappLabel, 'WhatsApp']} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function InfoCard({ Icon, titulo, linhas }) {
  return (
    <div className="rounded-2xl border border-prata/15 bg-white/[0.04] p-6 backdrop-blur">
      <Icon width={22} height={22} className="text-cobreClaro" />
      <div className="mt-4 text-[0.65rem] uppercase tracking-widest2 text-prata/60">
        {titulo}
      </div>
      {linhas.map((l, i) => (
        <div key={i} className={i === 0 ? 'mt-1 font-medium text-gelo' : 'text-sm text-prata/70'}>
          {l}
        </div>
      ))}
    </div>
  )
}
