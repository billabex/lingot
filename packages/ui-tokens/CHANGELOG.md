# @billabex/ui-tokens

## 0.1.1

### Patch Changes

- [#6](https://github.com/billabex/lingot/pull/6) [`1a73dd7`](https://github.com/billabex/lingot/commit/1a73dd70c96210a93426e95d9385de73024b6e95) Thanks [@tinque](https://github.com/tinque)! - Replace hard-coded inline styles with Panda CSS recipes and semantic token references

  - Replace all hard-coded hex colors, shadows, typography, and spacing values in component TSX files with `@billabex/ui-tokens` semantic references
  - Migrate remaining inline `style={{}}` props to dedicated Panda CVA recipes (`toggleKnobRecipe`, `toggleLabelRecipe`, `inputWrapperRecipe`, `inputLabelRecipe`, `selectWrapperRecipe`, `selectLabelRecipe`, `selectContainerRecipe`, `selectIconRecipe`, `breadcrumbSeparatorRecipe`, `breadcrumbItemRecipe`, `breadcrumbCurrentRecipe`, `breadcrumbLinkRecipe`, `checkboxLabelRecipe`, `emptyStateTextRecipe`)
  - Add `disabled` variant to `toggleRecipe` and `checkboxRecipe`
  - Fix incorrect hard-coded colors in stories (`#dc2626` → `action.destructive`, `#1c1c1a` → `action.primary`)
  - Zero visual change — same styles, now fully tokenized and overridable via CSS
