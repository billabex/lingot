import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { EmptyState } from "./index";

afterEach(cleanup);

describe("EmptyState", () => {
  it("renders title", () => {
    render(<EmptyState title="No items" />);
    expect(screen.getByText("No items")).toBeTruthy();
  });

  it("renders description when provided", () => {
    render(<EmptyState title="No items" description="Try again later." />);
    expect(screen.getByText("Try again later.")).toBeTruthy();
  });

  it("does not render description when not provided", () => {
    render(<EmptyState title="No items" />);
    expect(screen.queryByText("Try again later.")).toBeNull();
  });

  it("renders icon when provided", () => {
    render(<EmptyState title="No items" icon={<span data-testid="icon">📭</span>} />);
    expect(screen.getByTestId("icon")).toBeTruthy();
  });

  it("renders action slot when provided", () => {
    render(<EmptyState title="No items" action={<button>Create</button>} />);
    expect(screen.getByRole("button", { name: "Create" })).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(<EmptyState title="Test" className="custom" />);
    expect(container.firstElementChild?.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(<EmptyState title="Test" data-testid="empty" />);
    expect(screen.getByTestId("empty")).toBeTruthy();
  });
});
