import Reveal from './Reveal'

// Cabeçalho de seção reutilizável (kicker + título + subtítulo).
export default function SectionHeader({ kicker, titulo, sub, center = true, light = false }) {
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {kicker && (
        <Reveal>
          <span className={`kicker ${light ? 'text-prata' : ''}`}>
            <span className="h-px w-8 bg-cobre" />
            {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`display mt-5 text-4xl sm:text-5xl ${
            light ? 'text-gelo' : 'text-tinta'
          }`}
        >
          {titulo}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 text-lg leading-relaxed ${
              light ? 'text-prata/80' : 'text-aco/80'
            } ${center ? 'mx-auto' : ''}`}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  )
}
