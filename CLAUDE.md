# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server on port 3000
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # TypeScript type-check (no emit)
npm run clean      # Remove dist/ and server.js
```

Set `GEMINI_API_KEY` in `.env.local` before running locally (see `.env.example`).

## Architecture

This is a React 19 + Vite + TypeScript SPA for Ken Hill Pharma Limited — a pharmaceutical trading company showcasing APIs, drug intermediates, and lab reagents.

**Routing** is hash-based, handled entirely in `src/App.tsx`. The `navigate(view, params?)` function sets `window.location.hash` (e.g. `#api-detail?slug=alendronate-sodium`). Views are rendered via a switch on `route.view`. No React Router.

**Views** (`src/views/`) are top-level pages. Each receives a `navigate` prop:
- `HomeView`, `AboutView`, `ContactView` — static/marketing pages
- `APIProductsView` — lists all API products grouped by therapeutic category
- `APIDetailView` — detail page for a single API, resolved by `slug` param
- `IntermediatesView` — lists drug intermediates
- `ProductDetailView` — detail page for lab reagent products, resolved by `category` + `slug` params

**Data layer** (`src/data/`) is entirely static TypeScript — no API calls for product data:
- `src/data/apis/` — one file per therapeutic category (`cardiovascular.ts`, `cns-neurological.ts`, `gastrointestinal.ts`, `respiratory.ts`, `endocrine-metabolic.ts`), each exporting an array of `APIProduct[]`
- `src/data/intermediates.ts` — exports `intermediatesData: Intermediate[]`
- `src/data/products/` — one file per reagent category (`chemicals.ts`, `microbiology.ts`, `plant-culture.ts`, `cell-culture.ts`), each exporting `PharmProduct[]`

**Types** (`src/lib/types.ts`) define three core interfaces: `APIProduct`, `Intermediate`, and `PharmProduct`. When adding new products, match the shape of these interfaces exactly.

**Styling** uses Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js`). Custom CSS variables and base styles live in `src/index.css`. Animations use the `motion` package (`motion/react`). The `AnimatedSection` component wraps content with scroll-triggered fade-in animations.

**Path alias**: `@` resolves to the repo root (configured in `vite.config.ts`).
