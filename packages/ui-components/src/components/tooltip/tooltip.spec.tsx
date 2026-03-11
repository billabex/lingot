import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Tooltip } from "./index";

afterEach(cleanup);

describe("Tooltip", () => {
  it("renders children", () => {
    render(<Tooltip>Help text</Tooltip>);
    expect(screen.getByText("Help text")).toBeTruthy();
  });

  it("has tooltip role", () => {
    render(<Tooltip>Help</Tooltip>);
    expect(screen.getByRole("tooltip")).toBeTruthy();
  });

  it("applies custom className", () => {
    render(<Tooltip className="custom">Help</Tooltip>);
    const el = screen.getByRole("tooltip");
    expect(el.className).toContain("custom");
  });
});
