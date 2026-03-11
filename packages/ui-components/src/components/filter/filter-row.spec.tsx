import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { FilterRow } from "./index";

afterEach(cleanup);

describe("FilterRow", () => {
  it("renders children", () => {
    render(
      <FilterRow>
        <button>Filter A</button>
        <button>Filter B</button>
      </FilterRow>,
    );
    expect(screen.getByText("Filter A")).toBeTruthy();
    expect(screen.getByText("Filter B")).toBeTruthy();
  });

  it("renders as a div element", () => {
    render(<FilterRow data-testid="row"><span>child</span></FilterRow>);
    const el = screen.getByTestId("row");
    expect(el.tagName).toBe("DIV");
  });

  it("applies custom className", () => {
    render(<FilterRow className="custom" data-testid="row"><span>child</span></FilterRow>);
    const el = screen.getByTestId("row");
    expect(el.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(<FilterRow data-testid="row"><span>child</span></FilterRow>);
    expect(screen.getByTestId("row")).toBeTruthy();
  });
});
