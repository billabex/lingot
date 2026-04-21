---
"@billabex/ui-tokens": patch
"@billabex/ui-preset": patch
---

fix(ui-tokens): register missing `spacing.3xs = 2px` primitive

Three existing templates (`onboarding-view`, `connection-create-view`,
`account-create-view`) reference `gap: "3xs"` but the token was never
declared in the primitive scale or mapped via `billabexPreset`, so
Panda emitted `var(--spacing-3xs)` which resolved to nothing — silently
rendering a 0 gap instead of the intended 2px tight rhythm for dense
inline lists (e.g. password-rule checklists, two-line meta rows).

Registers the token as `2px` in both `spacing` and `sizes` maps.
No visual regression elsewhere — prior usages asymptomatically
rendered at 0 and now render at 2 as originally intended.
