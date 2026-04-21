---
"@billabex/ui-components": major
---

refactor(ui-components): SectionTitle becomes a static uppercase label

`SectionTitle` is rewritten as a non-interactive section label used to
group content in panels and sidebars. The previous collapsible button
behavior is removed — expand/collapse is no longer part of the design
language.

Breaking:

- `SectionTitle` renders a `<div>` (not a `<button>`); `expanded` prop
  removed; chevron icon removed.
- Recipe export `sectionTitleChevronRecipe` removed; replaced by
  `sectionTitleTrailingRecipe`.
- Extends `HTMLAttributes<HTMLDivElement>` instead of
  `ButtonHTMLAttributes<HTMLButtonElement>`.

New:

- Fixed `24px` height. Typography aligned to `caption.soft` (12px) +
  `text-transform: uppercase` + `letter-spacing: 0.05em`, color
  `text.tertiary`.
- `trailing?: ReactElement<IconButtonProps>` slot, typed to `IconButton`.
  Size is forced to `small` regardless of what consumers pass.

Storybook category moves from **Navigation** to **Layout/SectionTitle**.
