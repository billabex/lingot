import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { OverflowMenu } from "./index";
import { DropdownItem } from "../dropdown";
import { Divider } from "../divider";

afterEach(cleanup);

describe("OverflowMenu", () => {
  it("renders a trigger IconButton with the provided label", () => {
    render(
      <OverflowMenu label="Actions">
        <DropdownItem>Edit</DropdownItem>
      </OverflowMenu>,
    );
    const trigger = screen.getByRole("button", { name: "Actions" });
    expect(trigger).toBeTruthy();
    expect(trigger.getAttribute("aria-haspopup")).toBe("menu");
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
  });

  it("opens the menu on trigger click", () => {
    render(
      <OverflowMenu label="Actions">
        <DropdownItem>Edit</DropdownItem>
        <Divider />
        <DropdownItem>Delete</DropdownItem>
      </OverflowMenu>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Actions" }));
    expect(screen.getByRole("menu")).toBeTruthy();
    expect(screen.getByText("Edit")).toBeTruthy();
    expect(screen.getByText("Delete")).toBeTruthy();
    expect(
      screen.getByRole("button", { name: "Actions" }).getAttribute("aria-expanded"),
    ).toBe("true");
  });

  it("toggles closed on a second trigger click", () => {
    render(
      <OverflowMenu label="Actions">
        <DropdownItem>Edit</DropdownItem>
      </OverflowMenu>,
    );
    const trigger = screen.getByRole("button", { name: "Actions" });
    fireEvent.click(trigger);
    fireEvent.click(trigger);
    expect(screen.queryByRole("menu")).toBeNull();
  });

  it("stops click propagation so a parent onClick does not fire", () => {
    const parentClick = vi.fn();
    render(
      <div onClick={parentClick}>
        <OverflowMenu label="Actions">
          <DropdownItem>Edit</DropdownItem>
        </OverflowMenu>
      </div>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Actions" }));
    expect(parentClick).not.toHaveBeenCalled();
  });

  it("closes after a DropdownItem is clicked", () => {
    const onEdit = vi.fn();
    render(
      <OverflowMenu label="Actions">
        <DropdownItem onClick={onEdit}>Edit</DropdownItem>
      </OverflowMenu>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Actions" }));
    fireEvent.click(screen.getByText("Edit"));
    expect(onEdit).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("menu")).toBeNull();
  });

  it("closes on Escape", () => {
    render(
      <OverflowMenu label="Actions">
        <DropdownItem>Edit</DropdownItem>
      </OverflowMenu>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Actions" }));
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("menu")).toBeNull();
  });

  it("closes on outside mousedown", () => {
    render(
      <div>
        <button type="button">Outside</button>
        <OverflowMenu label="Actions">
          <DropdownItem>Edit</DropdownItem>
        </OverflowMenu>
      </div>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Actions" }));
    fireEvent.mouseDown(screen.getByRole("button", { name: "Outside" }));
    expect(screen.queryByRole("menu")).toBeNull();
  });

  it("fires onOpen / onClose lifecycle callbacks", () => {
    const onOpen = vi.fn();
    const onClose = vi.fn();
    render(
      <OverflowMenu label="Actions" onOpen={onOpen} onClose={onClose}>
        <DropdownItem>Edit</DropdownItem>
      </OverflowMenu>,
    );
    const trigger = screen.getByRole("button", { name: "Actions" });
    fireEvent.click(trigger);
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).not.toHaveBeenCalled();

    fireEvent.click(trigger);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("renders a custom icon when provided", () => {
    render(
      <OverflowMenu label="Actions" icon={<span data-testid="custom-icon">●</span>}>
        <DropdownItem>Edit</DropdownItem>
      </OverflowMenu>,
    );
    expect(screen.getByTestId("custom-icon")).toBeTruthy();
  });
});
