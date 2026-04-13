---
"@billabex/ui-components": minor
---

feat(ui-components): left-rail components — Sidebar rail variant, NavItem icon variant, NotificationBadge

Adds the three pieces needed to build the 48 px icon rail used across the workspace.

- **Sidebar** — new `variant="rail"`: 48 px wide, `bg.subtle`, centered content. Default variant unchanged.
- **NavItem** — new `variant="icon"`: 32×32 square, `position: relative` (so `<NotificationBadge/>` can nest inside), hover/active uses `action.secondary`. Default horizontal variant unchanged.
- **NotificationBadge** — new component. Absolutely-positioned overlay pill (14 × 14 min, `status.error` background, 2 px `bg.subtle` halo). Props: `count`, `max` (default 99), `showZero`, `aria-label` (default `"${count} new"`). Hidden when `count === 0` unless `showZero` is set. Category: Feedback.

Non-breaking.
