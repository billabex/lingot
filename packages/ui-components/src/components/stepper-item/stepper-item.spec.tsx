import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { StepperItem } from "./index";

afterEach(cleanup);

describe("StepperItem", () => {
  it("renders children", () => {
    render(<StepperItem>Step 1</StepperItem>);
    expect(screen.getByText("Step 1")).toBeTruthy();
  });

  it("displays step number for upcoming state", () => {
    render(<StepperItem state="upcoming" stepNumber={3}>Step</StepperItem>);
    expect(screen.getByText("3")).toBeTruthy();
  });

  it("displays step number for active state", () => {
    render(<StepperItem state="active" stepNumber={2}>Step</StepperItem>);
    expect(screen.getByText("2")).toBeTruthy();
  });

  it("renders check icon for completed state", () => {
    const { container } = render(<StepperItem state="completed">Done</StepperItem>);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(<StepperItem className="custom">Step</StepperItem>);
    expect(container.firstElementChild?.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(<StepperItem data-testid="stepper">Step</StepperItem>);
    expect(screen.getByTestId("stepper")).toBeTruthy();
  });
});
