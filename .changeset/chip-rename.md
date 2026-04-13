---
"@billabex/ui-components": major
---

feat(ui-components): rename filter-button to chip and absorb removable tags

Replaces the former `FilterButton` with a broader `Chip` primitive that
covers three behaviors: filter chips (toggleable), removable tags, and
static labels. `FilterRow` becomes `ChipGroup`.

Breaking:

- `<FilterButton>` → `<Chip>` (filter is the default variant).
- `<FilterRow>` → `<ChipGroup>`.
- Recipe exports: `filterButtonRecipe` → `chipRecipe`,
  `filterRowRecipe` → `chipGroupRecipe`.

New:

- `variant="removable"` — adds a trailing × button and requires
  `onRemove`.
- `variant="static"` — read-only label pill, no shadow, no hover.

Storybook category: **Navigation/Chip** and **Navigation/ChipGroup**.
