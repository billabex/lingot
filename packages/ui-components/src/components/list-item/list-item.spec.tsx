import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { ListItem } from "./index";

afterEach(cleanup);

describe("ListItem", () => {
  it("renders title", () => {
    render(<ListItem title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeTruthy();
  });

  it("renders meta when provided", () => {
    render(<ListItem title="Title" meta="2 hours ago" />);
    expect(screen.getByText("2 hours ago")).toBeTruthy();
  });

  it("renders preview when provided", () => {
    render(<ListItem title="Title" preview="Preview text" />);
    expect(screen.getByText("Preview text")).toBeTruthy();
  });

  it("renders badge when provided", () => {
    render(
      <ListItem
        title="Title"
        preview="Some preview"
        badge={<span data-testid="badge">Badge</span>}
      />
    );
    expect(screen.getByTestId("badge")).toBeTruthy();
  });

  it("applies selected styling when selected is true", () => {
    const { container } = render(<ListItem title="Title" selected={true} />);
    expect(container.innerHTML).toContain("bg_bg");
  });

  it("applies custom className", () => {
    const { container } = render(<ListItem title="Title" className="custom-class" />);
    expect(container.innerHTML).toContain("custom-class");
  });

  it("forwards HTML attributes", () => {
    render(<ListItem title="Title" data-testid="list-item" />);
    expect(screen.getByTestId("list-item")).toBeTruthy();
  });
});
