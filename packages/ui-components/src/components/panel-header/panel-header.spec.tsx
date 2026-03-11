import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { PanelHeader } from "./index";

afterEach(cleanup);

describe("PanelHeader", () => {
  it("renders title", () => {
    render(<PanelHeader title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeTruthy();
  });

  it("renders badge when provided", () => {
    render(
      <PanelHeader
        title="Title"
        badge={<span data-testid="badge">Badge</span>}
      />
    );
    expect(screen.getByTestId("badge")).toBeTruthy();
  });

  it("renders actions when provided", () => {
    render(
      <PanelHeader
        title="Title"
        actions={<button data-testid="action-btn">Save</button>}
      />
    );
    expect(screen.getByTestId("action-btn")).toBeTruthy();
  });

  it("renders tabs row when provided", () => {
    render(
      <PanelHeader
        title="Title"
        tabs={<button data-testid="tab">Tab 1</button>}
      />
    );
    expect(screen.getByTestId("tab")).toBeTruthy();
  });

  it("renders filters row when provided", () => {
    render(
      <PanelHeader
        title="Title"
        filters={<button data-testid="filter">Filter</button>}
      />
    );
    expect(screen.getByTestId("filter")).toBeTruthy();
  });

  it("does not render tabs row when not provided", () => {
    const { container } = render(<PanelHeader title="Title" />);
    // Should not have tab elements
    const tabButton = container.querySelector('[data-testid="tab"]');
    expect(tabButton).toBeFalsy();
  });

  it("does not render filters row when not provided", () => {
    const { container } = render(<PanelHeader title="Title" />);
    // Should only render elements that are provided
    const filterElements = container.querySelectorAll("[data-testid*='filter']");
    expect(filterElements.length).toBe(0);
  });

  it("applies custom className", () => {
    const { container } = render(
      <PanelHeader title="Title" className="custom-class" />
    );
    expect(container.querySelector(".custom-class")).toBeTruthy();
  });

  it("forwards HTML attributes", () => {
    render(
      <PanelHeader title="Title" data-testid="panel-header" />
    );
    expect(screen.getByTestId("panel-header")).toBeTruthy();
  });
});
