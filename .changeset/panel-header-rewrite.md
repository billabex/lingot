---
"@billabex/ui-components": major
---

feat(ui-components)!: rewrite PanelHeader as a two-variant composable panel bar

**Breaking** — PanelHeader no longer accepts `title`, `badge`, `actions`, `tabs`, or `filters` props. Content is now composed via `children` with two sub-components.

Variants are named by layout, not use case. Covers every panel header pattern from the prototype — all 48 px tall:

- `variant="page"` (default) — center panels (`padding.page` 24px, `gap md`, left-aligned). Used for task detail, comm thread detail, account detail (with breadcrumb).
- `variant="card"` — left list or right aside panels (`padding.card` 16px, `justify-content: space-between`). Used for task list, comm list, right-rail account header.

Sub-components:
- `<PanelHeader.Title>` — 16/24 `medium` weight, `text.primary`, single-line with ellipsis
- `<PanelHeader.Spacer>` — flex:1 separator (page variant)

Tabs and filter rows are no longer baked in — stack them as siblings below. Breadcrumbs, links, and trailing actions are pure composition.

Migration:

```tsx
// Before
<PanelHeader title="Examiner" badge={<Badge/>} actions={<Button/>} />

// After
<PanelHeader>
  <PanelHeader.Title>Examiner</PanelHeader.Title>
  <Badge />
  <PanelHeader.Spacer />
  <Button />
</PanelHeader>

// Account detail — breadcrumb + trailing links
<PanelHeader>
  <Breadcrumb items={[…]} />
  <PanelHeader.Spacer />
  <Link>Voir les tâches</Link>
</PanelHeader>

// Right aside — single clickable link
<PanelHeader variant="card">
  <Link>DOSFARMASHOP ONLINE S.L. <ExternalLink /></Link>
</PanelHeader>
```

Removed recipe exports: `panelHeaderTopRowRecipe`, `panelHeaderTitleBarRecipe`, `panelHeaderRowRecipe`.
New recipe exports: `panelHeaderTitleRecipe`, `panelHeaderSpacerRecipe`.
