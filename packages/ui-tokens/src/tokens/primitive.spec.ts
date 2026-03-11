import { describe, it, expect } from "vitest";
import { colors, spacing, radii, shadows, typography } from "./index.js";

describe("primitive tokens", () => {
  it("colors.neutral has expected keys", () => {
    expect(colors.neutral[700].hex).toBe("#1c1917");
    expect(colors.neutral[200].hex).toBe("#f5f0eb");
    expect(colors.solid.white.hex).toBe("#ffffff");
  });

  it("spacing has correct values", () => {
    expect(spacing.xs.value).toBe(4);
    expect(spacing.md.value).toBe(8);
    expect(spacing.xl.value).toBe(16);
    expect(spacing["2xl"].value).toBe(24);
  });

  it("radii has expected scale", () => {
    expect(radii.none.value).toBe(0);
    expect(radii.sm.value).toBe(8);
    expect(radii.full.value).toBe(9999);
  });

  it("shadows have CSS strings", () => {
    expect(shadows.sm.css).toBeTruthy();
    expect(shadows.md.css).toBeTruthy();
    expect(shadows.lg.css).toBeTruthy();
  });

  it("typography has correct structure", () => {
    expect(typography.body.fontFamily).toBe("Nunito, sans-serif");
    expect(typography.body.fontWeight).toBe(400);
    expect(typography.body.fontSize.value).toBe(14);
    expect(typography.display.fontSize.value).toBe(32);
  });
});

describe("immutability", () => {
  it("color tokens are frozen", () => {
    expect(() => {
      // @ts-expect-error — testing runtime immutability
      colors.solid.white.hex = "#000000";
    }).toThrow();
  });

  it("dimension tokens are frozen", () => {
    expect(() => {
      // @ts-expect-error — testing runtime immutability
      spacing.md.value = 999;
    }).toThrow();
  });
});
