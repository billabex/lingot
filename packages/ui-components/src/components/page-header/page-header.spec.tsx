import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { PageHeader } from "./index";

afterEach(cleanup);

describe("PageHeader", () => {
  it("renders the title as an h1", () => {
    render(<PageHeader title="Facture INV-2066639" />);
    const heading = screen.getByRole("heading", {
      name: "Facture INV-2066639",
      level: 1,
    });
    expect(heading).toBeTruthy();
  });

  it("renders trailing actions", () => {
    render(
      <PageHeader
        title="Settings"
        actions={<button type="button">Save</button>}
      />,
    );
    expect(screen.getByRole("button", { name: "Save" })).toBeTruthy();
  });

  it("renders without actions", () => {
    render(<PageHeader title="Dashboard" />);
    expect(screen.getByRole("heading", { level: 1 })).toBeTruthy();
  });

  it("renders a breadcrumb above the title when provided", () => {
    render(
      <PageHeader
        breadcrumb={[
          { label: "Parent", href: "#" },
          { label: "Current" },
        ]}
        title="Current"
      />,
    );
    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Parent" })).toBeTruthy();
  });

  it("omits the breadcrumb landmark when no breadcrumb is provided", () => {
    render(<PageHeader title="Current" />);
    expect(screen.queryByRole("navigation", { name: "Breadcrumb" })).toBeNull();
  });

  it("applies custom className", () => {
    const { container } = render(
      <PageHeader title="X" className="custom-header" />,
    );
    expect(container.firstElementChild!.className).toContain("custom-header");
  });

  it("spreads additional HTML attributes", () => {
    render(<PageHeader title="X" data-testid="ph" />);
    expect(screen.getByTestId("ph")).toBeTruthy();
  });
});
