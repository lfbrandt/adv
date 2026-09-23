# Vidolin & Goetzke Advogados Associados

Fundação técnica do site institucional do escritório Vidolin & Goetzke Advogados Associados. Esta etapa contém apenas o setup, a arquitetura inicial, o design system básico e uma página mínima de validação visual.

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript em modo estrito
- Sass/SCSS
- ESLint

## Como executar

Requisito: Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Comandos principais

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm start
```

## Estrutura resumida

- `public/brand`: cópia dos ativos de marca usados pelo site.
- `src/app`: layout, metadata e rotas do App Router.
- `src/styles/abstracts`: tokens, breakpoints e mixins SCSS.
- `src/styles/base`: reset e tipografia globais.
- `src/styles/pages`: estilos específicos das páginas.

## Materiais do cliente

Os documentos e arquivos presentes na raiz são materiais de referência fornecidos pelo cliente e constituem a fonte de verdade do projeto. Eles devem permanecer preservados, sem alterações, renomeações ou movimentações.
