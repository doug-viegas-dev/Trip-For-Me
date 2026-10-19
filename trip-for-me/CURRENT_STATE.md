# Trip For Me — Estado atual

**Atualizado em:** 19/10/2026
**Escopo:** site institucional Trip For Me (não inclui o painel administrativo).

## Etapa atual

Implementação e validação da consolidação responsiva da Home, seguida da Etapa 3 de integração dos indicadores ao Footer.

## Concluído

- `DESIGN.md` revisado e aprovado pelo responsável.
- `PRODUCT.md`, `REFERENCES.md` e `AGENTS.md` preparados para orientar Codex e Impeccable.
- Os quatro documentos foram identificados na branch `main` do GitHub em consulta realizada nesta conversa.
- Referências de design selecionadas e registradas; detalhes de implementação continuam sujeitos à aprovação.
- Revisão responsiva implementada nos breakpoints de `320px`, `390px`, `768px`, `1024px` e `1440px`.
- Bordas de conteúdo, escala de leitura mobile, reflow de Why, cards touch e menu fechado sem faixa visível foram corrigidos.
- `DESIGN.md` e `DECISIONS.md` atualizados com as regras e a decisão responsiva aprovada.
- Respiro lateral mobile ampliado e padronizado em `24px` para `320px`, `390px` e `430px`, sem alterar tablet ou desktop.
- A seção Top foi adaptada para tablet: `768–899px` mostra aproximadamente dois cards completos e parte do próximo; `900–1199px` mostra aproximadamente três e parte do próximo, com scroll horizontal nativo e CSS Scroll Snap. Abaixo de `768px` e a partir de `1200px`, os comportamentos existentes foram preservados.
- A altura fixa de `120vh` do Top foi removida; a seção agora acompanha o conteúdo em todas as faixas e mantém somente `40px` de respiro inferior antes de Trips, sem alterar Trips.
- Ready deixou de ser renderizado na Home, sem exclusão dos arquivos do componente.
- Os quatro indicadores de Why foram preservados em uma única implementação, sem o título independente, e integrados ao início do Footer com fundo escuro contínuo.
- Os indicadores usam quatro colunas em desktop/tablet e grid 2×2 no mobile, com borda visual de 24px abaixo de `768px`.
- Footer refinado: conteúdo institucional centralizado até `767px`, Cadastur ocupando a largura útil da coluna com QR de `112px`, grid 2×2 entre `768px` e `1199px` com Logo/Cadastur à esquerda e Navegue/Contato à direita, e Cadastur compacto/alinhado ao topo nas quatro colunas a partir de `1200px`.

## Em andamento

- Validação automatizada e auditoria visual da Etapa 3 concluídas; não houve commit, push ou deploy.

## Pendência específica da Etapa 3

- Os números `+20`, `+40`, `+300` e `+80` foram preservados conforme solicitado, mas dependem de confirmação factual do cliente antes da publicação.

## Pendências conhecidas

| Prioridade | Área | Pendência / risco | Próxima ação | Situação |
| --- | --- | --- | --- | --- |
| **P1** | Tipografia | Variável da DM Serif diferente entre `layout.tsx` e Sass; risco de fallback nos títulos. | Alinhar os nomes sem trocar a fonte oficial. | ☐ Pendente |
| **P2** | Responsividade | Validação física em aparelhos reais não foi realizada. | Repetir a matriz em dispositivos reais antes da publicação. | ☐ Pendente |
| **P1** | Acessibilidade | Menu, abas, foco, estados equivalentes a hover e redução de movimento exigem revisão ampliada. | Completar auditoria de teclado e `prefers-reduced-motion`; o menu recebeu Escape, foco e inert nesta etapa. | ☐ Parcial |
| **P3** | Sass | `lighten()` em `Trips` gerou aviso de depreciação em build anterior. | Substituir pontualmente após autorização e validar o build. | ☐ Pendente |

**Legenda:** P1 = prioridade alta; P2 = média; P3 = baixa. Prioridades herdadas da auditoria anterior, sujeitas a revisão após validação em navegador. Nenhum item está autorizado para implementação apenas por constar nesta tabela.

## Próximo passo

Repetir a matriz em dispositivos físicos e decidir, em microtarefa separada, se a variável de DM Serif não utilizada deve ser removida do carregamento do layout.

## Validações e observações

- Screenshots antes e depois foram capturados em navegador para `320px`, `390px`, `768px`, `1024px` e `1440px`.
- A captura desta microtarefa também incluiu `430px`; os containers mobile passaram de `16/20px` para `24px` e permaneceram sem overflow horizontal.
- Para esta microtarefa, a matriz solicitada foi inspecionada em `390px`, `768px`, `820px`, `1024px`, `1180px`, `1200px` e `1440px`; a evidência antes/depois foi capturada no Chrome DevTools. Em `768/820px` foram observados dois cards completos e parte do próximo; em `1024/1180px`, três e parte do próximo; em `1200/1440px`, cinco estáticos.
- A distância real entre o botão `VER MAIS` do Top e o início de Trips passou de `40px` para `40px` em `390px`; de `440px` para `40px` em `768px`; de `434px` para `40px` em `820px`; de `360px` para `40px` em `1024px` e `1180px`; e de `245px` para `40px` em `1440px`.
- As dimensões computadas pós-ajuste confirmaram `height: auto`, `min-height: 0px`, `padding-top: 40px`, `padding-bottom: 40px`, margens `0`, grid e botão totalmente visíveis, sem overflow horizontal; `EM ALTA` foi alternada e manteve o mesmo respiro.
- Screenshots comparativos do Chrome DevTools foram capturados para `768px`, `820px`, `1024px`, `1180px` e `1440px` em `artifacts/top-spacing-before-*.png` e `artifacts/top-spacing-after-*.png`; `390px` foi verificado por medição e captura visual inline.
- O track tablet apresentou `overflow-x: auto` e `scroll-snap-type: x mandatory`; `ArrowRight` avançou para o próximo snap e `body/document.scrollWidth` não excedeu a largura útil do viewport. A troca para `EM ALTA` foi verificada.
- `npm.cmd run build` passou com aviso preexistente de depreciação de `lighten()` em `Trips`.
- `npm.cmd exec -- tsc --noEmit` passou.
- `npm.cmd exec -- eslint . --ignore-pattern .next` passou com um aviso preexistente de import `Image` não usado no Footer.
- `git diff --check` passou.
- A Etapa 3 foi inspecionada no Chrome DevTools em `320px`, `390px`, `768px`, `1024px` e `1440px`: Ready e o título independente de Why não aparecem; os indicadores não geram overflow; o Footer mantém contato, logotipo, Cadastur, QR Code e copyright.
- O ajuste final do Footer foi inspecionado no Chrome DevTools em `320px`, `390px`, `430px`, `768px`, `820px`, `1024px`, `1180px`, `1200px` e `1440px`: o grid tablet usa Logo/Cadastur à esquerda e Navegue/Contato à direita; o Cadastur ocupa a largura útil no mobile/tablet; o Cadastur desktop ficou compacto e alinhado ao topo; não houve overflow.
- `npm.cmd run build` e `npx.cmd tsc --noEmit` passaram nesta Etapa 3; o build manteve apenas o aviso preexistente de depreciação de `lighten()` em `Trips`.
- No ajuste final, `npm.cmd run build`, `npm.cmd exec -- tsc --noEmit`, `npm.cmd exec -- eslint . --ignore-pattern .next` e `git diff --check` passaram; build mantém o aviso preexistente de `lighten()` em `Trips` e ESLint mantém o aviso de `Image` não usado em `Footer/index.tsx`.
- A validação física em Android/iOS e o deploy permanecem fora desta etapa.
- Este arquivo é um resumo temporário de andamento, não substitui `PRODUCT.md`, `DESIGN.md`, `REFERENCES.md` ou `AGENTS.md`.
