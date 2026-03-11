import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Toggle } from "./index";

afterEach(cleanup);

describe("Toggle", () => {
  it("renders as a switch", () => {
    render(<Toggle aria-label="Test" />);
    const el = screen.getByRole("switch", { name: "Test" });
    expect(el).toBeTruthy();
  });

  it("reflects checked state via aria-checked", () => {
    render(<Toggle checked aria-label="Test" />);
    const el = screen.getByRole("switch", { name: "Test" });
    expect(el.getAttribute("aria-checked")).toBe("true");
  });

  it("renders label when provided", () => {
    render(<Toggle label="Notifications" />);
    expect(screen.getByText("Notifications")).toBeTruthy();
  });

  it("applies disabled attribute", () => {
    render(<Toggle disabled aria-label="Test" />);
    const el = screen.getByRole("switch", { name: "Test" });
    expect(el).toHaveProperty("disabled", true);
  });

  it("applies custom className", () => {
    render(<Toggle aria-label="Test" className="custom" />);
    const el = screen.getByRole("switch", { name: "Test" });
    expect(el.className).toContain("custom");
  });
});
