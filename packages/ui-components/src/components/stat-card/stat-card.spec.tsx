import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { StatCard, StatCardGroup } from "./index";

afterEach(cleanup);

describe("StatCard", () => {
  it("renders label and value", () => {
    render(<StatCard label="Montant total">8 100,00 €</StatCard>);
    expect(screen.getByText("Montant total")).toBeTruthy();
    expect(screen.getByText("8 100,00 €")).toBeTruthy();
  });

  it("accepts a non-string value (e.g. a Badge)", () => {
    render(
      <StatCard label="Statut">
        <span data-testid="badge">En retard</span>
      </StatCard>,
    );
    expect(screen.getByTestId("badge")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(
      <StatCard label="L" className="custom-card">
        V
      </StatCard>,
    );
    expect(container.firstElementChild!.className).toContain("custom-card");
  });
});

describe("StatCardGroup", () => {
  it("renders its children", () => {
    render(
      <StatCardGroup>
        <StatCard label="A">1</StatCard>
        <StatCard label="B">2</StatCard>
        <StatCard label="C">3</StatCard>
      </StatCardGroup>,
    );
    expect(screen.getByText("A")).toBeTruthy();
    expect(screen.getByText("B")).toBeTruthy();
    expect(screen.getByText("C")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(
      <StatCardGroup className="custom-group">
        <StatCard label="L">V</StatCard>
      </StatCardGroup>,
    );
    expect(container.firstElementChild!.className).toContain("custom-group");
  });
});
