# Lingot — Billabex Design System

[![CI](https://github.com/billabex/lingot/actions/workflows/ci.yml/badge.svg)](https://github.com/billabex/lingot/actions/workflows/ci.yml)
[![Chromatic](https://github.com/billabex/lingot/actions/workflows/chromatic.yml/badge.svg)](https://github.com/billabex/lingot/actions/workflows/chromatic.yml)
[![npm @billabex/ui-tokens](https://img.shields.io/npm/v/@billabex/ui-tokens?label=%40billabex%2Fui-tokens&color=d4a853)](https://www.npmjs.com/package/@billabex/ui-tokens)
[![npm @billabex/ui-preset](https://img.shields.io/npm/v/@billabex/ui-preset?label=%40billabex%2Fui-preset&color=d4a853)](https://www.npmjs.com/package/@billabex/ui-preset)
[![npm @billabex/ui-components](https://img.shields.io/npm/v/@billabex/ui-components?label=%40billabex%2Fui-components&color=d4a853)](https://www.npmjs.com/package/@billabex/ui-components)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

A public design system monorepo for [Billabex](https://next.billabex.com). Ships three npm packages: framework-agnostic tokens, an optional Panda preset, and RSC-compatible React components with prebuilt CSS.

| Package | Description |
|---------|-------------|
| [`@billabex/ui-tokens`](./packages/ui-tokens) | Design tokens — colors, spacing, typography, shadows. Pure TypeScript, framework-agnostic. |
| [`@billabex/ui-preset`](./packages/ui-preset) | Optional Panda CSS preset for apps that want Billabex tokens inside their own `panda.config.ts`. |
| [`@billabex/ui-components`](./packages/ui-components) | React components — RSC-compatible by default, shipped with prebuilt CSS so Panda is not required in consuming apps. |

📖 **[Browse the Storybook →](https://main--69b0a2df3c85af8d575f47a7.chromatic.com)**

## Quick Start

```bash
pnpm add @billabex/ui-components
```

Then load the shipped stylesheet once in your app entrypoint:

```ts
import '@billabex/ui-components/styles.css'
```

### Optional Panda CSS Preset

If your app also uses Panda CSS and you want the Billabex token contract in your own config:

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

### Components

```tsx
import { Button } from '@billabex/ui-components'

<Button variant="primary" size="medium">
  Get Started
</Button>
```

Button variants: `primary` | `secondary` | `ghost` | `destructive`
Button sizes: `medium` | `small`

### Tokens

Tokens are rich TypeScript objects, not plain strings:

```ts
import { bg, spacing, shadows } from '@billabex/ui-tokens'

bg.default.hex            // '#ffffff'
bg.default.rgba(0.5)      // 'rgba(255, 255, 255, 0.5)'
`${bg.default}`           // '#ffffff' (toString)

spacing.md.px             // '8px'
spacing.md.rem            // '0.5rem'

shadows.sm.css            // '0px 2px 8px 0px rgba(28, 28, 26, 0.08)'
```

## Architecture

```
Primitive tokens → Semantic tokens → Optional Panda preset → Component recipes + prebuilt CSS
```

1. **Primitive** — raw palette (`colors.neutral[700]`, `spacing.md`)
2. **Semantic** — purposeful aliases (`bg.default`, `text.primary`, `action.destructive`)
3. **Preset** — optional Panda bridge for Panda users
4. **Component** — recipes compiled into the CSS shipped by `@billabex/ui-components`

```
lingot/
├── packages/
│   ├── ui-tokens/          # @billabex/ui-tokens
│   ├── ui-preset/          # @billabex/ui-preset
│   └── ui-components/      # @billabex/ui-components
├── apps/
│   └── docs/               # Storybook
└── .changeset/
```

## Development

Prerequisites: Node.js >= 24, pnpm 10+

| Command | Description |
|---------|-------------|
| `pnpm install` | Install dependencies |
| `pnpm build` | Build all packages (respects dependency order) |
| `pnpm test` | Run all tests |
| `pnpm lint` | Type-check across packages |
| `pnpm changeset` | Create a new changeset |
| `pnpm storybook` | Launch Storybook dev server |
| `pnpm --filter @billabex/ui-tokens build:figma` | Regenerate tokens.json |

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full development workflow (commits, CI, release, Figma sync, Chromatic).

## License

[MIT](./LICENSE)
