# Engineering Rules

These rules complement the repository's `AGENTS.md` and `CUSTOMIZATION.md`. If guidance conflicts, preserve existing project behavior and resolve the conflict before making a broad change.

## Content and configuration

- Keep personal profile, project, skill, achievement, and social content in `src/data/`; keep site-wide metadata and section visibility in `src/config/`.
- Use the shared interfaces in `src/types/index.ts` and keep data changes type-safe.
- Do not invent personal details, credentials, project outcomes, or external URLs. Confirm facts with the site owner.
- Keep optional URLs optional in behavior: do not render a destination button or link for an empty URL.
- Preserve useful empty states when project or achievement data is empty.

## Components and behavior

- Put site-wide structure in `src/components/layout/`, page sections in `src/components/sections/`, and reusable interface elements in `src/components/ui/`.
- Follow existing React, TypeScript, alias, and formatting conventions. Keep changes scoped to the requested behavior.
- Keep navigation section links synchronized with `sectionConfig`.
- Avoid adding a backend or implying that the contact form sends data to a server; it opens the visitor's email client.
- Surface actionable errors through the existing UI patterns rather than silently presenting a successful result.

## Accessibility and responsive design

- Use semantic HTML, accessible names for icon-only controls, visible keyboard focus, and appropriate labels for form inputs.
- Preserve keyboard navigation, the skip-to-content link, and Escape-key behavior for the mobile menu.
- Respect reduced-motion preferences for new or modified animation.
- Check narrow and wide layouts, text wrapping, contrast, and touch target sizes.

## Styling

- Reuse CSS variables and established shared styles in `src/app/globals.css`.
- Keep both light and dark themes legible when modifying colors or component styles.
- Treat `src/app/globals.css` as the current source for live CSS theme tokens; coordinate changes with `src/config/theme.ts` when it is relevant rather than assuming it is automatically applied.
- Preserve the portfolio's editorial, comic-inspired card language without introducing unrelated visual systems.

## Framework and verification

- Before changing Next.js APIs or conventions, read the installed framework guidance in `node_modules/next/dist/docs/` as directed by `AGENTS.md`.
- Use the existing scripts: `npm run lint`, `npm run build`, and `npm test`.
- The current Node test checks the rendered home page and requires the app to be available at `http://localhost:3000/`.
- Update related documentation when behavior, data shape, or project conventions change.
