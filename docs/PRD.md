# Product Requirements Document

## Product

Jatin Saini's personal portfolio: a responsive website that introduces Jatin, presents his skills and work, and gives visitors direct ways to connect.

## Purpose

Give recruiters, collaborators, and other visitors a clear overview of Jatin's background and projects. The portfolio should make it easy to evaluate relevant experience and reach out without requiring an account.

## Audiences

- Recruiters and hiring teams evaluating engineering experience.
- Developers and potential collaborators exploring projects and technical interests.
- Visitors who want to contact Jatin or find his professional profiles.

## Product goals

1. Communicate Jatin's identity, interests, and availability quickly.
2. Present projects and skills in an easy-to-browse format.
3. Offer clear contact, social profile, and résumé links.
4. Work well on mobile and desktop, with keyboard-accessible navigation and light/dark themes.
5. Keep personal content editable independently from presentation components.

## User-facing requirements

| ID | Requirement |
|---|---|
| PRD-01 | The home page presents an introduction, biography, skills, projects, achievements, contact information, and footer. |
| PRD-02 | Visitors can navigate to enabled sections using the desktop navigation or mobile menu. |
| PRD-03 | Visitors can browse projects by category and search project titles, descriptions, and technologies. |
| PRD-04 | Project cards may provide project details and only show external destinations when a URL is configured. |
| PRD-05 | Visitors can access the résumé when its URL is configured. |
| PRD-06 | Visitors can find active social links and contact Jatin by email; the contact form validates fields and opens a prefilled email in the visitor's mail client. |
| PRD-07 | The site supports light and dark appearances and respects reduced-motion preferences where motion is used. |
| PRD-08 | Empty project or achievement collections display a balanced empty state instead of breaking the page layout. |
| PRD-09 | Page metadata supports search and social sharing, and the site exposes a sitemap and robots policy. |

## Quality requirements

- Responsive layouts must remain usable across narrow and wide viewports.
- Interactive elements must have meaningful accessible names and keyboard support.
- User-facing content must be maintained in the central data/config files where practical.
- The application must pass the repository's lint, build, and test commands before release.
- Avoid collecting visitor data: the contact flow delegates delivery to the visitor's email client.

## Out of scope

- User accounts, visitor dashboards, or server-side form submission.
- A content-management system or database-backed content editing.
- Claims that listed projects, credentials, or contact details have been independently verified.

## Acceptance criteria

- A visitor can reach each enabled section from navigation and use the mobile menu.
- Project search and category filters update the visible results and show an empty-results state when no project matches.
- Missing optional project/social destinations are not rendered as broken links.
- The contact flow validates required fields and a basic email format before opening a `mailto:` message.
- Light and dark themes remain legible and core content remains available when motion is reduced.
- `npm run lint`, `npm run build`, and `npm test` pass in the intended environment.
