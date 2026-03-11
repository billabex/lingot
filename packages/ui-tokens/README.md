# @billabex/ui-tokens

[![npm](https://img.shields.io/npm/v/@billabex/ui-tokens?color=d4a853)](https://www.npmjs.com/package/@billabex/ui-tokens)

Design tokens for the [Billabex](https://next.billabex.com) design system. Pure TypeScript, framework-agnostic, [Figma Token Studio](https://tokens.studio/) compatible.

Part of the [Lingot](https://github.com/billabex/lingot) monorepo.

## Install

```bash
pnpm add @billabex/ui-tokens
```

## Usage

Tokens are rich TypeScript objects with built-in conversion methods — not plain strings:

```ts
import { bg, text, spacing, shadows } from '@billabex/ui-tokens'

// Colors
bg.default.hex            // '#ffffff'
bg.default.rgb            // { r: 255, g: 255, b: 255 }
bg.default.rgba(0.5)      // 'rgba(255, 255, 255, 0.5)'
bg.default.hsl            // { h: 0, s: 0, l: 100 }
`${bg.default}`           // '#ffffff' (toString)

// Dimensions
spacing.md.value          // 8
spacing.md.px             // '8px'
spacing.md.rem            // '0.5rem'

// Shadows
shadows.sm.css            // '0px 2px 8px 0px rgba(28, 28, 26, 0.08)'
```

## Token Architecture

```
Primitive → Semantic → Consumer
```

- **Primitive tokens** define the raw palette: `colors.neutral[700]`, `spacing.md`, `radii.lg`
- **Semantic tokens** give purpose: `bg.default`, `text.primary`, `action.destructive`, `border.default`

Semantic tokens reference primitives, so palette changes propagate everywhere automatically.

## Units (px vs rem)

Primitive dimension tokens are authored from **px** values (to match Figma handoff precisely), but each token exposes both:

- `.px` for pixel-precise usage
- `.rem` for scalable, accessibility-friendly usage

Recommended usage:

- Typography and layout spacing: prefer **`rem`**
- Borders/hairlines and pixel-critical details: use **`px`**

Example:

```ts
import { spacing, typography } from '@billabex/ui-tokens'

// Preferred defaults in component CSS
spacing.md.rem                    // '0.5rem'
typography.body.fontSize.rem      // e.g. '0.875rem'

// Pixel-precise cases
spacing.md.px                     // '8px'
```

## Available Token Categories

| Category | Primitives | Semantics |
|----------|-----------|-----------|
| Colors | `neutral`, `gold`, `terracotta`, `status` scales | `bg.*`, `text.*`, `action.*`, `status.*`, `border.*` |
| Spacing | `xs` through `5xl` (4px–64px) | — |
| Radii | `sm`, `md`, `lg`, `xl`, `full` | — |
| Shadows | `sm`, `md`, `lg` | — |
| Typography | `heading`, `body`, `label`, `caption` | — |

## Figma Token Studio

Tokens are exported to `tokens.json` in [W3C DTCG](https://design-tokens.github.io/community-group/format/) format. Semantic tokens use references (`{global.color.neutral.700}`) so changes to the primitive palette propagate automatically in Token Studio.

## License

[MIT](https://github.com/billabex/lingot/blob/main/LICENSE)
