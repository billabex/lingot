---
"@billabex/ui-components": major
---

refactor(ui-components)!: collapse Sidebar to a single 48 px icon-rail layout

**Breaking** — `variant` prop removed. `SidebarVariant` type export removed.

The `default` (auto-width shell) and `rail` (48 px) variants are merged into a single layout: 48 px wide, icon-only rail, **transparent background**. The surrounding layout owns the sidebar's background color.

Migration:

```tsx
// Before
<Sidebar variant="rail" header={…}>…</Sidebar>

// After
<Sidebar header={…}>…</Sidebar>
```

Stories reduced to a single `Default` story showing the rail with a clickable company-logo tile in the header (hover → `action.primary.hover`, active → `neutral.500`) and icon `NavItem`s in the content.
