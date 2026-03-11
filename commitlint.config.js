export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Scope enum — enforce known scopes
    "scope-enum": [
      2,
      "always",
      [
        "ui-tokens",
        "ui-components",
        "ui-preset",
        "docs",
        "repo",
        "ci",
        "deps",
        "release",
      ],
    ],
    "scope-empty": [1, "never"], // warn if no scope
  },
  ignores: [
    // Allow Changesets "Version Packages" commits in CI
    (message) => message.startsWith("Version Packages"),
  ],
};
