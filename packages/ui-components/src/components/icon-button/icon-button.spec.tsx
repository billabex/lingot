import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { IconButton } from "./index";

afterEach(cleanup);

describe("IconButton", () => {
  it("renders the icon", () => {
    render(<IconButton icon={<span data-testid="icon">X</span>} aria-label="Close" />);
    expect(screen.getByTestId("icon")).toBeTruthy();
  });

  it("renders as a button element", () => {
    render(<IconButton icon={<span>X</span>} aria-label="Close" />);
    const el = screen.getByRole("button", { name: "Close" });
    expect(el).toBeTruthy();
    expect(el.tagName).toBe("BUTTON");
  });

  it("applies disabled attribute", () => {
    render(<IconButton icon={<span>X</span>} aria-label="Close" disabled />);
    const el = screen.getByRole("button", { name: "Close" });
    expect(el).toHaveProperty("disabled", true);
  });

  it("applies custom className", () => {
    render(<IconButton icon={<span>X</span>} aria-label="Close" className="custom" />);
    const el = screen.getByRole("button", { name: "Close" });
    expect(el.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(<IconButton icon={<span>X</span>} aria-label="Close" data-testid="btn" />);
    expect(screen.getByTestId("btn")).toBeTruthy();
  });
});
