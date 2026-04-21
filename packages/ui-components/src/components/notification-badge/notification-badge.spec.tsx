import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { NotificationBadge } from "./index";

afterEach(cleanup);

describe("NotificationBadge", () => {
  it("renders the count", () => {
    render(<NotificationBadge count={25} />);
    expect(screen.getByText("25")).toBeTruthy();
  });

  it("hides when count is 0", () => {
    const { container } = render(<NotificationBadge count={0} />);
    expect(container.firstChild).toBeNull();
  });

  it("shows 0 when showZero is true", () => {
    render(<NotificationBadge count={0} showZero />);
    expect(screen.getByText("0")).toBeTruthy();
  });

  it("truncates counts above the max threshold", () => {
    render(<NotificationBadge count={128} max={99} />);
    expect(screen.getByText("99+")).toBeTruthy();
  });

  it("applies a default aria-label from the count", () => {
    render(<NotificationBadge count={3} />);
    expect(screen.getByLabelText("3 new")).toBeTruthy();
  });

  it("uses the provided aria-label when given", () => {
    render(<NotificationBadge count={3} aria-label="3 unread messages" />);
    expect(screen.getByLabelText("3 unread messages")).toBeTruthy();
  });
});
