# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

[Comprovado] Next.js App Router, React, TypeScript e SCSS. O frontend atual usa componentes React por seção, CSS Modules e Sass compartilhado em `src/styles/`.

## Users

[Comprovado pela copy atual] Viajantes que valorizam tempo, curadoria, logística confiável, conforto e uma experiência personalizada em vez de roteiros genéricos.

[Pendente de aprovação] Segmentos prioritários, perfis de compra, faixa de investimento e necessidades específicas de inclusão além dos requisitos web gerais.

## Product Purpose

[Comprovado] A Trip For Me apresenta uma agência de viagens com curadoria de experiências e roteiros personalizados. A página atual orienta o visitante por descoberta, prova social, destinos, diferenciais e contato.

[Pendente de aprovação] Eventos de conversão, métricas de sucesso, destinos comerciais prioritários e fluxos finais para os CTAs ainda não estão definidos no frontend.

## Positioning

[Comprovado pela copy atual] A marca se posiciona contra fórmulas genéricas e valoriza curadoria fundamentada, organização rigorosa, logística impecável e segurança para o viajante.

Não transformar essa posição em promessas factuais adicionais sem aprovação do responsável pelo produto.

## Operating Context

[Comprovado] O produto atual é uma landing page de uma página, com `Header` global no layout e seções `Hero`, `About`, `Testimonials`, `Top`, `Trips`, `Why`, `Ready` e `Footer`.

[Comprovado] O repositório contém um cliente WordPress em `src/lib/wp-client.ts`, mas não há consumidor identificado na página atual.

[Restrição] Mudanças futuras devem preservar arquitetura, funcionalidades existentes, SEO, responsividade, acessibilidade, dependências, assets e conteúdo legado salvo quando houver aprovação explícita.

## Capabilities and Constraints

- [Comprovado] A interface usa vídeo no hero, imagens editoriais de destinos, navegação lateral, abas de categorias, cards, depoimentos em Swiper e CTAs.
- [Comprovado] A marca já possui logos, textura, radar, ícones e imagens em `public/`.
- [Restrição] O Design System deve consolidar escolhas existentes antes de propor novas.
- [Restrição] Recomendações marcadas como pendentes não são autorização de implementação.
- [Pendente de aprovação] Rotas de destino, comportamento dos CTAs, dados reais de depoimentos e integração editorial.

## Brand Commitments

- [Comprovado] Nome: Trip For Me.
- [Comprovado] Direção de arte solicitada: estética editorial contemporânea, sofisticada e imersiva.
- [Comprovado] Paleta, fontes e assets existentes devem ser preservados.
- [Comprovado] A direção valoriza composições limpas, hierarquia tipográfica marcante, fotografia de viagem de alta qualidade, espaçamento generoso e motion elegante e funcional.
- [Comprovado] Evitar gradientes decorativos desnecessários, excesso de animação/parallax, glassmorphism sem justificativa, sombras exageradas, cards genéricos e mudanças arbitrárias na marca.

## Evidence on Hand

- `src/app/layout.tsx` — fontes, metadata e shell global.
- `src/app/page.tsx` — composição da home.
- `src/styles/_variables.scss` — paleta e famílias tipográficas declaradas.
- `src/styles/_mixins.scss` — mixins e breakpoints existentes.
- `src/styles/_buttons.scss` — variantes globais de botão.
- `src/components/` — implementação atual das seções e padrões visuais.
- `public/imgs/`, `public/icons/`, `public/videos/` — logos, fotografia, ícones, textura e vídeo.

[Ausente] Não há PRODUCT.md, DESIGN.md, biblioteca de componentes compartilhados ou documentação anterior de decisões visuais no estado auditado.

## Product Principles

1. Curadoria antes de volume: ajudar o viajante a escolher melhor, não apenas mostrar mais opções.
2. Sofisticação funcional: estética refinada deve melhorar compreensão e confiança.
3. Logística como parte da experiência: organização e segurança são benefícios centrais.
4. Conteúdo com substância: preservar narrativa editorial e evitar claims ou prova social inventados.
5. Consistência sem rigidez: reutilizar padrões reais sem transformar a interface em um template genérico.

## Accessibility & Inclusion

[Comprovado como requisito do projeto] A evolução deve manter HTML semântico, navegação por teclado, foco visível, contraste suficiente, alvos de toque adequados, alternativas para motion reduzido, textos alternativos coerentes e comportamento responsivo.

[Pendente de validação] Auditoria manual com leitor de tela, contraste calculado no navegador, navegação completa por teclado e validação em dispositivos físicos.
