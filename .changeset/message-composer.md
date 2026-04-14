---
"@billabex/ui-components": minor
---

feat(ui-components): add MessageComposer

Textarea with attach + send toolbar. Auto-grows between 32px and 160px. `Cmd/Ctrl+Enter` submits. Supports controlled (`value` / `onChange`) and uncontrolled usage.

```tsx
<MessageComposer
  placeholder="Écrire un message..."
  onSend={(text) => sendReply(text)}
  onAttach={() => openFilePicker()}
/>
```

Also fixes TabItem spacing + weight to match the prototype (`pt: md / pb: lg / px: xl`, `fontWeight: medium`, idle color `text.tertiary`).
