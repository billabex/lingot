---
"@billabex/ui-components": major
---

refactor(ui-components): drop Sidebar footer slot

The product has no place for a footer action on the 48px rail, so the
Sidebar API loses its footer slot to prevent misuse.

Breaking:

- `Sidebar` no longer accepts a `footer` prop.
- Recipe export `sidebarFooterRecipe` is removed.

Only the header and main content slots remain.
