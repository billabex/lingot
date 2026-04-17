import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
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

  it("applies the sm size variant class", () => {
    render(<Modal title="Title" size="sm">Content</Modal>);
    const el = screen.getByRole("dialog");
    expect(el.className).toMatch(/\bw_360px\b/);
  });

  it("applies the md (default) size variant class", () => {
    render(<Modal title="Title">Content</Modal>);
    const el = screen.getByRole("dialog");
    expect(el.className).toMatch(/\bw_480px\b/);
  });

  describe("focus management", () => {
    it("labels the dialog via aria-labelledby pointing at the title", () => {
      render(<Modal title="Settings">Content</Modal>);
      const dialog = screen.getByRole("dialog");
      const labelledBy = dialog.getAttribute("aria-labelledby");
      expect(labelledBy).toBeTruthy();
      expect(document.getElementById(labelledBy!)?.textContent).toBe("Settings");
    });

    it("marks the dialog as modal", () => {
      render(<Modal title="Title">Content</Modal>);
      expect(screen.getByRole("dialog").getAttribute("aria-modal")).toBe("true");
    });

    it("focuses the first focusable element on mount", () => {
      render(
        <Modal title="Title" footer={<button>OK</button>}>
          <button data-testid="first">First</button>
          <button data-testid="second">Second</button>
        </Modal>,
      );
      expect(document.activeElement).toBe(screen.getByTestId("first"));
    });

    it("focuses the dialog itself when it has no focusable descendants", () => {
      render(<Modal title="Title">Just text</Modal>);
      expect(document.activeElement).toBe(screen.getByRole("dialog"));
    });

    it("returns focus to the previously active element on unmount", () => {
      const trigger = document.createElement("button");
      trigger.textContent = "Open";
      document.body.appendChild(trigger);
      trigger.focus();

      const { unmount } = render(
        <Modal title="Title">
          <button>Inside</button>
        </Modal>,
      );
      unmount();
      expect(document.activeElement).toBe(trigger);
      document.body.removeChild(trigger);
    });

    it("calls onClose when Escape is pressed", () => {
      const onClose = vi.fn();
      render(
        <Modal title="Title" onClose={onClose}>
          <button>Inside</button>
        </Modal>,
      );
      fireEvent.keyDown(document, { key: "Escape" });
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("does not throw on Escape when no onClose is provided", () => {
      render(<Modal title="Title">Content</Modal>);
      expect(() => fireEvent.keyDown(document, { key: "Escape" })).not.toThrow();
    });

    it("traps Tab from the last focusable back to the first", () => {
      render(
        <Modal title="Title" footer={<button data-testid="footer-btn">OK</button>}>
          <button data-testid="first">First</button>
          <button data-testid="middle">Middle</button>
        </Modal>,
      );
      const first = screen.getByTestId("first");
      const last = screen.getByTestId("footer-btn");
      last.focus();
      fireEvent.keyDown(last, { key: "Tab" });
      expect(document.activeElement).toBe(first);
    });

    it("traps shift+Tab from the first focusable back to the last", () => {
      render(
        <Modal title="Title" footer={<button data-testid="footer-btn">OK</button>}>
          <button data-testid="first">First</button>
          <button data-testid="middle">Middle</button>
        </Modal>,
      );
      const first = screen.getByTestId("first");
      const last = screen.getByTestId("footer-btn");
      first.focus();
      fireEvent.keyDown(first, { key: "Tab", shiftKey: true });
      expect(document.activeElement).toBe(last);
    });
  });
});
