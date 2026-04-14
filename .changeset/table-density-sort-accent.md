---
"@billabex/ui-components": minor
---

feat(ui-components): Table density + accent + sortable headers

Adds shared communications-table primitives to `Table` without creating a dedicated component.

- `Table` gains a `density` prop (`"normal"` | `"compact"`). Compact = 38px rows / 12px text (Task module center panel). Normal = 44px rows / 13px text (full-width Communications module). Density auto-propagates to direct `TableRow` children.
- `TableRow` — `selected` is redefined and `accent` is new:
  - `accent` (`"none"` | `"success"` | `"info"` | `"warning"` | `"error"`) — the color of the left-border indicator, tied to row type (received / sent / planned / …). Metadata that lives on the row regardless of state.
  - `selected` — now renders the accent left-border + a subtle background. Previously switched to a muted background only; that treatment is gone. Idle rows stay borderless. `accent` alone does nothing without `selected`.
- New `TableSortHeader` sub-component — clickable header label with a chevron indicator. Controlled via `direction="asc" | "desc" | "none"`; parent owns sort state. Sets `aria-sort`.
- New `TableRowDetail` sub-component — sibling panel rendered after an expanded `TableRow`. Controlled via `visible={open}`, inherits density from the surrounding `Table`. Use for contextual detail content (meta grid, preview, actions).
- Table rows gain a hover state (`bg.subtle`) and typography aligned 1:1 with the prototype — body `13px / 20px / 400`, header `10px` (compact) / `11px` (normal), `600`, uppercase, `0.04em` letter-spacing, `text.tertiary`.
- Storybook gets two new stories: `Communications Compact` and `Communications Normal`, both with click-to-expand detail panels.
