<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS & DEVELOPER GUIDE — JATIN SAINI PORTFOLIO

## Project Architecture & Design System
This application is a Next.js App Router portfolio designed with an **Editorial Bento Grid** layout.

### Directory Structure
- `src/app/`: Next.js pages (`page.tsx`, `layout.tsx`, `globals.css`, `not-found.tsx`).
- `src/components/layout/`: Global structure components (`Navbar.tsx`, `Footer.tsx`).
- `src/components/sections/`: Core portfolio sections (`Hero.tsx`, `About.tsx`, `Skills.tsx`, `Projects.tsx`, `Achievements.tsx`, `Contact.tsx`).
- `src/components/ui/`: Atomic reusable UI components (`Button.tsx`, `SectionHeading.tsx`, `ProjectCard.tsx`).
- `src/config/`: Configuration files (`site.ts`, `theme.ts`, `sections.ts`).
- `src/data/`: Centralized content files (`profile.ts`, `projects.ts`, `skills.ts`, `achievements.ts`, `social-links.ts`).
- `src/types/`: TypeScript definitions (`index.ts`).
- `public/`: Static assets (`images/profile/`, `images/projects/`, `images/decorative/`, `resume.pdf`).

### Content Separation Principle
- **DO NOT** hardcode personal content inside React section components.
- Always load data from `src/data/` or settings from `src/config/`.
- Handle empty data arrays gracefully (e.g. `projectsData`, `achievementsData`) by rendering balanced empty state UI cards without breaking grid layouts.
- Do not render external buttons (like GitHub/Live Demo links) if their URLs are undefined or empty.

### Color Tokens
- Page Background: `#E7E7E7`
- Canvas Container: `#FAFAF8`
- Primary Text: `#080808`
- Secondary Text: `#555555`
- Purple Card: `#8585D1`
- Mint Card: `#A5DCD5`
- Yellow Card: `#FFC767`
- Charcoal Card: `#555555`
- White Card: `#FFFFFF`
