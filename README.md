# Barbearia Alfa — Landing Page

Landing page de página única da **Barbearia Alfa** (Belém-PA). Estilo, atitude e experiência completa — corte, barba e combo, com agendamento direto pelo WhatsApp.

> Desenvolvido por **TECHLAB**.

## Stack

- **Vite + React**
- **Tailwind CSS**
- **Lenis** — rolagem suave
- **GSAP + ScrollTrigger** — animações ligadas ao scroll (parallax, seção fixada)
- **Framer Motion** — micro-interações
- **react-icons**

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist
npm run preview  # pré-visualiza o build
```

## Deploy

Deploy automático para **GitHub Pages** a cada push na branch `main`, via GitHub Actions (`.github/workflows/deploy.yml`).

Publicado em: https://linksites.github.io/barbearia-alfa/

## Imagens

As fotos ficam em `public/assets/` e são referenciadas em `src/lib/site.js` (objeto `FOTOS`). Itens com `src: null` exibem um placeholder até a foto real ser entregue.
