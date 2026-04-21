import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BulkActionBar } from "./index";

afterEach(cleanup);

describe("BulkActionBar", () => {
  it("renders the count label", () => {
    render(
      <BulkActionBar count="3 sélectionnés">
        <button type="button">Action</button>
      </BulkActionBar>,
    );
    expect(screen.getByText("3 sélectionnés")).toBeTruthy();
  });

  it("renders action children", () => {
    render(
      <BulkActionBar count="1 sélectionné">
        <button type="button">Reprendre en interne</button>
      </BulkActionBar>,
    );
    expect(
      screen.getByRole("button", { name: "Reprendre en interne" }),
    ).toBeTruthy();
  });

  it("renders a close button only when onClose is provided", () => {
    const { rerender } = render(
      <BulkActionBar count="1 sélectionné">
        <button type="button">Action</button>
      </BulkActionBar>,
    );
    expect(screen.queryByRole("button", { name: "Close" })).toBeNull();

    rerender(
      <BulkActionBar count="1 sélectionné" onClose={() => {}}>
        <button type="button">Action</button>
      </BulkActionBar>,
    );
    expect(screen.getByRole("button", { name: "Close" })).toBeTruthy();
  });

  it("fires onClose when the close button is clicked", () => {
    const onClose = vi.fn();
    render(
      <BulkActionBar count="1 sélectionné" onClose={onClose}>
        <button type="button">Action</button>
      </BulkActionBar>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("honors a custom closeLabel", () => {
    render(
      <BulkActionBar
        count="1 sélectionné"
        onClose={() => {}}
        closeLabel="Effacer la sélection"
      >
        <button type="button">Action</button>
      </BulkActionBar>,
    );
    expect(
      screen.getByRole("button", { name: "Effacer la sélection" }),
    ).toBeTruthy();
  });
});
