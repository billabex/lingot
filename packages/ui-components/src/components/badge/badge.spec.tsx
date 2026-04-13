import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Badge } from "./index";

afterEach(cleanup);

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>Status</Badge>);
    expect(screen.getByText("Status")).toBeTruthy();
  });

  it("renders as a span element", () => {
    render(<Badge>Test</Badge>);
    const el = screen.getByText("Test");
    expect(el.tagName).toBe("SPAN");
  });

  it("applies custom className", () => {
    render(<Badge className="custom">Test</Badge>);
    const el = screen.getByText("Test").closest("span");
    expect(el?.className).toContain("custom");
  });

  it("renders left icon when provided", () => {
    render(<Badge leftIcon={<span data-testid="icon">I</span>}>Info</Badge>);
    expect(screen.getByTestId("icon")).toBeTruthy();
  });

  it("renders right icon when provided", () => {
    render(<Badge rightIcon={<span data-testid="icon">I</span>}>Info</Badge>);
    expect(screen.getByTestId("icon")).toBeTruthy();
  });

  it("forwards additional HTML attributes", () => {
    render(<Badge data-testid="badge">Test</Badge>);
    expect(screen.getByTestId("badge")).toBeTruthy();
  });

  it("applies square shape (radius xs) when shape='square'", () => {
    const { container } = render(<Badge shape="square">30</Badge>);
    expect(container.innerHTML).toContain("bdr_xs");
  });

  it("applies count variant (outlined neutral) styling", () => {
    const { container } = render(
      <Badge variant="count" shape="square">30</Badge>
    );
    expect(container.innerHTML).toContain("bg_bg.subtle");
    expect(container.innerHTML).toContain("c_text.tertiary");
  });
});
