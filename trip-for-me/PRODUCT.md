# Trip For Me — Product

<!-- impeccable:product-schema 1 -->

## Platform

Web — site institucional da Trip For Me.

## Stack

[Comprovado — código auditado] Next.js App Router, React, TypeScript e SCSS. O frontend é organizado em componentes por seção, CSS Modules e estilos Sass compartilhados em `src/styles/`.

[Restrição] O site institucional e o painel administrativo Trip For Me são projetos distintos. Não misturar arquiteturas, funcionalidades ou requisitos.

## Users

[Diretriz — marca oficial] Os públicos informados pela marca incluem **HENRYs** (*High Earners, Not Rich Yet*) e **Boomers**. A comunicação deve considerar pessoas que valorizam conforto, segurança, curadoria, conveniência e o bom uso do próprio tempo, sem presumir que todas possuam as mesmas preferências ou habilidades digitais.

[Comprovado — copy existente] A proposta atual se dirige a viajantes interessados em experiências personalizadas, organização confiável e alternativas a roteiros genéricos.

[Pendente de aprovação] Segmentos prioritários por produto, personas detalhadas, faixas de investimento, mercados atendidos e necessidades específicas de inclusão.

## Product Purpose

[Comprovado — produto atual] Apresentar a agência de viagens Trip For Me, sua curadoria de experiências e seus roteiros personalizados. A Home conduz o visitante por descoberta, prova social, destinos, diferenciais e contato.

[Diretriz — marca oficial] A experiência digital deve expressar que a viagem é prazerosa não apenas pelo destino, mas pela qualidade do planejamento, da logística, do conforto e do acompanhamento envolvidos.

[Pendente de aprovação] Objetivos de conversão mensuráveis, eventos de analytics, destinos comerciais prioritários e fluxos finais de cada CTA.

## Positioning

**Definição objetiva — marca oficial**

> A Trip For Me é a antítese do turismo de massa: é calma onde os outros são caóticos, profunda onde os outros são rasos, e exclusiva sem ser inacessível.

**Essência: Segurança Sofisticada.** A marca combina descoberta e tranquilidade. Seu diferencial não é a euforia da aventura ou o luxo ostensivo, mas a confiança em uma experiência bem planejada, confortável e cuidada nos detalhes.

**Personalidade: Esteta Funcional.** A estética só tem valor quando acompanha utilidade, organização e conveniência. O luxo é inteligente: escolhas bem localizadas, logística eficiente, roteiros coerentes e informação clara — nunca ostentação gratuita.

[Restrição] Essa descrição orienta posicionamento e linguagem, mas não autoriza prometer hotéis, transfers, segurança absoluta ou serviços específicos que não estejam confirmados na oferta real.

## Brand Voice & Tone

**Tom central — Sussurro de Autoridade.** A Trip For Me fala com calma, precisão e segurança. Sua comunicação é educativa, direta e elegante, sem gritar para conquistar atenção. O texto é culto sem ser pedante; natural, próximo e com espaço para humor leve e refinado.

### Pilar 1 — Autoridade Silenciosa (confiança)

- Explicar *por que* uma experiência é valiosa, sem recorrer a hipérboles.
- Transmitir segurança pela exatidão e transparência das informações.
- Evitar superlativos automáticos como “incrível”, “maravilhoso” e “imperdível”.

### Pilar 2 — Inteligência Prática (clareza)

- Respeitar a inteligência do leitor e evitar explicações óbvias.
- Priorizar benefícios concretos: tempo poupado, organização, conforto, praticidade e curadoria.
- Relacionar características técnicas aos seus benefícios reais, quando verificáveis.

### Pilar 3 — Elegância Acessível (proximidade)

- Usar português correto, natural e acolhedor, sem formalismo excessivo.
- Preferir palavras precisas a jargões, diminutivos ou gírias de internet.
- Incluir bom humor refinado apenas quando fizer sentido para o contexto.

## Editorial Writing Guide

| Evitar | Preferir |
| --- | --- |
| Gritaria, excesso de exclamações e caixa alta promocional | Títulos claros e afirmações seguras, sem urgência artificial |
| “CORRA, É SÓ HOJE!” | Informar condições e prazos reais, quando confirmados |
| “Top”, “bombando”, “lacrou” | Vocabulário natural e específico: “memorável”, “experiência gastronômica”, “planejamento cuidadoso” |
| “Diquinha”, diminutivos recorrentes | “Dica essencial”, “orientação”, “recomendação” |
| Foco exclusivo em preço baixo | Explicação de valor: conforto, tempo, conveniência e tranquilidade |
| Emojis infantis ou em excesso | Preferência por texto limpo; emojis só quando adequados e pontuais |
| Prova social, escassez ou diferenciais inventados | Informações sustentadas por dados, depoimentos autorizados e condições reais |

### Princípios para microcopy e CTAs

- Escrever botões com verbo ou destino compreensível; o usuário precisa entender o próximo passo.
- Não insinuar disponibilidade, número de vagas, preços, garantias ou prazos sem fonte verificável.
- Dar contexto suficiente para decisões, sem sobrecarregar a página.
- Evitar manipulação emocional, pressão artificial e padrões enganosos de conversão.
- Preservar conteúdo já aprovado até existir autorização explícita para reescrever.

## Operating Context

[Comprovado — código auditado] O produto atual é uma landing page com `Header` global e seções `Hero`, `About`, `Testimonials`, `Top`, `Trips`, `Why`, `Ready` e `Footer`.

[Comprovado — código auditado] Existe um cliente WordPress em `src/lib/wp-client.ts`, sem consumidor identificado na página auditada.

[Restrição] Mudanças futuras devem preservar rotas, funcionalidades, SEO, acessibilidade, dependências, assets e conteúdo legado, salvo autorização explícita.

## Capabilities and Constraints

- [Comprovado — código auditado] Hero com vídeo, imagens editoriais, menu lateral, abas de categorias, cards de destinos, depoimentos em Swiper e CTAs.
- [Comprovado — código auditado] Assets de marca e viagem em `public/`, incluindo logos, textura, radar, ícones, fotografias e vídeo.
- [Diretriz] A identidade visual oficial é estabelecida em `DESIGN.md`; referências externas devem orientar somente aspectos aprovados de composição, interação e motion.
- [Restrição] Não inventar destinos, depoimentos, métricas, serviços, condições comerciais, certificações, links ou dados de conversão.
- [Pendente de aprovação] Rotas de destino, comportamentos finais dos CTAs, verificação/publicação de depoimentos e integração editorial.

## Brand Commitments

- [Diretriz — marca oficial] Nome: **Trip For Me**.
- [Diretriz — marca oficial] Essência: **Segurança Sofisticada**; personalidade: **Esteta Funcional**; voz: **Sussurro de Autoridade**.
- [Diretriz — marca oficial] Identidade cromática e tipográfica definida e preservada em `DESIGN.md`.
- [Diretriz — marca oficial] A experiência deve ser calma, organizada, profunda, sofisticada e acessível na linguagem — nunca caótica, ostensiva ou agressivamente comercial.
- [Diretriz] Fotografia, hierarquia, espaçamento e motion devem apoiar clareza, confiança, descoberta e usabilidade.

## Product Principles

1. **Curadoria antes de volume.** Ajudar o visitante a compreender opções, não apenas mostrar mais destinos.
2. **Segurança percebida pela clareza.** Priorizar informações corretas, navegação previsível e comunicação transparente.
3. **Sofisticação funcional.** Cada decisão visual deve apoiar a experiência de uso.
4. **Benefício concreto.** Valorizar planejamento, tempo, conforto e conveniência sem criar promessas não comprovadas.
5. **Experiência como narrativa.** A Home pode conduzir uma descoberta progressiva, sem sacrificar legibilidade ou controle do usuário.
6. **Consistência sem rigidez.** Reutilizar padrões reais, preservando personalidade editorial e evitando aparência de template genérico.

## Accessibility & Inclusion

[Diretriz] Preservar HTML semântico, navegação por teclado, foco visível, contraste adequado, áreas de toque confortáveis, descrições alternativas, legibilidade em diferentes tamanhos de tela e respeito a `prefers-reduced-motion`.

[Diretriz] Elegância não deve depender de texto excessivamente pequeno, contraste baixo, interações exclusivas por hover ou efeitos que dificultem a leitura.

[Pendente de validação] Auditoria de leitores de tela, contraste calculado em navegador, fluxo completo por teclado e testes em dispositivos físicos.

## Evidence on Hand

- `src/app/layout.tsx` — fontes, metadados e estrutura global.
- `src/app/page.tsx` — composição da Home.
- `src/styles/_variables.scss`, `_mixins.scss` e `_buttons.scss` — estilos e valores observados.
- `src/components/` — componentes atuais e seus comportamentos.
- `public/` — imagens, ícones, logos e vídeos existentes.
- `DESIGN.md` — identidade visual e decisões de Design System aprovadas.
- `REFERENCES.md` — referências externas e intenções de interface, quando disponível no diretório.

**Fonte das definições de marca:** manual conceitual e de redação fornecido pelo responsável pela Trip For Me nesta conversa. **Fonte das observações técnicas:** auditoria anterior do código. Observações de código devem ser reconfirmadas quando houver mudanças no repositório.

## Pending Product Decisions

- Conversões prioritárias e comportamento final de cada CTA.
- Critérios editoriais e origem dos conteúdos de destinos e depoimentos.
- Jornada comercial após o primeiro contato.
- Segmentação de público por serviço ou produto.
- Dados e indicadores a acompanhar, caso analytics seja incluído.

**Regra de governança:** `PRODUCT.md` orienta o que a marca é, para quem existe e como se comunica. `DESIGN.md` é a autoridade visual; `REFERENCES.md` reúne inspirações, sem autorizar implementação. O código verificado é a fonte de verdade do comportamento implementado.
