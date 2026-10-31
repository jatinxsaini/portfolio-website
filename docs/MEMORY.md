# Project Memory

This file records stable project facts that help future contributors work consistently. Update it when architecture, conventions, or operational assumptions change; do not use it as a substitute for current source code.

## Project snapshot

- Personal portfolio for Jatin Saini, implemented with Next.js App Router, React, and TypeScript.
- The root page is a single-page portfolio with hero, about, skills, projects, achievements, contact, and footer content.
- Main content is data-driven from `src/data/`; section visibility and site metadata are configured in `src/config/`.
- The interface uses an editorial, comic-inspired panel system and supports light and dark themes.

## Source-of-truth notes

- The rendered UI and current content files are the authority for current behavior and portfolio facts.
- `src/app/globals.css` contains the live CSS variables. `src/config/theme.ts` is separate and may not be wired to the global styles.
- `src/config/sections.ts` controls home-page section visibility and navbar destinations.
- Optional project, achievement, and social URLs can be blank; preserve conditional link rendering.
- Contact submission validates in the browser and launches the visitor's email client through `mailto:`. There is no contact API.
- The Node test in `tests/contact-social-links.test.mjs` fetches the running home page at `http://localhost:3000/`.

## Working conventions

- Keep personal content in `src/data/` and site-wide settings in `src/config/`.
- Reuse the types in `src/types/index.ts` and shared UI components.
- Preserve empty states, keyboard accessibility, responsive layouts, and reduced-motion behavior.
- Before changing Next.js APIs, follow `AGENTS.md` and read the installed documentation under `node_modules/next/dist/docs/`.
- Useful checks: `npm run lint`, `npm run build`, and `npm test`.

## Documentation map

- [PRD.md](./PRD.md) — product intent, requirements, and acceptance criteria.
- [ARCHITECTURE.md](./ARCHITECTURE.md) — application structure, data flow, and technology.
- [RULES.md](./RULES.md) — implementation and maintenance conventions.
- [DESIGN.md](./DESIGN.md) — visual tokens, layout, and interaction guidance.
- [TASK.md](./TASK.md) — task-recording template and completion checklist.
