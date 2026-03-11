import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { DropdownMenu } from "./index";

afterEach(cleanup);

describe("DropdownMenu", () => {
  it("renders children", () => {
    render(
      <DropdownMenu>
        <span>Item A</span>
        <span>Item B</span>
      </DropdownMenu>,
    );
    expect(screen.getByText("Item A")).toBeTruthy();
    expect(screen.getByText("Item B")).toBeTruthy();
  });

  it("has menu role", () => {
    render(<DropdownMenu><span>Item</span></DropdownMenu>);
    expect(screen.getByRole("menu")).toBeTruthy();
  });

  it("applies custom className", () => {
    render(
      <DropdownMenu className="custom" data-testid="menu">
        <span>Item</span>
      </DropdownMenu>,
    );
    const el = screen.getByTestId("menu");
    expect(el.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(
      <DropdownMenu data-testid="menu"><span>Item</span></DropdownMenu>,
    );
    expect(screen.getByTestId("menu")).toBeTruthy();
  });
});
