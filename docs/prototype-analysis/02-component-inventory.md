# Component Inventory — Prototype vs Lingot

Baseline: 29 components under `/Users/gillou/Projects/lingot/packages/ui-components/src/components/`.

Legend: ✅ exists as-is · 🔧 exists, needs update · ➕ missing, create · ➖ not used, candidate for removal.

## Summary

| Bucket | Count |
|---|---|
| ✅ exists | 14 |
| 🔧 needs update | 10 |
| ➕ missing | 11 |
| ➖ candidate removal | 3 |

---

## UI patterns in the prototype

| Pattern | Prototype evidence | Lingot component | Variant gap | Verdict |
|---|---|---|---|---|
| **Icon sidebar (48 px rail)** | `.sidebar` (line 107), logo + nav + spacer, badge overlay | `sidebar/` | Prototype rail is 48 px, icon-only; Lingot `Sidebar` is a full vertical shell. Add `variant="rail"` or a separate `IconRail` primitive. | 🔧 update |
| **Nav item (icon, 32×32, with tooltip + optional count badge)** | `.nav-item` (line 130), `.nav-badge` overlay | `nav-item/` | Current nav-item is text-horizontal (button-like). Add `variant="icon"` (square, icon-only) with overlay badge slot. | 🔧 update |
| **Company/org dropdown (attached to rail)** | `.company-dropdown` (line 198), `.dropdown-item` with chevron-right sub-indicator, divider rows | `dropdown/` (filter-row etc.) | No generic dropdown menu component; dropdown folder only has filter variants. | ➕ create `Menu` / `MenuItem` |
| **Primary button** | `.btn-primary` (line 295) | `button/` variant=primary | ✅ matches `button.recipe.ts:30` | ✅ |
| **Secondary/outline button** | `.btn` default (line 267) — white bg, neutral border | `button/` variant=secondary uses `bg.muted`, not white with border | Prototype "secondary" is an **outlined** button, Lingot's `secondary` is filled muted. Add `variant="outline"`. | 🔧 update |
| **Ghost button** | `.btn-ghost` (line 301) | `button/` variant=ghost | ✅ | ✅ |
| **Destructive button (outlined)** | `.btn-destructive` (line 298) — text+border red, fill on hover | `button/` variant=destructive is filled | Add `tone="destructive"` × `variant="outline"` combo or a new `destructiveOutline`. | 🔧 update |
| **Small button** | `.btn-sm` (line 289/304) — 12 px font, tighter padding | `button/` size=small | ✅ (already present) | ✅ |
| **Icon button (inline, transparent)** | `.modal-close`, `.compose-icon-btn`, `.section-action-btn`, `.msg-send-btn`, `.list-pagination-btn` | `icon-button/` | Prototype has two sizes (24 px small, 32 px default) and a "primary filled" variant (`.compose-icon-btn.send`). Lingot has `size` only — add `variant="filled"`. | 🔧 update |
| **Filter chip (pill, outlined w/ shadow, toggleable)** | `.filter-chip` (line 312) active=inverse | `filter/filter-button.tsx` | Prototype chip has `box-shadow: sm` and is `border-radius: full` — verify Lingot filter-button matches. | 🔧 verify + align |
| **Status badge (pill)** | `.status-badge` + `.doc-status-badge` + `.comm-bubble-status` + `.email-card-direction` | `badge/` | Lingot has 5 variants (neutral/info/success/warning/error) — all used. Prototype also uses a "micro" 10 px size (`doc-status-badge`, `disc-badge`) — add `size="xs"`. | 🔧 add size variant |
| **Count badge (rectangular)** | `.task-count` (line 829), `.account-count` (line 2523) — small numeric chip with border | `badge/` | No rectangular variant; always pill. Add `shape="square"` or `variant="count"`. | 🔧 update |
| **Overlay badge (on icon)** | `.nav-badge` — red dot with count, 2 px inverse border ring | — | No overlay badge component. | ➕ create `NotificationBadge` |
| **Source badge (rectangular 11 px)** | `.table-source-badge`, `.doc-source-badge` — 11 px uppercase-ish, tighter than status | `badge/` | Same need as above — `size="xs" shape="square"`. | 🔧 |
| **Tooltip** | `.tooltip` on nav / tooltip-wrap (lines 174, 1796) — dark bg, left- or bottom-positioned | `tooltip/` | Prototype uses `radii.xs` and 12 px caption — verify. Also needs positions `right` and `top`. | 🔧 verify placements |
| **Modal (default & wide)** | `.modal` 480 px / `.modal-wide` 640 px, header/body/footer, `.modal-footer-split` (delete icon left + actions right) | `modal/` | Add `size="sm|md|lg"` (480/640) and a "split footer" slot. | 🔧 update |
| **Modal form field** | `.form-group` `.form-label` `.form-input` (lines 652–677) | `form-field/` + `input/` | Verify label sizing (13/18/400) and input padding matches. | 🔧 verify |
| **Text input** | `.form-input`, `.task-search`, `.account-search` | `input/` | Prototype has two size variants (8 px vs 12 px padding). Add `size`. | 🔧 update |
| **Select (custom DS dropdown)** | `.ds-select`, `.ds-select-trigger`, `.ds-select-menu`, `.ds-select-option` | `select/` | Verify chevron rotation, menu positioning (below, 4 px offset, dual shadow), option hover+selected. | 🔧 verify |
| **Checkbox** | `.account-checkbox` (line 2664) 16 px, 1.5 px border, check svg on `.checked` | `checkbox/` | Verify sizes and check-icon stroke width. Add **header indeterminate** state (used for partial-select). | 🔧 add indeterminate state |
| **Contact chip (Gmail-style pill input)** | `.contact-chip` + `.contact-chip-remove` (line 2374) | — | No chip component. | ➕ create `Chip` (removable) |
| **Chip input field (multi-value wrapper)** | `.contact-chip-input` (line 2358) | — | — | ➕ create `ChipInput` |
| **Attachment chip** | `.attachment-chip` (line 1388) — icon + filename pill with border | — | — | ➕ create `AttachmentChip` (or a `Chip` variant) |
| **Breadcrumb** | `.doc-breadcrumb` → link / sep / current (line 3066) + `.back-btn` pattern + `.breadcrumb-sep` in headers | `breadcrumb/` | Verify separator (`/`) styling and back-button + breadcrumb compound. | 🔧 verify + add `BackLink` affordance |
| **Link** | `.breadcrumb-link`, `.msg-header-link`, `.suivi-secondary-link`, `.email-toggle` | `link/` | Verify terracotta color, underline behavior. Add `size="sm"` (12/16/400). | 🔧 update |
| **External-link (with icon)** | `.tasks-account-sidebar-name::after` (line 1553) — terracotta ext-link SVG inline | `link/` | Add `iconTrailing` slot / `external=true` prop. | 🔧 update |
| **Tabs (underline)** | `.detail-tab` in task detail (line 1008), `.switchAccountTab` usage | `tab-item/` | Verify active underline color = `action.primary` and 2 px offset below; height 32 px total. | 🔧 verify |
| **Card (default)** | `.dunning-card`, `.suivi-card`, `.summary-card`, `.tasks-main-card`, `.accounts-main-card` | `card/` | Prototype has 3 styles: elevated-none + border (default), subtle-bg + border (summary-card), large container (main-card). Add `variant="subtle"` and `variant="container"` (or compose). | 🔧 update |
| **Empty state (thread)** | `.comm-thread-empty` (line 2007) | `empty-state/` | Verify minimal variant exists. | ✅ likely |
| **Divider** | `.dropdown-divider`, `.aging-bar` separators, `hr`-role borders on rows | `divider/` | ✅ | ✅ |
| **Info row (label/value pair)** | `.info-row` + `.info-label` + `.info-value` (line 539, 545, 549) | `info-row/` | ✅ pattern is identical — verify styling. | ✅ |
| **Section label (uppercase)** | `.sidebar-section-title`, `.section-label`, `.tab-section-label`, `.msg-section-label` | `section-title/` | Verify uppercase, `letter-spacing: 0.05em`, 12/16/400–500 tertiary. | 🔧 verify |
| **Section title with action (button on right)** | `.sidebar-section-header` (line 3008) | `section-title/` | Add trailing-slot action. | 🔧 update |
| **Section divider with label** | `.msg-section-header` (line 1648) — label + line | — | Add a variant like `<SectionTitle withRule />`. | 🔧 update |
| **Page header (height 48 px, title + actions + breadcrumbs)** | `.task-detail-header`, `.account-detail-header`, `.accounts-table-header-top` | `page-header/` | Verify 48 px height, bordered-bottom, left title + right action slot. | 🔧 verify |
| **Panel header (simpler, 48 px)** | `.task-list-header`, `.comm-thread-list-header` | `panel-header/` | ✅ | ✅ |
| **List item (task/thread/comm/email)** | `.task-item` (line 870), `.comm-thread-item` (line 1883), `.comm-log-row` (table row), `.msg-row` (workbench) | `list-item/` | Prototype has **highly varied** list-items. Current Lingot list-item is minimal (just base/selected). Needs: title + status-badge row, trailing meta (time/amount), multi-line, left-accent border (`comm-thread-item.has-reply` terracotta), clickable+active state, optional avatar slot. | 🔧 major update |
| **Data table (sortable header, sticky th, expandable row)** | `.accounts-data-table` (line 2587), `.comm-log-table` (line 2079) with `.sortable .sort-arrow`, `.comm-log-expand` | `table/` | Verify sortable header variant, expandable-row pattern. Add row-selection mode (checkbox column) and active-row left-border accent (line 2163–2165). | 🔧 major update |
| **Pagination (prev/next + pages + ellipsis)** | `.pagination` (line 2752), `.list-pagination` (lighter for panels) | — | No pagination component in Lingot. | ➕ create `Pagination` (two sizes: panel-light + full) |
| **Toolbar / composer (compose area)** | `.compose-area` + `.compose-bar` + `.compose-toolbar` (line 1451, 1459, 1487) | — | — | ➕ create `MessageComposer` (rich text toolbar + textarea + send) OR documented composition of existing primitives |
| **Chat bubble (user/agent, sent/received/planned)** | `.bubble`, `.comm-bubble`, `.disc-bubble` — 3 parallel implementations converge on same spec | — | — | ➕ create `Bubble` + `BubbleGroup` |
| **Avatar (initials, 28 px round)** | `.contact-avatar` (line 458) | — | — | ➕ create `Avatar` |
| **Progress / aging bar (segmented)** | `.aging-bar` + `.aging-legend` (line 386–407) | — | — | ➕ create `SegmentedBar` (w/ legend helper) |
| **Status dot (8 px round color)** | `.dunning-dot`, `.suivi-dot`, `.sync-dot` | — | — | ➕ create `StatusDot` (reuse status tokens) |
| **Banner / inline alert (top-of-table)** | `.select-all-banner` (line 2559) terracotta tinted | `banner/` | Verify Lingot banner supports `tone="accent"` (terracotta) + inline links. | 🔧 verify/add tone |
| **Bulk action bar (dark, bottom-anchored, contextual)** | `.bulk-bar` (line 2688) | — | — | ➕ create `BulkActionBar` |
| **Empty-state (thread)** | trivial centered text | `empty-state/` | ✅ | ✅ |
| **Toast** | — (not present in prototype) | `toast/` | Unused in this prototype (likely needed elsewhere — keep). | ➖ consider but keep |
| **Rich-text toolbar button cluster** | `.comm-toolbar` + `.comm-toolbar-btn` + `.comm-toolbar-sep` | — | — | ➕ could be a composition of IconButton; document as recipe |
| **Detail-nav (prev/next ribbon)** | `.detail-nav` (line 3140) | — | — | ➕ create `DetailNav` (or document composition of IconButton + position counter) |

## Lingot components NOT used in the prototype — removal candidates

| Component | Why safe to remove |
|---|---|
| `toggle/` | No on/off switch pattern exists in the prototype. Account status uses a two-action toggle (buttons), not a switch. Checkbox and filter chips cover the binary cases. |
| `stepper/` | No multi-step flow in the prototype. All modal flows are single-step. |
| `toast/` | Not present in this prototype. May be needed for post-action feedback elsewhere — keep unless product confirms they'll use inline banners only. **Hold** until product clarifies. |
| `breadcrumb/` **as a separate component** | Prototype uses a lightweight inline breadcrumb (`BackLink + sep + current`). If we don't evolve it into a compound with `BackLink`, consider merging into `page-header`. **Don't remove — enrich.** |

Rationale for each:
- **toggle** — no evidence of use; Lingot file exists but no screen needs it. Safe removal unless imminent roadmap.
- **stepper** — zero references, no multi-step form/wizard in any view. Safe removal.
- **toast** — prototype-absent but likely needed for real-time agent notifications. Keep and defer review.
