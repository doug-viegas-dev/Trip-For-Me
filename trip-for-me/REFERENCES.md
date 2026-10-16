# Trip For Me — Referências visuais e de motion

> **Status:** referências selecionadas para orientar a direção de arte digital. **Não constituem autorização para implementar mudanças.**
>
> **Hierarquia de contexto:** `PRODUCT.md` define a marca e sua comunicação; `DESIGN.md` define a identidade visual e as decisões aprovadas; este arquivo registra inspirações externas e oportunidades de adaptação. Em caso de conflito, prevalecem as diretrizes oficiais e as decisões aprovadas.

## 1. Objetivo

Construir uma experiência de navegação editorial, sofisticada e imersiva para a Home do Trip For Me, sem descaracterizar a marca.

As referências são complementares, **não modelos a copiar**:

| Referência | Aspecto selecionado | Papel na experiência |
| --- | --- | --- |
| **Pelorus Travel** | Hover refinado e organização das informações | Interatividade e clareza |
| **Black Tomato** | Aparência limpa e elegante, tratamento tipográfico e composição editorial | Linguagem visual e hierarquia |
| **Avenue H** | Fluidez do scroll e sensação de jornada | Ritmo narrativo e transições |

### Restrições permanentes

- Preservar integralmente as **cores e famílias tipográficas oficiais** registradas em `DESIGN.md`.
- Não importar cores, fontes, logotipos, textos, imagens ou layouts literalmente das referências.
- Preservar os espaçamentos e raios atuais aprovados; qualquer refinamento deve ser pontual e justificado.
- Não escolher antecipadamente bibliotecas, curvas de easing, durações, parallax, pinning ou smooth-scroll sem avaliação técnica e aprovação.
- Respeitar acessibilidade, responsividade, navegação por teclado e `prefers-reduced-motion`.
- Distinguir sempre **observação selecionada**, **proposta** e **decisão aprovada**.
- Não modificar código ou assets com base apenas neste documento.

## 2. Referência 01 — Pelorus Travel

URL: [pelorustravel.com](https://pelorustravel.com/)

### O que foi selecionado pelo responsável

- O estilo dos efeitos **hover**.
- A maneira como as informações são organizadas e apresentadas.
- Interações discretas, elegantes e intencionais.

### Aplicações potenciais no Trip For Me — propostas

- Refinar o feedback visual dos elementos interativos existentes, sem transformar hover em efeito decorativo.
- Usar hierarquia, agrupamentos e espaçamento para tornar informações e ações mais fáceis de localizar.
- Garantir equivalentes para teclado (`:focus-visible`) e toque, sem depender de hover para revelar informações essenciais.

**Não estabelecido:** efeitos exatos, duração, easing, animações de cards, bibliotecas ou estados finais.

## 3. Referência 02 — Black Tomato

URL: [blacktomato.com](https://www.blacktomato.com/)

## O que foi selecionado pelo responsável

- O estilo e a aparência geral: **limpos, elegantes e sofisticados**.
- A maneira como a tipografia é **estilizada e hierarquizada**.
- A organização editorial das informações.
- O equilíbrio entre fotografia, texto e espaços de respiro.

### Aplicações potenciais no Trip For Me — propostas

- Explorar variações de escala, peso, largura de linha, alinhamento e ritmo usando **DM Serif Display, Montserrat e Quicksand**, sem substituir as famílias oficiais.
- Construir composições editoriais em que imagem e texto tenham funções claras.
- Preservar a leitura rápida e o respiro, evitando seções densas ou visualmente repetitivas.

**Não estabelecido:** nova escala tipográfica, novos tokens, alteração da paleta ou reprodução de grids específicos.

## 4. Referência 03 — Avenue H

URL: [avenueh.com](https://www.avenueh.com/) 

**Registro visual fornecido:** `Avenue.mp4` (anexo da conversa; principal referência de motion).

### O que foi selecionado pelo responsável

- A **fluidez da navegação** ao rolar a página.
- A sensação de que o scroll conduz o visitante por uma **jornada**.
- A progressão visual entre diferentes composições.
- Transições narrativas entre seções e momentos de movimento alternados com descanso visual.

### Aplicações potenciais no Trip For Me — propostas

- Trabalhar a continuidade perceptiva entre as seções existentes, mantendo a navegação vertical natural.
- Usar a passagem de uma seção a outra para reforçar a narrativa: descoberta, curadoria, confiança e convite ao contato.
- Alternar fotografias de maior impacto com composições mais serenas e informativas.
- Usar motion para revelar ou contextualizar conteúdo, sem restringir a rolagem nem atrasar o acesso à informação.
- Projetar a mesma narrativa com animações reduzidas ou ausentes para quem prefere menos movimento.

**Não estabelecido:** implementação de smooth scrolling, scroll hijacking, pinning, parallax, GSAP, Motion, Lenis, timings, easing ou coreografias específicas. Essas escolhas exigem protótipo e validação posterior.

> **Nota de atribuição:** a referência principal de **fluidez e sensação de jornada** é **Avenue H**, não Black Tomato.

## 5. Possíveis pontos de aplicação na Home — não aprovados

| Superfície atual | Referência útil | Hipótese a avaliar |
| --- | --- | --- |
| `Header` e menu | Pelorus Travel | Feedback de hover/foco e clareza da navegação |
| `Hero` → `About` | Avenue H | Transição de abertura para narrativa editorial |
| `About` e `Why` | Black Tomato | Hierarquia de texto, composição e respiro |
| `Top` e `Trips` | Pelorus Travel + Black Tomato | Exploração dos destinos com organização e interação refinadas |
| Passagem entre seções da Home | Avenue H | Ritmo contínuo sem efeitos intrusivos |

Essas relações são **hipóteses de direção de arte**, não especificações nem autorização de alteração.

## 6. Como Codex e Impeccable devem utilizar este arquivo

1. Ler `PRODUCT.md` e `DESIGN.md` antes desta curadoria, além de `AGENTS.md` e do código da superfície analisada.
2. Utilizar cada referência **somente** para a característica explicitamente selecionada acima.
3. Em auditorias (`critique`, `audit` ou equivalentes), separar **observação do site**, **proposta adaptada** e **mudança autorizada**.
4. Quando o comportamento depender do movimento real, consultar a gravação acessível ou observar a interação funcional; não inferir detalhes técnicos a partir de descrições ou imagens estáticas.
5. Antes de implementar, elaborar proposta delimitada com impacto visual, arquivos prováveis, critérios de aceite, estados mobile/teclado e tratamento de `prefers-reduced-motion`.
6. Implementar apenas depois de aprovação explícita, em pequenas alterações verificáveis.

## 7. Critérios para aprovar futuras propostas

- Identidade e tom de voz alinhados a `PRODUCT.md` e `DESIGN.md`.
- Composição e hierarquia mais claras, sem aumento de ruído visual.
- Motion com função narrativa ou de orientação, não mero ornamento.
- Leitura e navegação preservadas em desktop, tablet e mobile.
- Ações disponíveis por teclado e toque; ausência de conteúdo essencial exclusivo de hover.
- Alternativa adequada para `prefers-reduced-motion`.
- Performance e acessibilidade consideradas antes de introduzir dependências ou efeitos complexos.

**Situação atual:** referências registradas; aplicações e detalhes técnicos **pendentes de aprovação**. Nenhuma implementação é autorizada por este documento.
