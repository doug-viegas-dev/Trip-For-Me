# Trip For Me — Estado atual

**Atualizado em:** 16/10/2026
**Escopo:** site institucional Trip For Me (não inclui o painel administrativo).

## Etapa atual

Implementação e validação da consolidação responsiva da Home, com preservação da identidade visual e da composição desktop.

## Concluído

- `DESIGN.md` revisado e aprovado pelo responsável.
- `PRODUCT.md`, `REFERENCES.md` e `AGENTS.md` preparados para orientar Codex e Impeccable.
- Os quatro documentos foram identificados na branch `main` do GitHub em consulta realizada nesta conversa.
- Referências de design selecionadas e registradas; detalhes de implementação continuam sujeitos à aprovação.
- Revisão responsiva implementada nos breakpoints de `320px`, `390px`, `768px`, `1024px` e `1440px`.
- Bordas de conteúdo, escala de leitura mobile, reflow de Why, cards touch e menu fechado sem faixa visível foram corrigidos.
- `DESIGN.md` e `DECISIONS.md` atualizados com as regras e a decisão responsiva aprovada.
- Respiro lateral mobile ampliado e padronizado em `24px` para `320px`, `390px` e `430px`, sem alterar tablet ou desktop.

## Em andamento

- Validação automatizada e auditoria visual final concluídas; não houve deploy.

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
- `npm.cmd run build` passou com aviso preexistente de depreciação de `lighten()` em `Trips`.
- `npm.cmd exec -- tsc --noEmit` passou.
- `npm.cmd exec -- eslint . --ignore-pattern .next` passou com um aviso preexistente de import `Image` não usado no Footer.
- `git diff --check` passou.
- A validação física em Android/iOS e o deploy permanecem fora desta etapa.
- Este arquivo é um resumo temporário de andamento, não substitui `PRODUCT.md`, `DESIGN.md`, `REFERENCES.md` ou `AGENTS.md`.
