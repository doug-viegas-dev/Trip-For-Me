---
name: Trip For Me
description: Design system editorial contemporâneo para uma agência de viagens personalizada.
colors:
  deep-teal: "#0b3b52"
  dark-bg: "#04161f"
  light-bg: "#f7f5f0"
  antique-brass: "#c79e5e"
  accent-coral: "#e76f51"
  complementary-indigo: "#1c2755"
  complementary-slate: "#8e93a6"
  grey: "#f9f9f9"
  white: "#ffffff"
  muted-text: "#666666"
typography:
  display:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "60px"
    fontWeight: 600
    lineHeight: "3rem"
    letterSpacing: "normal"
  section:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "2.5rem"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "Quicksand, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "1px"
rounded:
  sm: "3px"
  md: "5px"
  lg: "8px"
spacing:
  xs: "5px"
  sm: "10px"
  md: "20px"
  lg: "30px"
  xl: "40px"
  section-edge: "10%"
components:
  button-light:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "10px"
    height: "40px"
  button-dark:
    backgroundColor: "{colors.dark-bg}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "10px"
    height: "40px"
---

## Overview

**Creative North Star: "Editorial contemporânea, sofisticada e imersiva."**

[Comprovado] O frontend atual combina DM Serif Display, Montserrat e Quicksand com uma paleta de azul-petróleo, fundo azul profundo, dourado antigo, coral, tons azulados e fundos claros. A composição usa hero audiovisual, fotografia de destinos em grande escala, texto em caixa alta, tracking e seções com bastante espaço.

[Direção aprovada para esta etapa] A interface deve parecer uma publicação de viagens cuidadosamente editada: clara, atmosférica e confiante. A sofisticação vem da hierarquia, do ritmo, da fotografia e da precisão dos detalhes, não de efeitos decorativos acumulados.

[Pendente de aprovação] A consolidação de nomes semânticos, escalas tipográficas, container principal e regras responsivas ainda precisa ser aprovada antes de alterar o código.

**Key Characteristics:**

- Composição limpa e intencional.
- Hierarquia tipográfica marcada entre display serifado e sans-serif funcional.
- Fotografia de viagem como elemento principal, não como decoração periférica.
- Espaçamento generoso com ritmo repetível.
- Motion discreto, elegante e funcional.
- Componentes reutilizáveis sem aparência de template genérico.

### Photography editorial

[Diretriz] Priorizar fotografias de viagem de alta qualidade, com sensação de lugar, escala e contexto humano ou arquitetônico. Preferir imagens com composição forte, luz natural e espaço suficiente para leitura quando houver texto sobreposto.

[Diretriz] Usar `cover` e overlays apenas para garantir legibilidade e continuidade visual. Não aplicar filtros pesados, texto embutido nas imagens ou tratamentos que apaguem a identidade do destino.

[Pendente de aprovação] Critérios editoriais detalhados por tipo de destino, origem/licenciamento das imagens, tratamento de cor e proporção oficial para cada superfície.

## Colors

[Comprovado] A paleta atual é sóbria e marítima, com pontos quentes de dourado e coral. Ela deve continuar sendo a fonte de personalidade visual até que uma alteração de marca seja aprovada.

### Primary

- **Deep Teal** (`{colors.deep-teal}`): destaque de marca, ícones, paginação e elementos de ênfase.
- **Dark Background** (`{colors.dark-bg}`): superfícies escuras, footer, gradientes funcionais e contraste principal.

### Secondary

- **Antique Brass** (`{colors.antique-brass}`): detalhe sofisticado e destaque pontual.
- **Accent Coral** (`{colors.accent-coral}`): sublinhados, estados ativos e acentos de navegação.

### Tertiary

- **Complementary Indigo** (`{colors.complementary-indigo}`): variação cromática usada nos ícones de diferenciais.
- **Complementary Slate** (`{colors.complementary-slate}`): divisórias e apoio visual.

### Neutral

- **Light Background** (`{colors.light-bg}`): fundo claro principal.
- **Grey** (`{colors.grey}`): neutro claro auxiliar.
- **White** (`{colors.white}`): texto e superfícies claras existentes.
- **Muted Text** (`{colors.muted-text}`): texto secundário observado em Testimonials.

**The Preserve the Palette Rule.** Não introduzir novas cores ou substituir as existentes em uma interface sem aprovação explícita. Valores literais atuais devem ser mapeados para tokens antes de serem alterados.

## Typography

**Display Font:** DM Serif Display, com Georgia/serif como fallback.
**Body Font:** Montserrat, com Arial/sans-serif como fallback.
**Label Font:** Quicksand, com Arial/sans-serif como fallback.

[Comprovado] A intenção tipográfica é editorial nos títulos e funcional nos textos, com labels frequentemente em caixa alta e letter-spacing.

[Atenção] O código registra `--font-dm-serif-display` no layout, enquanto o token Sass atual consulta `--font-dm-serif`. Até a correção ser aprovada, essa discrepância deve ser tratada como risco de implementação, não como autorização para trocar a fonte.

### Hierarchy

- **Display** (observado em `60px`, line-height `3rem`): hero e mensagens de maior impacto.
- **Section** (observado em `2.5rem`, line-height `1.2`): títulos principais de seção.
- **Body** (observado entre `13px` e `14px`, line-height entre `1.6` e `2`): narrativa, descrições e diferenciais.
- **Label** (observado entre `12px` e `14px`, tracking entre `1px` e `4px`, frequentemente uppercase): navegação, duração e metadados.

**The Hierarchy Before Decoration Rule.** Dar prioridade a tamanho, peso, contraste, largura de linha e espaçamento antes de adicionar efeitos.

[Pendente de aprovação] Escala tipográfica única, pesos finais carregados por `next/font`, limites de largura de texto e uso oficial de caixa alta.

## Layout

[Comprovado] A home atual usa seções full-bleed, hero de `100vh`, conteúdo central no Header com `max-width: 1440px` e paddings locais de `5%`, `10%`, `40px` e `70px`. Há grids de cinco colunas em `Top` e três colunas em `Trips`.

[Comprovado] O código declara breakpoints em `768px` e `1024px`, mas os módulos de seção ainda não possuem variações responsivas próprias.

### Spacing rhythm

Usar como mapa inicial dos valores já presentes: `5px`, `10px`, `20px`, `30px`, `40px` e `70px`. O `10%` é um recuo de seção recorrente; não tratá-lo como substituto automático de um container.

### Grid and responsive behavior

[Regra] Preservar a leitura em fluxo vertical, manter alinhamentos entre título, conteúdo e CTA e evitar que uma composição desktop determine alturas rígidas em telas pequenas.

[Pendente de aprovação] Container canônico, número de colunas por breakpoint, estratégia de empilhamento e comportamento oficial das imagens em mobile.

### Motion tokens

[Comprovado] O sistema atual usa transições entre `0.2s`, `0.4s`, `0.5s` e `0.6s`, com easing cúbico no menu e no scroll indicator. O autoplay do Swiper usa atraso de `5000ms`.

[Diretriz] Motion deve comunicar mudança de estado, revelar conteúdo ou apoiar orientação. Toda animação nova precisa de alternativa para `prefers-reduced-motion` e não pode bloquear leitura, foco ou interação.

[Pendente de aprovação] Escala oficial de duração/easing e política para autoplay.

## Elevation & Depth

[Comprovado] A profundidade atual vem principalmente de fotografia, overlays escuros, text-shadow e uma sombra discreta no Header scrolled (`0 4px 20px rgba(0, 0, 0, 0.08)`).

**The Flat-by-Default Rule.** Superfícies devem permanecer visualmente leves; sombras aparecem apenas quando comunicam separação, estado ou legibilidade.

Não usar glassmorphism, blur ou sombras fortes sem justificativa de produto e aprovação visual.

## Shapes

[Comprovado] O sistema atual usa cantos discretamente arredondados: `3px` em botões, `5px` em cards de imagem e `8px` em depoimentos. Bordas são pontuais, principalmente em botões claros e estados de hover.

**The Quiet Shape Rule.** Formas devem apoiar a fotografia e a tipografia, sem criar uma linguagem de cards excessivamente arredondados ou infantilizada.

[Pendente de aprovação] Se a escala deve ser reduzida para poucos raios sem alterar a aparência existente.

## Components

### Buttons

- **Light:** transparente, borda branca de `1px`, texto branco, altura de `40px`, padding de `10px` e raio de `3px`.
- **Dark:** fundo `dark-bg`, texto branco, altura de `40px`, padding de `10px` e raio de `3px`.
- **Hover observado:** alteração de fundo; o botão dark inverte para superfície branca com borda escura.
- **Pendente:** foco visível, disabled, loading e semântica de Link versus button.

### Navigation

- Header transparente sobre o hero e claro após scroll.
- Menu lateral em superfície branca, com tipografia display e navegação em caixa alta.
- Ícones sociais devem manter significado, label acessível e destino real quando os links forem definidos.
- Não alterar a lógica do menu ao consolidar estilos.

### Cards and image surfaces

- Cards de destino e roteiros usam imagem como superfície, `cover`, overlay e texto claro.
- O overlay existe para contraste; não usar como efeito decorativo autônomo.
- Cards que representem ação devem ser elementos interativos reais, não apenas `div` com cursor.
- O card de depoimento é textual, claro, centralizado e usa aspas editoriais.

### Signature sections

- Hero audiovisual com título display e CTAs.
- Faixa `Ready` com textura e CTA.
- Bloco `Why` com ícones monocromáticos mascarados e acentos cromáticos existentes.
- Footer institucional com marca, contato, Cadastur e QR code.

### Accessibility and responsive patterns

- Sempre fornecer foco visível e estados de teclado equivalentes aos estados de hover.
- Manter landmarks, ordem de headings, labels e nomes acessíveis.
- Garantir alvos de toque de pelo menos `44px` para controles interativos.
- Não depender apenas de hover para revelar informação.
- Testar em pelo menos `320px`, `390px`, `768px`, `1024px` e `1440px` antes de considerar uma alteração visual concluída.

## Do's and Don'ts

### Do:

- **Do** consultar este arquivo antes de criar ou alterar qualquer interface.
- **Do** preservar a paleta, as fontes, os assets e o caráter editorial já evidenciados.
- **Do** preferir alinhamentos claros, respiro generoso e componentes com uma função compreensível.
- **Do** usar fotografia de viagem de alta qualidade e tratamento visual consistente.
- **Do** centralizar valores repetidos antes de corrigir cada seção isoladamente.
- **Do** validar teclado, foco, contraste, motion reduzido e responsividade junto com a estética.

### Don't:

- **Don't** inventar cores, fontes, gradientes ou valores de espaçamento sem aprovação.
- **Don't** substituir decisões existentes apenas por preferência estética.
- **Don't** usar gradientes decorativos desnecessários, parallax excessivo, glassmorphism ou sombras exageradas.
- **Don't** transformar a página em uma coleção de cards genéricos de template.
- **Don't** usar hover como único caminho para conteúdo ou ação.
- **Don't** modificar código de produção, dependências ou assets em uma tarefa documental.
