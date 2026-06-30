import { motion } from 'framer-motion'
import GridBackdrop from './ui/GridBackdrop'
import SpineNeedle from './ui/SpineNeedle'
import { stagger, fadeUp, blurUp } from '../lib/animations'
import { profissional, linkWhatsApp, stats } from '../lib/site'
import { IconWhats, IconArrow } from './ui/Icons'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-[72px]">
      <GridBackdrop />

      <div className="container-x grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        {/* Coluna de texto */}
        <motion.div variants={stagger(0.14, 0.1)} initial="hidden" animate="show">
          <motion.span
            variants={fadeUp}
            className="kicker"
          >
            <span className="h-px w-8 bg-cobre" />
            {profissional.especialidades}
          </motion.span>

          <motion.h1
            variants={blurUp}
            className="display mt-6 text-5xl text-tinta sm:text-6xl lg:text-7xl"
          >
            <span className="text-steel-gradient">Movimento sem dor,</span>
            <br />
            cuidado com <span className="italic text-copper">propósito</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-lg leading-relaxed text-aco/85"
          >
            Tratamento integrativo que une{' '}
            <strong className="font-semibold text-tinta">fisioterapia</strong>,{' '}
            <strong className="font-semibold text-tinta">acupuntura</strong> e{' '}
            <strong className="font-semibold text-tinta">quiropraxia</strong> para
            tratar a causa da sua dor — não apenas o sintoma. Avaliação
            individualizada e técnica baseada em evidência.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <IconWhats width={18} height={18} />
              Agende sua consulta
            </a>
            <a href="#especialidades" className="btn-ghost">
              Conheça os tratamentos
              <IconArrow width={18} height={18} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-linha pt-7"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-semibold text-tinta">
                  {s.valor}
                  {s.sufixo && (
                    <span className="ml-1 text-sm font-medium text-cobre">{s.sufixo}</span>
                  )}
                </div>
                <div className="mt-1 text-xs leading-snug text-aco/70">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Coluna visual: motivo coluna+agulha em cartão de vidro */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="card-glass relative mx-auto max-w-md p-8"
          >
            <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-widest2 text-petroleo/80">
              <span>Coluna · Equilíbrio</span>
              <span>{profissional.crefito}</span>
            </div>

            <div className="relative my-2 flex justify-center">
              <SpineNeedle className="h-[320px] w-auto animate-floaty" />
            </div>

            <div className="hairline my-4" />
            <p className="text-center text-sm text-aco/80">
              Da <span className="text-copper">avaliação</span> ao tratamento — um plano
              feito para o seu corpo.
            </p>
          </motion.div>

          {/* Selos flutuantes */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="absolute -left-3 top-1/3 hidden rounded-full border border-linha bg-white/90 px-4 py-2 text-xs font-medium text-aco shadow-soft backdrop-blur md:block"
          >
            ⌁ Acupuntura
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="absolute -right-3 top-2/3 hidden rounded-full border border-linha bg-white/90 px-4 py-2 text-xs font-medium text-aco shadow-soft backdrop-blur md:block"
          >
            ⌃ Ajuste quiroprático
          </motion.div>
        </div>
      </div>

      {/* Faixa de transição inferior */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-linha to-transparent" />
    </section>
  )
}
