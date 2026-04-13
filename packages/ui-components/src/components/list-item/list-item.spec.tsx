import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { ListItem } from "./index";

afterEach(cleanup);

describe("ListItem", () => {
  it("renders title", () => {
    render(<ListItem title="DOSFARMASHOP" />);
    expect(screen.getByText("DOSFARMASHOP")).toBeTruthy();
  });

  it("renders preview when provided", () => {
    render(<ListItem title="Title" preview="Invoice #1234" />);
    expect(screen.getByText("Invoice #1234")).toBeTruthy();
  });

  it("renders meta when provided", () => {
    render(
      <ListItem title="Title" meta={<span data-testid="meta">16 200 €</span>} />
    );
    expect(screen.getByTestId("meta")).toBeTruthy();
  });

  it("renders sub when provided", () => {
    render(<ListItem title="Title" sub="3 litiges ouverts" />);
    expect(screen.getByText("3 litiges ouverts")).toBeTruthy();
  });

  it("renders titleTrailing slot", () => {
    render(
      <ListItem
        title="Title"
        titleTrailing={<span data-testid="title-trailing">badge</span>}
      />
    );
    expect(screen.getByTestId("title-trailing")).toBeTruthy();
  });

  it("applies active styling when active is true", () => {
    const { container } = render(<ListItem title="Title" active />);
    expect(container.innerHTML).toContain("bg_bg.muted");
  });

  it("renders as a button when as='button'", () => {
    render(<ListItem as="button" title="Clickable" data-testid="row" />);
    const el = screen.getByTestId("row");
    expect(el.tagName).toBe("BUTTON");
    expect((el as HTMLButtonElement).type).toBe("button");
  });

  it("fires onClick when clicked as button", () => {
    const onClick = vi.fn();
    render(
      <ListItem
        as="button"
        title="Click"
        onClick={onClick}
        data-testid="row"
      />
    );
    fireEvent.click(screen.getByTestId("row"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders as an anchor when as='a'", () => {
    render(<ListItem as="a" href="/x" title="Linked" data-testid="row" />);
    const el = screen.getByTestId("row");
    expect(el.tagName).toBe("A");
    expect(el.getAttribute("href")).toBe("/x");
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
