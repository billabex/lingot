---
"@billabex/ui-components": major
---

fix(ui-components): align Input size names with Button/IconButton

Rename Input `size` values from `md / sm` to `medium / small` so all size-taking components use the same vocabulary across the DS.

Breaking:

- `<Input size="md">` → `<Input size="medium">` (also the new default, unchanged default behavior).
- `<Input size="sm">` → `<Input size="small">`.
- `InputSize` type values change accordingly.
