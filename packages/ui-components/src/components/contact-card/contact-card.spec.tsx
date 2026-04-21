import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { ContactCard } from "./index";

afterEach(cleanup);

describe("ContactCard", () => {
  it("renders name, email, and language", () => {
    render(
      <ContactCard name="Jaime Sánchez" email="jaime.sanchez@atida.com" language="ES" />,
    );
    expect(screen.getByText("Jaime Sánchez")).toBeTruthy();
    expect(screen.getByText("jaime.sanchez@atida.com")).toBeTruthy();
    expect(screen.getByText("ES")).toBeTruthy();
  });

  it("derives initials from the name when none provided", () => {
    render(<ContactCard name="Jaime Sánchez" />);
    expect(screen.getByText("JS")).toBeTruthy();
  });

  it("uses explicit initials when provided", () => {
    render(<ContactCard name="Jaime Sánchez" initials="JM" />);
    expect(screen.getByText("JM")).toBeTruthy();
  });

  it("renders a <div> with a group role when no onClick is provided", () => {
    render(<ContactCard name="Jaime Sánchez" />);
    const group = screen.getByRole("group", { name: "Jaime Sánchez" });
    expect(group.tagName).toBe("DIV");
  });

  it("renders a <button> when onClick is provided", () => {
    const onClick = vi.fn();
    render(<ContactCard name="Jaime Sánchez" onClick={onClick} />);
    expect(screen.getByRole("button", { name: /Jaime Sánchez/ })).toBeTruthy();
  });

  it("fires onClick when the clickable card is activated", () => {
    const onClick = vi.fn();
    render(<ContactCard name="Jaime Sánchez" onClick={onClick} />);
    fireEvent.click(screen.getByRole("button", { name: /Jaime Sánchez/ }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("omits the email and language slots when absent", () => {
    const { container } = render(<ContactCard name="Jaime Sánchez" />);
    expect(container.textContent).not.toContain("@");
    expect(container.textContent).toBe("JSJaime Sánchez");
  });

  it("applies custom className", () => {
    const { container } = render(
      <ContactCard name="Jaime Sánchez" className="custom" />,
    );
    expect(container.firstElementChild?.className).toContain("custom");
  });
});
