import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Breadcrumb } from "./index";

afterEach(cleanup);

describe("Breadcrumb", () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Current" },
  ];

  it("renders all items", () => {
    render(<Breadcrumb items={items} />);
    expect(screen.getByText("Home")).toBeTruthy();
    expect(screen.getByText("Docs")).toBeTruthy();
    expect(screen.getByText("Current")).toBeTruthy();
  });

  it("renders nav with aria-label", () => {
    render(<Breadcrumb items={items} />);
    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeTruthy();
  });

  it("last item has aria-current=page", () => {
    render(<Breadcrumb items={items} />);
    const current = screen.getByText("Current");
    expect(current.getAttribute("aria-current")).toBe("page");
  });

  it("non-last items render as links", () => {
    render(<Breadcrumb items={items} />);
    const homeLink = screen.getByText("Home");
    expect(homeLink.tagName).toBe("A");
    expect(homeLink.getAttribute("href")).toBe("/");
  });

  it("last item is not a link", () => {
    render(<Breadcrumb items={items} />);
    const current = screen.getByText("Current");
    expect(current.tagName).toBe("SPAN");
  });
});
