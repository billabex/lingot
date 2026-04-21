import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { StatusDot } from "./index";

afterEach(cleanup);

describe("StatusDot", () => {
  it("renders a span by default (decorative)", () => {
    const { container } = render(<StatusDot data-testid="dot" />);
    const el = container.querySelector("[data-testid=dot]") as HTMLElement;
    expect(el.tagName).toBe("SPAN");
    expect(el.getAttribute("aria-hidden")).toBe("true");
  });

  it("applies role=img and aria-label when label is provided", () => {
    render(<StatusDot label="Active" tone="success" />);
    const el = screen.getByRole("img", { name: "Active" });
    expect(el).toBeTruthy();
    expect(el.hasAttribute("aria-hidden")).toBe(false);
  });

  it("accepts all tone variants without error", () => {
    (["neutral", "success", "warning", "danger", "info"] as const).forEach((tone) => {
      const { container } = render(<StatusDot tone={tone} />);
      expect(container.firstChild).toBeTruthy();
      cleanup();
    });
  });

  it("accepts small and medium sizes", () => {
    (["small", "medium"] as const).forEach((size) => {
      const { container } = render(<StatusDot size={size} />);
      expect(container.firstChild).toBeTruthy();
      cleanup();
    });
  });

  it("applies custom className", () => {
    render(<StatusDot className="custom" data-testid="dot" />);
    expect(screen.getByTestId("dot").className).toContain("custom");
  });

  it("forwards HTML attributes", () => {
    render(<StatusDot data-testid="dot" title="hello" />);
    expect(screen.getByTestId("dot").getAttribute("title")).toBe("hello");
  });
});
