# Barbearia Alfa — Landing Page

Landing page de página única da **Barbearia Alfa** (Belém-PA). Estilo, atitude e experiência completa — corte, barba e combo, com agendamento direto pelo WhatsApp.

> Desenvolvido por **TECHLAB**.

## Stack

- **Vite + React**
- **Tailwind CSS**
- **Lenis** — rolagem suave
- **GSAP + ScrollTrigger** — animações ligadas ao scroll (parallax, reveal por máscara)
- **Framer Motion** — micro-interações e o lightbox de vídeos
- **react-icons**

## Seções

Hero (logo em destaque) · Diferenciais (marquee) · Serviços · Sobre · **Vídeos** · **Promoções** · Localização · CTA · Footer.

### Vídeos (Reels)

Parede de vídeos verticais 9:16 com autoplay mudo (via `IntersectionObserver`, tocam só quando visíveis) e um **lightbox estilo Stories** ao clicar — com barra de progresso, navegação por setas/teclado/swipe e som ativável.

- Cada clipe tem **MP4 (H.264) + WebM (VP9) + poster JPG** em `public/assets/videos/`, para compatibilidade ampla e carregamento rápido.
- Componentes: `ui/VideoReel`, `ui/VideoLightbox`, seção `Videos`.

### Promoções

Artes prontas (9:16) exibidas como cards que abrem o WhatsApp ao clicar (`Promocoes`).

## Conteúdo (mídia e textos)

Tudo é centralizado em **`src/lib/site.js`**:

- `MARCA` — nome, slogan, descrição, endereço, telefone
- `LOGO` — emblema oficial (Header, rodapé, favicon)
- `WHATSAPP_URL` — link de agendamento com mensagem pronta
- `FOTOS` — inventário de imagens (itens com `src: null` exibem placeholder)
- `VIDEOS` — inventário dos Reels (mp4/webm/poster por clipe)
- `PROMOS` — artes promocionais

Para adicionar/trocar mídia, coloque o arquivo em `public/assets/` (ou `public/assets/videos/`) e registre no objeto correspondente — as seções se ajustam à quantidade.

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist
npm run preview  # pré-visualiza o build
```

## Deploy

Deploy automático para **GitHub Pages** a cada push na branch `main`, via GitHub Actions (`.github/workflows/deploy.yml`).

O build usa **base relativa (`base: './'`)**, então o mesmo artefato funciona em qualquer subcaminho do Pages (ex.: `/alfa/`) sem reconstruir caso o repositório seja renomeado.

Publicado em: https://linksites.github.io/alfa/
