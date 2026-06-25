// Caminho base da aplicação (raiz "/" no dev, subcaminho no GitHub Pages).
// Usar sempre `asset('assets/...')` para imagens da pasta /public, garantindo
// que funcionem tanto local quanto em produção.
const BASE = import.meta.env.BASE_URL
export const asset = (p) => `${BASE}${p.replace(/^\//, '')}`

// ===== Dados centrais da marca (briefing) =====

export const MARCA = {
  nome: 'Barbearia Alfa',
  slogan: 'Chegou a nova era das barbearias',
  descricao:
    'Na Barbearia Alfa, você encontra muito mais do que corte e barba. Aqui é estilo, atitude e experiência completa.',
  endereco: 'Rua António Everdosa, 633 — Belém-PA',
  enderecoMaps: 'Rua António Everdosa, 633, Belém-PA',
  telefone: '(91) 98536-7432',
}

// Link de WhatsApp com mensagem pronta (sem backend de agendamento).
export const WHATSAPP_URL =
  'https://wa.me/5591985367432?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia%20Alfa.'

/**
 * Inventário de imagens.
 *
 * `src: null` significa que a foto real ainda NÃO foi entregue — o componente
 * renderiza um placeholder com a etiqueta abaixo. Quando você me enviar o
 * arquivo (em /public/assets/), basta preencher o `src` correspondente.
 */
export const FOTOS = {
  hero: {
    src: null, // ex.: '/assets/hero.webp' — foto horizontal de alta resolução
    label: 'HERO · barbeiro em ação ou fachada/ambiente (horizontal)',
    alt: 'Ambiente da Barbearia Alfa',
  },
  retrato: {
    src: asset('assets/barbearia_alpha.png'), // única foto disponível hoje
    label: 'RETRATO do profissional',
    alt: 'Profissional da Barbearia Alfa',
  },
  galeria: [
    { src: null, label: 'GALERIA 1 · corte finalizado', alt: 'Corte finalizado' },
    { src: null, label: 'GALERIA 2 · barba finalizada', alt: 'Barba finalizada' },
    { src: null, label: 'GALERIA 3 · corte/estilo', alt: 'Corte e estilo' },
    { src: null, label: 'GALERIA 4 · ambiente/cadeira', alt: 'Ambiente da barbearia' },
    { src: null, label: 'GALERIA 5 · detalhe', alt: 'Detalhe do atendimento' },
    { src: null, label: 'GALERIA 6 · corte/estilo', alt: 'Corte e estilo' },
  ],
}
