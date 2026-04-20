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

Add `NeedContacts` and `ApproveEligibility` variants to `task-view.stories.tsx` while keeping the layout, the tabs, and the right context panel **structurally identical** across all task types. Only the bottom slot and the per-task brief content (which lives as the first agent bubble's body) vary.

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
| Discussion area (Échanges) | bubble thread | bubble thread; first bubble carries the agent's task brief (see §5) |
| Bottom slot | `MessageComposer` always | polymorphic per task type (see §6) |
| Right context panel | full content (account / invoices / contacts) | **unchanged** for all task types — except for `NeedContacts`, the Contacts section renders empty |

The current `detailSummaryBlock` styling helper becomes dead code and is removed alongside its inline `textMeta` / `textDescription` references — those move into the first bubble's body.

## 5. First bubble — the "task brief"

The first agent bubble for every task variant carries the brief that previously lived in `detailSummaryBlock` — rendered as a regular `Bubble` with no enrichment:

```tsx
<BubbleGroup side="agent" author={agentName} date={timestamp}>
  <Bubble>{briefText}</Bubble>
</BubbleGroup>
```

- `author` + `date` use existing `BubbleGroup` props (no API change).
- Account context is **deliberately not** repeated inside the bubble — the account name is already visible in the tasks list (left panel) and in the right context panel header. Adding a chip in the bubble would be triple-rendered metadata.
- Status is already in `PanelHeader`'s `Badge`.
- The bubble loop stays uniform — no `i === 0` special case.

No changes to `Bubble` or `BubbleGroup` — pure composition.

## 6. Bottom slot — variants

| Task type | Slot content | Lifecycle |
|---|---|---|
| `NeedUserInput` | `MessageComposer` | always visible; **disabled** when task is closed/cancelled |
| `NeedContacts` | `FormField` × 3 (`Nom complet` `Input`, `Email` `Input`, `Langue` `SelectMenu`) + primary `Button` (`Ajouter le contact`) | spec describes the lifecycle for production reference; in this sprint **only the initial state is staged** (per §3 — post-submit stories deferred). Future: hidden after submit; submission renders as a user-side `Bubble` ("Contact ajouté: Jane Doe — jane@…fr"), agent ack is the next agent-side `Bubble`. Slot stays empty thereafter. |
| `ApproveEligibility` | row of two `Button`s — `Refuser l'accès` (`variant="secondary"`) on the left, `Autoriser l'accès` (`variant="primary"`) on the right (primary-action-right matches the `account-create-view` and `connection-create-view` wizard footers — same Lingot convention) | spec describes the lifecycle for production reference; in this sprint **only the initial state is staged** (per §3). Future: hidden after click; choice renders as a user-side `Bubble`, agent ack follows. Slot stays empty thereafter. |

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

Stories share the same `TaskViewTemplate` component; the variant is selected via a single `taskType: "NeedUserInput" | "NeedContacts" | "ApproveEligibility"` story arg, alongside the existing `activeTab` arg. **6 discrete stories** (not arg-driven toggles in the Storybook controls) — matches the existing convention of pre-baked snapshot stories per UX state in this repo (e.g. `settings-view`'s `Members` + `MembersInviteModalOpen`, `accounts-view`'s `Default` + selection variants).

## 8. Right context panel behavior

| Task type | Account | Invoices | Contacts |
|---|---|---|---|
| `NeedUserInput` | populated | populated | populated |
| `NeedContacts` | populated | populated | **empty state** (no contact yet — that's the task) |
| `ApproveEligibility` | populated | populated | populated |

The empty Contacts state for `NeedContacts` is a single muted text line — no DS component exists for this. Render as a `<div>` with the existing `textListMetaDate` (or equivalent `text.tertiary` `body.sm`) helper class already in `task-view.stories.tsx`. Copy: `Aucun contact`.

## 9. DS component impact

Inventory of every DS primitive touched by the new variants — all already ship:

- `Bubble`, `BubbleGroup`, `BubbleAttachment`, `BubbleAttachmentGroup`
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
