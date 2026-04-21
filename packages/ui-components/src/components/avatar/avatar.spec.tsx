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

  it("applies tone as background with white text", () => {
    render(<Avatar initials="SM" tone="#c2727d" data-testid="av" />);
    const el = screen.getByTestId("av");
    expect(el.style.background).toBe("rgb(194, 114, 125)");
    expect(el.style.color).toBe("rgb(255, 255, 255)");
  });

  it("preserves caller-provided style when tone is set", () => {
    render(
      <Avatar initials="SM" tone="#c2727d" style={{ marginLeft: "4px" }} data-testid="av" />,
    );
    const el = screen.getByTestId("av");
    expect(el.style.marginLeft).toBe("4px");
    expect(el.style.background).toBe("rgb(194, 114, 125)");
  });
});
