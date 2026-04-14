# Project Context

## The Core Value
A high-quality frontend portfolio or landing page website built with React, Next.js, Tailwind, and Sanity CMS.

## What This Is
- Frontend repository (`steradian`) mapped to Next.js App Router structure.
- Styled using TailwindCSS and animated using Framer Motion. 

## Requirements

### Validated
- ✓ Next.js App Router setup
- ✓ Sanity CMS Integration
- ✓ Contact layout with EmailJS Integration

### Active
- [ ] Replace `/projects` page with a themed "Coming Soon" splash page rather than removing the navigation button.

### Out of Scope
- Migrating to a different framework.
- Deleting the projects feature entirely.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Retain projects button but redirect/show placeholder | Preserves UX consistency without exposing unfinished work | Pending |

## Evolution
This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-14 after initialization*
