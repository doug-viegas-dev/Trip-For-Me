# AGENTS.md

## Contexto obrigatório

Antes de implementar qualquer interface, o Codex deve ler, nesta ordem:

1. `PRODUCT.md` — propósito, usuários, restrições e fatos do produto.
2. `DESIGN.md` — tokens, direção visual, componentes e decisões aprovadas.
3. Os arquivos existentes da superfície que será alterada.

`DESIGN.md` é a autoridade visual do projeto. O código existente é a evidência de referência; não deve ser substituído por uma identidade inventada.

## Regras para Codex

- Diferencie sempre `[Comprovado]`, `[Diretriz]`, `[Pendente de aprovação]` e hipótese.
- Não transforme uma recomendação pendente em implementação sem aprovação explícita.
- Preserve Next.js, React, TypeScript, SCSS, rotas, SEO, conteúdo, assets, dependências, responsividade e acessibilidade.
- Em tarefas documentais, altere somente os documentos solicitados.
- Em tarefas de interface, prefira o menor diff que consolide padrões existentes.
- Reutilize tokens e componentes já existentes antes de criar abstrações.
- Só extraia um componente compartilhado quando houver repetição real e contrato visual/semântico claro.
- Não crie novas cores, fontes, gradientes, sombras, raios, escalas ou efeitos sem registrar a necessidade e obter aprovação.
- Não invente destinos, depoimentos, métricas, claims, links ou dados de conversão.
- Não faça deploy, commit, instalação de dependência ou alteração de backend automaticamente.

## Regras para o Impeccable

Ao usar qualquer fluxo do Impeccable (`shape`, `document`, `audit`, `critique`, `layout`, `typeset`, `polish` ou equivalente):

- Ler `PRODUCT.md` e `DESIGN.md` antes de analisar ou editar uma superfície.
- Tratar o frontmatter de `DESIGN.md` como camada normativa de tokens.
- Tratar o texto de `DESIGN.md` como restrição de direção visual e os marcadores de aprovação como autoridade de escopo.
- Respeitar a direção editorial contemporânea, sofisticada e imersiva documentada aqui.
- Refinar o sistema existente; não iniciar redesign, rebrand ou nova identidade sem pedido explícito.
- Preservar a paleta, a tipografia, os assets e os padrões de fotografia existentes até que uma mudança seja aprovada.
- Evitar gradientes decorativos, parallax excessivo, glassmorphism sem justificativa, sombras fortes e cards genéricos.
- Não usar uma saída genérica do Impeccable para substituir decisões comprovadas do projeto.
- Se uma recomendação ainda estiver marcada como pendente, reportá-la como decisão a validar em vez de aplicá-la.
- Em auditorias, não corrigir automaticamente os achados; separar diagnóstico, proposta e alteração executada.

## Critérios mínimos de interface

- Componentes interativos devem ter semântica correta, label acessível, foco visível e estados de teclado equivalentes ao hover.
- Motion novo deve respeitar `prefers-reduced-motion` e não pode bloquear leitura ou foco.
- Layouts devem ser validados em `320px`, `390px`, `768px`, `1024px` e `1440px`.
- Fotografia deve manter qualidade editorial, proporção coerente, crop intencional e contraste suficiente para texto.
- O resultado deve manter a hierarquia visual sem aumentar efeitos decorativos.

## Validação e entrega

Depois de uma alteração autorizada, executar validações proporcionais ao risco, no mínimo:

- `npm.cmd run build`
- `git diff --check`
- inspeção visual responsiva quando houver alteração de interface
- navegação por teclado e verificação de foco quando houver interação

Relatar arquivos alterados, validações executadas, avisos existentes e lacunas de validação. Não declarar deploy ou validação física sem evidência.
