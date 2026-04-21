---
"@billabex/ui-components": minor
---

feat(ui-components): add Bubble, BubbleGroup, BubbleAttachment

Conversation primitives for the Task and Communications detail views.

- **Bubble** — single chat message. `side="agent"` renders left with `bg.inverse`/`text.inverse`; `side="user"` renders right with `bg.subtle`/`text.primary`.
- **BubbleGroup** — wraps a run of bubbles from the same speaker, renders an `author` + `date` header aligned to the same side, and injects `side` into child `<Bubble>`s (explicit `side` on a child still wins).
- **BubbleAttachment** — inline file chip rendered inside a `<Bubble>`. Renders as an `<a>`; supports a custom `icon`, defaults to a generic file glyph.

RSC-compatible. Storybook category: Data Display.
