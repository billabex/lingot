import type { HTMLAttributes, ReactNode } from "react";
import {
  modalRecipe,
  modalHeaderRecipe,
  modalTitleRecipe,
  modalContentRecipe,
  modalFooterRecipe,
} from "./modal.recipe";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  /** Modal title displayed in the header */
  title: string;
  /** Optional close button in the header */
  closeButton?: ReactNode;
  /** Optional footer content (e.g. action buttons) */
  footer?: ReactNode;
  /** Modal body content */
  children: ReactNode;
}

/**
 * Modal — A dialog container with header, content, and footer.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Modal({
  title,
  closeButton,
  footer,
  children,
  className,
  ...props
}: ModalProps) {
  return (
    <div
      role="dialog"
      aria-label={title}
      className={`${modalRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      <div className={modalHeaderRecipe()}>
        <span className={modalTitleRecipe()}>{title}</span>
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
