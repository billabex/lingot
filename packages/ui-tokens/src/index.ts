// ---------------------------------------------------------------------------
// @billabex/ui-tokens — Public API
// ---------------------------------------------------------------------------

// Types
export type {
  ColorToken,
  DimensionToken,
  TypographyToken,
  ShadowToken,
  RadiusToken,
  RgbComponents,
  HslComponents,
  TokenScale,
  TokenGroup,
} from "./types.js";

// Factory functions (for extending / creating custom tokens)
export { color, dimension, shadow } from "./utils.js";

// Primitive tokens (raw palette, scales)
export {
  colors,
  spacing,
  padding,
  radii,
  shadows,
  typography,
} from "./tokens/primitive.js";

// Semantic tokens (purposeful aliases)
export { bg, text, action, status, border } from "./tokens/semantic.js";

// Grouped re-export for convenience
export * as primitive from "./tokens/primitive.js";
export * as semantic from "./tokens/semantic.js";
