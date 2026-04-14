# ARCHITECTURE.md

## Pattern
- Next.js App Router pattern

## Layers
- App (Routing, pages, layouts)
- Components (UI components, Radix wrappers, shadcn-like)
- Config (Environment variables, constants)
- Lib (Utility functions, helpers)
- Objects (Possibly DTOs, data structures, or Sanity schemas)
- Types (TypeScript definitions)

## Data Flow
- Sanity CMS fetches to page components
- Form submissions to EmailJS

## Entry Points
- `src/app/layout.tsx` (Root layout)
- `src/app/page.tsx` (Home page)
- `src/app/(steradian)` (Route group)
