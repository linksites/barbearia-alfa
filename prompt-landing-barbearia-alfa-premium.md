# Prompt — Landing Page da Barbearia Alfa (versão premium / vitrine TECHLAB)

> Site React de verdade, com fotos reais e animação cinematográfica. Objetivo duplo: vender a Barbearia Alfa **e** servir de amostra do trabalho da TECHLAB. Nada de cara de template de IA.

---

## Tarefa

Construa uma **landing page de página única** para a **Barbearia Alfa** usando **Vite + React + Tailwind CSS**, com **componentes em arquivos separados**, fotos reais, animações de rolagem cinematográficas e identidade visual editorial. Todo o conteúdo em **português do Brasil**. Responsiva (mobile-first), rápida e acessível.

## Stack e dependências

- **Vite + React** (JavaScript ou TypeScript).
- **Tailwind CSS** para estilo.
- **Lenis** → rolagem suave global ("amanteigada").
- **GSAP + ScrollTrigger** → animações cinematográficas ligadas ao scroll (parallax, reveals, seção fixada/"pin").
- **Framer Motion (motion)** → micro-interações em botões e cards.
- **react-icons** (ou SVGs próprios) para ícones.

## Estrutura de arquivos sugerida

```
barbearia-alfa/
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ index.css
│  ├─ assets/            # fotos reais + logo
│  ├─ hooks/
│  │  └─ useLenis.js     # inicializa a rolagem suave
│  ├─ lib/
│  │  └─ animations.js   # presets GSAP reutilizáveis
│  └─ components/
│     ├─ Header.jsx
│     ├─ Hero.jsx
│     ├─ Diferenciais.jsx
│     ├─ Servicos.jsx
│     ├─ Sobre.jsx
│     ├─ Localizacao.jsx
│     ├─ CTAFinal.jsx
│     ├─ Footer.jsx
│     ├─ GrainOverlay.jsx
│     └─ ui/Button.jsx
```

## Contexto da marca

- **Nome:** Barbearia Alfa
- **Slogan:** "Chegou a nova era das barbearias!"
- **Descrição:** "Na Barbearia Alfa, você encontra muito mais do que corte e barba. Aqui é estilo, atitude e experiência completa."
- **Diferenciais:** Atendimento Padrão Alfa · Ambiente Moderno · Profissionais de Elite
- **Endereço:** Rua António Everdosa, 633 — Belém-PA
- **WhatsApp:** (91) 98536-7432
- **Tom:** masculino, confiante, moderno, urbano.

## Seções (nesta ordem)

1. **Header fixo** — logo + menu com rolagem suave + botão "Agendar" sempre visível.
2. **Hero** — foto real em tela cheia com **parallax**; slogan que se monta com *stagger* (palavras entrando em sequência); descrição e botão grande de WhatsApp.
3. **Diferenciais** — três itens; usar um **marquee** (faixa em movimento) ou cards que revelam ao entrar na tela.
4. **Serviços** — cards para *Corte*, *Barba* e *Combo*; preço como placeholder ("a partir de R$ —"); hover com micro-interação (Framer Motion).
5. **Sobre / Experiência** — seção mais cinematográfica: **seção fixada (pin)** com texto e foto que se transformam conforme o scroll.
6. **Galeria** — grade **assimétrica** com as fotos reais (cortes, ambiente, barbeiro).
7. **Localização** — endereço por extenso + mapa do Google Maps ("Rua António Everdosa, 633, Belém-PA").
8. **CTA final** — chamada forte para agendar.
9. **Footer** — nome, endereço, telefone, ano atual.

## Agendamento (sem backend)

Todos os botões de agendar abrem o WhatsApp com mensagem pronta, usando link `wa.me`:

```
https://wa.me/5591985367432?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia%20Alfa.
```

(Mensagem: *"Olá! Vim pelo site e quero agendar um horário na Barbearia Alfa."*)

- Vários botões ao longo da página (header, hero, serviços, CTA final), todos para o mesmo link.
- Abrir em nova aba (`target="_blank"` + `rel="noopener"`).
- **Sem** formulário de horário, banco de dados ou login — o barbeiro confirma na mão.

## Imagens reais (entrada crítica)

As fotos reais ficam em `src/assets/`. Trate todas para parecerem "da mesma família":

- **Gradação de cor** sutil puxando para a paleta da marca (sombras azul-petróleo, luz quente terracota) — sem virar duotone pesado, para preservar o realismo.
- **Otimização obrigatória:** exportar em **WebP/AVIF**, `loading="lazy"`, `srcset` responsivo. Performance é parte da venda.

**Lista de fotos a fornecer (inventário):**
1. Hero — barbeiro em ação ou fachada/ambiente, horizontal e de alta resolução.
2. Retrato do profissional.
3. 3–6 fotos de cortes/barbas finalizados (para a galeria).
4. 1–2 fotos do ambiente/cadeira/detalhes.
5. Logo da Barbearia Alfa em PNG com fundo transparente.

## Identidade visual (foge do template)

- **Fundo:** preto/quase preto `#0E0E0E`.
- **Laranja terracota (ação):** `#C8602C`.
- **Azul petróleo (secundária):** `#2C5872`.
- **Creme/off-white (texto):** `#F0E6D2`.
- **Tipografia:** display forte em caixa-alta (*Anton* ou *Oswald*) + corpo limpo (*Inter*), via Google Fonts.
- **Camada de grão/textura** sutil por cima de tudo (`GrainOverlay`), dando aspecto analógico/premium.
- **Layout editorial e assimétrico** — evitar tudo centralizado e simétrico; usar tamanhos de tipo contrastantes e bastante respiro.
- Botões de WhatsApp em terracota, com ícone, e micro-interação no hover/tap.

## Animação (cinematográfica e ousada)

- **Lenis** ativo globalmente (rolagem suave).
- **Hero:** parallax na foto + reveal do slogan em *stagger*.
- **ScrollTrigger:** reveals com *clip-path*/máscara (não só fade), parallax entre seções, e ao menos uma seção **fixada (pin)** na parte "Sobre/Experiência".
- **Framer Motion:** hover/tap em botões e cards.
- **Acessibilidade:** respeitar `prefers-reduced-motion` — se o usuário pedir menos movimento, desligar/atenuar as animações.

## Requisitos técnicos

- Componentes separados e reutilizáveis; código comentado por seção.
- Mobile-first e 100% responsivo.
- Acessível: bom contraste, `alt` em todas as imagens, navegação por teclado, foco visível.
- SEO: `<title>`, `meta description`, **Open Graph** (título, descrição, imagem).
- Performance: lazy-load de imagens, fontes otimizadas, evitar travadas no scroll (usar `transform`/`opacity` nas animações).
- Rolagem suave ao clicar nos itens do menu.
