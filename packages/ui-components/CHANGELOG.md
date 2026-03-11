# @billabex/ui-components

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
