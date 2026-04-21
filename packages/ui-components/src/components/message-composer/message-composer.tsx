"use client";

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  type TextareaHTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { Paperclip, Send } from "lucide-react";
import { IconButton } from "../icon-button";
import {
  messageComposerRecipe,
  messageComposerTextareaRecipe,
  messageComposerToolbarRecipe,
  messageComposerSendRecipe,
} from "./message-composer.recipe";

type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value" | "onChange" | "defaultValue"
>;

export interface MessageComposerProps extends TextareaProps {
  /** Controlled value — pair with `onChange` */
  value?: string;
  /** Controlled change handler */
  onChange?: (value: string) => void;
  /** Uncontrolled initial value */
  defaultValue?: string;
  /** Fired when the user sends (click send or Cmd/Ctrl+Enter). Receives the current text. */
  onSend?: (value: string) => void;
  /** Fired when the attach button is clicked */
  onAttach?: () => void;
  /** Disable send when textarea is empty. Default true. */
  disableSendWhenEmpty?: boolean;
  /** Extra toolbar content rendered before the attach button */
  toolbarExtra?: ReactNode;
  /** When true, disables the textarea, attach button, and send button, and dims the surface. Use to render a read-only composer when the parent task is closed/cancelled. */
  disabled?: boolean;
}

/**
 * MessageComposer — Textarea with attach + send toolbar.
 *
 * Auto-grows between 32px and 160px. Cmd/Ctrl+Enter submits.
 */
export function MessageComposer({
  value,
  onChange,
  defaultValue = "",
  onSend,
  onAttach,
  disableSendWhenEmpty = true,
  toolbarExtra,
  placeholder = "Écrire un message...",
  disabled = false,
  className,
  ...textareaProps
}: MessageComposerProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const text = isControlled ? value : internalValue;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const autoGrow = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }, []);

  useEffect(autoGrow, [text, autoGrow]);

  const update = (next: string) => {
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  };

  const submit = () => {
    const trimmed = text.trim();
    if (disableSendWhenEmpty && !trimmed) return;
    onSend?.(text);
    if (!isControlled) setInternalValue("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      submit();
    }
    textareaProps.onKeyDown?.(e);
  };

  const sendDisabled = disabled || (disableSendWhenEmpty && !text.trim());

  return (
    <div
      className={`${messageComposerRecipe({ disabled })}${className ? ` ${className}` : ""}`}
    >
      <textarea
        ref={textareaRef}
        className={messageComposerTextareaRecipe()}
        value={text}
        onChange={(e) => update(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        rows={1}
        disabled={disabled}
        {...textareaProps}
      />
      <div className={messageComposerToolbarRecipe()}>
        {toolbarExtra}
        <IconButton
          type="button"
          icon={<Paperclip size={16} />}
          aria-label="Joindre un fichier"
          onClick={onAttach}
          disabled={disabled}
        />
        <button
          type="button"
          aria-label="Envoyer"
          onClick={submit}
          disabled={sendDisabled}
          className={messageComposerSendRecipe()}
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
