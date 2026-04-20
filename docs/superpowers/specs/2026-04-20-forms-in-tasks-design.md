# Forms in tasks — design spec

**Date:** 2026-04-20
**Branch:** `gillou/design-system-update`
**Template touched:** `packages/ui-components/src/templates/task-view.stories.tsx`
**New DS components:** none

## 1. Context

Today, the `task-view` template assumes a single task shape: agent posts a message, user replies in free text via `MessageComposer`. Production Billabex has at least three task types where the user's reply mode differs:

| Task type | User's reply mode |
|---|---|
| `NeedUserInput` | free-text (current behavior) |
| `NeedContacts` | structured contact form (Nom, Email, Langue) |
| `ApproveEligibility` | binary action (Refuser / Autoriser) |

We need to surface the latter two as Storybook variants of the same `task-view` template — to lock the visual language before the production app picks them up.

## 2. Goal

Add `NeedContacts` and `ApproveEligibility` variants to `task-view.stories.tsx` while keeping the layout, the tabs, and the right context panel **structurally identical** across all task types. Only the bottom slot and the first bubble's content vary.

## 3. Out of scope

- New DS components.
- Routing / state-management plumbing.
- Resolved / post-submit story states (deferable; can be added later).
- Forms inside other templates (this spec is specific to `task-view`).

## 4. Layout changes

| Region | Today | Proposed |
|---|---|---|
| `PanelHeader` | `Title` + status `Badge` + `Spacer` + `Annuler la tâche` ghost `Button` | **unchanged** |
| `detailSummaryBlock` (account meta line + body paragraph between header and tabs) | present | **removed** — content folds into the first agent bubble |
| `Tabs` (Échanges \| Communications) | present | **unchanged** |
| Discussion area (Échanges) | bubble thread | bubble thread; **first bubble enriched** (see §5) |
| Bottom slot | `MessageComposer` always | polymorphic per task type (see §6) |
| Right context panel | full content (account / invoices / contacts) | **unchanged** for all task types — except for `NeedContacts`, the Contacts section renders empty |

The current `detailSummaryBlock` styling helper becomes dead code and is removed alongside its inline `textMeta` / `textDescription` references — those move into the first bubble's body.

## 5. First bubble — the "task brief"

The first agent bubble for every task variant carries the metadata that previously lived in `detailSummaryBlock`:

```tsx
<BubbleGroup side="agent" author={agentName} date={timestamp}>
  <Bubble>
    <ChipGroup>
      <Chip variant="static">{accountName}</Chip>
    </ChipGroup>
    {bodyText}
  </Bubble>
</BubbleGroup>
```

- `author` + `date` use existing `BubbleGroup` props (no API change).
- The account name is rendered as `<Chip variant="static">` above the body. This is the only "summary" element inside the bubble — Statut already lives in `PanelHeader`'s `Badge`; account is the missing piece.
- `Body` is the existing paragraph, no Markdown changes required.

No changes to `Bubble`, `BubbleGroup`, or `Chip` — pure composition.

## 6. Bottom slot — variants

| Task type | Slot content | Lifecycle |
|---|---|---|
| `NeedUserInput` | `MessageComposer` | always visible; **disabled** when task is closed/cancelled |
| `NeedContacts` | `FormField` × 3 (`Nom complet` `Input`, `Email` `Input`, `Langue` `SelectMenu`) + primary `Button` (`Ajouter le contact`) | hidden after submit; submission renders as a user-side `Bubble` (e.g. "Contact ajouté: Jane Doe — jane@…fr"), agent ack is the next agent-side `Bubble`. Slot stays empty thereafter. |
| `ApproveEligibility` | row of two `Button`s — `Refuser l'accès` (`variant="secondary"`) + `Autoriser l'accès` (`variant="primary"`) | hidden after click; choice renders as a user-side `Bubble`, agent ack follows. Slot stays empty thereafter. |

The slot's parent (`detailComposerBlock`) keeps its current padding tokens; only its child swaps.

## 7. Stories — `task-view.stories.tsx` (6 total)

| Story | Tab | Bottom slot | Notes |
|---|---|---|---|
| `NeedUserInput` | Échanges | `MessageComposer` (active) | renamed from `Default`. Existing discussion data preserved. |
| `NeedUserInputCommunications` | Comms | — | renamed from `WithCommunicationsTab`. |
| `NeedContacts` | Échanges | Form (initial state) | new task fixture: `Ajouter un nouveau contact pour OPCOMMERCE`. |
| `NeedContactsCommunications` | Comms | — | empty-state comm log (no email = no comms history). |
| `ApproveEligibility` | Échanges | Action bar (initial state) | new task fixture: `Autoriser l'accès de Maréva Yem aux informations du compte`. |
| `ApproveEligibilityCommunications` | Comms | — | comm log shows the inbound message that triggered the task. |

Stories share the same `TaskViewTemplate` component; the variant is selected via a single `taskType: "NeedUserInput" | "NeedContacts" | "ApproveEligibility"` story arg, alongside the existing `activeTab` arg.

## 8. Right context panel behavior

| Task type | Account | Invoices | Contacts |
|---|---|---|---|
| `NeedUserInput` | populated | populated | populated |
| `NeedContacts` | populated | populated | **empty state** (no contact yet — that's the task) |
| `ApproveEligibility` | populated | populated | populated |

The empty Contacts state for `NeedContacts` reuses the existing pattern in the right panel (no new component needed); copy: "Aucun contact" with subdued styling.

## 9. DS component impact

Inventory of every DS primitive touched by the new variants — all already ship:

- `Bubble`, `BubbleGroup`, `BubbleAttachment`, `BubbleAttachmentGroup`
- `Chip`, `ChipGroup` (`variant="static"`)
- `FormField`, `Input`, `SelectMenu`
- `Button` (`primary` and `secondary`)
- `MessageComposer` (gains a `disabled` prop usage — verify the prop already exists; if not, this is the **only** required DS change)

**Action item before implementation:** verify `MessageComposer` exposes a `disabled` prop. If it doesn't, add it (boolean, disables the textarea + send button + dims via opacity token). This is the sole DS-level addition.

## 10. Why this design

- **Single template shape across all task types** keeps the user's mental model stable and minimizes cognitive switching cost between tasks.
- **First bubble carries the brief** — eliminates the "summary above thread + agent bubble below" duplication; everything the agent says (initial brief or follow-up) lives in the same surface.
- **Polymorphic bottom slot** matches the production semantics: the user's reply *is* the response surface, whether it's a textarea, a form, or a button row.
- **No new DS components** — proves the existing primitives cover three meaningfully different interaction shapes, which is a useful sanity check on the system.

## 11. Validation criteria

- All 6 stories render without console errors.
- Visual QA via chrome-devtools on at least `NeedContacts` and `ApproveEligibility` Échanges stories (confirm chip + bubble layout, form spacing, action-bar alignment).
- Typecheck + lint clean.
- The right context panel's empty Contacts state for `NeedContacts` reads as intentional (not broken).

## 12. Open follow-ups (not in this spec)

- Resolved / post-submit stories (`NeedContactsResolved`, `ApproveEligibilityResolved`) — defer; the bubble pattern is well-known.
- Production wiring of `taskType` discriminator into the real Billabex routing layer — tracked separately.
