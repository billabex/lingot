# @billabex/ui-components

[![npm](https://img.shields.io/npm/v/@billabex/ui-components?color=d4a853)](https://www.npmjs.com/package/@billabex/ui-components)

RSC-compatible React components for the [Billabex](https://next.billabex.com) design system. They ship with prebuilt CSS, so consuming apps do **not** need Panda CSS just to use the components.

Part of the [Lingot](https://github.com/billabex/lingot) monorepo. 📖 [Browse the Storybook →](https://main--<your-chromatic-app-id>.chromatic.com)

## Install

```bash
pnpm add @billabex/ui-components
```

## Setup

Import the distributed stylesheet once in your app entrypoint, then use the components:

```ts
import '@billabex/ui-components/styles.css'
```

```tsx
import { Button } from '@billabex/ui-components'
```

## Optional Panda CSS Preset

If your app already uses Panda CSS and you want Billabex tokens/conditions in your own config, install the dedicated preset package:

```bash
pnpm add -D @billabex/ui-preset @pandacss/dev
```

```ts
// panda.config.ts
import { defineConfig } from '@pandacss/dev'
import { billabexPreset } from '@billabex/ui-preset'

export default defineConfig({
  presets: [billabexPreset],
  // ...
})
```

## Components

All components are RSC-compatible by default — only components that require interactivity use `"use client"`.

### Actions

| Component | Description |
|-----------|-------------|
| `Button` | Primary action trigger (`primary` \| `secondary` \| `ghost` \| `destructive`) |
| `IconButton` | Icon-only action button |
| `Link` | Anchor-style navigation |
| `Toggle` | On/off switch |
| `FilterButton` | Active/inactive filter chip |

### Data Display

| Component | Description |
|-----------|-------------|
| `Badge` | Status labels and counters |
| `Card` | Content container with optional header/footer |
| `Divider` | Horizontal or vertical separator |
| `EmptyState` | Placeholder for empty lists/views |
| `InfoRow` | Label–value pair row |
| `ListItem` | Row in a list with title, meta, preview |
| `Table` | Data table container with header |
| `TableRow` | Individual row in a table |
| `Tooltip` | Hover info popup |

### Data Entry

| Component | Description |
|-----------|-------------|
| `Checkbox` | Boolean toggle input |
| `FormField` | Label + input + helper/error wrapper |
| `Input` | Text input field |
| `Select` | Dropdown select input |

### Feedback

| Component | Description |
|-----------|-------------|
| `Banner` | Contextual messages (info, warning, error, success) |
| `Modal` | Dialog overlay |
| `Toast` | Transient notification |

### Navigation

| Component | Description |
|-----------|-------------|
| `Breadcrumb` | Navigation breadcrumb trail |
| `NavItem` | Sidebar navigation entry |
| `PageHeader` | Top-level page title bar with actions |
| `SectionTitle` | Collapsible section heading |
| `Sidebar` | App-level sidebar with header, content, footer |
| `Stepper` | Multi-step progress indicator |
| `StepperItem` | Individual step in a stepper |
| `TabItem` | Individual tab trigger |

### Layout

| Component | Description |
|-----------|-------------|
| `DropdownMenu` | Menu container for dropdown items |
| `DropdownItem` | Individual item inside a dropdown menu |
| `FilterRow` | Container for filter buttons |
| `PanelHeader` | Panel title bar with filters and actions |

### Quick start

```tsx
import { Button } from '@billabex/ui-components'

<Button variant="primary" size="medium">
  Get Started
</Button>
```
## What the optional preset includes

The `billabexPreset` provides:

- **Colors**: neutral, gold, terracotta scales + semantic aliases (bg, text, action, status, border)
- **Spacing**: `xs` through `5xl` (4px–64px)
- **Radii**: `sm`, `md`, `lg`, `xl`, `full`
- **Shadows**: `sm`, `md`, `lg`
- **Typography**: heading, body, label, caption font styles
- **Breakpoints**: `sm` (350px) through `desktopXl` (1920px)

## License

[MIT](https://github.com/billabex/lingot/blob/main/LICENSE)
