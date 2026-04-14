# STRUCTURE.md

## Directory Layout
- `public/`: Static assets (images, fonts, raw files)
- `src/`: Application source code
  - `src/app/`: Next.js App Router root
    - `src/app/(steradian)`: Main route group containing primary pages 
      - `about/`
      - `contact/`
      - `projects/`
  - `src/components/`: Reusable UI components
  - `src/config/`: Configuration
  - `src/lib/`: Utilities
  - `src/objects/`: Data objects/schemas
  - `src/types/`: TS type definitions
- `tests/`: Test files

## Naming Conventions
- React Components: PascalCase
- Utilities/Lib: camelCase
- Folders inside app/: kebab-case (Next.js standard)
