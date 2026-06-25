import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import { MARCA, WHATSAPP_URL } from '../lib/site'

/**
 * Footer: nome, endereço, telefone e ano atual.
 */
export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="border-t border-creme/10 px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-3xl uppercase text-creme">
            {MARCA.nome.split(' ')[0]}
            <span className="text-terracota">.</span>
            <span className="text-creme/70">{MARCA.nome.split(' ')[1]}</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-creme/60">{MARCA.slogan}.</p>
        </div>

        <ul className="space-y-3 text-sm text-creme/70">
          <li className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-terracota" aria-hidden="true" />
            {MARCA.endereco}
          </li>
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 hover:text-terracota"
            >
              <FaWhatsapp className="text-terracota" aria-hidden="true" />
              {MARCA.telefone}
            </a>
          </li>
        </ul>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-creme/10 pt-6 text-center text-xs uppercase tracking-widest text-creme/40 md:flex md:justify-between md:text-left">
        <span>
          © {ano} {MARCA.nome}. Todos os direitos reservados.
        </span>
        <span className="mt-2 block md:mt-0">
          Desenvolvido por <span className="text-creme/70">TECHLAB</span>
        </span>
      </div>
    </footer>
  )
}
