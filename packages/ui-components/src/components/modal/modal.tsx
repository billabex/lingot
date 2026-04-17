"use client";

import {
  useEffect,
  useId,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import {
  modalRecipe,
  modalHeaderRecipe,
  modalTitleRecipe,
  modalContentRecipe,
  modalFooterRecipe,
  type ModalSize,
} from "./modal.recipe";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  /** Modal title displayed in the header */
  title: string;
  /** Width preset. `sm` (360px) for confirmations, `md` (480px, default) for forms. */
  size?: ModalSize;
  /** Optional close button in the header */
  closeButton?: ReactNode;
  /** Optional footer content (e.g. action buttons) */
  footer?: ReactNode;
  /** Modal body content */
  children: ReactNode;
  /** Called when the user presses Escape. Consumers typically unmount the modal in response. */
  onClose?: () => void;
}

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function getFocusables(root: HTMLElement | null): HTMLElement[] {
  if (!root) return [];
  return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (el) => !el.hasAttribute("disabled") && el.tabIndex !== -1,
  );
}

/**
 * Modal — A dialog container with header, content, and footer.
 *
 * Manages its own focus lifecycle: focuses the first focusable element on
 * mount, traps Tab navigation inside the dialog, and restores focus to the
 * previously active element when unmounted. Escape triggers the optional
 * `onClose` callback — consumers are responsible for unmounting the modal.
 *
 * Client component — requires `"use client"` in Next.js.
 */
export function Modal({
  title,
  size = "md",
  closeButton,
  footer,
  children,
  onClose,
  className,
  ...props
}: ModalProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const focusables = getFocusables(rootRef.current);
    (focusables[0] ?? rootRef.current)?.focus();
    return () => {
      previousFocus?.focus?.();
    };
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose?.();
        return;
      }
      if (event.key !== "Tab") return;
      const focusables = getFocusables(rootRef.current);
      if (focusables.length === 0) {
        event.preventDefault();
        rootRef.current?.focus();
        return;
      }
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      const active = document.activeElement as HTMLElement | null;
      if (event.shiftKey && (active === first || !rootRef.current?.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !rootRef.current?.contains(active))) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      tabIndex={-1}
      className={`${modalRecipe({ size })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      <div className={modalHeaderRecipe()}>
        <span id={titleId} className={modalTitleRecipe()}>{title}</span>
        {closeButton && closeButton}
      </div>
      <div className={modalContentRecipe()}>
        {children}
      </div>
      {footer && (
        <div className={modalFooterRecipe()}>
          {footer}
        </div>
      )}
    </div>
  );
}
