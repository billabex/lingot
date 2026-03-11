// ---------------------------------------------------------------------------
// Semantic Tokens — purposeful aliases referencing primitives
// These give meaning to raw values: "what is this color FOR?"
// ---------------------------------------------------------------------------

import type { ColorToken } from "../types.js";
import { colors } from "./primitive.js";

// ---------------------------------------------------------------------------
// Background colors
// ---------------------------------------------------------------------------

export const bg = {
  /** Default page / card background */
  default: colors.solid.white,
  /** Subtle background for secondary surfaces */
  subtle: colors.neutral[100],
  /** Muted background for tertiary surfaces, hover states */
  muted: colors.neutral[200],
  /** Inverse background (dark) */
  inverse: colors.neutral[700],
  /** Brand-tinted background */
  brand: colors.blue[50],
  /** Accent background (warm) */
  accent: colors.terracotta[300],
} as const satisfies Record<string, ColorToken>;

// ---------------------------------------------------------------------------
// Text colors
// ---------------------------------------------------------------------------

export const text = {
  /** Primary text — headings, body */
  primary: colors.neutral[700],
  /** Secondary text — descriptions, labels */
  secondary: colors.neutral[500],
  /** Tertiary text — placeholders, disabled */
  tertiary: colors.neutral[400],
  /** Text on inverse/dark backgrounds */
  inverse: colors.solid.white,
  /** Link text */
  link: colors.terracotta[400],
  /** Link hover text */
  linkHover: colors.terracotta[500],
} as const satisfies Record<string, ColorToken>;

// ---------------------------------------------------------------------------
// Action colors (buttons, interactive elements)
// ---------------------------------------------------------------------------

export const action = {
  /** Primary action background */
  primary: colors.neutral[700],
  /** Primary action hover */
  primaryHover: colors.neutral[600],
  /** Primary action pressed */
  primaryPressed: colors.neutral[500],
  /** Secondary action background */
  secondary: colors.neutral[200],
  /** Secondary action hover */
  secondaryHover: colors.neutral[300],
  /** Destructive action */
  destructive: colors.red[600],
} as const satisfies Record<string, ColorToken>;

// ---------------------------------------------------------------------------
// Status colors
// ---------------------------------------------------------------------------

export const status = {
  success: colors.green[600],
  successSubtle: colors.green[50],
  warning: colors.orange[500],
  warningSubtle: colors.orange[50],
  error: colors.red[600],
  errorSubtle: colors.red[50],
  info: colors.blue[700],
  infoSubtle: colors.blue[50],
} as const satisfies Record<string, ColorToken>;

// ---------------------------------------------------------------------------
// Border colors
// ---------------------------------------------------------------------------

export const border = {
  /** Default border */
  default: colors.neutral[300],
  /** Subtle border */
  subtle: colors.neutral[200],
  /** Focused / active border */
  focus: colors.neutral[700],
  /** Error border */
  error: colors.red[600],
} as const satisfies Record<string, ColorToken>;
