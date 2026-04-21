---
"@billabex/ui-components": minor
---

feat(ui-components): add AgedBalance component

Overdue aged-balance summary for account panels. Displays a total
amount, a horizontal segmented bar proportional to each bucket's
weight, and a matching legend.

API:

- `total: ReactNode` — pre-formatted amount (consumer controls
  currency, separators, rounding)
- `buckets: AgedBalanceBucket[]` — each bucket has `tone` (`success` |
  `warning` | `danger` | `critical`), `label` (ReactNode), and `value`
  (number). Segment widths are computed from the proportion of each
  `value` against the sum — raw amounts or percentages both work.

Behavior:

- When every bucket value is zero (or `buckets` is empty), the bar
  renders a single full-width neutral segment (`border.default`).
  Legend remains at full visibility — structure is preserved,
  "no aged balance" is conveyed by the grey bar alone.
- Zero-valued buckets are skipped in the bar but kept in the legend.
- Tone `critical` (→ `neutral.600`) is intended for the oldest aging
  bucket (e.g. +90j), visually distinct from `danger` (red).
- Legend renders as a flex-wrap row of small rounded-square swatches
  (6px, `radius.xs`) + labels (`caption.xs`, `text.tertiary`).
- Total uses `headline.lg` (20/28, semibold, `text.primary`).

Storybook category: **Data Display/AgedBalance**.
