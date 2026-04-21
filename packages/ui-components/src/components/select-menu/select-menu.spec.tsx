import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { SelectMenu } from "./index";

afterEach(cleanup);

const options = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
];

describe("SelectMenu", () => {
  it("renders the label when provided", () => {
    render(<SelectMenu label="Langue" options={options} />);
    expect(screen.getByText("Langue")).toBeTruthy();
  });

  it("renders the placeholder when nothing is selected", () => {
    render(
      <SelectMenu placeholder="Sélectionner une langue" options={options} />,
    );
    expect(screen.getByText("Sélectionner une langue")).toBeTruthy();
  });

  it("renders the current label for a controlled value", () => {
    render(<SelectMenu value="es" options={options} onChange={() => {}} />);
    expect(screen.getByRole("combobox").textContent).toContain("Español");
  });

  it("opens the panel on click and surfaces options", () => {
    render(<SelectMenu options={options} />);
    fireEvent.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeTruthy();
    expect(screen.getAllByRole("option")).toHaveLength(3);
  });

  it("fires onChange with the selected value and closes the panel", () => {
    const onChange = vi.fn();
    render(<SelectMenu options={options} onChange={onChange} />);
    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByRole("option", { name: "English" }));
    expect(onChange).toHaveBeenCalledWith("en");
    expect(screen.queryByRole("listbox")).toBeNull();
  });

  it("updates its own value in uncontrolled mode", () => {
    render(<SelectMenu options={options} defaultValue="fr" />);
    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByRole("option", { name: "Español" }));
    expect(screen.getByRole("combobox").textContent).toContain("Español");
  });

  it("does not open when disabled", () => {
    render(<SelectMenu options={options} disabled />);
    fireEvent.click(screen.getByRole("combobox"));
    expect(screen.queryByRole("listbox")).toBeNull();
  });

  it("closes on Escape", () => {
    render(<SelectMenu options={options} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.click(trigger);
    expect(screen.getByRole("listbox")).toBeTruthy();
    fireEvent.keyDown(trigger, { key: "Escape" });
    expect(screen.queryByRole("listbox")).toBeNull();
  });

  it("commits the active option on Enter", () => {
    const onChange = vi.fn();
    render(<SelectMenu options={options} onChange={onChange} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    fireEvent.keyDown(trigger, { key: "Enter" });
    expect(onChange).toHaveBeenCalledWith("en");
  });

  it("wires aria-activedescendant to the focused option while navigating", () => {
    render(<SelectMenu options={options} />);
    const trigger = screen.getByRole("combobox");
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    const active = trigger.getAttribute("aria-activedescendant");
    expect(active).toMatch(/-opt-0$/);
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    expect(trigger.getAttribute("aria-activedescendant")).toMatch(/-opt-1$/);
  });

  it("skips disabled options when navigating with the keyboard", () => {
    const onChange = vi.fn();
    render(
      <SelectMenu
        options={[
          { value: "fr", label: "Français" },
          { value: "en", label: "English", disabled: true },
          { value: "es", label: "Español" },
        ]}
        onChange={onChange}
      />,
    );
    const trigger = screen.getByRole("combobox");
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    fireEvent.keyDown(trigger, { key: "Enter" });
    expect(onChange).toHaveBeenCalledWith("es");
  });

  it("renders the panel via a portal on document.body", () => {
    const { container } = render(<SelectMenu options={options} />);
    fireEvent.click(screen.getByRole("combobox"));
    const listbox = screen.getByRole("listbox");
    expect(container.contains(listbox)).toBe(false);
    expect(document.body.contains(listbox)).toBe(true);
  });

  it("closes when the user clicks outside the trigger and panel", () => {
    render(<SelectMenu options={options} />);
    fireEvent.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeTruthy();
    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole("listbox")).toBeNull();
  });

  it("does not leak listeners after unmount", () => {
    const addSpy = vi.spyOn(window, "addEventListener");
    const removeSpy = vi.spyOn(window, "removeEventListener");
    const { unmount } = render(<SelectMenu options={options} />);
    fireEvent.click(screen.getByRole("combobox"));
    const addedTypes = addSpy.mock.calls.map((c) => c[0]);
    expect(addedTypes).toContain("resize");
    expect(addedTypes).toContain("scroll");
    unmount();
    const removedTypes = removeSpy.mock.calls.map((c) => c[0]);
    expect(removedTypes).toContain("resize");
    expect(removedTypes).toContain("scroll");
    addSpy.mockRestore();
    removeSpy.mockRestore();
  });
});
