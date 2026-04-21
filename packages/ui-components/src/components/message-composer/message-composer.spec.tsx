import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { MessageComposer } from "./index";

afterEach(cleanup);

describe("MessageComposer", () => {
  it("renders a textarea with the default placeholder", () => {
    render(<MessageComposer />);
    expect(screen.getByPlaceholderText("Écrire un message...")).toBeTruthy();
  });

  it("renders attach and send buttons", () => {
    render(<MessageComposer />);
    expect(screen.getByLabelText("Joindre un fichier")).toBeTruthy();
    expect(screen.getByLabelText("Envoyer")).toBeTruthy();
  });

  it("disables send when empty by default", () => {
    render(<MessageComposer />);
    const send = screen.getByLabelText("Envoyer") as HTMLButtonElement;
    expect(send.disabled).toBe(true);
  });

  it("enables send once text is entered (uncontrolled)", () => {
    render(<MessageComposer />);
    const textarea = screen.getByPlaceholderText("Écrire un message...") as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: "hello" } });
    const send = screen.getByLabelText("Envoyer") as HTMLButtonElement;
    expect(send.disabled).toBe(false);
  });

  it("calls onSend with current text and clears it (uncontrolled)", () => {
    const onSend = vi.fn();
    render(<MessageComposer onSend={onSend} />);
    const textarea = screen.getByPlaceholderText("Écrire un message...") as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: "hello" } });
    fireEvent.click(screen.getByLabelText("Envoyer"));
    expect(onSend).toHaveBeenCalledWith("hello");
    expect(textarea.value).toBe("");
  });

  it("submits on Cmd+Enter", () => {
    const onSend = vi.fn();
    render(<MessageComposer onSend={onSend} />);
    const textarea = screen.getByPlaceholderText("Écrire un message...") as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: "hi" } });
    fireEvent.keyDown(textarea, { key: "Enter", metaKey: true });
    expect(onSend).toHaveBeenCalledWith("hi");
  });

  it("calls onAttach when the attach button is clicked", () => {
    const onAttach = vi.fn();
    render(<MessageComposer onAttach={onAttach} />);
    fireEvent.click(screen.getByLabelText("Joindre un fichier"));
    expect(onAttach).toHaveBeenCalled();
  });

  it("respects a controlled value", () => {
    const onChange = vi.fn();
    render(<MessageComposer value="abc" onChange={onChange} />);
    const textarea = screen.getByPlaceholderText("Écrire un message...") as HTMLTextAreaElement;
    expect(textarea.value).toBe("abc");
    fireEvent.change(textarea, { target: { value: "abcd" } });
    expect(onChange).toHaveBeenCalledWith("abcd");
  });

  it("disables every control when `disabled` is true, regardless of text", () => {
    render(<MessageComposer defaultValue="non-empty" disabled />);
    const textarea = screen.getByPlaceholderText("Écrire un message...") as HTMLTextAreaElement;
    const attach = screen.getByLabelText("Joindre un fichier") as HTMLButtonElement;
    const send = screen.getByLabelText("Envoyer") as HTMLButtonElement;
    expect(textarea.disabled).toBe(true);
    expect(attach.disabled).toBe(true);
    expect(send.disabled).toBe(true);
  });
});
