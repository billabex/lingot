import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { ChipGroup } from "./index";

afterEach(cleanup);

describe("ChipGroup", () => {
  it("renders children", () => {
    render(
      <ChipGroup>
        <button>A</button>
        <button>B</button>
      </ChipGroup>
    );
    expect(screen.getByText("A")).toBeTruthy();
    expect(screen.getByText("B")).toBeTruthy();
  });

  it("renders as a div", () => {
    render(
      <ChipGroup data-testid="grp">
        <span>x</span>
      </ChipGroup>
    );
    expect(screen.getByTestId("grp").tagName).toBe("DIV");
  });

  it("applies custom className", () => {
    render(
      <ChipGroup className="custom" data-testid="grp">
        <span>x</span>
      </ChipGroup>
    );
    expect(screen.getByTestId("grp").className).toContain("custom");
  });
});
