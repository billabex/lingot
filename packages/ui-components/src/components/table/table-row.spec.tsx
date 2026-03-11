import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
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
});
