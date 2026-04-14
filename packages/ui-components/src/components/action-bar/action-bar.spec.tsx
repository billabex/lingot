import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { ActionBar } from "./index";

afterEach(cleanup);

describe("ActionBar", () => {
  it("renders children", () => {
    render(
      <ActionBar>
        <button>One</button>
        <button>Two</button>
      </ActionBar>,
    );
    expect(screen.getByText("One")).toBeTruthy();
    expect(screen.getByText("Two")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(
      <ActionBar className="custom">
        <span>x</span>
      </ActionBar>,
    );
    expect((container.firstChild as HTMLElement).className).toContain("custom");
  });
});
