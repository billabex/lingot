import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Toast } from "./index";

afterEach(cleanup);

describe("Toast", () => {
  it("renders children", () => {
    render(<Toast>Alert message</Toast>);
    expect(screen.getByText("Alert message")).toBeTruthy();
  });

  it("has status role", () => {
    render(<Toast>Alert</Toast>);
    expect(screen.getByRole("status")).toBeTruthy();
  });

  it("renders icon when provided", () => {
    render(<Toast icon={<span data-testid="icon">!</span>}>Alert</Toast>);
    expect(screen.getByTestId("icon")).toBeTruthy();
  });

  it("renders close button when provided", () => {
    render(
      <Toast closeButton={<button data-testid="close">×</button>}>Alert</Toast>,
    );
    expect(screen.getByTestId("close")).toBeTruthy();
  });

  it("applies custom className", () => {
    render(<Toast className="custom">Alert</Toast>);
    const el = screen.getByRole("status");
    expect(el.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(<Toast data-testid="toast">Alert</Toast>);
    expect(screen.getByTestId("toast")).toBeTruthy();
  });
});
