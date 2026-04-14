import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { InvoiceCard } from "./index";

afterEach(cleanup);

const baseProps = {
  reference: "INV-2066639",
  status: { label: "En retard", tone: "error" as const },
  amount: "8 100 €",
};

describe("InvoiceCard", () => {
  it("renders reference, status label, and amount", () => {
    render(<InvoiceCard {...baseProps} />);
    expect(screen.getByText("INV-2066639")).toBeTruthy();
    expect(screen.getByText("En retard")).toBeTruthy();
    expect(screen.getByText("8 100 €")).toBeTruthy();
  });

  it("renders due date when provided", () => {
    render(
      <InvoiceCard
        {...baseProps}
        dueDate={{ label: "Éch. 24 jan. 2026", tone: "danger" }}
      />,
    );
    expect(screen.getByText("Éch. 24 jan. 2026")).toBeTruthy();
  });

  it("does not render due date when absent", () => {
    render(<InvoiceCard {...baseProps} />);
    expect(screen.queryByText(/Éch\./)).toBeNull();
  });

  it("renders meta line when provided", () => {
    render(<InvoiceCard {...baseProps} meta="Payé : 0 €" />);
    expect(screen.getByText("Payé : 0 €")).toBeTruthy();
  });

  it("omits meta line when absent", () => {
    const { container } = render(<InvoiceCard {...baseProps} />);
    expect(container.textContent).not.toContain("Payé");
  });

  it("forwards additional HTML attributes", () => {
    render(<InvoiceCard {...baseProps} data-testid="inv" />);
    expect(screen.getByTestId("inv")).toBeTruthy();
  });

  it("applies custom className", () => {
    render(<InvoiceCard {...baseProps} className="custom" data-testid="inv" />);
    expect(screen.getByTestId("inv").className).toContain("custom");
  });
});
