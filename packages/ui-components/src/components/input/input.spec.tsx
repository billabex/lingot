import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Input } from "./index";

afterEach(cleanup);

describe("Input", () => {
  it("renders an input element", () => {
    render(<Input placeholder="Test" />);
    const el = screen.getByPlaceholderText("Test");
    expect(el.tagName).toBe("INPUT");
  });

  it("applies small size styling when size='small'", () => {
    const { container } = render(<Input size="small" placeholder="Sm" />);
    expect(container.innerHTML).toContain("fs_body.sm");
  });

  it("applies placeholder", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeTruthy();
  });

  it("applies disabled attribute", () => {
    render(<Input placeholder="Disabled" disabled />);
    const el = screen.getByPlaceholderText("Disabled");
    expect(el).toHaveProperty("disabled", true);
  });

  it("applies custom className", () => {
    render(<Input placeholder="Test" className="custom" />);
    const el = screen.getByPlaceholderText("Test");
    expect(el.className).toContain("custom");
  });

  it("renders label when provided", () => {
    render(<Input label="Email" placeholder="Test" />);
    expect(screen.getByText("Email")).toBeTruthy();
  });

  it("connects label to input via htmlFor", () => {
    render(<Input label="Email" placeholder="Test" />);
    const label = screen.getByText("Email");
    const input = screen.getByPlaceholderText("Test");
    expect(label.getAttribute("for")).toBe(input.getAttribute("id"));
  });
});
