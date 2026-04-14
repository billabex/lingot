---
"@billabex/ui-components": minor
---

feat(ui-components): add InvoiceCard component

Stacked invoice summary row for account panels (Facturation section).
Two-line layout — reference + status pill on the left, amount + due
date on the right, with an optional meta line below. Rows are designed
to stack vertically with a subtle bottom-border separator that drops
on the last child.

API:

- `reference: ReactNode` — invoice identifier (e.g. `"INV-2066639"`)
- `status: { label, tone }` — rendered as `<Badge shape="pill">`; tone
  accepts any `BadgeVariant` (`neutral` | `info` | `success` |
  `warning` | `error` | `count`)
- `amount: ReactNode` — pre-formatted amount (consumer controls
  currency/formatting)
- `dueDate?: { label, tone }` — optional due date; tone is
  `"default" | "warning" | "danger"`, controlling the text color only
- `meta?: ReactNode` — optional single-line footer (e.g.
  `"Payé : 2 000 €"`). Hidden when absent.

Storybook category: **Data Display/InvoiceCard**.
