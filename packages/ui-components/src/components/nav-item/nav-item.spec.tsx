import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { NavItem } from "./index";

afterEach(cleanup);

describe("NavItem", () => {
  it("renders children", () => {
    render(<NavItem>Dashboard</NavItem>);
    expect(screen.getByText("Dashboard")).toBeTruthy();
  });

  it("renders as a button element", () => {
    render(<NavItem>Dashboard</NavItem>);
    const el = screen.getByRole("button", { name: "Dashboard" });
    expect(el.tagName).toBe("BUTTON");
  });

  it("sets data-active when active", () => {
    render(<NavItem active>Dashboard</NavItem>);
    const el = screen.getByRole("button", { name: "Dashboard" });
    expect(el.getAttribute("data-active")).toBe("true");
  });

  it("renders left icon", () => {
    render(<NavItem leftIcon={<span data-testid="icon">I</span>}>Dashboard</NavItem>);
    expect(screen.getByTestId("icon")).toBeTruthy();
  });

  it("applies custom className", () => {
    render(<NavItem className="custom">Dashboard</NavItem>);
    const el = screen.getByRole("button", { name: "Dashboard" });
    expect(el.className).toContain("custom");
  });

  it("renders the icon variant as a 32×32 square", () => {
    const { container } = render(
      <NavItem variant="icon" aria-label="Inbox">
        <span data-testid="i">I</span>
      </NavItem>
    );
    expect(container.innerHTML).toContain("w_32px");
    expect(container.innerHTML).toContain("h_32px");
    expect(screen.getByTestId("i")).toBeTruthy();
  });

  it("applies active styling on the icon variant", () => {
    const { container } = render(
      <NavItem variant="icon" active aria-label="Inbox">
        <span>I</span>
      </NavItem>
    );
    expect(container.innerHTML).toContain("action.secondary");
  });
});
