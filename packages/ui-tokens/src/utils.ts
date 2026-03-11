// ---------------------------------------------------------------------------
// Token factory functions — create rich token objects from raw values
// ---------------------------------------------------------------------------

import type {
  ColorToken,
  DimensionToken,
  HslComponents,
  RgbComponents,
  ShadowToken,
} from "./types.js";

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function parseHex(hex: string): RgbComponents {
  const clean = hex.replace("#", "");
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
}

function rgbToHsl(r: number, g: number, b: number): HslComponents {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;

  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;

  if (max === min) {
    return { h: 0, s: 0, l: Math.round(l * 100) };
  }

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

  let h = 0;
  if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6;
  else if (max === gn) h = ((bn - rn) / d + 2) / 6;
  else h = ((rn - gn) / d + 4) / 6;

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function parseHexAlpha(hex: string): number {
  const clean = hex.replace("#", "");
  if (clean.length === 8) {
    return parseInt(clean.slice(6, 8), 16) / 255;
  }
  return 1;
}

// ---------------------------------------------------------------------------
// Public factories
// ---------------------------------------------------------------------------

/**
 * Create a ColorToken from a hex string.
 *
 * @example
 * ```ts
 * const primary = color('#1c1917')
 * primary.hex        // '#1c1917'
 * primary.rgb        // { r: 28, g: 25, b: 23 }
 * primary.rgba(0.5)  // 'rgba(28, 25, 23, 0.5)'
 * ```
 */
export function color(hex: string): ColorToken {
  const { r, g, b } = parseHex(hex);
  const hsl = rgbToHsl(r, g, b);

  return Object.freeze({
    hex,
    rgb: Object.freeze({ r, g, b }),
    hsl: Object.freeze(hsl),
    rgba(alpha: number): string {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    },
    hsla(alpha: number): string {
      return `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${alpha})`;
    },
    toString(): string {
      return hex;
    },
  });
}

/**
 * Create a DimensionToken from a pixel value.
 *
 * @example
 * ```ts
 * const md = dimension(8)
 * md.value  // 8
 * md.px     // '8px'
 * md.rem    // '0.5rem'
 * ```
 */
export function dimension(value: number): DimensionToken {
  return Object.freeze({
    value,
    px: `${value}px`,
    rem: `${value / 16}rem`,
    toString(): string {
      return `${value}px`;
    },
  });
}

/**
 * Create a ShadowToken from individual shadow properties.
 *
 * @example
 * ```ts
 * const sm = shadow(0, 2, 8, 0, '#1C1C1A14')
 * sm.css // '0px 2px 8px 0px rgba(28, 28, 26, 0.08)'
 * ```
 */
export function shadow(
  offsetX: number,
  offsetY: number,
  blur: number,
  spread: number,
  colorHex: string,
): ShadowToken {
  const alpha = parseHexAlpha(colorHex);
  const baseHex = `#${colorHex.replace("#", "").slice(0, 6)}`;
  const colorToken = color(baseHex);
  const { r, g, b } = colorToken.rgb;

  const css = `${offsetX}px ${offsetY}px ${blur}px ${spread}px rgba(${r}, ${g}, ${b}, ${Number(alpha.toFixed(2))})`;

  return Object.freeze({
    offsetX,
    offsetY,
    blur,
    spread,
    color: colorToken,
    css,
    toString(): string {
      return css;
    },
  });
}
