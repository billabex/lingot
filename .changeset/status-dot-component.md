---
"@billabex/ui-components": minor
---

feat(ui-components): add StatusDot component

A small circular indicator for semantic status, used in lists, tables,
and panel rows (e.g. Suivi, Sync, dunning state).

API:

- `size="medium" | "small"` — 8px (default) or 6px
- `tone="neutral" | "success" | "warning" | "danger" | "info"`
- `label?: string` — when provided, renders with `role="img"` +
  `aria-label`; otherwise decorative (`aria-hidden`)

Tones map to semantic tokens: `status.success`, `status.warning`,
`status.error` (for `danger`), `status.info`, and `text.tertiary` (for
`neutral`).

Storybook category: **Data Display/StatusDot**.
