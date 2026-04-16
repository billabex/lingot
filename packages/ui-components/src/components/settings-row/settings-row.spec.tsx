import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { SettingsRow } from "./index";

afterEach(cleanup);

describe("SettingsRow", () => {
  it("renders label only when no other slot is provided", () => {
    const { container } = render(<SettingsRow label="Nom" />);
    expect(screen.getByText("Nom")).toBeTruthy();
    expect(container.textContent).toBe("Nom");
  });

  it("renders description and value when provided", () => {
    render(
      <SettingsRow
        label="Nom"
        description="Mettre à jour votre prénom et nom."
        value="Claire Jourdan"
      />,
    );
    expect(screen.getByText("Nom")).toBeTruthy();
    expect(screen.getByText("Mettre à jour votre prénom et nom.")).toBeTruthy();
    expect(screen.getByText("Claire Jourdan")).toBeTruthy();
  });

  it("renders the trailing slot", () => {
    render(
      <SettingsRow
        label="Nom"
        trailing={<button type="button">Modifier</button>}
      />,
    );
    expect(screen.getByRole("button", { name: "Modifier" })).toBeTruthy();
  });

  it("omits description when undefined", () => {
    const { container } = render(<SettingsRow label="Nom" value="Claire" />);
    expect(container.textContent).toBe("NomClaire");
  });

  it("omits value when undefined", () => {
    const { container } = render(
      <SettingsRow label="Nom" description="Help text" />,
    );
    expect(container.textContent).toBe("NomHelp text");
  });

  it("applies custom className", () => {
    const { container } = render(
      <SettingsRow label="Nom" className="custom-row" />,
    );
    expect(container.firstElementChild!.className).toContain("custom-row");
  });

  it("spreads additional HTML attributes", () => {
    render(<SettingsRow label="Nom" data-testid="row" />);
    expect(screen.getByTestId("row")).toBeTruthy();
  });
});
