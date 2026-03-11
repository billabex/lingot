import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Card } from "./index";

afterEach(cleanup);

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Content</Card>);
    expect(screen.getByText("Content")).toBeTruthy();
  });

  it("renders as a div element", () => {
    render(<Card data-testid="card">Content</Card>);
    const el = screen.getByTestId("card");
    expect(el.tagName).toBe("DIV");
  });

  it("applies custom className", () => {
    render(<Card className="custom" data-testid="card">Content</Card>);
    const el = screen.getByTestId("card");
    expect(el.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(<Card data-testid="card">Content</Card>);
    expect(screen.getByTestId("card")).toBeTruthy();
  });
});
