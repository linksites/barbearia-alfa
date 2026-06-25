import { FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa'
import Button from './ui/Button'
import { MARCA } from '../lib/site'

/**
 * Localização: endereço por extenso + mapa do Google Maps incorporado.
 */
export default function Localizacao() {
  const mapsQuery = encodeURIComponent(MARCA.enderecoMaps)
  const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

  return (
    <section
      id="localizacao"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* Texto */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-terracota">
            Onde estamos
          </p>
          <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] uppercase leading-none text-creme">
            Venha nos visitar
          </h2>

          <ul className="mt-8 space-y-5 text-creme/80">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-terracota" aria-hidden="true" />
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener"
                className="hover:text-terracota"
              >
                {MARCA.endereco}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaWhatsapp className="mt-1 text-terracota" aria-hidden="true" />
              <span>{MARCA.telefone}</span>
            </li>
            <li className="flex items-start gap-3">
              <FaClock className="mt-1 text-terracota" aria-hidden="true" />
              <span>Seg a Sáb · horários sob agendamento</span>
            </li>
          </ul>

          <div className="mt-9">
            <Button>Agendar pelo WhatsApp</Button>
          </div>
        </div>

        {/* Mapa */}
        <div className="overflow-hidden rounded-2xl border border-creme/10">
          <iframe
            title={`Mapa — ${MARCA.nome}`}
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full grayscale-[0.2] contrast-[1.05]"
          />
        </div>
      </div>
    </section>
  )
}
