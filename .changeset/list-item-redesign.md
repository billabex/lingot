---
"@billabex/ui-components": minor
---

feat(ui-components): redesign ListItem to match the Tasks and Comms modules

One layout, used identically in the Tasks queue and the Communications thread list.

API:

- `as?: "div" | "button" | "a"` — polymorphic root.
- `accent?: "reply" | "info" | "success" | "warning" | "error"` — 2 px colored left-border stripe (used in Comms for reply threads).
- `active?: boolean` — persistent selection, applies `bg.muted`.
- `title: string` — account name. `bodySm / 500 / text.primary`, truncated.
- `titleTrailing?: ReactNode` — status `<Badge/>` or a short string (e.g. date).
- `preview?: ReactNode` — subject/snippet. `bodySm / regular / text.secondary`, truncated.
- `meta?: ReactNode` — horizontal row for amount + aging + time (Tasks) or badge + contact (Comms).
- `sub?: ReactNode` — tertiary `captionXs` line (e.g. "3 open disputes").

Layout:

- Padding `lg` / `xl` (12/16) with `borderRadius: sm` — matches the prototype task-item rhythm.
- Clickable rows get `bg.subtle` on hover, compound to `bg.muted` when active.
- Focus-visible ring via `border.focus`.

Breaking vs the previous release of this package:

- `selected` → `active`.
- `meta` and `badge` props removed; replaced by `meta` (horizontal row) and `titleTrailing` (top-right slot).
- `preview` widened from `string` to `ReactNode`.
