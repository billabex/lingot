import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { BubbleAttachment, BubbleAttachmentGroup } from "./index";

afterEach(cleanup);

describe("BubbleAttachmentGroup", () => {
  it("renders children", () => {
    render(
      <BubbleAttachmentGroup>
        <BubbleAttachment name="Contrat.pdf" href="#" />
        <BubbleAttachment name="Confirmation.pdf" href="#" />
      </BubbleAttachmentGroup>,
    );
    expect(screen.getByText("Contrat.pdf")).toBeTruthy();
    expect(screen.getByText("Confirmation.pdf")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(
      <BubbleAttachmentGroup className="custom">
        <BubbleAttachment name="x.pdf" href="#" />
      </BubbleAttachmentGroup>,
    );
    expect(container.firstElementChild?.className).toContain("custom");
  });
});
