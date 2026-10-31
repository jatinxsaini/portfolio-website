# Design System

## Direction

The portfolio uses an editorial, comic-inspired visual language: strong typography, outlined panels, compact uppercase labels, visible offset shadows, and restrained accent colors. Keep content readable and make visual treatments support—not compete with—navigation and project discovery.

## Color tokens

The active tokens are declared in `src/app/globals.css`. Values below describe the current light theme; dark theme overrides are provided there as well.

| Token | Light value | Purpose |
|---|---|---|
| `--bg-page` | `#f5f4ee` | Page background. |
| `--bg-canvas` | `#f9f8f3` | Canvas and surfaced UI background. |
| `--text-primary` | `#181817` | Main text and ink. |
| `--text-secondary` | `#5e5d58` | Supporting text. |
| `--border-color` | `#262624` | Outlines and panel borders. |
| `--card-bg` | `#fffefa` | Main card surface. |
| `--card-subtle` | `#eeede7` | Subtle card and control surface. |
| `--comic-yellow` | `#f3c842` | Highlight and primary accent. |
| `--comic-red` | `#e2dfd5` | Secondary panel accent. |
| `--comic-blue` | `#252523` | Dark panel accent. |
| `--comic-green` | `#e9e7df` | Soft panel accent. |

Dark mode is selected with the `.dark` class and overrides page, card, text, border, input, and halftone tokens. Check both themes whenever shared colors change. The additional values and contrast pairings are maintained beside these tokens in `globals.css`.

## Typography

- The root layout loads Plus Jakarta Sans and exposes it as `--font-sans`.
- Use the existing strong, compact heading style for editorial section titles and the current body type scale for supporting text.
- Uppercase microcopy and labels are part of the current visual language; keep long-form reading copy in normal sentence case where appropriate.

## Layout and components

- The page is centered in a fluid shell capped at 1600px.
- Main content uses responsive single-column layouts that expand into multi-column card grids at larger breakpoints.
- Shared panel styles use rounded corners, a visible border, and a subtle shadow; interactive panels lift slightly on hover.
- Interactive action controls use the shared Flow button: a rounded outlined pill with an animated accent fill and a gliding directional arrow. This includes navigation actions, project filters and links, contact actions, and footer actions. Keep the dedicated theme switch as a switch so its stateful behavior remains clear.
- The sticky site header includes desktop navigation and an animated mobile menu.
- The theme control uses an animated sky-to-stars switch; its pressed state stays synchronized with the persisted light/dark theme.
- The footer uses an editorial thank-you panel with a comic starburst, direct email, configured social links, and a back-to-top control.
- Project browsing combines category chips, live search, a result count, and responsive project cards.
- Use the existing shared components and CSS utilities before introducing new one-off visual patterns.

## Motion and interaction

- Motion is used for entrance, in-view, filtering, and menu transitions.
- Keep motion short and purposeful. Preserve the reduced-motion behavior in interactive components and apply it when adding animation.
- Hover effects must not be the only indication that an element is interactive; retain focus-visible and keyboard affordances.

## Responsive and accessibility checks

- Verify navigation, card grids, contact controls, and footer at mobile and desktop widths.
- Preserve semantic headings, visible focus, sufficient contrast in both themes, and accessible labels for icon-only buttons.
- Avoid relying on color alone to convey category, state, or meaning.
