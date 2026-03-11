# @billabex/ui-components

## 0.1.1

### Patch Changes

- [#6](https://github.com/billabex/lingot/pull/6) [`1a73dd7`](https://github.com/billabex/lingot/commit/1a73dd70c96210a93426e95d9385de73024b6e95) Thanks [@tinque](https://github.com/tinque)! - Replace hard-coded inline styles with Panda CSS recipes and semantic token references

  - Replace all hard-coded hex colors, shadows, typography, and spacing values in component TSX files with `@billabex/ui-tokens` semantic references
  - Migrate remaining inline `style={{}}` props to dedicated Panda CVA recipes (`toggleKnobRecipe`, `toggleLabelRecipe`, `inputWrapperRecipe`, `inputLabelRecipe`, `selectWrapperRecipe`, `selectLabelRecipe`, `selectContainerRecipe`, `selectIconRecipe`, `breadcrumbSeparatorRecipe`, `breadcrumbItemRecipe`, `breadcrumbCurrentRecipe`, `breadcrumbLinkRecipe`, `checkboxLabelRecipe`, `emptyStateTextRecipe`)
  - Add `disabled` variant to `toggleRecipe` and `checkboxRecipe`
  - Fix incorrect hard-coded colors in stories (`#dc2626` → `action.destructive`, `#1c1c1a` → `action.primary`)
  - Zero visual change — same styles, now fully tokenized and overridable via CSS

- Updated dependencies [[`1a73dd7`](https://github.com/billabex/lingot/commit/1a73dd70c96210a93426e95d9385de73024b6e95)]:
  - @billabex/ui-tokens@0.1.1

## 0.1.0

### Minor Changes

- [`4309ce8`](https://github.com/billabex/lingot/commit/4309ce8c23144c5ca57458142d8b98fedc0220d4) Thanks [@tinque](https://github.com/tinque)! - Add 20 atom components from Figma design system

  New components: Badge, Banner, Breadcrumb, Button (rewrite), Checkbox, Divider, DropdownItem, EmptyState, FilterButton, IconButton, InfoRow, Input, Link, NavItem, SectionTitle, Select, StepperItem, TabItem, Toggle, Tooltip.

  Each component includes a Panda CSS recipe, Storybook stories, and colocated unit tests.

- [#4](https://github.com/billabex/lingot/pull/4) [`f803a58`](https://github.com/billabex/lingot/commit/f803a581c616609198ed2251c815939f4f1ff913) Thanks [@tinque](https://github.com/tinque)! - Add organism components and reorganize component families

  New components: Card, FormField, ListItem, Modal, Toast,
  PanelHeader, Sidebar, PageHeader, Table, TableRow, Stepper,
  DropdownMenu, FilterRow.

  Group parent/child families into shared directories:
  dropdown/ (DropdownMenu + DropdownItem),
  filter/ (FilterRow + FilterButton),
  stepper/ (Stepper + StepperItem),
  table/ (Table + TableRow).

  Reorganize Storybook stories by functional categories:
  Actions, Data Display, Data Entry, Feedback, Navigation, Layout.
