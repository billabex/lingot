import { describe, it, expect } from "vitest";
import { color, dimension, shadow } from "./utils.js";

describe("color()", () => {
  const c = color("#1c1917");

  it("stores hex", () => {
    expect(c.hex).toBe("#1c1917");
  });

  it("parses RGB components", () => {
    expect(c.rgb).toEqual({ r: 28, g: 25, b: 23 });
  });

  it("computes HSL", () => {
    expect(c.hsl.h).toBeGreaterThanOrEqual(0);
    expect(c.hsl.s).toBeGreaterThanOrEqual(0);
    expect(c.hsl.l).toBeGreaterThanOrEqual(0);
  });

  it("generates rgba() string", () => {
    expect(c.rgba(0.5)).toBe("rgba(28, 25, 23, 0.5)");
  });

  it("generates hsla() string", () => {
    const hsla = c.hsla(0.8);
    expect(hsla).toMatch(/^hsla\(\d+, \d+%, \d+%, 0\.8\)$/);
  });

  it("toString returns hex", () => {
    expect(`${c}`).toBe("#1c1917");
    expect(c.toString()).toBe("#1c1917");
  });

  it("handles white correctly", () => {
    const white = color("#ffffff");
    expect(white.rgb).toEqual({ r: 255, g: 255, b: 255 });
    expect(white.hsl).toEqual({ h: 0, s: 0, l: 100 });
  });
});

describe("dimension()", () => {
  const d = dimension(8);

  it("stores value", () => {
    expect(d.value).toBe(8);
  });

  it("generates px string", () => {
    expect(d.px).toBe("8px");
  });

  it("generates rem string", () => {
    expect(d.rem).toBe("0.5rem");
  });

  it("toString returns px", () => {
    expect(`${d}`).toBe("8px");
  });
});

describe("shadow()", () => {
  const s = shadow(0, 2, 8, 0, "#1C1C1A14");

  it("stores properties", () => {
    expect(s.offsetX).toBe(0);
    expect(s.offsetY).toBe(2);
    expect(s.blur).toBe(8);
    expect(s.spread).toBe(0);
  });

  it("generates CSS string", () => {
    expect(s.css).toMatch(/^0px 2px 8px 0px rgba\(28, 28, 26, 0\.0[78]\d*\)$/);
  });

  it("toString returns CSS", () => {
    expect(s.toString()).toBe(s.css);
  });
});
