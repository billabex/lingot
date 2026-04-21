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

  it("applies tone as text color with a tinted background", () => {
    render(
      <Chip variant="static" tone="#c2727d" data-testid="toned">
        Tag
      </Chip>
    );
    const el = screen.getByTestId("toned");
    expect(el.style.color).toBe("rgb(194, 114, 125)");
    expect(el.style.background).toContain("color-mix");
    expect(el.style.borderColor).toBe("transparent");
  });

  it("preserves caller-provided style when tone is set", () => {
    render(
      <Chip variant="static" tone="#c2727d" style={{ marginLeft: "4px" }} data-testid="toned">
        Tag
      </Chip>
    );
    const el = screen.getByTestId("toned");
    expect(el.style.marginLeft).toBe("4px");
    expect(el.style.color).toBe("rgb(194, 114, 125)");
  });
});
