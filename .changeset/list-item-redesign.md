---
"@billabex/ui-components": minor
---

feat(ui-components): redesign ListItem to cover task, thread, and message patterns

Unify the three prototype list shapes (`.task-item`, `.comm-thread-item`, `.msg-row`) under a single component.

New / changed API:

- Polymorphic root via `as?: "div" | "button" | "a"` — rows can be clickable (button), navigable (anchor), or static (div).
- `accent?: "reply" | "info" | "success" | "warning" | "error"` — 3 px tone-aware left-border stripe.
- `active` replaces `selected` (rename; `bg.muted` background).
- `density?: "default" | "compact"`.
- New slots: `leading` (icon/avatar), `titleTrailing` (badge/count in title row), `sub` (captionXs tertiary line), `trailing` (right rail for timestamps/actions).
- `preview` now accepts `ReactNode` so consumers can compose amount + aging + time inline.

Breaking:

- `selected` → `active`.
- `meta` prop removed — use `trailing`.
- `badge` prop removed — use `titleTrailing`.
- `preview` type widened from `string` to `ReactNode`.

Clickable variants get hover (`bg.subtle`), active+hover compound (`bg.muted`), and a focus-visible ring via `border.focus`.
