import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { BrandLogo } from "./index";

afterEach(cleanup);

describe("BrandLogo", () => {
  it("renders an SVG with Google's viewBox", () => {
    const { container } = render(<BrandLogo name="google" />);
    const svg = container.querySelector("svg")!;
    expect(svg).toBeTruthy();
    expect(svg.getAttribute("viewBox")).toBe("0 0 24 24");
  });

  it("renders an SVG with Microsoft's viewBox", () => {
    const { container } = render(<BrandLogo name="microsoft" />);
    expect(container.querySelector("svg")!.getAttribute("viewBox")).toBe("0 0 23 23");
  });

  it("renders an SVG with Billabex's viewBox", () => {
    const { container } = render(<BrandLogo name="billabex" />);
    expect(container.querySelector("svg")!.getAttribute("viewBox")).toBe("0 0 78 15");
  });

  it("applies the size prop to height", () => {
    const { container } = render(<BrandLogo name="google" size={32} />);
    expect(container.querySelector("svg")!.getAttribute("height")).toBe("32");
  });

  it("forwards aria attributes for standalone use", () => {
    const { container } = render(
      <BrandLogo name="billabex" role="img" aria-label="Billabex" />,
    );
    const svg = container.querySelector("svg")!;
    expect(svg.getAttribute("role")).toBe("img");
    expect(svg.getAttribute("aria-label")).toBe("Billabex");
  });

  it("applies custom className", () => {
    const { container } = render(<BrandLogo name="google" className="custom" />);
    expect(container.querySelector("svg")!.getAttribute("class")).toContain("custom");
  });
});
