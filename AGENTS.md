# Lingot Design System

## What is this

Billabex design system monorepo. Three npm packages, one Storybook app for docs.

**Full human docs**: run `pnpm storybook` and browse the Storybook.

## The packages

### `@billabex/ui-tokens` — Design tokens

Pure TypeScript, zero dependencies, framework-agnostic. Tokens are **not** plain strings — they are frozen objects with conversion methods:

```ts
import { bg, spacing, shadows } from '@billabex/ui-tokens'

bg.default.hex           // '#ffffff'
bg.default.rgb           // { r: 255, g: 255, b: 255 }
bg.default.rgba(0.5)     // 'rgba(255, 255, 255, 0.5)'
bg.default.hsl           // { h: 0, s: 0, l: 100 }

spacing.md.value         // 8
spacing.md.px            // '8px'
spacing.md.rem           // '0.5rem'

shadows.sm.css           // '0px 2px 8px 0px rgba(28, 28, 26, 0.08)'
```

Token types: `ColorToken`, `DimensionToken`, `ShadowToken`, `TypographyToken`, `RadiusToken`.

Factory functions: `color(hex)`, `dimension(px)`, `shadow(...)` — use these to create new tokens.

### `@billabex/ui-preset` — Optional Panda preset

This package exports `billabexPreset` for apps that already use Panda CSS and want Billabex tokens in their own `panda.config.ts`.

```ts
import { defineConfig } from '@pandacss/dev'
import { billabexPreset } from '@billabex/ui-preset'

export default defineConfig({
  presets: [billabexPreset],
})
```

It is a build-time tool, not something React component consumers need to install.

### `@billabex/ui-components` — React components

React 19, RSC-compatible by default. Only add `'use client'` when a component uses hooks or browser APIs.

This package ships prebuilt CSS. Consumer apps should import `@billabex/ui-components/styles.css` and do not need Panda CSS just to render components.

Internally, the package still uses Panda during its own build, consuming `@billabex/ui-preset` for codegen.

`styled-system/` is Panda CSS's generated output directory (created by `panda codegen`). Imports like `import { cva } from "styled-system/css"` are Panda CSS, not a separate library.

## Token architecture

```
Primitive tokens → Semantic tokens → Optional Panda preset → Component recipes
```

### Layer 1: Primitives (`tokens/primitive.ts`)

Raw design values. The palette.

- `colors` — nested by scale: `colors.neutral[700]`, `colors.gold[500]`, `colors.red[600]`
- `spacing` — `xs` (4px) through `4xl` (48px)
- `padding` — `card` (16px), `page` (24px)
- `radii` — `none` through `full`
- `shadows` — `sm`, `md`, `lg`
- `typography` — `display`, `headlineLg`, `headlineSm`, `body`, `bodySm`, `caption`

### Units policy (px vs rem)

Primitive dimension tokens are authored from **px** values to stay aligned with Figma handoff.

Each dimension token exposes both:
- `.px` for pixel-precise usage
- `.rem` for scalable usage

Recommended usage in components and recipes:
- **Prefer `rem`** for typography and layout spacing/sizing (font-size, line-height, padding, gap, margin, widths/heights)
- **Use `px`** for hairlines/borders and pixel-critical visual details

Rule of thumb:
> Keep **px** as token source-of-truth, consume **rem** by default at runtime.

### Layer 2: Semantics (`tokens/semantic.ts`)

Purpose-based aliases that reference primitives. These give meaning:

- `bg` — `default`, `subtle`, `muted`, `inverse`, `brand`, `accent`
- `text` — `primary`, `secondary`, `tertiary`, `inverse`, `link`, `linkHover`
- `action` — `primary`, `primaryHover`, `primaryPressed`, `secondary`, `secondaryHover`, `destructive`
- `status` — `success`, `successSubtle`, `warning`, `warningSubtle`, `error`, `errorSubtle`, `info`, `infoSubtle`
- `border` — `default`, `subtle`, `focus`, `error`

Each semantic token is a direct reference to a primitive: `bg.inverse = colors.neutral[700]`.

### Layer 3: Panda preset (`packages/ui-preset/src/index.ts`)

`billabexPreset` maps both primitive and semantic tokens into Panda CSS's `tokens` and `semanticTokens`. This is how components access tokens in recipes.

### Layer 4: Component recipes (`*.recipe.ts`)

Panda CVA recipes reference semantic tokens by their Panda path:

```ts
// In a recipe — these are Panda token paths, NOT direct imports
bg: "action.primary"          // → semantic action.primary → primitive neutral.700
color: "text.inverse"         // → semantic text.inverse → primitive solid.white
borderRadius: "sm"            // → primitive radii.sm
fontSize: "body"              // → primitive typography.body
```

### Figma sync (`tokens.json`)

Generated file — never edit manually. Semantic tokens use W3C DTCG references:

```json
{ "$value": "{global.color.neutral.700}", "$type": "color" }
```

Regenerate: `pnpm --filter @billabex/ui-tokens build:figma`. CI checks freshness.

## File layout

```
packages/ui-tokens/src/
├── types.ts                    # Token interfaces
├── utils.ts                    # color(), dimension(), shadow() factories
├── utils.spec.ts
└── tokens/
    ├── primitive.ts            # Raw palette
    ├── primitive.spec.ts
    ├── semantic.ts             # Purposeful aliases
    ├── semantic.spec.ts
    └── index.ts

packages/ui-preset/src/
└── index.ts                    # billabexPreset (bridges tokens → Panda CSS)

packages/ui-components/src/
├── index.ts                        # Public barrel — re-exports all components
└── components/
    ├── {name}/                      # Standalone component
    │   ├── {name}.tsx
    │   ├── {name}.recipe.ts
    │   ├── {name}.stories.tsx
    │   ├── {name}.spec.tsx
    │   └── index.ts
    └── {family}/                    # Parent/child family (dropdown, filter, stepper, table)
        ├── {parent}.tsx
        ├── {parent}.recipe.ts
        ├── {parent}.stories.tsx
        ├── {parent}.spec.tsx
        ├── {child}.tsx
        ├── {child}.recipe.ts
        ├── {child}.stories.tsx
        ├── {child}.spec.tsx
        └── index.ts                # Re-exports both parent and child

apps/docs/                          # Storybook (component documentation)
```

## Rules

- **Build order**: ui-tokens → ui-preset → ui-components → docs. `pnpm build` handles this.
- **`styled-system/`**: Generated by `panda codegen`, gitignored. Must exist before build/test. Path aliases in `vite.config.ts` and `vitest.config.ts`.
- **`tokens.json`**: Generated by `build:figma`. Never edit by hand. CI verifies it's up to date.
- **ESM only**: `"type": "module"`, `.js` extensions in relative imports.
- **Tests**: `*.spec.ts` / `*.spec.tsx`, colocated next to source. Never `.test.ts`, never `__tests__/`.
- **Stories**: `*.stories.tsx`, colocated with components.
- **Commits**: conventional commits — `type(scope): description`. Scopes: `ui-tokens`, `ui-preset`, `ui-components`, `docs`, `repo`, `ci`, `deps`, `release`. Enforced by commitlint + husky.
- **Pre-commit**: lint-staged runs `tsc --noEmit` + `vitest run` on affected packages only.
- **Versioning**: Changesets. Published packages are linked (same version). Public npm `@billabex` scope.

## Commands

| Command | What it does |
|---------|-------------|
| `pnpm build` | Build all packages |
| `pnpm test` | Run all tests |
| `pnpm storybook` | Launch Storybook |
| `pnpm changeset` | Create a changeset for release |
| `pnpm --filter @billabex/ui-tokens build:figma` | Regenerate tokens.json |
| `pnpm --filter @billabex/ui-preset build` | Build the optional Panda preset package |
| `pnpm --filter @billabex/ui-components codegen` | Regenerate styled-system/ |

## Components

### Standalone

| Component | Directory | Description |
|-----------|-----------|-------------|
| `Badge` | `badge/` | Status labels and counters |
| `Banner` | `banner/` | Contextual messages (info, warning, error, success) |
| `Breadcrumb` | `breadcrumb/` | Navigation breadcrumb trail |
| `Bubble` | `bubble/` | Chat message (agent / user) |
| `BubbleGroup` | `bubble/` | Author + date header wrapping a run of bubbles |
| `BubbleAttachment` | `bubble/` | Inline file chip inside a bubble |
| `BubbleAttachmentGroup` | `bubble/` | Wraps one or more `BubbleAttachment` chips with consistent flex/wrap/gap |
| `Chip` | `chip/` | Pill primitive — filter / removable / static |
| `ChipGroup` | `chip/` | Horizontal wrapping row of Chips |
| `Button` | `button/` | Primary action trigger |
| `Card` | `card/` | Content container with optional header/footer |
| `Checkbox` | `checkbox/` | Boolean toggle input |
| `Divider` | `divider/` | Horizontal or vertical separator |
| `EmptyState` | `empty-state/` | Placeholder for empty lists/views |
| `FormField` | `form-field/` | Label + input + helper/error wrapper |
| `IconButton` | `icon-button/` | Icon-only action button |
| `InfoRow` | `info-row/` | Label–value pair row |
| `Input` | `input/` | Text input field |
| `Link` | `link/` | Anchor-style navigation |
| `ListItem` | `list-item/` | Row in a list with title, meta, preview |
| `Modal` | `modal/` | Dialog overlay |
| `NavItem` | `nav-item/` | Sidebar navigation entry |
| `PageHeader` | `page-header/` | Top-level page title bar with actions |
| `ListPagination` | `list-pagination/` | Prev/next + range label for list panels (e.g. Tasks / Comms) |
| `TablePagination` | `table-pagination/` | Full-width pager for data tables — range label + prev / numbered pages / next |
| `BulkActionBar` | `bulk-action-bar/` | Dark footer toolbar surfaced when table rows are selected — count + action buttons + close |
| `MessageComposer` | `message-composer/` | Auto-growing textarea with attach + send toolbar — Cmd/Ctrl+Enter submits |
| `NotificationBadge` | `notification-badge/` | Overlay count pill for icons (unread counts, etc.) |
| `PanelHeader` | `panel-header/` | Panel top bar (48 px) — `variant="page"` (padding.page, gap md — center panels) or `"card"` (padding.card, space-between — left list / right aside) |
| `SectionTitle` | `section-title/` | Collapsible section heading |
| `Select` | `select/` | Dropdown select input |
| `Sidebar` | `sidebar/` | App-level 48 px icon rail — transparent background, header / content / footer slots |
| `TabItem` | `tab-item/` | Individual tab trigger |
| `Tabs` | `tab-item/` | Tab bar container — flex row with bottom border, wraps `TabItem`s |
| `Toast` | `toast/` | Transient notification |
| `Toggle` | `toggle/` | On/off switch |
| `Tooltip` | `tooltip/` | Hover info popup |

### Component families

Parent/child pairs that live in a shared directory:

| Family | Directory | Components |
|--------|-----------|------------|
| Dropdown | `dropdown/` | `DropdownMenu` + `DropdownItem` |
| Stepper | `stepper/` | `Stepper` + `StepperItem` |
| Table | `table/` | `Table` + `TableRow` + `TableSortHeader` |

### Storybook categories

Stories are organized by function, not alphabetically:

| Category | Components |
|----------|------------|
| **Actions** | Button, IconButton, Link, Toggle |
| **Data Display** | Badge, Bubble, BubbleAttachment, BubbleAttachmentGroup, BubbleGroup, Card, Divider, EmptyState, InfoRow, ListItem, Table, TableRow, Tooltip |
| **Data Entry** | Checkbox, FormField, Input, MessageComposer, Select, SelectMenu |
| **Feedback** | Banner, BulkActionBar, Modal, NotificationBadge, Toast |
| **Navigation** | Breadcrumb, Chip, ChipGroup, ListPagination, NavItem, PageHeader, SectionTitle, Sidebar, Stepper, StepperItem, TabItem, TablePagination, Tabs |
| **Layout** | DropdownItem, DropdownMenu, FilterRow, PanelHeader |
