import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Sidebar } from "./index";

describe("Sidebar", () => {
  afterEach(cleanup);

  it("renders a nav element with navigation role", () => {
    render(<Sidebar>Content</Sidebar>);
    expect(screen.getByRole("navigation")).toBeTruthy();
  });

  it("renders children", () => {
    render(<Sidebar>Nav items here</Sidebar>);
    expect(screen.getByText("Nav items here")).toBeTruthy();
  });

  it("renders header when provided", () => {
    render(<Sidebar header={<span>Logo</span>}>Content</Sidebar>);
    expect(screen.getByText("Logo")).toBeTruthy();
  });

  it("renders footer when provided", () => {
    render(<Sidebar footer={<span>Settings</span>}>Content</Sidebar>);
    expect(screen.getByText("Settings")).toBeTruthy();
  });

  it("does not render header section when header is omitted", () => {
    const { container } = render(<Sidebar>Content</Sidebar>);
    const nav = container.querySelector("nav")!;
    // Should have 1 child (content), not 2 (header + content)
    expect(nav.children.length).toBe(1);
  });

  it("applies custom className", () => {
    render(<Sidebar className="custom-sidebar">Content</Sidebar>);
    const nav = screen.getByRole("navigation");
    expect(nav.className).toContain("custom-sidebar");
  });
});
