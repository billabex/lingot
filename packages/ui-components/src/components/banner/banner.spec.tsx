import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Banner } from "./index";

afterEach(cleanup);

describe("Banner", () => {
  it("renders children", () => {
    render(<Banner>Alert message</Banner>);
    expect(screen.getByText("Alert message")).toBeTruthy();
  });

  it("has alert role", () => {
    render(<Banner>Alert</Banner>);
    expect(screen.getByRole("alert")).toBeTruthy();
  });

  it("renders icon when provided", () => {
    render(<Banner icon={<span data-testid="icon">!</span>}>Alert</Banner>);
    expect(screen.getByTestId("icon")).toBeTruthy();
  });

  it("applies custom className", () => {
    render(<Banner className="custom">Alert</Banner>);
    const el = screen.getByRole("alert");
    expect(el.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(<Banner data-testid="banner">Alert</Banner>);
    expect(screen.getByTestId("banner")).toBeTruthy();
  });
});
