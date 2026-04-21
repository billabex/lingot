---
"@billabex/ui-components": major
---

feat(ui-components): rename Pagination to ListPagination

Separates list pagination (prev/next + range, for panel footers) from the future `TablePagination` (numbered pages, page-size selector, ellipsis — for table footers). Their APIs diverge too much to share a component without prop sprawl.

Breaking:

- `<Pagination>` → `<ListPagination>`.
- Recipes: `paginationRecipe` → `listPaginationRecipe`, `paginationInfoRecipe` → `listPaginationInfoRecipe`, `paginationButtonRecipe` → `listPaginationButtonRecipe`.
- `PaginationSize` type removed — no longer needed.

Storybook: **Navigation/ListPagination**.
