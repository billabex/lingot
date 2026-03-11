import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Checkbox } from "./index";

afterEach(cleanup);

describe("Checkbox", () => {
  it("renders a checkbox input", () => {
    render(<Checkbox aria-label="Test" />);
    const el = screen.getByRole("checkbox", { name: "Test" });
    expect(el).toBeTruthy();
  });

  it("renders label when provided", () => {
    render(<Checkbox label="Accept" />);
    expect(screen.getByText("Accept")).toBeTruthy();
  });

  it("applies disabled attribute", () => {
    render(<Checkbox label="Disabled" disabled />);
    const el = screen.getByRole("checkbox");
    expect(el).toHaveProperty("disabled", true);
  });

  it("applies checked state", () => {
    render(<Checkbox label="Checked" defaultChecked />);
    const el = screen.getByRole("checkbox");
    expect(el).toHaveProperty("checked", true);
  });

  it("applies custom className", () => {
    render(<Checkbox label="Test" className="custom" />);
    const label = screen.getByText("Test").closest("label");
    expect(label?.className).toContain("custom");
  });
});
