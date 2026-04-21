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
    expect(spacing["5xl"].value).toBe(64);
    expect(spacing["6xl"].value).toBe(80);
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
    expect(typography.body.fontFamily).toBe("Outfit, sans-serif");
    expect(typography.body.fontWeight).toBe(400);
    expect(typography.body.fontSize.value).toBe(14);
    expect(typography.display.fontSize.value).toBe(32);
  });

  it("typography covers the full scale", () => {
    expect(typography.headlineMd.fontSize.value).toBe(18);
    expect(typography.headlineMd.fontWeight).toBe(600);
    expect(typography.headlineSm.fontWeight).toBe(500);
    expect(typography.captionSoft.fontWeight).toBe(400);
    expect(typography.captionXs.fontSize.value).toBe(11);
    expect(typography.micro.fontSize.value).toBe(10);
    expect(typography.micro.fontWeight).toBe(500);
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
