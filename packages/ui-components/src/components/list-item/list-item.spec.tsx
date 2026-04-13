import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { ListItem } from "./index";

afterEach(cleanup);

describe("ListItem", () => {
  it("renders title", () => {
    render(<ListItem title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeTruthy();
  });

  it("renders preview when provided", () => {
    render(<ListItem title="Title" preview="Preview text" />);
    expect(screen.getByText("Preview text")).toBeTruthy();
  });

  it("renders sub when provided", () => {
    render(<ListItem title="Title" sub="Sub text" />);
    expect(screen.getByText("Sub text")).toBeTruthy();
  });

  it("renders leading slot", () => {
    render(
      <ListItem title="Title" leading={<span data-testid="lead">L</span>} />
    );
    expect(screen.getByTestId("lead")).toBeTruthy();
  });

  it("renders titleTrailing slot", () => {
    render(
      <ListItem
        title="Title"
        titleTrailing={<span data-testid="title-trailing">!</span>}
      />
    );
    expect(screen.getByTestId("title-trailing")).toBeTruthy();
  });

  it("renders trailing slot", () => {
    render(
      <ListItem title="Title" trailing={<span data-testid="trail">10:30</span>} />
    );
    expect(screen.getByTestId("trail")).toBeTruthy();
  });

  it("applies active styling when active is true", () => {
    const { container } = render(<ListItem title="Title" active />);
    expect(container.innerHTML).toContain("bg_bg.muted");
  });

  it("renders as a button when as='button'", () => {
    render(
      <ListItem as="button" title="Clickable" data-testid="row" />
    );
    const el = screen.getByTestId("row");
    expect(el.tagName).toBe("BUTTON");
    expect((el as HTMLButtonElement).type).toBe("button");
  });

  it("fires onClick when clicked as button", () => {
    const onClick = vi.fn();
    render(
      <ListItem as="button" title="Click me" onClick={onClick} data-testid="row" />
    );
    fireEvent.click(screen.getByTestId("row"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders as an anchor when as='a'", () => {
    render(
      <ListItem as="a" href="/x" title="Linked" data-testid="row" />
    );
    const el = screen.getByTestId("row");
    expect(el.tagName).toBe("A");
    expect(el.getAttribute("href")).toBe("/x");
  });

  it("applies accent class when accent is set", () => {
    const { container } = render(<ListItem title="Title" accent="reply" />);
    expect(container.innerHTML).toContain("terracotta.400");
  });

  it("applies custom className", () => {
    const { container } = render(
      <ListItem title="Title" className="custom-class" />
    );
    expect(container.innerHTML).toContain("custom-class");
  });

  it("forwards HTML attributes", () => {
    render(<ListItem title="Title" data-testid="list-item" />);
    expect(screen.getByTestId("list-item")).toBeTruthy();
  });
});
