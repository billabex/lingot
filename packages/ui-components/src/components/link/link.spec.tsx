import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Link } from "./index";

afterEach(cleanup);

describe("Link", () => {
  it("renders children", () => {
    render(<Link href="#">Click me</Link>);
    expect(screen.getByText("Click me")).toBeTruthy();
  });

  it("renders as an anchor element", () => {
    render(<Link href="#">Test</Link>);
    const el = screen.getByRole("link", { name: "Test" });
    expect(el.tagName).toBe("A");
  });

  it("applies href attribute", () => {
    render(<Link href="https://example.com">External</Link>);
    const el = screen.getByRole("link", { name: "External" });
    expect(el.getAttribute("href")).toBe("https://example.com");
  });

  it("applies custom className", () => {
    render(<Link href="#" className="custom">Styled</Link>);
    const el = screen.getByRole("link", { name: "Styled" });
    expect(el.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(<Link href="#" target="_blank" data-testid="link">New Tab</Link>);
    const el = screen.getByTestId("link");
    expect(el.getAttribute("target")).toBe("_blank");
  });
});
