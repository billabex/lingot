---
"@billabex/ui-tokens": patch
"@billabex/ui-preset": patch
"@billabex/ui-components": patch
---

Replace hard-coded inline styles with Panda CSS recipes and semantic token references

- Replace all hard-coded hex colors, shadows, typography, and spacing values in component TSX files with `@billabex/ui-tokens` semantic references
- Migrate remaining inline `style={{}}` props to dedicated Panda CVA recipes (`toggleKnobRecipe`, `toggleLabelRecipe`, `inputWrapperRecipe`, `inputLabelRecipe`, `selectWrapperRecipe`, `selectLabelRecipe`, `selectContainerRecipe`, `selectIconRecipe`, `breadcrumbSeparatorRecipe`, `breadcrumbItemRecipe`, `breadcrumbCurrentRecipe`, `breadcrumbLinkRecipe`, `checkboxLabelRecipe`, `emptyStateTextRecipe`)
- Add `disabled` variant to `toggleRecipe` and `checkboxRecipe`
- Fix incorrect hard-coded colors in stories (`#dc2626` → `action.destructive`, `#1c1c1a` → `action.primary`)
- Zero visual change — same styles, now fully tokenized and overridable via CSS
