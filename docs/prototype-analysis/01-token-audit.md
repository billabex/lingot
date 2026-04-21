# Token Audit — Prototype vs Lingot

Baseline:
- `/Users/gillou/Projects/lingot/packages/ui-tokens/src/tokens/primitive.ts`
- `/Users/gillou/Projects/lingot/packages/ui-tokens/src/tokens/semantic.ts`

Legend: ✅ exact match · ⚠️ close / used but subtly off · ❌ missing in Lingot.

## Summary

| Category | Prototype values | In Lingot | Gaps |
|---|---|---|---|
| Color — primitives | 23 | 23 | 0 (1:1 match, prototype mirrors Lingot) |
| Color — semantic | all 4 families (bg / text / action / status / border) | all 4 | 0 gaps, 1 drift (`bg.accent` → `terracotta.300`, used in prototype as "select-all banner" and "internal contact" — OK) |
| Spacing | xs sm md lg xl 2xl 3xl 4xl | xs sm md lg xl 2xl 3xl 4xl 5xl | 0 gaps (5xl unused in prototype but cheap to keep) |
| Padding presets | card=16, page=24 | card=16, page=24 | 0 gaps |
| Radius | none xs sm md lg full | none xs sm md lg full | 0 gaps |
| Shadow | sm + custom (`0 12px 28px -6px #1C1C1A1F`) + `shadow-md` | sm md lg | ⚠️ prototype inlines a modal shadow that matches Lingot `shadows.lg` but never uses the `--shadow-lg` variable |
| Typography — size/weight/line | 10/11/12/13/14/16/18/20 px | 12/13/14/16/20/32 px | ❌ 3 missing sizes (10, 11, 18) |
| Typography — family | **Outfit** | **Nunito** | ❌ **mismatch — blocker** |
| **Totals** | — | — | **~6 actionable gaps** |

---

## Colors — primitives

Prototype `:root` (lines 14–35) declares the identical palette as `primitive.ts:19–72`.

| Prototype value | Usage context | Lingot match | Status | Action |
|---|---|---|---|---|
| `#ffffff` | body bg.default, modals, compose | `colors.solid.white` (primitive.ts:22) | ✅ | none |
| `#fdfcfb` neutral-50 | not used directly (reserved) | `colors.neutral[50]` (primitive.ts:28) | ✅ | none |
| `#fcfaf8` neutral-100 | body `background`, sidebars | `colors.neutral[100]` (primitive.ts:29) | ✅ | none |
| `#f5f0eb` neutral-200 | muted hover, task-item active | `colors.neutral[200]` (primitive.ts:30) | ✅ | none |
| `#e3dbd2` neutral-300 | borders, scrollbar | `colors.neutral[300]` (primitive.ts:31) | ✅ | none |
| `#9c8e82` neutral-400 | text-tertiary, sync-dot not-synced | `colors.neutral[400]` (primitive.ts:32) | ✅ | none |
| `#534840` neutral-500 | text-secondary, suivi-label | `colors.neutral[500]` (primitive.ts:33) | ✅ | none |
| `#3d3530` neutral-600 | primary button hover | `colors.neutral[600]` (primitive.ts:34) | ✅ | none |
| `#1c1917` neutral-700 | primary text, bg-inverse, buttons | `colors.neutral[700]` (primitive.ts:35) | ✅ | none |
| `#eee3de` terracotta-300 | `internal-badge`, `select-all-banner`, `msg-send-btn:hover` | `colors.terracotta[300]` (primitive.ts:47) | ✅ | none |
| `#b5634b` terracotta-400 | text.link, reply-row border, link external icon | `colors.terracotta[400]` (primitive.ts:48) | ✅ | none |
| `#9c5340` terracotta-500 | link hover, internal-badge text | `colors.terracotta[500]` (primitive.ts:49) | ✅ | none |
| `#e3f5eb / #067647` green | success dots, badges, aging ok | `colors.green[50/600]` (primitive.ts:54-55) | ✅ | none |
| `#fff1c6 / #f99307` orange | warning badges, aging warn | `colors.orange[50/500]` (primitive.ts:59-60) | ✅ | none |
| `#fde9e7 / #d92d20` red | error badges, destructive | `colors.red[50/600]` (primitive.ts:64-65) | ✅ | none |
| `#e8ecf2 / #1e4a8a` blue | info badges | `colors.blue[50/700]` (primitive.ts:69-70) | ✅ | none |
| `#c42519` | modal destructive `:hover` | — | ⚠️ ad-hoc, not in Lingot | align — remove custom hex, use `opacity:0.9` like button recipe |
| `rgba(28,25,23,0.4)` | modal backdrop scrim | — | ❌ no scrim token | add `bg.scrim = rgba(neutral-700 / 0.4)` or a semantic `overlay.scrim` |
| `rgba(255,255,255, 0.1–0.2)` | bulk-bar buttons on dark bg | — | ❌ no on-inverse interaction tokens | add `action.onInverse` family (hover 0.1, border 0.2, pressed 0.2) |

## Colors — semantic aliases

1:1 match with `semantic.ts` (`bg.default/subtle/muted/inverse`, `text.primary/secondary/tertiary/inverse/link/linkHover`, `action.primary/primaryHover/secondary/secondaryHover/destructive`, `status.success/successSubtle/warning/warningSubtle/error/errorSubtle/info/infoSubtle`, `border.default/subtle/focus/error`).

Only `bg.brand` (`colors.blue[50]`, semantic.ts:23) is **not used** in the prototype — candidate to drop unless reserved for future.

`bg.accent` (terracotta.300, semantic.ts:25) is used heavily (`select-all-banner`, `internal-badge`, `contact-chip.sent hover`) — keep.

## Spacing

| Prototype | Usage | Lingot | Status |
|---|---|---|---|
| `4px` var `--space-xs` | gaps, small paddings | `spacing.xs` (primitive.ts:80) | ✅ |
| `6px` `--space-sm` | tight gaps | `spacing.sm` (primitive.ts:82) | ✅ |
| `8px` `--space-md` | form padding, nav gap | `spacing.md` (primitive.ts:84) | ✅ |
| `12px` `--space-lg` | row padding, sidebar rows | `spacing.lg` (primitive.ts:86) | ✅ |
| `16px` `--space-xl` | card padding, modal padding | `spacing.xl` (primitive.ts:88) | ✅ |
| `24px` `--space-2xl` | summary-cards margin | `spacing["2xl"]` (primitive.ts:90) | ✅ |
| `32px` `--space-3xl` | doc-detail-grid gap, doc-fullpage h-padding | `spacing["3xl"]` (primitive.ts:92) | ✅ |
| `48px` `--space-4xl` | header heights | `spacing["4xl"]` (primitive.ts:94) | ✅ |
| `64px` — | not used | `spacing["5xl"]` (primitive.ts:96) | ⚠️ unused in prototype |
| `padding-card 16px` | card interior | `padding.card` (primitive.ts:104) | ✅ |
| `padding-page 24px` | page gutter | `padding.page` (primitive.ts:105) | ✅ |

Hard-coded pixel values in prototype that should use tokens: `2 px` (micro offsets), `10 px` (e.g. `padding: 10px 12px` on table headers line 2095), `11 px`, `14 px`, `15 px`, `18 px`, `160 px`. Most are one-off and acceptable.

## Radius

| Prototype | Usage | Lingot | Status |
|---|---|---|---|
| `0px` | — | `radii.none` (primitive.ts:113) | ✅ |
| `4px` | inputs-small, scrollbar, chip close, badge source | `radii.xs` (primitive.ts:114) | ✅ |
| `8px` | buttons, inputs, cards | `radii.sm` (primitive.ts:115) | ✅ |
| `12px` | dropdown menus | `radii.md` (primitive.ts:116) | ✅ |
| `16px` | modals, bubbles, main cards (`--space-lg` is borrowed: `border-radius: var(--space-lg)` — prototype uses 12 not 16 here, an inconsistency) | `radii.lg` (primitive.ts:117) | ⚠️ modal uses `lg` correctly, but `tasks-main-card` (line 804) and `accounts-main-card` (line 2490) use `var(--space-lg)` = 12 px instead of `--radius-md` |
| `9999px` | pills, badges, avatars | `radii.full` (primitive.ts:118) | ✅ |

Action: fix the prototype-level inconsistency by standardizing `main-card` to `radii.md` (12 px) — this IS `radii.md`, but authored via spacing token, which is a smell. Document in component specs.

## Shadow

| Prototype | Usage | Lingot | Status |
|---|---|---|---|
| `0 2px 8px rgba(28,28,26,0.06)` | filter chips, compose bar, dropdowns | `shadows.sm` (primitive.ts:126) | ✅ (prototype uses `#1C1C1A14` = exactly 6 % α) |
| `0 6px 16px -2px rgba(28,28,26,0.08)` | add-contact-menu | `shadows.md` (primitive.ts:127) | ✅ |
| `0 12px 28px -6px rgba(28,28,26,0.12)` | **modal** inline (line 570) | `shadows.lg` = `#1C1C1A1F` (0.12 α) (primitive.ts:128) | ⚠️ value matches, but prototype writes the literal rather than `var(--shadow-lg)` — production component must use the token |
| `0 -2px 8px, 0 2px 8px` composite | `ds-select-menu` (line 724) | — | ❌ custom dual-shadow pop-over shadow |

Action: add a **pop-over** shadow token (e.g. `shadows.popover`) or explicitly document that select menu uses `shadows.sm` top+bottom. Minor.

## Typography

Prototype font = **`'Outfit', sans-serif`** (`--font-family`, line 87). Lingot = **`Nunito, sans-serif`** (primitive.ts:135). **Mismatch — must be resolved before shipping.**

| Prototype (`fontSize`/`lineHeight`/`weight`) | Usage | Lingot match | Status | Action |
|---|---|---|---|---|
| 10 / 14 / 500 | `internal-badge`, `doc-source-badge`, `comm-bubble-status`, `disc-badge` | — | ❌ missing | add `typography.micro` (10/14/500) |
| 11 / 14–16 / 400–600 | `aging-legend-item`, sidebar inv aging, `comm-thread-item-date`, table `.doc-status-card-label` | — | ❌ missing | add `typography.captionXs` (11/16/400) — very frequent |
| 12 / 16 / 400 / (500 uppercase in section labels) | `caption`, `filter-chip`, `sidebar-section-title`, many micro labels | `typography.caption` (12/16/500) (primitive.ts:173) | ⚠️ weight mismatch in most prototype usages — prototype uses 400 for plain captions, 500 for uppercase section labels. Lingot caption is 500 only. | split into `caption` (400) and `captionStrong` (500) OR keep 500 default and override weight |
| 13 / 18 / 400 / 500 | task-item-account, buttons, form-label, sidebar body | `typography.bodySm` (13/18/400) (primitive.ts:166) | ✅ | none |
| 14 / 20 / 400 | body default | `typography.body` (14/20/400) (primitive.ts:159) | ✅ | none |
| 14 / 22 / 400 | `comm-body-editor`, `comm-log-body` | — | ⚠️ looser line-height variant of `body` | add `typography.bodyRelaxed` (14/22) or accept local override |
| 16 / 24 / 500 | section/card titles | `typography.headlineSm` (16/24/600) (primitive.ts:152) | ⚠️ weight drift (prototype 500, Lingot 600) | pick one — 500 matches prototype's softer tone |
| 18 / 24 / 600 | `summary-card-value` | — | ❌ missing | add `typography.headlineMd` (18/24/600) |
| 20 / 28 / 600 | `sidebar-amount`, `doc-fullpage-title` | `typography.headlineLg` (20/28/600) (primitive.ts:145) | ✅ | none |
| 32 / 40 / 600 display | — | `typography.display` (primitive.ts:138) | ⚠️ unused in prototype | keep (reserve for marketing) |

### Font-family decision

Recommendation: **change Lingot to `Outfit`** if the Billabex brand has committed to it (prototype quality suggests it has). Otherwise swap the prototype back to Nunito. This is a one-line change in `primitive.ts:135` but has broad visual ripple.

## Motion / transitions

Prototype uses `transition: all 0.15s ease` (buttons, chips, nav, list items), `0.1s ease` (dropdown items), `0.12s ease` (chip remove, tooltip), `0.3s ease` (aging-bar width). There is **no motion token system in Lingot**. Optional: add `motion.duration.fast = 150ms`, `motion.easing.standard = ease`.

## Z-index

Prototype inline values: `2` (task-detail-fixed), `50`, `100` (tooltip), `199` (backdrop), `200` (company dropdown), `500` (modal backdrop), `600` (select menu). No z-index token in Lingot. Optional: add `zIndex` scale.
