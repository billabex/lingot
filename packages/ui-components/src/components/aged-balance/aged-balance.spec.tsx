import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { AgedBalance } from "./index";

afterEach(cleanup);

describe("AgedBalance", () => {
  it("renders the total", () => {
    render(<AgedBalance total="16 200 €" buckets={[]} />);
    expect(screen.getByText("16 200 €")).toBeTruthy();
  });

  it("renders each bucket label in the legend", () => {
    render(
      <AgedBalance
        total="16 200 €"
        buckets={[
          { tone: "warning", label: "30-60j", value: 20 },
          { tone: "danger", label: "60-90j", value: 80 },
        ]}
      />,
    );
    expect(screen.getByText("30-60j")).toBeTruthy();
    expect(screen.getByText("60-90j")).toBeTruthy();
  });

  it("computes segment widths proportional to value sum", () => {
    const { container } = render(
      <AgedBalance
        total="100"
        buckets={[
          { tone: "warning", label: "a", value: 25 },
          { tone: "danger", label: "b", value: 75 },
        ]}
      />,
    );
    const segments = container.querySelectorAll<HTMLElement>("[role='presentation'] > div");
    expect(segments).toHaveLength(2);
    expect(segments[0].style.width).toBe("25%");
    expect(segments[1].style.width).toBe("75%");
  });

  it("renders a single neutral full-width segment when all buckets are zero", () => {
    const { container } = render(
      <AgedBalance total="0 €" buckets={[{ tone: "warning", label: "a", value: 0 }]} />,
    );
    const bar = container.querySelector("[role='presentation']")!;
    const segments = bar.querySelectorAll<HTMLElement>(":scope > div");
    expect(segments).toHaveLength(1);
    expect(segments[0].style.width).toBe("100%");
  });

  it("renders an empty neutral bar with no legend when buckets array is empty", () => {
    const { container } = render(<AgedBalance total="0 €" buckets={[]} />);
    expect(container.querySelector("[role='presentation']")).not.toBeNull();
    expect(container.querySelectorAll("span").length).toBe(0);
  });

  it("skips zero-value segments but keeps their legend entry", () => {
    const { container } = render(
      <AgedBalance
        total="100"
        buckets={[
          { tone: "warning", label: "present", value: 50 },
          { tone: "danger", label: "zero", value: 0 },
          { tone: "critical", label: "also present", value: 50 },
        ]}
      />,
    );
    const segments = container.querySelectorAll<HTMLElement>("[role='presentation'] > div");
    expect(segments).toHaveLength(2);
    expect(screen.getByText("zero")).toBeTruthy();
  });
});
