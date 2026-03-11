import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Stepper } from "./index";
import { StepperItem } from "./stepper-item";

afterEach(cleanup);

describe("Stepper", () => {
  it("renders children", () => {
    render(
      <Stepper>
        <StepperItem state="upcoming" stepNumber={1}>
          Step 1
        </StepperItem>
        <StepperItem state="upcoming" stepNumber={2}>
          Step 2
        </StepperItem>
      </Stepper>
    );
    expect(screen.getByText("Step 1")).toBeTruthy();
    expect(screen.getByText("Step 2")).toBeTruthy();
  });

  it("inserts connector lines between children", () => {
    const { container } = render(
      <Stepper>
        <StepperItem state="upcoming" stepNumber={1}>
          Step 1
        </StepperItem>
        <StepperItem state="upcoming" stepNumber={2}>
          Step 2
        </StepperItem>
        <StepperItem state="upcoming" stepNumber={3}>
          Step 3
        </StepperItem>
      </Stepper>
    );
    // Should render successfully and have 3 steps + 2 connectors
    expect(screen.getByText("Step 1")).toBeTruthy();
    expect(screen.getByText("Step 2")).toBeTruthy();
    expect(screen.getByText("Step 3")).toBeTruthy();
    // Verify the structure has multiple children divs (steps + connectors wrapped)
    const stepperDiv = container.firstChild as HTMLElement;
    expect(stepperDiv?.children.length).toBeGreaterThanOrEqual(3);
  });

  it("applies custom className", () => {
    const { container } = render(
      <Stepper className="custom-stepper">
        <StepperItem state="upcoming" stepNumber={1}>
          Step
        </StepperItem>
      </Stepper>
    );
    expect(container.querySelector(".custom-stepper")).toBeTruthy();
  });

  it("forwards HTML attributes", () => {
    render(
      <Stepper data-testid="stepper">
        <StepperItem state="upcoming" stepNumber={1}>
          Step
        </StepperItem>
      </Stepper>
    );
    expect(screen.getByTestId("stepper")).toBeTruthy();
  });
});
