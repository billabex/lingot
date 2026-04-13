---
"@billabex/ui-components": minor
---

feat(ui-components): rebuild ListItem to match the Tasks and Communications prototype layout

ListItem now faithfully reproduces the two stacked shapes in the workspace prototype:

- `variant="task"` → matches `.task-item` (rounded, no divider, 12/16 padding, `border-radius: sm`).
- `variant="thread"` → matches `.comm-thread-item` (flat with `border-bottom: 1px border.subtle`).

Slots:

- `title` (bodySm / 500 / primary, truncated) — the account name.
- `titleTrailing` — status `<Badge/>` (task) or date string (thread). Defaults to captionXs / tertiary for text children.
- `preview` — subject/snippet. `bodySm` for task, `caption` (12) with `body.sm` line-height for thread. Secondary color, truncated.
- `meta` — horizontal flex row for amount + aging + time (task) or badge + contact (thread). Unstyled typography inside.
- `sub` — captionXs / tertiary. Used for the task-item secondary line (e.g. "3 open disputes").

States:

- `accent="reply|info|success|warning|error"` — 2 px colored left border (was 3 px).
- `active` — applies `bg.muted`. In thread variant with no accent, also applies a `neutral.700` left border (faithful to prototype `.comm-thread-item.active`).
- Clickable rows (`as="button|a"`) get `bg.subtle` on hover, compound to `bg.muted` when active.
- Focus-visible ring via `border.focus`.

Breaking (supersedes earlier redesign in this changeset):

- `selected` → `active`.
- `meta`/`badge` props removed; replaced with `meta` (horizontal row) and `titleTrailing` (top-right slot).
- `leading` and `trailing` slots removed — not needed for task/thread shapes. The `msg-row` horizontal-inline pattern will be modeled as a separate component.
- `preview` accepts `ReactNode`.
- `density` prop removed — padding is fixed (`lg` / `xl`) to match prototype.
- `variant` prop added (required decision between `task` and `thread`).
