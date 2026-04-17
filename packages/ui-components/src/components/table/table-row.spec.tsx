import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { TableRow } from "./index";

afterEach(cleanup);

describe("TableRow", () => {
  it("renders children", () => {
    render(
      <TableRow>
        <span>Cell 1</span>
        <span>Cell 2</span>
      </TableRow>
    );
    expect(screen.getByText("Cell 1")).toBeTruthy();
    expect(screen.getByText("Cell 2")).toBeTruthy();
  });

  it("has row role", () => {
    render(
      <TableRow>
        <span>Test</span>
      </TableRow>
    );
    const el = screen.getByRole("row");
    expect(el).toBeTruthy();
  });

  it("applies selected styling when selected is true", () => {
    render(
      <TableRow selected={true}>
        <span>Test</span>
      </TableRow>
    );
    const el = screen.getByRole("row");
    expect(el.className).toContain("bg_bg");
  });

  it("applies custom className", () => {
    render(
      <TableRow className="custom-class">
        <span>Test</span>
      </TableRow>
    );
    const el = screen.getByRole("row");
    expect(el.className).toContain("custom-class");
  });

  it("forwards HTML attributes", () => {
    render(
      <TableRow data-testid="table-row">
        <span>Test</span>
      </TableRow>
    );
    expect(screen.getByTestId("table-row")).toBeTruthy();
  });

  describe("interactive", () => {
    it("is not focusable by default", () => {
      render(
        <TableRow>
          <span>Test</span>
        </TableRow>
      );
      expect(screen.getByRole("row").getAttribute("tabindex")).toBeNull();
    });

    it("becomes focusable when interactive", () => {
      render(
        <TableRow interactive>
          <span>Test</span>
        </TableRow>
      );
      expect(screen.getByRole("row").getAttribute("tabindex")).toBe("0");
    });

    it("respects consumer tabIndex override when interactive", () => {
      render(
        <TableRow interactive tabIndex={-1}>
          <span>Test</span>
        </TableRow>
      );
      expect(screen.getByRole("row").getAttribute("tabindex")).toBe("-1");
    });

    it("applies cursor-pointer styling when interactive", () => {
      render(
        <TableRow interactive>
          <span>Test</span>
        </TableRow>
      );
      expect(screen.getByRole("row").className).toContain("cursor_pointer");
    });

    it("triggers onClick on Enter when interactive", () => {
      const onClick = vi.fn();
      render(
        <TableRow interactive onClick={onClick}>
          <span>Test</span>
        </TableRow>
      );
      fireEvent.keyDown(screen.getByRole("row"), { key: "Enter" });
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("triggers onClick on Space when interactive", () => {
      const onClick = vi.fn();
      render(
        <TableRow interactive onClick={onClick}>
          <span>Test</span>
        </TableRow>
      );
      fireEvent.keyDown(screen.getByRole("row"), { key: " " });
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("does not trigger onClick on Enter/Space when not interactive", () => {
      const onClick = vi.fn();
      render(
        <TableRow onClick={onClick}>
          <span>Test</span>
        </TableRow>
      );
      fireEvent.keyDown(screen.getByRole("row"), { key: "Enter" });
      fireEvent.keyDown(screen.getByRole("row"), { key: " " });
      expect(onClick).not.toHaveBeenCalled();
    });

    it("still forwards consumer's onKeyDown when interactive", () => {
      const onKeyDown = vi.fn();
      render(
        <TableRow interactive onKeyDown={onKeyDown}>
          <span>Test</span>
        </TableRow>
      );
      fireEvent.keyDown(screen.getByRole("row"), { key: "a" });
      expect(onKeyDown).toHaveBeenCalledTimes(1);
    });

    it("skips row activation when consumer's onKeyDown calls preventDefault", () => {
      const onClick = vi.fn();
      render(
        <TableRow
          interactive
          onClick={onClick}
          onKeyDown={(e) => e.preventDefault()}
        >
          <span>Test</span>
        </TableRow>
      );
      fireEvent.keyDown(screen.getByRole("row"), { key: "Enter" });
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
