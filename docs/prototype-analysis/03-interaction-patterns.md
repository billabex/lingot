# Interaction Patterns — Prototype Analysis

Source: `/Users/gillou/Projects/billy/explore/workspace-ui/workspace.html`.

## 1. Interactive states observed

| State | Pattern | Examples (prototype) |
|---|---|---|
| **Hover** | Background shift to `bg.muted` (most interactives); border intensifies to `action.secondaryHover` on bordered buttons/chips. Duration 0.12–0.15 s. | `.nav-item:hover` (line 140), `.btn:hover` (281), `.filter-chip:hover` (325), `.task-item:hover` (878) |
| **Active (route/selection)** | `active` class applies `bg.muted` (nav-item, task-item) or inverse surface (filter-chip active → primary). Never a ring; always fill. | `.nav-item.active` (141), `.task-item.active` (879), `.filter-chip.active` (326), `.pagination-btn.active` (2782) |
| **Pressed / :active (mouse-down)** | Used only on logo (`.sidebar-logo.pressed`, line 171) and button variants via Lingot recipe. Prototype mostly omits `:active`. | `.sidebar-logo.pressed` (171) |
| **Focus (input)** | Border transitions to `border.focus` (neutral-700). No ring. | `.form-input:focus` (676), `.task-search:focus` (858), `.compose-bar:focus-within` (1469) |
| **Focus-visible (keyboard)** | **Not implemented in prototype.** Lingot recipes (button, nav-item) do implement `_focusVisible` ring. Prototype is a gap. |
| **Disabled** | `opacity: 0.3` or `0.5`, `cursor: default`, hover neutralized. | `.list-pagination-btn:disabled` (1591), `.pagination-btn:disabled` (2783), `.detail-nav-btn:disabled` (3160) |
| **Selected (list)** | Background `bg.muted` + left-border accent when thread has a reply (terracotta). | `.comm-thread-item.active` (1893), `.comm-thread-item.has-reply` (1894) |
| **Checked (checkbox)** | Inverse fill (`action.primary`) + white check SVG. No indeterminate — partial-select is inferred via a terracotta banner instead. | `.account-checkbox.checked` (2677) |
| **Expanded (accordion row / email card)** | Collapsed version hides body + rotates chevron 0 → 90 deg. Expanded adds focus border and switches bg to `bg.default`. | `.email-card.expanded` (1044), `.comm-log-expand.visible` (2235) |
| **Loading / empty** | Only empty-state present: `.comm-thread-empty` centered tertiary text (2007). **No loading / skeleton patterns** — gap for DS. |
| **Error / validation** | **No inline validation** shown in prototype modals. Error tokens exist (`status.error/errorSubtle`, `border.error`) but unused. Gap. |

## 2. Overlay patterns

| Overlay | Trigger | Dismiss | Stacking (z-index) | Notes |
|---|---|---|---|---|
| **Company dropdown** | Click `#company-btn` (rail logo) | Click backdrop (`.dropdown-backdrop`) OR click outside | 199 backdrop, 200 menu | Anchored left-44 top-16; backdrop is invisible (`inset: 0`) |
| **Add-contact dropdown** | Section action button | Click-outside (document handler, line 6032) | 50 | No backdrop; small, in-flow |
| **Select (ds-select)** | Click trigger | Click-outside OR select option | 600 | Chevron rotates 180 deg; dual-shadow `0 -2 8 + 0 2 8` |
| **Tooltip** | Hover (rail icons, msg-date-input) | Mouse-leave | 100 | Positioned left-of or bottom-of element; fade-in 0.12 s |
| **Modal** | Programmatic (`showModal(action)`, `openModal(id)`) | Backdrop click, close icon, cancel button | 500 backdrop | Scrim `rgba(28,25,23,0.4)`. Multiple sizes: 480 (default) / 640 (`modal-wide`). Footer variants: flat (cancel+confirm right-aligned) or split (delete icon left, actions right). |
| **Toast** | — | — | — | Not present in prototype. |

**Stacking order** (bottom to top): in-flow dropdown (50) → tooltip (100) → rail dropdown (200) → modal backdrop (500) → select menu (600). Note that **select menu z-index (600) is higher than modal backdrop (500)** so dropdowns work inside modals — must be preserved in production components.

## 3. Form patterns

- **Field layout**: vertical stack (`.form-group` flex-column, gap 4 px between label and input). Label 13/18/400 primary; input 14/20/400 primary.
- **Helper text / description**: **not present** in prototype. Gap.
- **Validation / error display**: **not present**. `border.error` token is unused. Need to define a canonical error-state for `input`, `select`, `checkbox` — helper text + bordered ring.
- **Placeholders**: `text.tertiary` (#9c8e82). Match in Lingot `input`.
- **Required / optional markers**: not shown.
- **Auto-fill logic**: contact-create modal (line 6058) auto-derives name from email local-part — UX pattern to document but not DS-level.
- **Chip input**: contact-chip-input (line 2358) accepts text and produces removable chips (`contact-chip` with `.contact-chip-remove`). Focus-within changes wrapper border. Pattern is a **composite** — add as a dedicated component.

## 4. Navigation patterns

- **Breadcrumb**: used in doc full-page (`.doc-breadcrumb`, line 3066) — link · separator · current. Inside table/detail headers the pattern is `back-button + separator + title` (`.back-btn` + `.breadcrumb-sep`, line 2845).
- **Back button**: terracotta link style with inline chevron-left icon; hover changes bg. See `.back-btn` line 2824.
- **Tabs (underline)**: `.detail-tab` (line 1008) — 13/18/500, border-bottom 2 px transparent → `action.primary` when `.active`. Horizontal gap 6 px (`--space-sm`), bottom-border of tab-bar provides baseline.
- **Sidebar active state**:
  - **Rail** (primary nav, `.nav-item.active`): fill with `action.secondary` (= neutral-200), no border accent.
  - **Thread-list** (`.comm-thread-item.active`): fill `bg.muted` + 2 px left-border `neutral-700` (or `terracotta.400` if it has a reply).
- **Prev/next detail** (`.detail-nav`, line 3140): flanking buttons + center counter ("3 / 12").
- **Pagination**: two sizes — full (page-level) with 28 px buttons + prev/next (2752), light (panel-level) with 24 px icon-only buttons (1567).

## 5. Transitions / animations

Implicit CSS transitions only (no `@keyframes`):

| Token | Used for |
|---|---|
| `all 0.15s ease` | Default button/nav/item state changes |
| `background 0.1s ease` | Dropdown items, list items (tight hover) |
| `opacity 0.12s ease` | Tooltip fade |
| `border-color 0.15s` | Input/select focus |
| `transform 0.15s ease` | Chevron rotation (select, email card) |
| `width 0.3s ease` | Aging-bar segments |
| `stroke 0.15s` | Icon color change on link-icon hover |

No entry/exit animations on modals or toasts. No spring curves. Recommendation: add `motion.duration.{fast: 120, standard: 150, slow: 300}` + `motion.easing.standard = ease` tokens to Lingot.

## 6. Keyboard / accessibility observations

- `focus-visible` rings: NOT implemented in the prototype on most interactives; exists on Lingot button recipe. Prototype is a reference for visual style, not a11y — the DS should be the source of truth here.
- ARIA roles: prototype has no `role`, `aria-expanded`, `aria-haspopup`, `aria-selected`. All production components need these.
- Tab order & trap: modals do not trap focus in the prototype — production modal must.
- Escape-to-close: not wired in prototype. Production modal must.

## 7. Signal-row pattern (Communications workbench)

`.msg-row` (line 1670) is a distinctive interactive row: icon · account · preview · trailing meta · optional inline controls. Subtypes:
- `.msg-row.reply` — terracotta left-border 2 px (`border-left-color: var(--terracotta-400)`).
- `.msg-row.planned` — no accent, hosts inline editable date/time inputs that reveal borders on row hover.

This is conceptually a **list-item with accent-border** and an **inline editable field group**. Document as a `list-item` variant, not a new component.
