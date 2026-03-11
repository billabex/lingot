import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { PageHeader } from "./index";

describe("PageHeader", () => {
  afterEach(cleanup);

  it("renders children", () => {
    render(<PageHeader>Breadcrumb here</PageHeader>);
    expect(screen.getByText("Breadcrumb here")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(
      <PageHeader className="custom-header">Content</PageHeader>,
    );
    expect(container.firstElementChild!.className).toContain("custom-header");
  });

  it("spreads additional HTML attributes", () => {
    render(<PageHeader data-testid="ph">Content</PageHeader>);
    expect(screen.getByTestId("ph")).toBeTruthy();
  });
});
