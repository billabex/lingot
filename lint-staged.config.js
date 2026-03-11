export default {
  // ui-tokens: type-check + unit tests on affected package
  "packages/ui-tokens/src/**/*.ts": () => [
    "pnpm --filter @billabex/ui-tokens lint",
    "pnpm --filter @billabex/ui-tokens test",
  ],
  // ui-components: type-check + unit tests on affected package
  "packages/ui-components/src/**/*.{ts,tsx}": () => [
    "pnpm --filter @billabex/ui-components lint",
    "pnpm --filter @billabex/ui-components test",
  ],
};
