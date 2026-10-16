# AGENTS.md — Trip For Me Site

## 1. Escopo e responsabilidade

Este arquivo orienta o Codex, o Impeccable e outros agentes que trabalham no **site institucional Trip For Me**.

- **Projeto:** site institucional da agência Trip For Me, distinto do painel administrativo e dos aplicativos da marca.
- **Stack atual:** Next.js (App Router), React, TypeScript, SCSS, CSS Modules e estilos Sass compartilhados.
- **Princípio central:** preservar identidade, conteúdo e funcionalidades; evoluir a interface em microtarefas verificáveis.
- **Papel do Codex:** inspecionar o repositório, propor mudanças delimitadas, implementar somente o que foi autorizado e testar.
- **Papel do Impeccable:** apoiar a análise e o refinamento de interface, composição, hierarquia, interações, acessibilidade e motion, sempre subordinado às regras da marca.

## 2. Fontes de verdade e ordem de leitura

Antes de uma alteração de interface, consultar nesta ordem:

1. `PRODUCT.md` — propósito, público, posicionamento, voz e restrições do produto.
2. `DESIGN.md` — identidade oficial, tokens, regras e decisões de design aprovadas; é a **autoridade visual**.
3. `REFERENCES.md` — **somente em tarefas de design, UX, interação ou motion**; registra inspirações selecionadas, não especificações autorizadas.
4. Código e assets atuais da superfície envolvida — referência do comportamento implementado.
5. `CURRENT_STATE.md` e `DECISIONS.md`, **se existirem**, para consultar progresso e decisões adicionais registradas.

O próprio `AGENTS.md` estabelece as regras operacionais e deve ser respeitado durante todo o trabalho. Havendo conflito, identificar a divergência e solicitar decisão; não substituir regras oficiais por sugestões externas nem considerar o código existente, isoladamente, uma aprovação de design.

**Estado da documentação:** consultar sempre a versão efetivamente disponível no diretório de trabalho. Para afirmar que uma alteração está publicada no GitHub, verificar commit e push na branch correspondente. Não presumir que arquivos locais, anexos de conversa ou uma versão anterior estejam sincronizados.

## 3. Níveis de autoridade das informações

Distinguir explicitamente:

- **[Oficial — marca]:** identidade e comunicação fornecidas pelo responsável; só mudar com aprovação expressa.
- **[Aprovado — preservar]:** escolhas atuais que o responsável decidiu manter, inclusive espaçamentos e raios existentes.
- **[Comprovado — implementação]:** o que foi verificado no código, sem implicar aprovação para novos usos.
- **[Diretriz]:** regra de qualidade ou expressão da experiência.
- **[Referência selecionada]:** característica externa escolhida como inspiração, não como cópia ou autorização de implementação.
- **[Pendente de aprovação] / [Hipótese]:** proposta ou interpretação ainda não autorizada.

Nunca promover uma hipótese ou sugestão a decisão aprovada por iniciativa própria.

## 4. Identidade e linguagem da Trip For Me

- Preservar as **seis cores institucionais** e as famílias **DM Serif (DM Serif Display no frontend), Montserrat e Quicksand**, conforme `DESIGN.md`.
- O coral `#e76f51` é **legado observado no código, não cor institucional confirmada**. Não aplicá-lo em novos elementos como acento oficial nem remover usos existentes sem auditoria e autorização.
- Preservar os **espaçamentos e raios atuais aprovados**. Não uniformizar seções, reduzir respiros ou introduzir nova escala sem necessidade demonstrada e aprovação.
- Traduzir a essência **Segurança Sofisticada**, a personalidade **Esteta Funcional** e a voz **Sussurro de Autoridade** em clareza, confiança, ritmo editorial e precisão.
- Evitar hipérboles comerciais, urgência artificial, exagero ornamental, gírias e comunicação genérica. Não reescrever conteúdo aprovado sem autorização.
- Não inventar destinos, avaliações, depoimentos, estatísticas, serviços, links, preços, vagas, condições comerciais ou promessas.

### Como usar referências externas

- **Pelorus Travel:** hovers e organização das informações.
- **Black Tomato:** aparência editorial limpa e elegante, estilização e hierarquia tipográfica **com as fontes da Trip For Me**.
- **Avenue H:** fluidez da navegação, progressão narrativa e sensação de jornada durante o scroll.

Não importar cores, fontes, imagens, textos, layouts completos ou tecnologias dessas referências. Para animações específicas, usar gravação ou observação funcional disponível; não inventar duração, easing, biblioteca ou técnica.

## 5. Regras de implementação no Codex

1. Trabalhar **uma microtarefa por vez**, com objetivo, escopo, arquivos prováveis, critérios de aceite e testes.
2. Antes de editar, identificar o problema e o comportamento existente, avaliar impacto e propor o **menor diff** que resolve a tarefa.
3. Reutilizar Sass, tokens e componentes existentes. Extrair abstrações apenas quando houver repetição comprovada e contrato semântico/visual claro.
4. Preservar Next.js App Router, React, TypeScript, SCSS, estrutura de rotas, SEO, metadados, imagens, conteúdos, dependências e integrações.
5. Não fazer refatoração ampla, rebrand, troca de fonte/paleta, redesign de seção não solicitada, substituição de assets nem instalação de dependências sem aprovação.
6. Não alterar backend, configurações sensíveis, outro projeto Trip For Me ou regras de dados sem solicitação específica.
7. Não executar **commit, push ou deploy** automaticamente.
8. Em tarefas **somente documentais**, modificar exclusivamente os documentos pedidos; não corrigir código de maneira incidental.
9. Em auditorias ou pedidos de proposta, **não editar arquivos**; separar diagnóstico, opções e decisões pendentes.
10. Quando houver informação insuficiente para uma escolha de identidade ou comportamento, registrar o ponto como pendente em vez de inventar uma definição.

## 6. Uso do Impeccable

Antes de qualquer comando de auditoria ou refinamento (`audit`, `critique`, `layout`, `typeset`, `polish`, `animate`, `shape`, `document` ou equivalente):

1. Ler `PRODUCT.md` e `DESIGN.md`; ler `REFERENCES.md` quando a tarefa envolver referências, interação ou motion.
2. Ler os componentes e estilos da superfície alvo antes de atribuir problemas ao design.
3. Tratar o frontmatter de `DESIGN.md` como tokens normativos e seu conteúdo como restrições de direção de arte e aprovação.
4. Considerar referências apenas **nas características explicitamente selecionadas**; sugestões do Impeccable não têm autoridade para redefinir a marca.
5. Produzir diagnóstico e proposta antes de qualquer edição, salvo quando a implementação específica já tiver sido aprovada.
6. Preservar espaçamentos e raios que o responsável aprovou; mudanças pontuais de responsividade/acessibilidade exigem justificativa e escopo claro.
7. Evitar efeitos genéricos, gradientes decorativos, glassmorphism gratuito, sombras exageradas, parallax invasivo, scroll hijacking e cards padronizados sem função.
8. Motion deve acompanhar a narrativa e a compreensão; não bloquear navegação, leitura, scroll ou foco.

O Impeccable é **ferramenta de avaliação e refinamento**, não autoridade sobre identidade, arquitetura ou conteúdo.

## 7. Critérios de qualidade de interface

- **Semântica e acessibilidade:** HTML apropriado, hierarquia de headings, labels e nomes acessíveis, foco `:focus-visible`, navegação por teclado e alternativas ao hover para toque.
- **Movimento:** respeitar `prefers-reduced-motion`; evitar deslocamentos intrusivos, bloqueios de scroll ou conteúdo inacessível quando as animações forem reduzidas.
- **Responsividade:** validar no mínimo `320px`, `390px`, `768px`, `1024px` e `1440px`, incluindo overflow horizontal, crop de imagens, legibilidade e alvos de toque.
- **Fotografia:** preservar proporções e qualidade editorial, `object-position` intencional, legibilidade do texto sobreposto e assets existentes.
- **Performance e SEO:** evitar dependências e trabalho de runtime desnecessários; preservar metadata, semântica, carregamento e estrutura de navegação.
- **Consistência:** valorizar tipografia, composição, fotografia e respiro antes de acrescentar decoração ou animações.

## 8. Validação e relatório de entrega

Escolher validações proporcionais ao risco e informar **somente resultados efetivamente executados**.

- **Alteração documental:** revisar Markdown/links/estrutura, verificar que apenas os documentos autorizados mudaram e executar `git diff --check`; não exigir build sem impacto em código.
- **Alteração de código/interface:** executar `npm.cmd run build` no Windows (ou equivalente no ambiente), `git diff --check` e as verificações de TypeScript/lint/testes relevantes.
- **Alteração visual:** inspecionar desktop e mobile nos breakpoints definidos, com comparação antes/depois quando possível.
- **Interação:** conferir mouse, teclado, foco, toque e estados de erro/ausência quando aplicáveis.
- **Motion:** verificar alternativas com `prefers-reduced-motion`, fluidez e ausência de bloqueio de conteúdo.

Entregar sempre um resumo objetivo com: **o que mudou**, **arquivos alterados**, **validações com evidências**, **riscos/lacunas** e **próxima microtarefa sugerida**. Não afirmar que houve publicação no GitHub, deploy ou teste em dispositivo real sem confirmação verificável.
