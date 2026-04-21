---
"@billabex/ui-components": minor
---

feat(ui-components): add BrandLogo component

Inline-SVG brand mark primitive. Covers third-party SSO marks (Google,
Microsoft) and the Billabex wordmark — intended for onboarding flows,
SSO buttons, and page headers.

API:

- `name: "google" | "microsoft" | "billabex"` — which brand mark to
  render
- `size?: number` — height in pixels; width follows the mark's
  intrinsic aspect ratio via its viewBox. Defaults to `18`
- Additional `SVGAttributes` are forwarded to the underlying `<svg>`

Accessibility:

- No default ARIA. For decorative use inside a branded button (e.g.
  "Continuer avec Google"), pass `aria-hidden="true"`. For standalone
  display (e.g. logo atop an onboarding page), pass `role="img"` +
  `aria-label`.

Brand colours are fixed by guidelines, so the SVGs are not
token-driven. No recipe file — the component is a pure asset
primitive (precedent: `OverflowMenu`).

Storybook category: **Data Display/BrandLogo**.
