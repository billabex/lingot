# Prototype Overview — Billabex Workspace

Source: `/Users/gillou/Projects/billy/explore/workspace-ui/workspace.html` (6175 lines).

## Purpose & domain

**Billabex Workspace** — the agent-operated cockpit for a French-language AR (Accounts Receivable) / dunning product. The application helps finance operators supervise an AI collection agent ("confié à l'agent" vs "suivi en interne") that sends dunning emails, handles customer replies, and tracks aging invoices across many client accounts.

Primary user: finance / credit controller reviewing the agent's queue, escalating edge cases, editing client contacts and invoices, and overseeing communications.

## Top-level navigation (3 views)

Implemented as a single-page app with three mutually exclusive views toggled from a 48-px icon rail:

| View | Icon | Purpose |
|---|---|---|
| `#view-tasks` | check-in-circle | Triage of "Tâches" — things requiring human input |
| `#view-comms` | envelope | Communications workbench — threads, signals, full log |
| `#view-accounts` / `#view-clients` | folders | Client accounts table + account detail + document detail |

The icon rail also contains a company/org button (bottom-anchored dropdown: Paramètres, Inviter un membre, Changer d'organisation, Se déconnecter).

## Layout regions (per view)

```
┌──────┬────────────────────────────────────────────┬─────────────────┐
│ 48px │ MAIN CARD (tasks-main-card / accounts-…)   │ account-sidebar │
│ rail │  ┌────────────┬─────────────────────────┐  │ 300 px (right)  │
│      │  │ list 280-  │ detail (header + body)  │  │ only in tasks + │
│      │  │ 340 px     │                         │  │ account detail  │
│      │  └────────────┴─────────────────────────┘  │                 │
└──────┴────────────────────────────────────────────┴─────────────────┘
```

Shells:
- **Tasks**: `[rail] [task-list 280px | task-detail] [account-sidebar 300px]`
- **Comms**: `[rail] [signals workbench] OR [thread-list 340px | thread-detail]`; full log (table) as third sub-mode
- **Accounts**: `[rail] [accounts-table (full width)]` → click row → `[account-detail | account-sidebar 300px]` → click invoice → full-page document (centered 720 px column)

## Information architecture

- **Task detail** has two tabs: `Tâche` (task narrative + communications log) and `Conversation` (chat between user and agent rendered as bubbles).
- **Account detail** has two tabs: `Communications` and `Facturation`.
- **Communications view** has three sub-modes: signals workbench (reply / planned rows), thread view (list + detail), all-communications table (sortable, expandable rows).
- **Document full page**: breadcrumb + prev/next nav + status cards row + two-column info grid.

## Screen flow

```
tasks list ─► task detail (+ account sidebar) ─► (link) ─► account detail
comms signals ─► thread detail
comms all ─► expand row ─► (link) ─► account detail
accounts table ─► account detail ─► invoice row ─► document full page
```

## Global visual language

- **Density**: high. 28–32 px control heights, 44 px table rows, 48 px headers.
- **Tone**: warm, muted. Neutral palette is explicitly warm-beige (not cool gray). Terracotta is the single accent, used for links and reply-signal borders.
- **Rhythm**: 4/6/8/12/16/24 px spacing scale; 24 px page padding; 16 px card padding.
- **Elevation**: very restrained — shadows only on modals, dropdowns, filter chips, compose bar. Most surfaces rely on 1-px borders (`border.default` / `border.subtle`).
- **Corners**: 4 / 8 / 12 / 16 / 9999. Filter/status pills use `full`; cards and controls use `sm` (8 px); modals use `lg` (16 px).
- **Typography**: single family (**Outfit** in prototype, **Nunito** in Lingot — see token audit), weights 400/500/600. Sizes 10/11/12/13/14/16/18/20. No display type used in the workspace.
- **Language**: French throughout. UPPERCASE + 0.05 em tracking is the consistent micro-label treatment for section titles.

## Notable surprises

1. Prototype font family is **Outfit**, while Lingot primitive is **Nunito**. Either the prototype drifted or Lingot needs to switch — must be resolved.
2. Prototype re-implements a handful of DS components inline (select, modal, checkbox, filter chip) rather than deferring to Lingot — useful as a spec for what the production components must support.
3. Two component families are heavily used but missing from Lingot: **chat bubble** (tasks conversation + comms thread) and **avatar** (contact rows, bubbles).
4. No `toggle`, `stepper`, or `radio` patterns exist in the prototype — candidates for removal.
