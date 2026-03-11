import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Table } from "./index";

describe("Table", () => {
  afterEach(cleanup);

  it("renders with table role", () => {
    render(<Table>Rows here</Table>);
    expect(screen.getByRole("table")).toBeTruthy();
  });

  it("renders children", () => {
    render(<Table>Row content</Table>);
    expect(screen.getByText("Row content")).toBeTruthy();
  });

  it("renders header when provided", () => {
    render(
      <Table header={<span>Column A</span>}>
        <div>Row 1</div>
      </Table>,
    );
    expect(screen.getByText("Column A")).toBeTruthy();
    expect(screen.getByText("Row 1")).toBeTruthy();
  });

  it("does not render header section when header is omitted", () => {
    const { container } = render(<Table>Row content</Table>);
    const table = container.querySelector('[role="table"]')!;
    // Should only have the body content, no rowgroup header
    expect(table.querySelector('[role="rowgroup"]')).toBeNull();
  });

  it("applies custom className", () => {
    render(<Table className="custom-table">Content</Table>);
    const table = screen.getByRole("table");
    expect(table.className).toContain("custom-table");
  });
});
