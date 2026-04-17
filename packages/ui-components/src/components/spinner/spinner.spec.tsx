import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Spinner } from "./spinner";

afterEach(cleanup);

describe("Spinner", () => {
  it("renders with a default status role and aria-label", () => {
    render(<Spinner />);
    const el = screen.getByRole("status", { name: "Chargement" });
    expect(el).toBeTruthy();
  });

  it("renders a custom accessible label", () => {
    render(<Spinner label="Synchronisation en cours" />);
    expect(
      screen.getByRole("status", { name: "Synchronisation en cours" }),
    ).toBeTruthy();
  });

  it("omits the status role when label is empty", () => {
    render(<Spinner label="" />);
    expect(screen.queryByRole("status")).toBeNull();
  });

  it("applies custom className", () => {
    const { container } = render(<Spinner className="custom" />);
    expect(container.firstElementChild!.className).toContain("custom");
  });

  it("forwards HTML attributes", () => {
    render(<Spinner data-testid="sp" />);
    expect(screen.getByTestId("sp")).toBeTruthy();
  });
});
