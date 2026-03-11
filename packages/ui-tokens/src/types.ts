// ---------------------------------------------------------------------------
// Token Types — Framework-agnostic, pure TypeScript
// ---------------------------------------------------------------------------

/**
 * RGB color components (0-255)
 */
export interface RgbComponents {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

/**
 * HSL color components
 */
export interface HslComponents {
  readonly h: number;
  readonly s: number;
  readonly l: number;
}

/**
 * A color token with rich conversion methods.
 *
 * @example
 * ```ts
 * import { semantic } from '@billabex/ui-tokens'
 *
 * semantic.bg.default.hex        // '#ffffff'
 * semantic.bg.default.rgb        // { r: 255, g: 255, b: 255 }
 * semantic.bg.default.rgba(0.5)  // 'rgba(255, 255, 255, 0.5)'
 * semantic.bg.default.hsl        // { h: 0, s: 0, l: 100 }
 * `${semantic.bg.default}`       // '#ffffff' (via toString)
 * ```
 */
export interface ColorToken {
  /** Hex string (e.g. '#1c1917') */
  readonly hex: string;
  /** RGB components (0-255) */
  readonly rgb: RgbComponents;
  /** HSL components (h: 0-360, s: 0-100, l: 0-100) */
  readonly hsl: HslComponents;
  /** Returns `rgba(r, g, b, alpha)` string */
  rgba(alpha: number): string;
  /** Returns `hsla(h, s%, l%, alpha)` string */
  hsla(alpha: number): string;
  /** Returns hex when coerced to string */
  toString(): string;
}

/**
 * A dimension token (spacing, sizing, border-width...).
 *
 * @example
 * ```ts
 * import { primitive } from '@billabex/ui-tokens'
 *
 * primitive.spacing.md.value   // 8
 * primitive.spacing.md.px      // '8px'
 * primitive.spacing.md.rem     // '0.5rem'
 * `${primitive.spacing.md}`    // '8px' (via toString)
 * ```
 */
export interface DimensionToken {
  /** Raw numeric value (in pixels) */
  readonly value: number;
  /** Pixel string (e.g. '8px') */
  readonly px: string;
  /** Rem string based on 16px root (e.g. '0.5rem') */
  readonly rem: string;
  /** Returns px string when coerced to string */
  toString(): string;
}

/**
 * A typography token representing a complete text style.
 */
export interface TypographyToken {
  readonly fontFamily: string;
  readonly fontWeight: number;
  readonly fontSize: DimensionToken;
  readonly lineHeight: DimensionToken;
  readonly letterSpacing: DimensionToken;
}

/**
 * A shadow token representing a box-shadow.
 *
 * @example
 * ```ts
 * primitive.shadow.sm.css  // '0px 2px 8px 0px rgba(28, 28, 26, 0.08)'
 * ```
 */
export interface ShadowToken {
  readonly offsetX: number;
  readonly offsetY: number;
  readonly blur: number;
  readonly spread: number;
  readonly color: ColorToken;
  /** Full CSS box-shadow string */
  readonly css: string;
  /** Returns CSS string when coerced to string */
  toString(): string;
}

/**
 * A radius token (border-radius).
 */
export interface RadiusToken extends DimensionToken {}

// ---------------------------------------------------------------------------
// Token collection types — for structuring the token hierarchy
// ---------------------------------------------------------------------------

/** A record of named tokens of a given type */
export type TokenScale<T> = Readonly<Record<string, T>>;

/** Nested token group (allows grouping like colors.neutral.100) */
export interface TokenGroup<T> {
  readonly [key: string]: T | TokenGroup<T>;
}
