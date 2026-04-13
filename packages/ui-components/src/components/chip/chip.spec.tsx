import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Chip } from "./index";

afterEach(cleanup);

describe("Chip", () => {
  it("renders children", () => {
    render(<Chip>Status</Chip>);
    expect(screen.getByText("Status")).toBeTruthy();
  });

  it("renders filter variant as a button", () => {
    render(<Chip>Status</Chip>);
    const el = screen.getByRole("button", { name: "Status" });
    expect(el.tagName).toBe("BUTTON");
  });

  it("renders removable variant with a remove button", () => {
    render(
      <Chip variant="removable" onRemove={() => {}}>
        Tag
      </Chip>
    );
    expect(screen.getByRole("button", { name: "Remove" })).toBeTruthy();
  });

  it("fires onRemove when × is clicked", () => {
    const onRemove = vi.fn();
    render(
      <Chip variant="removable" onRemove={onRemove}>
        Tag
      </Chip>
    );
    fireEvent.click(screen.getByRole("button", { name: "Remove" }));
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it("renders static variant as a non-interactive span", () => {
    render(
      <Chip variant="static" data-testid="static">
        Static
      </Chip>
    );
    expect(screen.getByTestId("static").tagName).toBe("SPAN");
  });

  it("applies active styling when active is true", () => {
    const { container } = render(<Chip active>Active</Chip>);
    expect(container.innerHTML).toContain("action.primary");
  });

  it("renders left icon when provided", () => {
    render(
      <Chip leftIcon={<span data-testid="icon">I</span>}>Filter</Chip>
    );
    expect(screen.getByTestId("icon")).toBeTruthy();
  });
});
