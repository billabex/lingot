---
"@billabex/ui-components": minor
---

feat(ui-components): add Badge `shape="square"` and `variant="count"`

- `shape="pill"` (default) — unchanged (rounded-full, `px: xs`).
- `shape="square"` — rounded-xs with `py: xs / px: md` padding, matching prototype `.task-count` geometry.
- `variant="count"` — outlined neutral tone (`bg.subtle` + `text.tertiary` + `border.subtle`), `fontWeight: regular`. Designed for list-header counts like the "30" in the Tâches panel.

All existing variants (`neutral`, `info`, `success`, `warning`, `error`) keep their `fontWeight: medium`; the new `count` variant overrides to `regular` to match the prototype.
