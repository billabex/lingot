import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { InfoRow } from "./index";

afterEach(cleanup);

describe("InfoRow", () => {
  it("renders label and value", () => {
    render(<InfoRow label="Name" value="Alice" />);
    expect(screen.getByText("Name")).toBeTruthy();
    expect(screen.getByText("Alice")).toBeTruthy();
  });

  it("renders value as a span by default", () => {
    render(<InfoRow label="Status" value="Active" />);
    const value = screen.getByText("Active");
    expect(value.tagName).toBe("SPAN");
  });

  it("renders value as a link when variant is link and href provided", () => {
    render(<InfoRow label="Website" value="example.com" variant="link" href="https://example.com" />);
    const link = screen.getByText("example.com");
    expect(link.tagName).toBe("A");
    expect(link.getAttribute("href")).toBe("https://example.com");
  });

  it("applies custom className", () => {
    const { container } = render(<InfoRow label="Test" value="Val" className="custom" />);
    expect(container.firstElementChild?.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(<InfoRow label="Test" value="Val" data-testid="info" />);
    expect(screen.getByTestId("info")).toBeTruthy();
  });
});
