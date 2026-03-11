# Contributing to Lingot

## Development Workflow

```
┌─────────┐     ┌───────────┐     ┌──────────┐     ┌─────────┐
│  Code   │────>│  Commit   │────>│  PR to   │────>│  Merge  │
│         │     │           │     │  main    │     │  main   │
└─────────┘     └───────────┘     └──────────┘     └─────────┘
                     │                 │                 │
              ┌──────┴──────┐   ┌──────┴──────┐   ┌─────┴──────┐
              │ pre-commit  │   │    CI       │   │  Release   │
              │ lint-staged │   │ build+test  │   │ changesets │
              │ + commitlint│   │ + changeset │   │ → npm      │
              └─────────────┘   └─────────────┘   └────────────┘
```

## Conventions

- **ESM only** — all packages use `"type": "module"`
- **Tests**: colocated next to source files as `*.spec.ts` / `*.spec.tsx`
- **Stories**: colocated next to components as `*.stories.tsx`
- **Commits**: [Conventional Commits](https://www.conventionalcommits.org/) enforced via commitlint + husky
- **Pre-commit**: lint-staged runs type-check + tests on affected packages only

### Build Order

Build order matters because `ui-preset` depends on `ui-tokens`, and `ui-components` uses `ui-preset` for local Panda code generation:

```
ui-tokens (vite build) → ui-preset (vite build) → ui-components (panda codegen → vite build) → docs (storybook build)
```

`pnpm build` handles this automatically via workspace dependency resolution.

## At Commit Time (git hooks)

Two hooks run automatically via [husky](https://typicode.github.io/husky/):

### `pre-commit` — lint-staged

Runs **only on the packages you changed** (not the entire repo):

- **Type-check** (`tsc --noEmit`) — catches type errors before they reach CI
- **Unit tests** (`vitest run`) — runs the full test suite of the affected package

Configuration: [`lint-staged.config.js`](./lint-staged.config.js)

### `commit-msg` — commitlint

Validates your commit message follows [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description
```

**Types**: `feat` `fix` `docs` `style` `refactor` `perf` `test` `build` `ci` `chore` `revert`

**Scopes**: `ui-tokens` `ui-preset` `ui-components` `docs` `repo` `ci` `deps`

Examples:

```bash
feat(ui-tokens): add gold color scale to primitives
fix(ui-components): correct button disabled state opacity
feat(ui-preset): add desktop condition aliases
docs(repo): update contributing guidelines
```

Invalid messages are **rejected** — the commit will not go through.

## On Pull Request (CI)

When you open a PR targeting `main`, GitHub Actions (`.github/workflows/ci.yml`) runs:

| Step | Command | Purpose |
|------|---------|---------|
| Install | `pnpm install` | Install all dependencies |
| Build | `pnpm build` | Build ui-tokens → ui-preset → ui-components → docs |
| Test | `pnpm test` | Run **all** tests across all packages |
| tokens.json | `build:figma` + `git diff` | Verify tokens.json is up to date |
| Changeset | `pnpm changeset status` | Verify a changeset exists for unreleased changes |

All steps must pass for the PR to be mergeable.

> **Changeset requirement**: If your PR modifies package source code, you must include a changeset. The CI will fail if one is missing.

## Release Process

When something is merged to `main`, GitHub Actions (`.github/workflows/release.yml`) starts [`changesets/action`](https://github.com/changesets/changesets/blob/main/packages/action/README.md). The action checks the repo state and chooses one of two paths:

### Path A — changesets present

Feature/fix PRs were merged with unreleased `.changeset/*.md` files. The action:

1. **Does not publish** packages
2. Opens or updates the **Version Packages** PR
3. Bumps `package.json` versions, updates `CHANGELOG.md`, removes consumed changesets

### Path B — no changesets left

The **Version Packages** PR was merged. The action runs `pnpm release` (`pnpm build && changeset publish`), publishing to npm.

### Practical flow

```
Feature PR with .changeset merged to main
  → changesets/action opens/updates "Version Packages" PR
  → no publish yet

"Version Packages" PR merged to main
  → changesets/action runs pnpm release
  → packages published to npm
      ├── @billabex/ui-tokens@x.y.z
      ├── @billabex/ui-preset@x.y.z
      └── @billabex/ui-components@x.y.z
```

> **Note**: The workflow runs on every push to `main`, but only publishes when no changesets remain. The guard is `changesets/action`, not `pnpm release`.

### Adding a Changeset

```bash
pnpm changeset
```

The CLI asks: which packages changed, semver bump type (`patch`/`minor`/`major`), and a summary for the CHANGELOG.

```bash
# Example
pnpm changeset
# → Select @billabex/ui-tokens
# → minor
# → "Add terracotta color scale to primitive tokens"

git add .changeset/
git commit -m "chore(ui-tokens): add changeset for terracotta tokens"
```

> The published packages are [linked](https://github.com/changesets/changesets/blob/main/docs/linked-packages.md) — they always release with the same version number.

## npm Publishing

Packages are published using [trusted publishers (OIDC)](https://docs.npmjs.com/trusted-publishers) — no long-lived npm token needed.

### Trusted publisher setup (one-time, per package)

On [npmjs.com](https://www.npmjs.com), go to each package → **Settings** → **Trusted Publisher** → **GitHub Actions**:

| Field | Value |
|-------|-------|
| Organization or user | `billabex` |
| Repository | `lingot` |
| Workflow filename | `release.yml` |

Once configured, `changeset publish` authenticates via short-lived OIDC tokens and provenance attestations are generated automatically.

### Required secrets / variables

| Name | Type | Purpose |
|------|------|---------|
| `BILLABEX_DEVOPS_APP_ID` | Variable | GitHub App ID — generates tokens for creating release PRs |
| `BILLABEX_DEVOPS_PRIVATE_KEY` | Secret | GitHub App private key |
| `CHROMATIC_PROJECT_TOKEN` | Secret | Chromatic project token for Storybook publishing |

> `NPM_TOKEN` is **not** needed — publishing uses OIDC trusted publishers. The release workflow has `id-token: write` permission, which allows npm to authenticate automatically.

The release workflow uses a [GitHub App](https://docs.github.com/en/apps) instead of the default `GITHUB_TOKEN` so that commits and PRs created by `changesets/action` come from a proper bot identity and can trigger other workflows.

## Figma Token Studio Sync

Tokens are exported to `packages/ui-tokens/tokens.json` in [W3C DTCG](https://design-tokens.github.io/community-group/format/) format, compatible with [Figma Token Studio](https://tokens.studio/) (free version — single-file git sync).

Semantic tokens use **references** to primitives (e.g. `{global.color.neutral.700}` instead of `#1c1917`), so changes to the primitive palette automatically propagate.

### Token sets

- **global** — primitive values (colors, spacing, radii, shadows, typography)
- **semantic** — aliases that reference global tokens via `{global.color.*}` syntax

### Setup in Token Studio (free version)

1. Install the [Tokens Studio](https://tokens.studio/) Figma plugin
2. Plugin → **Settings** → **Sync providers** → **GitHub**
3. Configure:
   - **Repository**: `billabex/lingot`
   - **Branch**: `main`
   - **File path**: `packages/ui-tokens/tokens.json`
   - **Personal access token**: a GitHub PAT with `repo` scope
4. Click **Save** — you should see `global` and `semantic` sets

### Code → Figma

```bash
# Edit tokens in src/tokens/, then:
pnpm --filter @billabex/ui-tokens build:figma
git add packages/ui-tokens/tokens.json
git commit -m "chore(ui-tokens): regenerate tokens.json"
```

CI verifies `tokens.json` is up to date on every PR.

### Figma → Code

1. Token Studio pushes a commit/PR to the repo
2. Review `tokens.json` changes
3. Update corresponding TypeScript files in `src/tokens/`
4. Run `build:figma` to verify the round-trip is clean
5. Run `pnpm test`

## Chromatic (Visual Testing & Storybook Hosting)

Storybook is published to [Chromatic](https://www.chromatic.com/) on every push to `main` and on PRs.

### First-time setup

1. Create a project on [chromatic.com](https://www.chromatic.com/) linked to `billabex/lingot`
2. Copy the **Project Token** from Manage → Configure
3. Add it as `CHROMATIC_PROJECT_TOKEN` in GitHub repo Settings → Secrets → Actions
4. Replace `<your-chromatic-app-id>` in the Storybook link in the README with your Chromatic app ID

After that, every push will publish a new Storybook build and run visual regression tests.
