import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Modal } from "./index";

afterEach(cleanup);

describe("Modal", () => {
  it("renders title", () => {
    render(<Modal title="Test Title">Content</Modal>);
    expect(screen.getByText("Test Title")).toBeTruthy();
  });

  it("renders children", () => {
    render(<Modal title="Title">Modal body</Modal>);
    expect(screen.getByText("Modal body")).toBeTruthy();
  });

  it("has dialog role", () => {
    render(<Modal title="Title">Content</Modal>);
    expect(screen.getByRole("dialog")).toBeTruthy();
  });

  it("renders close button when provided", () => {
    render(
      <Modal title="Title" closeButton={<button data-testid="close">×</button>}>
        Content
      </Modal>,
    );
    expect(screen.getByTestId("close")).toBeTruthy();
  });

  it("renders footer when provided", () => {
    render(
      <Modal title="Title" footer={<button data-testid="action">OK</button>}>
        Content
      </Modal>,
    );
    expect(screen.getByTestId("action")).toBeTruthy();
  });

  it("does not render footer when not provided", () => {
    const { container } = render(<Modal title="Title">Content</Modal>);
    // Only header + content, no third child div
    const rootChildren = container.firstElementChild!.children;
    expect(rootChildren.length).toBe(2);
  });

  it("applies custom className", () => {
    render(<Modal title="Title" className="custom">Content</Modal>);
    const el = screen.getByRole("dialog");
    expect(el.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(<Modal title="Title" data-testid="modal">Content</Modal>);
    expect(screen.getByTestId("modal")).toBeTruthy();
  });
});
