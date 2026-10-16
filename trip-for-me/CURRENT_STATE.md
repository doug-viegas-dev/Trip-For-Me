# Trip For Me — Estado atual

**Atualizado em:** 15/10/2026  
**Escopo:** site institucional Trip For Me (não inclui o painel administrativo).

## Etapa atual

Consolidação da documentação e preparação das próximas microtarefas de design. **Nenhuma alteração visual está autorizada apenas por este registro.**

## Concluído

- `DESIGN.md` revisado e aprovado pelo responsável.
- `PRODUCT.md`, `REFERENCES.md` e `AGENTS.md` preparados para orientar Codex e Impeccable.
- Os quatro documentos foram identificados na branch `main` do GitHub em consulta realizada nesta conversa.
- Referências de design selecionadas e registradas; detalhes de implementação continuam sujeitos à aprovação.

## Em andamento

- Simplificação do acompanhamento operacional neste `CURRENT_STATE.md`.
- Organização do histórico de decisões em `DECISIONS.md` (ainda não criado).

## Pendências conhecidas

| Prioridade | Área | Pendência / risco | Próxima ação | Situação |
| --- | --- | --- | --- | --- |
| **P1** | Tipografia | Variável da DM Serif diferente entre `layout.tsx` e Sass; risco de fallback nos títulos. | Alinhar os nomes sem trocar a fonte oficial. | ☐ Pendente |
| **P1** | Responsividade | Grids, alturas e espaçamentos de algumas seções podem comprometer telas pequenas. | Inspecionar a Home em 320, 390, 768, 1024 e 1440px; propor correções pontuais. | ☐ Não validado visualmente |
| **P1** | Acessibilidade | Menu, abas, foco, estados equivalentes a hover e redução de movimento exigem revisão. | Auditar teclado, semântica, toque e `prefers-reduced-motion`. | ☐ Pendente |
| **P3** | Sass | `lighten()` em `Trips` gerou aviso de depreciação em build anterior. | Substituir pontualmente após autorização e validar o build. | ☐ Pendente |

**Legenda:** P1 = prioridade alta; P2 = média; P3 = baixa. Prioridades herdadas da auditoria anterior, sujeitas a revisão após validação em navegador. Nenhum item está autorizado para implementação apenas por constar nesta tabela.

## Próximo passo

Criar um `DECISIONS.md` enxuto, registrando **somente decisões aprovadas**. Depois, escolher a primeira microtarefa de auditoria visual da Home, sem implementar alterações antes da aprovação.

## Validações e observações

- Build aprovado em auditoria anterior; **não foi reexecutado** para este documento.
- Testes em navegador, mobile e dispositivos físicos permanecem pendentes.
- Este arquivo é um resumo temporário de andamento, não substitui `PRODUCT.md`, `DESIGN.md`, `REFERENCES.md` ou `AGENTS.md`.
