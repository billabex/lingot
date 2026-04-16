import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { DetailNav } from "./index";

afterEach(cleanup);

describe("DetailNav", () => {
  it("renders prev, next, and position with defaults", () => {
    render(<DetailNav current={2} total={5} />);
    expect(screen.getByRole("button", { name: "Previous" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Next" })).toBeTruthy();
    expect(screen.getByText("2 / 5")).toBeTruthy();
  });

  it("renders custom visible labels on the buttons", () => {
    render(
      <DetailNav current={1} total={3} prevLabel="Précédent" nextLabel="Suivant" />,
    );
    expect(screen.getByRole("button", { name: "Précédent" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Suivant" })).toBeTruthy();
  });

  it("disables prev at the first record", () => {
    render(<DetailNav current={1} total={4} />);
    expect(screen.getByRole("button", { name: "Previous" })).toHaveProperty(
      "disabled",
      true,
    );
    expect(screen.getByRole("button", { name: "Next" })).toHaveProperty(
      "disabled",
      false,
    );
  });

  it("disables next at the last record", () => {
    render(<DetailNav current={4} total={4} />);
    expect(screen.getByRole("button", { name: "Next" })).toHaveProperty(
      "disabled",
      true,
    );
    expect(screen.getByRole("button", { name: "Previous" })).toHaveProperty(
      "disabled",
      false,
    );
  });

  it("fires onPrev / onNext when pressed", () => {
    const onPrev = vi.fn();
    const onNext = vi.fn();
    render(
      <DetailNav current={2} total={4} onPrev={onPrev} onNext={onNext} />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Previous" }));
    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(onPrev).toHaveBeenCalledTimes(1);
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it("uses the custom formatPosition", () => {
    render(
      <DetailNav
        current={3}
        total={10}
        formatPosition={(c, t) => `${c} of ${t}`}
      />,
    );
    expect(screen.getByText("3 of 10")).toBeTruthy();
  });

  it("clamps out-of-bounds current to a valid range", () => {
    const { rerender } = render(<DetailNav current={0} total={4} />);
    expect(screen.getByText("1 / 4")).toBeTruthy();
    rerender(<DetailNav current={99} total={4} />);
    expect(screen.getByText("4 / 4")).toBeTruthy();
  });

  it("renders 0 / 0 and disables both buttons when total is 0", () => {
    render(<DetailNav current={1} total={0} />);
    expect(screen.getByText("0 / 0")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Previous" })).toHaveProperty(
      "disabled",
      true,
    );
    expect(screen.getByRole("button", { name: "Next" })).toHaveProperty(
      "disabled",
      true,
    );
  });

  it("applies custom className", () => {
    const { container } = render(
      <DetailNav current={1} total={2} className="custom-nav" />,
    );
    expect(container.firstElementChild!.className).toContain("custom-nav");
  });
});
