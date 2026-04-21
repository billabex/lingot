---
"@billabex/ui-tokens": minor
"@billabex/ui-preset": minor
---

feat(ui-tokens): adopt Outfit font family and expand the typography scale

- Switch primitive font family from `Nunito` to `Outfit` (weights 300/400/500/600).
- Add `typography.headlineMd` (18/24/600), `typography.captionSoft` (12/16/400), `typography.captionXs` (11/16/400), `typography.micro` (10/14/500).
- Align `typography.headlineSm` weight to 500 (was 600) to match the design prototype.
- Expose the new sizes and line heights via `billabexPreset` (`fontSizes.headline.md`, `caption.soft`, `caption.xs`, `micro` and matching `lineHeights.*`).
- Font loading remains the consumer's responsibility (e.g. `<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap">`).
