---
name: Trip For Me
description: Design System e direção de arte digital da Trip For Me, com identidade oficial preservada.
colors:
  # Cores oficiais da identidade visual da marca.
  deep-teal: "#0b3b52"
  antique-brass: "#c79e5e"
  dark-bg: "#04161f"
  light-bg: "#f7f5f0"
  complementary-indigo: "#1c2755"
  complementary-slate: "#8e93a6"

  # Cores técnicas já observadas no frontend; não são cores institucionais.
  white: "#ffffff"
  grey: "#f9f9f9"
  muted-text: "#666666"

typography:
  # Famílias oficiais. Escalas e pesos existentes são descritos no corpo do documento.
  display:
    fontFamily: "Montserrat, Arial, sans-serif"
  section:
    fontFamily: "Montserrat, Arial, sans-serif"
  body:
    fontFamily: "Montserrat, Arial, sans-serif"
  label:
    fontFamily: "Quicksand, Arial, sans-serif"

rounded:
  # Valores atuais preservados como referência de forma.
  sm: "3px"
  md: "5px"
  lg: "8px"

spacing:
  # Escala atual preservada por decisão do responsável pelo projeto.
  xs: "5px"
  sm: "10px"
  md: "20px"
  lg: "30px"
  xl: "40px"
  section-edge: "10%"

responsive:
  content-edge-mobile-compact: "24px"
  content-edge-mobile: "24px"
  content-edge-tablet: "24px"
  desktop: "preserve existing section composition from 1024px"
  title-font: "Montserrat, sans-serif"
---

# Trip For Me — Design System

## 1. Autoridade, status e modo de uso

Este documento orienta a **identidade aplicada à interface**, a direção de arte e as decisões futuras de design do site Trip For Me. Deve ser lido pelo Codex e pelo Impeccable antes de analisar, propor ou implementar mudanças visuais.

- **[Oficial — marca]** Cores institucionais, famílias tipográficas, posicionamento e tom de voz fornecidos pelo responsável pela Trip For Me. Não modificar sem aprovação expressa.
- **[Aprovado — preservar]** Os espaçamentos e o ritmo visual atualmente apreciados no site devem ser mantidos. Os raios existentes também devem ser preservados, sem redesenho arbitrário.
- **[Comprovado — implementação]** Valores técnicos e estilos encontrados no código atual. Sua existência não significa que todos estejam homologados como padrões para novos componentes.
- **[Diretriz]** Orientação de experiência, acessibilidade e expressão editorial coerente com a marca.
- **[Referência selecionada]** Elementos de outros sites escolhidos como inspiração; não representam autorização de cópia ou implementação.
- **[Pendente de aprovação]** Propostas que exigem decisão explícita antes de alterar código, conteúdo, assets ou comportamento.

**Como interpretar o frontmatter:** as seis cores institucionais e as famílias tipográficas são oficiais. `white`, `grey` e `muted-text` são valores auxiliares já existentes, não novas cores de marca. `spacing` e `rounded` registram os valores atuais a preservar; não obrigam todas as seções a usar os mesmos recuos ou raios. As dimensões dos componentes e a escala tipográfica que ainda precisam de avaliação ficam descritas no corpo deste documento, não como novos tokens normativos.

**Precedência:** identidade oficial e decisões aprovadas neste documento → restrições de produto e acessibilidade → referências selecionadas → implementação atual como evidência. Em caso de conflito, registrar o conflito e não aplicar uma mudança por conta própria.

## 2. North Star e personalidade

**Essência oficial: Segurança Sofisticada.** A Trip For Me é a antítese do turismo de massa: calma onde há excesso, profunda onde há superficialidade e exclusiva sem ser inacessível. A experiência comunica curadoria, conforto, organização e segurança sem apelar para ostentação.

**Expressão visual:** uma publicação de viagens cuidadosamente editada — contemporânea, elegante, atmosférica e confiante. A sofisticação emerge de hierarquia, fotografia, precisão dos detalhes, composição e respiro, não do acúmulo de efeitos.

**Personalidade: Esteta Funcional.** Beleza e utilidade são inseparáveis. Um detalhe visual deve favorecer compreensão, orientação, confiança ou prazer de explorar.

**Público informado pela marca:** HENRYs e Boomers. Dar atenção especial à legibilidade, clareza, previsibilidade e qualidade da experiência, sem presumir preferências universais de grupos etários.

### Princípios de direção de arte

1. **Calma visual:** evitar ruído, urgência artificial, exageros promocionais e estímulos simultâneos.
2. **Narrativa com substância:** conduzir a descoberta por fotografias e conteúdo relevantes.
3. **Hierarquia antes de decoração:** resolver primeiro escala, alinhamento, contraste e espaço.
4. **Luxo inteligente:** sofisticação que ajuda o visitante a entender e decidir.
5. **Consistência sem monotonia:** padrões reconhecíveis com composições editoriais variadas; não repetir mecanicamente blocos ou cards.

## 3. Identidade cromática

### Paleta oficial — preservar

| Função na marca | Token atual | Cor | Nome |
| --- | --- | --- | --- |
| Principal | `deep-teal` | `#0b3b52` | Deep Teal — Azul Petróleo Escuro |
| Secundária | `antique-brass` | `#c79e5e` | Antique Brass — Dourado Envelhecido |
| Texto principal | `dark-bg` | `#04161f` | Rich Black — Preto Azulado |
| Fundo neutro | `light-bg` | `#f7f5f0` | Isabelline — Off-White Linho |
| Ícone 1 | `complementary-indigo` | `#1c2755` | Space Cadet — Azul Marinho |
| Ícone 2 | `complementary-slate` | `#8e93a6` | Cool Grey — Cinza Aço |

Os nomes legados `dark-bg` e `light-bg` permanecem por compatibilidade; as funções oficiais são **texto principal** e **fundo neutro**. Não renomear tokens no código sem uma tarefa específica aprovada.

### Neutros auxiliares e cor legada

- **[Comprovado — auxiliar]** `#ffffff`: branco para superfícies e contraste; não é uma sétima cor institucional.
- **[Comprovado — auxiliar]** `#f9f9f9` e `#666666`: neutros observados em estilos existentes; não devem ser apresentados como identidade oficial.
- **[Comprovado — legado, não oficial]** `#e76f51`: coral presente na implementação anterior e no documento original, mas **não consta da paleta oficial informada**. Não aplicar em novos componentes como acento de marca. Não remover ou substituir seus usos atuais sem auditoria e aprovação específicas.
- **[Comprovado — implementação]** Valores locais de `rgba(...)`, sombras e overlays são recursos técnicos e devem ser avaliados em contexto.

**Regra cromática:** não importar cores, gradientes ou tratamentos cromáticos dos sites de referência. Usar overlays quando necessários à leitura sobre fotografia, sem comprometer a imagem ou introduzir acentos arbitrários.

## 4. Tipografia e hierarquia

### Famílias oficiais

- **Montserrat:** títulos, texto principal de destaque e leitura funcional.
- **Quicksand:** textos de apoio, labels e metadados, conforme a necessidade da interface.

As famílias são fixas. Das referências externas, podemos adaptar **composição tipográfica**, proporção, quebras de linha, tracking, largura de coluna, alinhamento e relação de escala — nunca substituir as fontes oficiais.

### Hierarquia observada — valores não homologados

| Uso | Valores encontrados | Situação |
| --- | --- | --- |
| Display / Hero | `60px`, `line-height: 3rem`, `font-weight: 600` no CSS | Preservar inicialmente; revisar compatibilidade |
| Título de seção | `2.5rem`, `line-height: 1.2`, peso `400` | Observado |
| Corpo | `13–14px`, `line-height: 1.6–2` | Observado; revisar legibilidade |
| Label / metadado | `12–14px`, tracking `1–4px`, frequentemente uppercase | Observado |

**[Decisão aplicada]** Montserrat é a família aprovada para os títulos; o token Sass usa `Montserrat, sans-serif` explicitamente, preservando os tamanhos, pesos, line-heights e espaçamentos existentes.

**[Pendente de aprovação]** Pesos efetivamente carregados, limites de largura de textos, line-height definitivo para desktop, convenção de caixa alta e eventual escala desktop.

### Escala responsiva aprovada

Para a Home institucional, a escala mobile consolidada é: título principal do Hero entre `32px` e `36px`, títulos de seção entre `24px` e `28px`, introduções e subtítulos entre `14px` e `16px`, texto corrido e depoimentos em `16px`, autores entre `14px` e `15px`, metadados entre `12px` e `14px`, textos de cards entre `14px` e `16px` e informações do Footer em `13px`.

Montserrat permanece a fonte aprovada para títulos. A escala é aplicada com `line-height` funcional, largura de leitura confortável e sem reintroduzir DM Serif Display.

**Diretriz:** a expressividade tipográfica deve transmitir autoridade serena, não gritaria. Revisar legibilidade real em desktop e mobile antes de alterar tamanhos já existentes.

## 5. Layout, espaçamento e ritmo editorial

### Espaçamentos aprovados para preservação

**[Aprovado — preservar]** O responsável pelo projeto aprovou a preservação dos espaçamentos atuais do site. Portanto, **o refinamento visual deve partir dos valores existentes**, e não substituí-los por uma nova escala sem necessidade demonstrada e aprovação.

| Token existente | Valor |
| --- | --- |
| `xs` | `5px` |
| `sm` | `10px` |
| `md` | `20px` |
| `lg` | `30px` |
| `xl` | `40px` |
| `section-edge` | `10%` |

**[Comprovado — implementação]** Também há espaços locais de `70px`, recuos horizontais de `5%`, e paddings específicos por seção. Esses valores **permanecem válidos nos pontos onde já são utilizados**, mas não se tornam automaticamente tokens globais.

**Regra de espaçamento:** preservar o ritmo, as áreas de respiro e o equilíbrio visual atual. O Impeccable pode apontar inconsistências e sugerir correções **pontuais**, sem padronizar à força todas as seções. Em mobile, permitir adaptações necessárias para evitar overflow, manter leitura e preservar a intenção visual.

### Composição editorial

- Alternar imagens de grande impacto e momentos de leitura mais tranquilos.
- Trabalhar com alinhamentos claros e assimetria controlada, quando melhorar a narrativa.
- Evitar sequências longas de seções com exatamente a mesma estrutura visual.
- Garantir que título, descrição, fotografia e CTA tenham papéis evidentes.
- Usar respiro intencional, sem diminuir arbitrariamente os espaços existentes.

### Inventário de layout atual

**[Comprovado]** Hero audiovisual de `100vh`; Header com `max-width: 1440px`; grids de cinco colunas em `Top` e três em `Trips`. Breakpoints de `768px` e `1024px` estão declarados em mixins, mas a auditoria apontou responsividade incompleta nos módulos.

**[Diretriz]** A composição desktop não pode impor cortes ou alturas rígidas indevidas em mobile. Priorizar reflow, crop intencional, alinhamento e legibilidade.

**[Pendente de aprovação]** Container canônico, política definitiva de grid, distribuição de colunas por viewport e regras finais de altura para seções.

### Responsividade aprovada para a Home

- O respiro lateral de conteúdo usa `24px` em toda a faixa abaixo de `768px`; tablet de `768px` a `1023px` preserva `24px` e desktop preserva o sistema existente.
- A mesma borda responsiva orienta Header, Hero, About, Testimonials, Top, Trips, Why e Footer; fotografias full-bleed, carrosséis e o menu lateral permanecem exceções intencionais.
- Textos corridos usam altura dinâmica e largura de leitura limitada; títulos podem quebrar naturalmente, sem cortes ou redução indiscriminada para esconder overflow.
- Grids de cards preservam a composição desktop a partir de `1024px`; em mobile, Top mantém carrossel horizontal e Trips mantém uma coluna com informação sempre visível ao toque.
- Na seção Top, abaixo de `768px` o carrossel mobile existente é preservado; de `768px` a `899px`, a faixa editorial usa scroll horizontal nativo com CSS Scroll Snap, cards de aproximadamente `43%` da faixa e cerca de dois cards completos mais parte do próximo; de `900px` a `1199px`, usa cards de aproximadamente `30%` e cerca de três completos mais parte do próximo; a partir de `1200px`, os cinco cards permanecem estáticos lado a lado.
- A adaptação tablet limita a altura dos cards com escala fluida (`420px` a `500px`), preservando fotografia `cover`, overlays, títulos, tabs, `VER MAIS`, navegação por toque, trackpad e teclado, sem overflow horizontal no documento.
- Why usa duas colunas em mobile para manter números, ícones e legendas legíveis. Ready conserva seu conteúdo atual sem expansão estrutural.
- O Footer usa composição vertical centralizada até `767px`, com respiro lateral de `24px`; o Cadastur ocupa toda a largura útil da coluna, sem esticar suas imagens, e usa QR Code de pelo menos `112px`. Entre `768px` e `1199px`, usa grid 2×2 nomeado: Logo/Cadastur à esquerda e Navegue/Informações de Contato à direita; a partir de `1200px`, preserva quatro colunas horizontais, com Cadastur compacto e alinhado ao topo.
- O ritmo vertical deve alternar impacto fotográfico, leitura e respiro, preservando a composição desktop existente.

## 6. Fotografia editorial

**[Diretriz]** Fotografia deve transmitir lugar, atmosfera e contexto real — naturalidade, qualidade editorial, sentido de escala e curadoria. É protagonista da experiência, não mero preenchimento de cards.

- Privilegiar composição sólida, luz coerente, enquadramento intencional e pontos focais reconhecíveis.
- Usar imagens full-bleed quando sustentarem a narrativa; intercalar com fotografias menores e espaços negativos.
- Controlar `cover`, `object-position` e overlays para evitar cortes do assunto principal ou perda de contraste do texto.
- Evitar filtros pesados, saturação exagerada, texturas sintéticas, colagens gratuitas e texto embutido em imagens quando houver alternativa semântica.
- Preservar assets já selecionados; qualquer troca deve ser proposta e aprovada.

**[Pendente de aprovação]** Critérios específicos de tratamento de cor, proporções por superfície, origem e licenciamento de novas mídias.

## 7. Referências externas e aplicações permitidas

**[Referências selecionadas]** As referências registram preferências de estilo, interação e motion — não autorizam reproduzir layouts nem importar identidade visual.

| Site | Característica que interessa | Limite de uso |
| --- | --- | --- |
| [Pelorus Travel](https://pelorustravel.com/) | Hovers refinados, interações intencionais e organização das informações. | Não copiar efeito ou componente literalmente. |
| [Black Tomato](https://www.blacktomato.com/) | Aparência limpa e elegante, estilização/hierarquia editorial e equilíbrio entre fotografia e respiro. | Não importar fontes, paleta ou composição pronta. |
| [Avenue H](https://www.avenueh.com/) | Fluidez do scroll, sensação de jornada e transições narrativas com alternância de movimento e repouso. | Não presumir bibliotecas nem impor scroll forçado. |

**Distinção obrigatória:** **Avenue H é a referência principal de motion.** Black Tomato orienta a aparência editorial. Pelorus orienta hovers e clareza da apresentação das informações.

**[Pendente de aprovação]** Storyboard de aplicação dessas referências à Home e escolha de padrões por seção. A descrição de uma animação não demonstra qual tecnologia a produz.

## 8. Motion e experiência de navegação

**Direção de experiência selecionada:** o scroll deve parecer uma descoberta progressiva e contínua, como uma viagem cuidadosamente conduzida. O efeito depende de ritmo, composição, conteúdo e movimento — não apenas de rolagem suavizada.

### Princípios de motion

1. Movimento comunica estado, orientação, revelação ou mudança de contexto.
2. Alternar cenas de maior impacto com pausas estáticas de leitura.
3. Preferir transições suaves e legíveis, sem competir com fotografia ou conteúdo.
4. Evitar scroll-jacking, parallax excessivo e efeitos simultâneos sem propósito.
5. Hovers devem ter equivalentes perceptíveis para foco por teclado e estados touch adequados.
6. Manter navegação nativa, foco e interação disponíveis durante transições.
7. Respeitar `prefers-reduced-motion` em motion novo e revisar autoplay quando necessário.
8. Escolher CSS, Motion ou GSAP **somente após** aprovar o comportamento, caso sejam realmente necessários.

### Motion observado no site — não homologado como escala

**[Comprovado]** Transições entre `0.2s`, `0.4s`, `0.5s` e `0.6s`; easing cúbico no menu/indicador de scroll; Swiper com autoplay de `5000ms`.

**[Pendente de aprovação]** Durações canônicas, easing, stagger, gatilhos por scroll, política de autoplay, storyboard e eventuais dependências.

### Referência de motion — Painéis fotográficos da seção Escolha Sua Jornada

**[Aprovado — referência localizada]** A implementação dos painéis fotográficos da seção **Escolha Sua Jornada** foi avaliada visualmente, e sua suavidade foi aprovada como referência para futuras interações editoriais semelhantes.

- Movimento deliberadamente suave, com desaceleração prolongada.
- Duração de referência: `2s`.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Zoom fotográfico discreto: `scale(1.03)`.
- Revelação de texto por `opacity` em `400ms` e `translateY(10px → 0)`.
- Indicador decorativo `::after` com `4px` de altura, revelado por `scaleX`.
- Posicionamento do indicador adaptado responsivamente, mantendo alinhamento preciso com o conteúdo.
- Respeito obrigatório a `prefers-reduced-motion`.

Esses parâmetros são uma referência aprovada para interações semelhantes, não tokens globais obrigatórios. O Impeccable deve avaliar duração, intensidade e finalidade conforme cada componente.

## 9. Elevação, formas e componentes

### Elevation & Depth

**[Comprovado]** A profundidade atual utiliza fotografia, overlays, `text-shadow` e sombra discreta no Header após scroll (`0 4px 20px rgba(0, 0, 0, 0.08)`).

**[Diretriz — Flat by Default]** Sombras e blur apenas quando comunicarem separação, estado ou legibilidade. Evitar glassmorphism decorativo, sombras exageradas e camadas artificiais.

### Shapes

**[Aprovado — preservar]** Continuar usando os raios atuais: `3px` em botões, `5px` em cards de imagem e `8px` em depoimentos, sem redesenho amplo de bordas.

**[Diretriz — Quiet Shape]** Cantos discretos, geometria funcional e fotografia como protagonista. O fato de existirem tokens `sm`, `md` e `lg` não exige que todos os componentes compartilhem o mesmo formato.

### Buttons

- **[Comprovado] Light:** fundo transparente, borda branca de `1px`, texto branco, altura `40px`, padding `10px`, raio `3px`.
- **[Comprovado] Dark:** fundo `dark-bg`, texto branco, altura `40px`, padding `10px`, raio `3px`.
- **[Comprovado] Hover:** mudança de fundo, inclusive inversão para branco com borda escura no dark.
- **[Pendente]** `focus-visible`, disabled, loading, dimensões mínimas de área acionável e contrato `Link` versus `button`.

**Nota:** altura visual de `40px` não equivale necessariamente a área acionável de `44px`; melhorias de acessibilidade devem ser definidas sem alterar a aparência sem justificativa.

### Navigation

- **[Comprovado]** Header transparente sobre o Hero e claro após scroll; menu lateral com superfície branca e tipografia de navegação em caixa alta.
- **[Diretriz]** Preservar previsibilidade, interação por teclado, nomes acessíveis, foco visível e comportamento coerente de abertura/fechamento.
- **[Pendente]** Refinamento do hover, comportamento do Header e destinos reais dos links sociais.

### Cards and image surfaces

- **[Comprovado]** Cards de destinos e roteiros com imagem `cover`, overlay e texto claro; depoimentos em card textual claro.
- **[Diretriz]** Usar efeitos hover somente se reforçarem a interação; elementos acionáveis exigem semântica real e estados touch/teclado.
- **[Diretriz]** Não esconder informação essencial atrás de hover nem transformar a Home em uma sequência de cards padronizados.

### Seções características existentes

- **Hero:** vídeo, título display e CTAs.
- **Ready:** textura e CTA de encerramento.
- **Why:** ícones com acentos cromáticos existentes.
- **Footer:** informações institucionais, contato, Cadastur e QR code.

**[Pendente de aprovação]** Mudanças de estrutura, conteúdo, comportamento ou motion nessas seções exigem microtarefa e validação próprias.

## 10. Tom de voz aplicado ao digital

**Tom oficial: Sussurro de Autoridade.** A marca se comunica com calma, precisão e confiança. Português culto e natural, sem pedantismo; humor refinado leve quando adequado. Não usar hipérboles, gritaria publicitária, gírias de internet ou emojis infantilizados.

### Três pilares

- **Autoridade Silenciosa:** explicar por que uma experiência tem valor, sem superlativos vazios.
- **Inteligência Prática:** priorizar benefícios reais, como conforto, tempo economizado, organização e exclusividade contextualizada.
- **Elegância Acessível:** linguagem acolhedora e inteligente, sem distanciamento ou tom elitista.

**Microcopy e CTAs:** linguagem clara, descritiva e persuasiva sem pressão artificial. Não inventar escassez, avaliações, depoimentos, destinos, promessas ou números de conversão.

## 11. Acessibilidade, responsividade e qualidade

- Preservar HTML semântico, landmarks, ordem lógica dos headings, labels e nomes acessíveis.
- Disponibilizar `:focus-visible` e equivalentes de teclado para estados de hover; não depender de hover para revelar conteúdo.
- Considerar alvos de toque de ao menos `44px`, sem presumir que tamanho visual e área clicável sejam idênticos.
- Garantir contraste sobre fotos e fundos claros/escuros; validar também estados ativos e de foco.
- Respeitar `prefers-reduced-motion` sem perder conteúdo, acesso ou contexto.
- Verificar layout em `320px`, `390px`, `768px`, `1024px` e `1440px`, com atenção a overflow, corte de imagens e reflow.
- Não confundir build bem-sucedido com aprovação visual, de acessibilidade ou de experiência.

## 12. Regras de operação para Codex e Impeccable

### Fazer

- Ler `PRODUCT.md`, este `DESIGN.md`, `AGENTS.md` e, para direção visual/motion, `REFERENCES.md` quando disponível.
- Usar a identidade oficial, preservando fontes, cores, assets e linguagem de marca.
- Respeitar os espaçamentos e raios atuais; propor ajuste apenas quando houver problema verificável e necessidade justificada.
- Diferenciar fatos de código, decisões aprovadas, referências e propostas pendentes.
- Avaliar hierarquia, composição, legibilidade e acessibilidade antes de recomendar efeitos.
- Trabalhar uma superfície por vez, com escopo, critérios de aceite e validação explícitos.

### Não fazer

- Substituir cores ou famílias tipográficas oficiais pelas de referências externas.
- Reintroduzir coral como acento institucional ou remover seus usos legados sem autorização.
- Uniformizar os espaçamentos de todas as seções ou redesenhar raios sem pedido.
- Copiar interações ou criar animações apenas para parecer sofisticado.
- Inventar valores de motion, dependências, rotas, conteúdo comercial ou prova social.
- Modificar código, estilos ou assets durante uma auditoria exclusivamente documental.
- Fazer commit, push, deploy ou alterações de dependências automaticamente.

**Regra final:** o Impeccable deve **auditar e propor**, sem reinterpretar referências como autorização de redesign. O Codex deve implementar somente decisões explicitamente aprovadas e validar possíveis regressões. O Design System evolui por decisões conscientes, não pela aparência isolada de uma referência.
