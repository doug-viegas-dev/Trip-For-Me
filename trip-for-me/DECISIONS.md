# Trip For Me — Registro de decisões

> **Objetivo:** registrar decisões efetivamente aprovadas e suas justificativas, evitando que o Codex ou o Impeccable tratem hipóteses como definições do projeto.
>
> **Fontes de detalhamento:** `PRODUCT.md` (marca e produto), `DESIGN.md` (regras visuais) e `REFERENCES.md` (referências selecionadas). Este arquivo registra **o que foi decidido e por quê**, sem reproduzir esses documentos.

## Decisões aprovadas

| ID | Decisão | Justificativa | Impacto / restrição |
| --- | --- | --- | --- |
| D-001 | Preservar as **seis cores oficiais da marca**. | Garantir reconhecimento e consistência da identidade Trip For Me. | Referências externas não autorizam trocar a paleta; consultar os valores em `DESIGN.md`. |
| D-002 | Preservar **Montserrat e Quicksand**; usar Montserrat nos títulos. | A aparência anterior em Montserrat foi visualmente aprovada; DM Serif Display foi rejeitada por apresentar aparência serifada e pesada. | O token `$font-title` usa `Montserrat, sans-serif` explicitamente; preservar tamanhos, pesos, line-heights e espaçamentos existentes. |
| D-003 | **Manter os espaçamentos e raios atuais** como base visual. | O ritmo e as proporções existentes foram aprovados pelo responsável. | Ajustes localizados podem ser propostos para responsividade e legibilidade, mas não fazer uma substituição ampla sem aprovação. |
| D-004 | Adotar **Segurança Sofisticada** como essência da marca e **Sussurro de Autoridade** como princípio de comunicação. | Transmitir curadoria, conforto e confiança sem apelos excessivos. | Consultar `PRODUCT.md` para regras completas de voz, conteúdo e posicionamento. |
| D-005 | Usar **Pelorus Travel** como referência de **hovers e organização da informação**. | Refinar feedback visual e clareza da navegação. | Referência de intenção, não especificação técnica nem autorização para copiar ou implementar. |
| D-006 | Usar **Black Tomato** como referência de **aparência editorial limpa, elegante e hierarquia visual**. | Desenvolver uma linguagem digital sofisticada sem descaracterizar a marca. | Não importar cores, famílias tipográficas nem layouts literalmente. |
| D-007 | Usar **Avenue H** como referência prioritária de **fluidez de scroll e navegação como jornada**. | Construir progressão narrativa entre seções. | Técnica, intensidade e comportamento das animações dependem de proposta e aprovação específicas. |
| D-008 | Desenvolver o site **incrementalmente**, com Codex na implementação e Impeccable na auditoria/refinamento visual. | Preservar o código e possibilitar validações objetivas. | Separar diagnóstico, proposta aprovada e implementação; não alterar código nem dependências automaticamente. |
| D-009 | Manter o **GitHub como fonte de verdade** do código e da documentação versionada. | Evitar divergências entre cópias e decisões. | Alterações locais só passam a integrar a versão publicada após commit e push confirmados. |
| D-010 | Consolidar o sistema responsivo da Home com bordas de conteúdo de `16px`, `20px` e `24px` por faixa de viewport, mantendo Montserrat nos títulos. | A auditoria visual encontrou margens inconsistentes, leitura comprimida e indicadores ilegíveis em mobile. | Aplicar somente ajustes responsivos e de legibilidade; preservar paleta, fotografias, raios, copy, comportamento desktop e seções existentes. |
| D-011 | Ampliar o respiro lateral mobile para `24px` em toda a faixa abaixo de `768px`. | A borda única melhora o alinhamento entre seções e reforça a composição editorial sem criar wrappers ou alterar a hierarquia tipográfica. | Aplicar ao conteúdo interno; preservar fundos full-bleed, vídeo do Hero, faixas de carrossel e valores de tablet/desktop. |
| D-012 | Adaptar a faixa tablet da seção Top para scroll horizontal nativo com CSS Scroll Snap, usando aproximadamente dois cards e parte do próximo em `768–899px` e três cards e parte do próximo em `900–1199px`. | Cinco cards simultâneos deixavam as fotografias estreitas e alongadas em larguras intermediárias; a faixa com cards mais largos melhora a leitura e sinaliza continuidade sem redesenhar mobile ou desktop. | Preservar abaixo de `768px` o carrossel existente e a partir de `1200px` os cinco cards estáticos, além de tabs, overlays, títulos e `VER MAIS`. |
| D-013 | Integrar os quatro indicadores existentes ao topo do Footer e retirar Ready da renderização da Home. | A decisão aprovada na reunião concentra a prova institucional em uma superfície contínua, reduz a fragmentação da Home e preserva o conteúdo comercial existente. | Manter os ícones, cores e textos atuais; os números ainda dependem de confirmação factual do cliente antes da publicação. |
| D-014 | Centralizar o Footer no mobile e usar um grid 2×2 entre `768px` e `1199px`, com Logo/Cadastur à esquerda e Navegue/Informações de Contato à direita, preservando quatro colunas a partir de `1200px`. | A composição vertical melhora o equilíbrio e a leitura em telas estreitas; duas colunas evitam a compressão das quatro colunas em tablets sem alterar o desktop. | Preservar textos, assets, Montserrat, indicadores superiores, QR Code e copyright; Cadastur ocupa a largura útil da célula sem esticar imagens e permanece compacto no desktop; sem alturas rígidas. |

## Definições que **não** foram aprovadas

| Tema | Situação atual |
| --- | --- |
| Coral `#e76f51` | Encontrado na implementação anterior, **não confirmado** entre as seis cores institucionais. Não removê-lo do código automaticamente. |
| Escala tipográfica definitiva | Tamanhos, pesos e line-heights observados ainda precisam de avaliação antes de virarem regra normativa. |
| Motion técnico | Nenhuma biblioteca, easing, duração, parallax, pinning ou smooth scrolling foi escolhida. |
| Redesign ou nova composição da Home | Nenhuma alteração visual concreta foi aprovada apenas por selecionar referências. |
| Correções técnicas e responsivas | Pendências identificadas em auditoria devem ser priorizadas e autorizadas individualmente. Consultar `CURRENT_STATE.md`. |

## Como registrar novas decisões

Adicionar uma linha à tabela de decisões aprovadas **somente após aprovação explícita**. Registrar o identificador sequencial, a decisão, a justificativa e o efeito prático. Quando relevante, indicar a data e a superfície afetada.

Atualizar `DESIGN.md` ou `PRODUCT.md` se a decisão estabelecer uma nova regra duradoura. Atualizar `CURRENT_STATE.md` quando a implementação ou a prioridade operacional mudar.

**Não confundir:** referência selecionada ≠ proposta aprovada ≠ implementação realizada.
