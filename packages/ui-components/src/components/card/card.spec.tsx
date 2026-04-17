import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Card } from "./index";

afterEach(cleanup);

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Content</Card>);
    expect(screen.getByText("Content")).toBeTruthy();
  });

  it("renders as a div element", () => {
    render(<Card data-testid="card">Content</Card>);
    const el = screen.getByTestId("card");
    expect(el.tagName).toBe("DIV");
  });

  it("applies custom className", () => {
    render(<Card className="custom" data-testid="card">Content</Card>);
    const el = screen.getByTestId("card");
    expect(el.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(<Card data-testid="card">Content</Card>);
    expect(screen.getByTestId("card")).toBeTruthy();
  });

  it("is not focusable by default", () => {
    render(<Card data-testid="card">Content</Card>);
    expect(screen.getByTestId("card").tabIndex).toBe(-1);
  });

  it("is focusable when interactive", () => {
    render(
      <Card interactive data-testid="card">
        Content
      </Card>,
    );
    expect(screen.getByTestId("card").tabIndex).toBe(0);
  });

  it("respects a consumer-provided tabIndex when interactive", () => {
    render(
      <Card interactive tabIndex={-1} data-testid="card">
        Content
      </Card>,
    );
    expect(screen.getByTestId("card").tabIndex).toBe(-1);
  });

  it("fires onClick when Enter is pressed on an interactive card", () => {
    const onClick = vi.fn();
    render(
      <Card interactive onClick={onClick} data-testid="card">
        Content
      </Card>,
    );
    fireEvent.keyDown(screen.getByTestId("card"), { key: "Enter" });
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("fires onClick when Space is pressed on an interactive card", () => {
    const onClick = vi.fn();
    render(
      <Card interactive onClick={onClick} data-testid="card">
        Content
      </Card>,
    );
    fireEvent.keyDown(screen.getByTestId("card"), { key: " " });
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not fire onClick on keypress when not interactive", () => {
    const onClick = vi.fn();
    render(
      <Card onClick={onClick} data-testid="card">
        Content
      </Card>,
    );
    fireEvent.keyDown(screen.getByTestId("card"), { key: "Enter" });
    expect(onClick).not.toHaveBeenCalled();
  });
});
