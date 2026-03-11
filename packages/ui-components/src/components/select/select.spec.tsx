import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Select } from "./index";

afterEach(cleanup);

describe("Select", () => {
  it("renders a select element", () => {
    render(<Select aria-label="Test"><option>A</option></Select>);
    const el = screen.getByRole("combobox", { name: "Test" });
    expect(el.tagName).toBe("SELECT");
  });

  it("renders children options", () => {
    render(<Select aria-label="Test"><option>Opt 1</option><option>Opt 2</option></Select>);
    expect(screen.getByText("Opt 1")).toBeTruthy();
    expect(screen.getByText("Opt 2")).toBeTruthy();
  });

  it("applies disabled attribute", () => {
    render(<Select aria-label="Test" disabled><option>A</option></Select>);
    const el = screen.getByRole("combobox", { name: "Test" });
    expect(el).toHaveProperty("disabled", true);
  });

  it("renders label when provided", () => {
    render(<Select label="Country"><option>A</option></Select>);
    expect(screen.getByText("Country")).toBeTruthy();
  });

  it("applies custom className", () => {
    render(<Select aria-label="Test" className="custom"><option>A</option></Select>);
    const el = screen.getByRole("combobox", { name: "Test" });
    expect(el.className).toContain("custom");
  });
});
