import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { SectionTitle } from "./index";
import { IconButton } from "../icon-button";

afterEach(cleanup);

const Icon = () => <svg data-testid="icon" />;

describe("SectionTitle", () => {
  it("renders children", () => {
    render(<SectionTitle>Encours</SectionTitle>);
    expect(screen.getByText("Encours")).toBeTruthy();
  });

  it("renders as a div (non-interactive)", () => {
    const { container } = render(<SectionTitle>Encours</SectionTitle>);
    expect(container.firstChild?.nodeName).toBe("DIV");
  });

  it("renders trailing IconButton when provided", () => {
    render(
      <SectionTitle trailing={<IconButton icon={<Icon />} aria-label="Add" />}>
        Contacts
      </SectionTitle>,
    );
    expect(screen.getByRole("button", { name: "Add" })).toBeTruthy();
  });

  it("applies custom className", () => {
    render(<SectionTitle className="custom">Encours</SectionTitle>);
    expect(screen.getByText("Encours").parentElement?.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(<SectionTitle data-testid="section">Encours</SectionTitle>);
    expect(screen.getByTestId("section")).toBeTruthy();
  });
});
