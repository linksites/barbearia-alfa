import Logo from './ui/Logo'
import { profissional, nav, linkWhatsApp } from '../lib/site'
import { IconWhats, IconInstagram, IconPin } from './ui/Icons'

export default function Footer() {
  const ano = new Date().getFullYear()
  return (
    <footer className="border-t border-linha bg-gelo">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-aco/75">
              Fisioterapia, acupuntura e quiropraxia com avaliação individualizada.
              Tratamento integrativo da dor e do movimento.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={linkWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-linha text-aco transition-colors hover:border-cobre/40 hover:text-cobre"
              >
                <IconWhats width={20} height={20} />
              </a>
              <a
                href={profissional.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-linha text-aco transition-colors hover:border-cobre/40 hover:text-cobre"
              >
                <IconInstagram width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-widest2 text-petroleo">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-aco/75 transition-colors hover:text-tinta">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-widest2 text-petroleo">
              Atendimento
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-aco/75">
              <li className="flex items-start gap-2.5">
                <IconPin width={18} height={18} className="mt-0.5 shrink-0 text-cobre" />
                <span>
                  {profissional.enderecoLinhas.map((l, i) => (
                    <span key={i} className="block">{l}</span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <IconWhats width={18} height={18} className="shrink-0 text-cobre" />
                {profissional.whatsappLabel}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-linha pt-6 text-xs text-aco/60 sm:flex-row">
          <p>
            © {ano} {profissional.nome} · {profissional.crefito}. Todos os direitos reservados.
          </p>
          <p className="text-aco/50">
            Este site tem caráter informativo e não substitui avaliação presencial.
          </p>
        </div>
      </div>
    </footer>
  )
}
