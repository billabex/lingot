# @billabex/ui-preset

[![npm](https://img.shields.io/npm/v/@billabex/ui-preset?color=d4a853)](https://www.npmjs.com/package/@billabex/ui-preset)

Optional [Panda CSS](https://panda-css.com/) preset for the [Billabex](https://next.billabex.com) design system. Use it only if your app also uses Panda and you want Billabex tokens and conditions inside your own `panda.config.ts`.

Part of the [Lingot](https://github.com/billabex/lingot) monorepo.

## Install

```bash
pnpm add -D @billabex/ui-preset @pandacss/dev
```

## Usage

```ts
import { defineConfig } from '@pandacss/dev'
import { billabexPreset } from '@billabex/ui-preset'

export default defineConfig({
  presets: [billabexPreset],
})
```

## Includes

- primitive colors, spacing, radii, shadows, and typography tokens
- semantic tokens for background, text, action, status, and border
- responsive conditions from `sm` through `desktopXl`

If you only want the React components, install `@billabex/ui-components` instead — Panda is optional for component consumers.

## License

[MIT](https://github.com/billabex/lingot/blob/main/LICENSE)
