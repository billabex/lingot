import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { FormField } from "./index";

afterEach(cleanup);

describe("FormField", () => {
  it("renders label", () => {
    render(<FormField label="Email"><input /></FormField>);
    expect(screen.getByText("Email")).toBeTruthy();
  });

  it("renders children", () => {
    render(
      <FormField label="Name">
        <input data-testid="input" />
      </FormField>,
    );
    expect(screen.getByTestId("input")).toBeTruthy();
  });

  it("renders helper text when provided", () => {
    render(
      <FormField label="Email" helper="Enter your email">
        <input />
      </FormField>,
    );
    expect(screen.getByText("Enter your email")).toBeTruthy();
  });

  it("does not render helper text when not provided", () => {
    const { container } = render(
      <FormField label="Email"><input /></FormField>,
    );
    const spans = container.querySelectorAll("span");
    // Only the label span
    expect(spans.length).toBe(1);
  });

  it("applies custom className", () => {
    render(
      <FormField label="Email" className="custom" data-testid="field">
        <input />
      </FormField>,
    );
    const el = screen.getByTestId("field");
    expect(el.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(
      <FormField label="Email" data-testid="field">
        <input />
      </FormField>,
    );
    expect(screen.getByTestId("field")).toBeTruthy();
  });
});
