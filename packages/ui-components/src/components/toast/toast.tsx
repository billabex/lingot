import type { HTMLAttributes, ReactNode } from "react";
import { toastRecipe } from "./toast.recipe";
import type { ToastVariant } from "./toast.recipe";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  /** Color variant */
  variant?: ToastVariant;
  /** Optional icon on the left (16px) */
  icon?: ReactNode;
  /** Optional close button on the right */
  closeButton?: ReactNode;
  /** Toast content */
  children: ReactNode;
}

/**
 * Toast — A feedback notification message.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Toast({
  variant = "info",
  icon,
  closeButton,
  children,
  className,
  ...props
}: ToastProps) {
  return (
    <div
      role="status"
      className={`${toastRecipe({ variant })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {icon && (
          <span style={{ display: "inline-flex", flexShrink: 0, width: 16, height: 16 }}>
            {icon}
          </span>
        )}
        {children}
      </div>
      {closeButton && closeButton}
    </div>
  );
}
