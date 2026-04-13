// ---------------------------------------------------------------------------
// Primitive Tokens — raw design values from Figma
// These are the foundation. Semantic tokens reference these.
// ---------------------------------------------------------------------------

import type {
  ColorToken,
  DimensionToken,
  RadiusToken,
  ShadowToken,
  TypographyToken,
} from "../types.js";
import { color, dimension, shadow } from "../utils.js";

// ---------------------------------------------------------------------------
// Colors — raw palette
// ---------------------------------------------------------------------------

export const colors = {
  /** Pure solids */
  solid: {
    white: color("#ffffff"),
    black: color("#000000"),
  },

  /** Warm neutral palette — the core Billabex tone */
  neutral: {
    50: color("#fdfcfb"),
    100: color("#fcfaf8"),
    200: color("#f5f0eb"),
    300: color("#e3dbd2"),
    400: color("#9c8e82"),
    500: color("#534840"),
    600: color("#3d3530"),
    700: color("#1c1917"),
  },

  /** Gold accent palette */
  gold: {
    100: color("#fef7e6"),
    300: color("#f0d68a"),
    500: color("#d4a853"),
  },

  /** Terracotta / link color */
  terracotta: {
    300: color("#eee3de"),
    400: color("#b5634b"),
    500: color("#9c5340"),
  },

  /** Status colors */
  green: {
    50: color("#e3f5eb"),
    600: color("#067647"),
  },

  orange: {
    50: color("#fff1c6"),
    500: color("#f99307"),
  },

  red: {
    50: color("#fde9e7"),
    600: color("#d92d20"),
  },

  blue: {
    50: color("#e8ecf2"),
    700: color("#1e4a8a"),
  },
} as const satisfies Record<string, Record<string, ColorToken | Record<string, ColorToken>>>;

// ---------------------------------------------------------------------------
// Spacing — pixel-based scale
// ---------------------------------------------------------------------------

export const spacing = {
  /** 4px */
  xs: dimension(4),
  /** 6px */
  sm: dimension(6),
  /** 8px */
  md: dimension(8),
  /** 12px */
  lg: dimension(12),
  /** 16px */
  xl: dimension(16),
  /** 24px */
  "2xl": dimension(24),
  /** 32px */
  "3xl": dimension(32),
  /** 48px */
  "4xl": dimension(48),
  /** 64px */
  "5xl": dimension(64),
} as const satisfies Record<string, DimensionToken>;

// ---------------------------------------------------------------------------
// Spacing — semantic padding presets
// ---------------------------------------------------------------------------

export const padding = {
  card: dimension(16),
  page: dimension(24),
} as const satisfies Record<string, DimensionToken>;

// ---------------------------------------------------------------------------
// Radii
// ---------------------------------------------------------------------------

export const radii = {
  none: dimension(0),
  xs: dimension(4),
  sm: dimension(8),
  md: dimension(12),
  lg: dimension(16),
  full: dimension(9999),
} as const satisfies Record<string, RadiusToken>;

// ---------------------------------------------------------------------------
// Shadows
// ---------------------------------------------------------------------------

export const shadows = {
  sm: shadow(0, 2, 8, 0, "#1C1C1A14"),
  md: shadow(0, 6, 16, -2, "#1C1C1A1A"),
  lg: shadow(0, 12, 28, -6, "#1C1C1A1F"),
} as const satisfies Record<string, ShadowToken>;

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------

const fontFamily = "Outfit, sans-serif";

export const typography = {
  display: {
    fontFamily,
    fontWeight: 600,
    fontSize: dimension(32),
    lineHeight: dimension(40),
    letterSpacing: dimension(0),
  },
  headlineLg: {
    fontFamily,
    fontWeight: 600,
    fontSize: dimension(20),
    lineHeight: dimension(28),
    letterSpacing: dimension(0),
  },
  headlineMd: {
    fontFamily,
    fontWeight: 600,
    fontSize: dimension(18),
    lineHeight: dimension(24),
    letterSpacing: dimension(0),
  },
  headlineSm: {
    fontFamily,
    fontWeight: 500,
    fontSize: dimension(16),
    lineHeight: dimension(24),
    letterSpacing: dimension(0),
  },
  body: {
    fontFamily,
    fontWeight: 400,
    fontSize: dimension(14),
    lineHeight: dimension(20),
    letterSpacing: dimension(0),
  },
  bodySm: {
    fontFamily,
    fontWeight: 400,
    fontSize: dimension(13),
    lineHeight: dimension(18),
    letterSpacing: dimension(0),
  },
  caption: {
    fontFamily,
    fontWeight: 500,
    fontSize: dimension(12),
    lineHeight: dimension(16),
    letterSpacing: dimension(0),
  },
  captionSoft: {
    fontFamily,
    fontWeight: 400,
    fontSize: dimension(12),
    lineHeight: dimension(16),
    letterSpacing: dimension(0),
  },
  captionXs: {
    fontFamily,
    fontWeight: 400,
    fontSize: dimension(11),
    lineHeight: dimension(16),
    letterSpacing: dimension(0),
  },
  micro: {
    fontFamily,
    fontWeight: 500,
    fontSize: dimension(10),
    lineHeight: dimension(14),
    letterSpacing: dimension(0),
  },
} as const satisfies Record<string, TypographyToken>;
