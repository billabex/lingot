import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { DropdownItem } from "./index";

afterEach(cleanup);

describe("DropdownItem", () => {
  it("renders children", () => {
    render(<DropdownItem>Edit</DropdownItem>);
    expect(screen.getByText("Edit")).toBeTruthy();
  });

  it("has menuitem role", () => {
    render(<DropdownItem>Edit</DropdownItem>);
    expect(screen.getByRole("menuitem")).toBeTruthy();
  });

  it("renders icons", () => {
    render(
      <DropdownItem leftIcon={<span data-testid="left">L</span>} rightIcon={<span data-testid="right">R</span>}>
        Edit
      </DropdownItem>
    );
    expect(screen.getByTestId("left")).toBeTruthy();
    expect(screen.getByTestId("right")).toBeTruthy();
  });

  it("applies disabled", () => {
    render(<DropdownItem disabled>Edit</DropdownItem>);
    const el = screen.getByRole("menuitem");
    expect(el).toHaveProperty("disabled", true);
  });

  it("applies custom className", () => {
    render(<DropdownItem className="custom">Edit</DropdownItem>);
    expect(screen.getByRole("menuitem").className).toContain("custom");
  });
});
