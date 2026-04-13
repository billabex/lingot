# Sprint Backlog — Design System Update

One-week sprint. Items ordered within each section by priority = impact × feasibility (highest first).

---

## 🔧 Update (existing components)

| # | Component | What to change | Why | Effort |
|---|---|---|---|---|
| U1 | **ui-tokens (typography)** | **Adopt Outfit** (`primitive.ts:135`, weights 300/400/500/600). Add `typography.micro` (10/14/500), `typography.captionXs` (11/16/400), `typography.headlineMd` (18/24/600). Split `caption` into plain (400) + strong (500). Align `headlineSm` weight with prototype usage. Font loading stays consumer's responsibility. | Core blocker: every typed surface depends on this. | M |
| U2 | **list-item** | Current recipe is minimal (selected only). Add: title-row w/ trailing status badge, meta-row (amount + timestamp), multi-line support, left-accent border variant (`accent="reply"` terracotta / `"info"` / `"success"` / etc.), optional avatar slot, clickable + active states (`bg.muted`). Consumers: task-item, comm-thread-item, msg-row. | Highest cross-view reuse. Three list surfaces in prototype share 80% of this spec. | L |
| U3 | **table** | Add sortable header (with sort-arrow), expandable row pattern (`.comm-log-expand`), row-selection column (checkbox), active-row left-border accent (3 px, tone-aware), sticky header, size variants (compact `task-comm-table`). | Accounts and Communications both depend on this. | L |
| U4 | **button** | **Redefine `variant="secondary"` as outline** (white bg + neutral border, prototype's default `.btn`) — breaking change, Option A. Add `tone="destructive"` combinable with secondary (prototype's `.btn-destructive`). Verify small size padding. | Prototype uses outlined as default; "secondary = lower-emphasis action" is exactly what outline communicates. | S |
| U5 | **icon-button** | Add `variant="filled"` (prototype compose send button — `action.primary` bg) and `variant="danger"` (red-50 bg on hover). Add 24 px size for pagination. | Pagination, send, delete modal icon all need variants we don't have. | S |
| U6 | **badge** | Add `size="xs"` (10 px, line-14, for `.doc-status-badge` / `.disc-badge`) and `shape="square"` with `xs` radius (for `.task-count` / `.account-count` / `.table-source-badge`). | Three distinct badge sizes used; Lingot only has pill. | S |
| U7 | **sidebar / nav-item** | Add a `rail` variant of sidebar (48 px, icon-only) + a `navItem.variant="icon"` (square 32×32, center icon, overlay count slot). Keep existing horizontal nav-item for panel navigation. | The icon rail is a shared structural element across all three views. | M |
| U8 | **modal** | Add `size="md"` (480) and `size="lg"` (640) with `max-h` behavior. Add split-footer slot (`footerLeft` + `footerRight`) for the delete-icon + actions pattern (line 5002). | Two modal variants present in prototype (contact-create, contact-edit). | S |
| U9 | **section-title** | Add trailing action slot (button on the right, per `.sidebar-section-header` line 3008). Add `withRule` variant (label + horizontal line, `.msg-section-header` line 1648). | Three section-label shapes exist in the prototype; current component only supports the basic one. | S |
| U10 | **checkbox** | Add `indeterminate` state (used by header checkbox pre-select-all, though prototype sidesteps it — DS should ship it). Add focus-visible ring. Confirm sizes. | Table multi-select needs it; prototype fakes it. | S |

## ➕ Create (new components)

| # | Proposed name | Purpose | Minimal API sketch | Effort |
|---|---|---|---|---|
| C1 | **Bubble** / **BubbleGroup** | Chat-style message bubble for task Conversation tab and Comms thread view. Three parallel implementations in prototype (`.bubble`, `.comm-bubble`, `.disc-bubble`) — unify. | `<Bubble side="left\|right" tone="neutral\|dark\|outlined\|planned" status?><BubbleHeader>…</BubbleHeader><BubbleBody>…</BubbleBody><BubbleAttachments/></Bubble>` | M |
| C2 | **Avatar** | Round 24/28/32 px initials chip. Used in contact rows, bubble headers. | `<Avatar size="sm\|md" initials="GD" tone?="…"/>` — fallback to neutral bg + secondary text. | S |
| C3 | **Chip** (+ removable) | Pill-style tag with optional trailing remove icon. Used for contacts and attachments. | `<Chip tone="info\|accent\|neutral" onRemove?={...}><ChipLabel/></Chip>` | S |
| C4 | **ChipInput** | Gmail-style multi-value input where chips sit alongside an inline text input. | `<ChipInput value={chips[]} onChange={...} placeholder=""/>` — composes Chip + native input. | M |
| C5 | **Menu** / **MenuItem** | Anchored contextual menu (rail company menu, add-contact menu). Supports dividers, chevron sub-indicator, destructive items. | `<Menu open anchor={...}><MenuItem icon={...}>…</MenuItem><MenuDivider/></Menu>` | M |
| C6 | **Pagination** | Prev/next + numbered pages + ellipsis + active. Two sizes: panel-lite (24 px icons only) and full (28 px with numbers). | `<Pagination page={1} total={12} onChange={...} size="sm\|md"/>` | M |
| C7 | **BulkActionBar** | Dark bottom-anchored contextual bar shown when rows are selected. | `<BulkActionBar count={n} onClose={...}><BulkAction/>…</BulkActionBar>` — on `bg.inverse`. | S |
| C8 | **StatusDot** | 8 px round indicator reused for suivi / dunning / sync state. | `<StatusDot tone="success\|warning\|error\|neutral"/>` — trivial. | S |
| C9 | **SegmentedBar** (aging bar) | Horizontal colored bar with multiple weighted segments + legend helper. | `<SegmentedBar segments={[{tone, value}…]}/> <SegmentedBar.Legend items={…}/>` | S |
| C10 | **NotificationBadge** | Overlay count badge (dot or number) that rings around an icon, used for nav-item unread counts. | `<IconButton> + <NotificationBadge count={25}/></IconButton>` — absolute-positioned, 2 px inverse ring. | S |
| C11 | **MessageComposer** (optional / stretch) | Textarea + action toolbar + send button (compose-area + compose-bar + compose-toolbar). Could ship later as a compound built from input + icon-button. | `<MessageComposer onSend={…} toolbar={…}/>` | L |

Lower-priority additions that can wait past this sprint: `DetailNav` (prev/next ribbon), `BreadcrumbBackLink` (composite of back-button + breadcrumb), `AttachmentChip` (alias of Chip with file icon preset), rich-text toolbar.

## ➖ Remove (unused in prototype)

| # | Component | Why safe to remove |
|---|---|---|
| R1 | **stepper** | Zero references in the prototype. No multi-step flows in any of the three views. All modals are single-step. |
| R2 | **toggle** | No on/off switch anywhere. Suivi on/off is a two-state button pattern; checkbox covers the rest. |
| R3 | **toast** *(HOLD)* | Not in prototype but plausible for post-action feedback (saved, agent resumed, etc.). Don't remove this sprint — ask product. Default: **keep**. |

---

## Suggested daily cadence

| Day | Focus |
|---|---|
| Mon | U1 tokens, U2 list-item (start) |
| Tue | U2 list-item (finish), U3 table (start) |
| Wed | U3 table (finish), U4/U5/U6 quick updates |
| Thu | C1 Bubble, C2 Avatar, C3 Chip |
| Fri | C5 Menu, C6 Pagination, C7 BulkActionBar, C8/C9/C10 trivials, U7/U8/U9/U10 cleanup, removals |
