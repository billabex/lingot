import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { TabItem } from "./index";

afterEach(cleanup);

describe("TabItem", () => {
  it("renders children", () => {
    render(<TabItem>Overview</TabItem>);
    expect(screen.getByText("Overview")).toBeTruthy();
  });

  it("has tab role", () => {
    render(<TabItem>Overview</TabItem>);
    expect(screen.getByRole("tab")).toBeTruthy();
  });

  it("sets aria-selected when active", () => {
    render(<TabItem active>Overview</TabItem>);
    const el = screen.getByRole("tab");
    expect(el.getAttribute("aria-selected")).toBe("true");
  });

  it("renders as button element", () => {
    render(<TabItem>Overview</TabItem>);
    expect(screen.getByRole("tab").tagName).toBe("BUTTON");
  });

  it("applies custom className", () => {
    render(<TabItem className="custom">Overview</TabItem>);
    expect(screen.getByRole("tab").className).toContain("custom");
  });
});
