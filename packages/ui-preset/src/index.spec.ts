import { describe, expect, it } from "vitest";
import { billabexPreset } from "./index";

describe("billabexPreset", () => {
  it("exposes Billabex semantic color tokens", () => {
    expect(billabexPreset.theme?.semanticTokens?.colors?.["bg.default"]?.value).toBe("#ffffff");
    expect(billabexPreset.theme?.semanticTokens?.colors?.["text.primary"]?.value).toBe("#1c1917");
  });

  it("exposes responsive conditions for Panda consumers", () => {
    expect(billabexPreset.conditions?.extend?.tablet).toBe("@media (min-width: 768px)");
    expect(billabexPreset.conditions?.extend?.desktopXl).toBe("@media (min-width: 1920px)");
  });
});
