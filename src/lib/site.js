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

// Logo oficial (emblema) da barbearia.
export const LOGO = asset('assets/logo-alfa.jpg')

// Link de WhatsApp com mensagem pronta (sem backend de agendamento).
export const WHATSAPP_URL =
  'https://wa.me/5591985367432?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia%20Alfa.'

// Instagram oficial da barbearia.
export const INSTAGRAM_URL = 'https://www.instagram.com/barbearia__alfa'
export const INSTAGRAM_HANDLE = '@barbearia__alfa'

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
    src: asset('assets/barbearia_alfa.png'), // única foto disponível hoje
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

/**
 * Inventário de vídeos (Reels verticais 9:16).
 *
 * Cada clipe tem MP4 (H.264, compatível com todos os navegadores) e WebM (VP9,
 * menor) como fontes, mais um `poster` (1º frame) que aparece antes do play e
 * garante um LCP rápido. Todos são mudos e tocam em loop quando entram na tela.
 *
 * Para adicionar/trocar clipes, basta colocar os arquivos em
 * /public/assets/videos/ e registrar aqui — a seção e o lightbox se ajustam
 * automaticamente à quantidade.
 */
export const VIDEOS = [
  {
    mp4: asset('assets/videos/reel-1.mp4'),
    webm: asset('assets/videos/reel-1.webm'),
    poster: asset('assets/videos/reel-1.jpg'),
    titulo: 'Padrão Alfa',
    alt: 'Vídeo do atendimento na Barbearia Alfa',
  },
  {
    mp4: asset('assets/videos/reel-2.mp4'),
    webm: asset('assets/videos/reel-2.webm'),
    poster: asset('assets/videos/reel-2.jpg'),
    titulo: 'Corte & estilo',
    alt: 'Vídeo de corte e estilo na Barbearia Alfa',
  },
  {
    mp4: asset('assets/videos/reel-3.mp4'),
    webm: asset('assets/videos/reel-3.webm'),
    poster: asset('assets/videos/reel-3.jpg'),
    titulo: 'Na cadeira',
    alt: 'Vídeo do ambiente da Barbearia Alfa',
  },
  {
    mp4: asset('assets/videos/reel-4.mp4'),
    webm: asset('assets/videos/reel-4.webm'),
    poster: asset('assets/videos/reel-4.jpg'),
    titulo: 'Detalhe da barba',
    alt: 'Vídeo de barba na Barbearia Alfa',
  },
  {
    mp4: asset('assets/videos/reel-5.mp4'),
    webm: asset('assets/videos/reel-5.webm'),
    poster: asset('assets/videos/reel-5.jpg'),
    titulo: 'Experiência completa',
    alt: 'Vídeo da experiência Padrão Alfa',
  },
]

/**
 * Artes promocionais (posts prontos, formato 9:16). Cada card abre o WhatsApp.
 * Para adicionar/trocar, coloque a imagem em /public/assets/ e registre aqui.
 */
export const PROMOS = [
  {
    src: asset('assets/promo-sexta.jpg'),
    alt: 'Sexta é dia de ficar na régua — agende seu horário',
  },
  {
    src: asset('assets/promo-espera.jpg'),
    alt: 'Estamos esperando por você — agende seu horário',
  },
]
