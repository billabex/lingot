import { defineConfig } from "@pandacss/dev";
import { billabexPreset } from "@billabex/ui-preset";

export default defineConfig({
  preflight: true,
  presets: [billabexPreset],

  // Where to look for CSS usage
  include: ["./src/**/*.{ts,tsx}"],

  // Output directory for generated style utilities
  outdir: "styled-system",

  // Use JSX patterns
  jsxFramework: "react",

  // Emit only what's used
  optimize: true,

  // Minify for production
  minify: true,
});
