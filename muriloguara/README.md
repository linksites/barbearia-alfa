# Murilo Guará — Landing Page

Landing page profissional para **Murilo Guará**, fisioterapeuta especialista em
**Acupuntura** e **Quiropraxia** (CREFITO 162811-F).

Design autoral com fundo claro, grades "blueprint" com gradientes, motivo
coluna + agulha em SVG animado e revelações cinematográficas no scroll —
pensado para fugir do visual genérico de landing pages.

## Stack

- **Vite 6** + **React 18**
- **Tailwind CSS 3** (paleta da marca extraída das logos)
- **Framer Motion** — animações e revelações
- **GSAP** — disponível para animações avançadas
- **Lenis** — smooth scroll
- Ícones SVG **desenhados sob medida** (sem dependência de icon set genérico)

## Rodando localmente

```bash
cd muriloguara
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção -> dist/
npm run preview  # pré-visualiza o build
```

## Personalização rápida

Quase todo o conteúdo está centralizado em **`src/lib/site.js`**:

- `profissional` — nome, CREFITO, **WhatsApp**, Instagram, endereço, cidade
- `especialidades`, `condicoes`, `jornada`, `diferenciais`, `faq`, `stats`

> ⚠️ Atualize o número de WhatsApp (`profissional.whatsapp`, só dígitos com DDI
> 55) e o Instagram antes de publicar — estão com valores de exemplo.

A paleta de cores fica em `tailwind.config.js` (`tinta`, `aco`, `petroleo`,
`prata`, `cobre`, `teal`, `gelo`, `nevoa`, `linha`).

## Assets

- `public/assets/logo-murilo.jpeg` — logo (M = coluna + agulha)
- `public/assets/murilo-retrato.jpeg` — retrato usado na seção "Sobre"

## Estrutura

```
src/
  components/        # seções (Hero, Especialidades, Sobre, ...)
    ui/              # blocos reutilizáveis (Icons, Reveal, Logo, ...)
  hooks/useLenis.js  # smooth scroll
  lib/site.js        # CONTEÚDO (edite aqui)
  lib/animations.js  # variantes de animação
```

> Conteúdo informativo: não substitui avaliação presencial.
