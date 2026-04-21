---
"@billabex/ui-components": minor
---

feat(ui-components): add Card `accent` and Avatar `tone` props

Both props enable per-instance color customization for visual
categorization (e.g. by persona, priority, or source).

- `Card accent?: string` — renders a 3px left-edge stripe in the
  given CSS color, preserving the existing border on the other three
  sides. Consumer `style` is merged, not overridden.
- `Avatar tone?: string` — overrides the background with the given
  CSS color and forces white contents for contrast. Consumer `style`
  is merged, not overridden.

Both props accept any CSS color value (no DS token coupling), since
categorical colors are typically instance data, not semantic tokens.

Used by the Onboarding View template's agent picker to differentiate
Sophie / Thomas / Camille personas.
