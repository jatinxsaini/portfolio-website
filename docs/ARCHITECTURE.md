# Architecture

## Overview

This is a single-site portfolio built with the Next.js App Router, React, and TypeScript. The root route composes the portfolio sections from reusable layout and UI components. Content is primarily static and is imported from typed files under `src/data/`; site-wide options live under `src/config/`.

## Technology

- Next.js 16 App Router and React 19.
- TypeScript with strict checking and the `@/*` alias mapped to `src/*`.
- Tailwind CSS 4 with the Tailwind Turbopack CSS loader, plus shared styles in `src/app/globals.css`.
- Motion for interface transitions and Lucide React for icons.
- Vercel Analytics and Speed Insights are included in the root layout.
- Node's built-in test runner executes the repository's `.mjs` tests.

## Request and rendering structure

1. `src/app/layout.tsx` provides global font, metadata, theme initialization, JSON-LD, accessibility skip link, toast container, and analytics.
2. `src/app/page.tsx` composes the navbar, hero, configurable content sections, and footer.
3. The navbar and footer provide site-wide navigation, theme/resume controls, social links, and return-to-top interaction.
4. Section components read profile, project, skill, achievement, and social content from `src/data/`.
5. Shared presentation pieces, including project cards and section headings, live under `src/components/ui/`.

## Directory responsibilities

| Path | Responsibility |
|---|---|
| `src/app/` | App Router entry points, global styles, metadata-related routes, and not-found page. |
| `src/components/layout/` | Site-wide navigation and footer. |
| `src/components/sections/` | Main portfolio content sections. |
| `src/components/ui/` | Reusable visual and interactive components. |
| `src/config/` | Site metadata, section visibility, and theme configuration. |
| `src/data/` | Typed portfolio content and social destinations. |
| `src/lib/` | Shared utilities and browser-audio helpers. |
| `src/types/` | Shared content and configuration interfaces. |
| `public/` | Static images, icons, and résumé asset. |
| `tests/` | Node test-runner checks. |

## Configuration and data flow

- `src/config/sections.ts` controls whether About, Skills, Projects, Achievements, and Contact appear; navigation derives its section links from the same configuration.
- `src/config/site.ts` supplies metadata values consumed by the root layout.
- `src/data/profile.ts`, `projects.ts`, `skills.ts`, `achievements.ts`, and `social-links.ts` provide the main content.
- Types in `src/types/index.ts` describe these content objects.
- `src/app/globals.css` currently defines the live light/dark CSS variables and presentation tokens. `src/config/theme.ts` contains a separate theme configuration; do not assume changing it alone changes the global stylesheet.

## Runtime and external services

- Contact messages are composed as a `mailto:` URL in the visitor's browser; no application backend sends or stores them.
- Project and social destinations are ordinary external links configured in data.
- Analytics and speed insights are provided by Vercel packages.
- `next.config.ts` enables cache components and partial prefetching, configures the CSS loader, and adds browser security-related response headers.

## Verification

- `npm run lint` — ESLint.
- `npm run build` — production Next.js build.
- `npm test` — Node test runner; the current contact/social test expects a server at `http://localhost:3000/`.

For framework-specific guidance before changing Next.js code, follow the repository's `AGENTS.md` instruction to consult the installed Next.js documentation under `node_modules/next/dist/docs/`.
