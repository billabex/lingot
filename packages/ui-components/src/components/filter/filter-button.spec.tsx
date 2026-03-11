import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { FilterButton } from "./index";

afterEach(cleanup);

describe("FilterButton", () => {
  it("renders children", () => {
    render(<FilterButton>Status</FilterButton>);
    expect(screen.getByText("Status")).toBeTruthy();
  });

  it("renders as a button element", () => {
    render(<FilterButton>Status</FilterButton>);
    const el = screen.getByRole("button", { name: "Status" });
    expect(el.tagName).toBe("BUTTON");
  });

  it("applies custom className", () => {
    render(<FilterButton className="custom">Status</FilterButton>);
    const el = screen.getByRole("button", { name: "Status" });
    expect(el.className).toContain("custom");
  });

  it("renders left icon when provided", () => {
    render(<FilterButton leftIcon={<span data-testid="left">L</span>}>Status</FilterButton>);
    expect(screen.getByTestId("left")).toBeTruthy();
  });

  it("renders right icon when provided", () => {
    render(<FilterButton rightIcon={<span data-testid="right">R</span>}>Status</FilterButton>);
    expect(screen.getByTestId("right")).toBeTruthy();
  });
});
