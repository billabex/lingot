import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Avatar } from "./index";

afterEach(cleanup);

describe("Avatar", () => {
  it("renders initials", () => {
    render(<Avatar initials="JS" label="Jaime Sánchez" />);
    expect(screen.getByText("JS")).toBeTruthy();
  });

  it("prefers initials over icon", () => {
    render(<Avatar initials="JS" icon={<svg data-testid="icon" />} />);
    expect(screen.queryByTestId("icon")).toBeNull();
  });

  it("falls back to icon when no initials", () => {
    render(<Avatar icon={<svg data-testid="icon" />} label="Unknown" />);
    expect(screen.getByTestId("icon")).toBeTruthy();
  });

  it("sets role=img and aria-label when label provided", () => {
    render(<Avatar initials="JS" label="Jaime Sánchez" />);
    expect(screen.getByRole("img", { name: "Jaime Sánchez" })).toBeTruthy();
  });

  it("is aria-hidden when no label is provided", () => {
    const { container } = render(<Avatar initials="JS" data-testid="av" />);
    expect(container.querySelector("[data-testid=av]")?.getAttribute("aria-hidden")).toBe("true");
  });

  it("accepts all sizes", () => {
    (["small", "medium", "large"] as const).forEach((size) => {
      const { container } = render(<Avatar size={size} initials="JS" />);
      expect(container.firstChild).toBeTruthy();
      cleanup();
    });
  });

  it("applies custom className", () => {
    render(<Avatar initials="JS" className="custom" data-testid="av" />);
    expect(screen.getByTestId("av").className).toContain("custom");
  });
});
