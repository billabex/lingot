---
"@billabex/ui-components": minor
---

feat(ui-components): add Pagination component

Panel-light pager matching the prototype `.list-pagination` spec: chevron prev/next buttons (24 × 24, radius xs, text.tertiary) flanking a range label (`1–25 of 30`), centered, with a `border-top: 1px border.subtle`.

API:

```tsx
<Pagination page={1} total={30} pageSize={25} onChange={(p) => …} />
```

- 1-indexed `page`, disables Prev on first page and Next on last.
- Clamps out-of-range values.
- `formatLabel?: (start, end, total) => string` for locales (`1–25 sur 30`).
- `prevLabel` / `nextLabel` for accessible button names.
- `size="sm"` is the only size today; `"md"` (numbered pages) will land later for table views.

Category: **Navigation/Pagination**.
