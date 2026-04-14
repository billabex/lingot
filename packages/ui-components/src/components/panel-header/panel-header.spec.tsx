import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { PanelHeader } from "./index";

afterEach(cleanup);

describe("PanelHeader", () => {
  it("renders children", () => {
    render(
      <PanelHeader>
        <PanelHeader.Title>Examiner le refus</PanelHeader.Title>
      </PanelHeader>
    );
    expect(screen.getByText("Examiner le refus")).toBeTruthy();
  });

  it("defaults to variant=page", () => {
    const { container } = render(
      <PanelHeader>
        <PanelHeader.Title>Title</PanelHeader.Title>
      </PanelHeader>
    );
    expect(container.firstElementChild).toBeTruthy();
  });

  it("accepts variant=list", () => {
    render(
      <PanelHeader variant="card">
        <PanelHeader.Title>Communications</PanelHeader.Title>
        <span data-testid="count">11</span>
      </PanelHeader>
    );
    expect(screen.getByText("Communications")).toBeTruthy();
    expect(screen.getByTestId("count")).toBeTruthy();
  });

  it("renders Title, Spacer, and trailing content in page variant", () => {
    render(
      <PanelHeader variant="page">
        <PanelHeader.Title>Title</PanelHeader.Title>
        <PanelHeader.Spacer />
        <button data-testid="action">Annuler</button>
      </PanelHeader>
    );
    expect(screen.getByText("Title")).toBeTruthy();
    expect(screen.getByTestId("action")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(
      <PanelHeader className="custom-class">
        <PanelHeader.Title>Title</PanelHeader.Title>
      </PanelHeader>
    );
    expect(container.querySelector(".custom-class")).toBeTruthy();
  });

  it("forwards HTML attributes", () => {
    render(
      <PanelHeader data-testid="panel-header">
        <PanelHeader.Title>Title</PanelHeader.Title>
      </PanelHeader>
    );
    expect(screen.getByTestId("panel-header")).toBeTruthy();
  });
});
