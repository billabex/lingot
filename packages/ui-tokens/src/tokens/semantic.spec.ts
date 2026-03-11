import { describe, it, expect } from "vitest";
import { bg, text, action, status, border } from "./semantic.js";

describe("semantic tokens", () => {
  it("bg tokens reference primitives correctly", () => {
    expect(bg.default.hex).toBe("#ffffff");
    expect(bg.inverse.hex).toBe("#1c1917");
    expect(bg.muted.hex).toBe("#f5f0eb");
  });

  it("text tokens reference primitives correctly", () => {
    expect(text.primary.hex).toBe("#1c1917");
    expect(text.secondary.hex).toBe("#534840");
    expect(text.inverse.hex).toBe("#ffffff");
  });

  it("action tokens reference primitives correctly", () => {
    expect(action.primary.hex).toBe("#1c1917");
    expect(action.destructive.hex).toBe("#d92d20");
  });

  it("status tokens have both strong and subtle variants", () => {
    expect(status.success.hex).toBe("#067647");
    expect(status.successSubtle.hex).toBe("#e3f5eb");
    expect(status.error.hex).toBe("#d92d20");
    expect(status.errorSubtle.hex).toBe("#fde9e7");
  });

  it("border tokens exist", () => {
    expect(border.default.hex).toBe("#e3dbd2");
    expect(border.error.hex).toBe("#d92d20");
  });
});
