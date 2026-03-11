import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Divider } from "./index";

afterEach(cleanup);

describe("Divider", () => {
  it("renders as hr element", () => {
    render(<Divider />);
    const el = screen.getByRole("separator");
    expect(el.tagName).toBe("HR");
  });

  it("has separator role", () => {
    render(<Divider />);
    expect(screen.getByRole("separator")).toBeTruthy();
  });

  it("defaults to horizontal orientation", () => {
    render(<Divider />);
    const el = screen.getByRole("separator");
    expect(el.getAttribute("aria-orientation")).toBe("horizontal");
  });

  it("renders vertical orientation", () => {
    render(<Divider orientation="vertical" />);
    const el = screen.getByRole("separator");
    expect(el.getAttribute("aria-orientation")).toBe("vertical");
  });

  it("applies custom className", () => {
    render(<Divider className="custom" />);
    const el = screen.getByRole("separator");
    expect(el.className).toContain("custom");
  });
});
