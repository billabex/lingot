import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Button } from "./index";

afterEach(cleanup);

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeTruthy();
  });

  it("renders as a button element", () => {
    render(<Button>Test</Button>);
    const el = screen.getByRole("button", { name: "Test" });
    expect(el).toBeTruthy();
    expect(el.tagName).toBe("BUTTON");
  });

  it("applies disabled attribute", () => {
    render(<Button disabled>Disabled</Button>);
    const el = screen.getByRole("button", { name: "Disabled" });
    expect(el).toHaveProperty("disabled", true);
  });

  it("forwards additional HTML attributes", () => {
    render(<Button data-testid="my-btn" type="submit">Submit</Button>);
    const el = screen.getByTestId("my-btn");
    expect(el.getAttribute("type")).toBe("submit");
  });

  it("applies custom className alongside recipe classes", () => {
    render(<Button className="custom-class">Styled</Button>);
    const el = screen.getByRole("button", { name: "Styled" });
    expect(el.className).toContain("custom-class");
  });

  it("renders left icon when provided", () => {
    render(<Button leftIcon={<span data-testid="left-icon">L</span>}>Label</Button>);
    expect(screen.getByTestId("left-icon")).toBeTruthy();
  });

  it("renders right icon when provided", () => {
    render(<Button rightIcon={<span data-testid="right-icon">R</span>}>Label</Button>);
    expect(screen.getByTestId("right-icon")).toBeTruthy();
  });
});
