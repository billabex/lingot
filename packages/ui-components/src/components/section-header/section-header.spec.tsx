import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { SectionHeader } from "./index";

afterEach(cleanup);

describe("SectionHeader", () => {
  it("renders the title as an h2", () => {
    render(<SectionHeader title="Informations de l'organisation" />);
    const heading = screen.getByRole("heading", {
      name: "Informations de l'organisation",
      level: 2,
    });
    expect(heading).toBeTruthy();
  });

  it("renders the description when provided", () => {
    render(
      <SectionHeader
        title="Section"
        description="Helpful explanation about the section."
      />,
    );
    expect(
      screen.getByText("Helpful explanation about the section."),
    ).toBeTruthy();
  });

  it("renders a trailing slot beside the title", () => {
    render(
      <SectionHeader
        title="Connexions"
        trailing={<button type="button">Ajouter une connexion</button>}
      />,
    );
    expect(
      screen.getByRole("button", { name: "Ajouter une connexion" }),
    ).toBeTruthy();
  });

  it("omits the description paragraph when not provided", () => {
    const { container } = render(<SectionHeader title="Section" />);
    expect(container.querySelector("p")).toBeNull();
  });

  it("applies custom className", () => {
    const { container } = render(
      <SectionHeader title="X" className="custom" />,
    );
    expect(container.firstElementChild!.className).toContain("custom");
  });

  it("spreads additional HTML attributes", () => {
    render(<SectionHeader title="X" data-testid="sh" />);
    expect(screen.getByTestId("sh")).toBeTruthy();
  });
});
