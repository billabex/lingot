import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { SectionTitle } from "./index";

afterEach(cleanup);

describe("SectionTitle", () => {
  it("renders children", () => {
    render(<SectionTitle>General</SectionTitle>);
    expect(screen.getByText("General")).toBeTruthy();
  });

  it("renders as a button element", () => {
    render(<SectionTitle>General</SectionTitle>);
    const el = screen.getByRole("button", { name: "General" });
    expect(el.tagName).toBe("BUTTON");
  });

  it("sets aria-expanded to false by default", () => {
    render(<SectionTitle>General</SectionTitle>);
    const el = screen.getByRole("button", { name: "General" });
    expect(el.getAttribute("aria-expanded")).toBe("false");
  });

  it("sets aria-expanded to true when expanded", () => {
    render(<SectionTitle expanded>General</SectionTitle>);
    const el = screen.getByRole("button", { name: "General" });
    expect(el.getAttribute("aria-expanded")).toBe("true");
  });

  it("applies custom className", () => {
    render(<SectionTitle className="custom">General</SectionTitle>);
    const el = screen.getByRole("button", { name: "General" });
    expect(el.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(<SectionTitle data-testid="section">General</SectionTitle>);
    expect(screen.getByTestId("section")).toBeTruthy();
  });
});
