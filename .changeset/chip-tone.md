---
"@billabex/ui-components": minor
---

feat(ui-components): add Chip `tone` prop

Completes the per-instance accent family (`Card.accent`, `Avatar.tone`,
now `Chip.tone`). When set, the chip renders with the given CSS color
as text color, a 15% tinted background (via `color-mix(in srgb, …)`)
and a transparent border — visually aligning with persona / source
categorization patterns.

Applies to all three chip variants (filter, removable, static).
Consumer `style` is merged, not overridden.

Used in the Onboarding View template's agent picker to tint the
gender + email chips to match each persona's accent color.
