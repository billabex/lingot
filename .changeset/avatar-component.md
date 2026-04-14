---
"@billabex/ui-components": minor
---

feat(ui-components): add Avatar component

A circular display primitive for people and accounts. Non-interactive
by design — wrap in `ListItem` (or another clickable parent) to build
clickable contact cards.

API:

- `size="small" | "medium" | "large"` — 24 / 32 / 40 px
- `initials` — short text fallback (e.g. `"JS"`); takes precedence over
  `icon`
- `icon` — React node fallback when `initials` is absent
- `label` — accessible name. When provided the avatar gets `role="img"`;
  otherwise it is decorative (`aria-hidden`).

Visual tokens: `bg.muted` background, `text.secondary` foreground,
`semibold` weight, `uppercase` initials, fully rounded. Icon fallback
is centered via flex; provide a balanced icon (content roughly at the
viewBox center) for best alignment.

Storybook category: **Data Display/Avatar**.
