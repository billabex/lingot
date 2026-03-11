import type { ButtonHTMLAttributes, ReactNode } from "react";
import { filterButtonRecipe } from "./filter-button.recipe";

export interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the filter is currently active */
  active?: boolean;
  /** Optional icon rendered before the label */
  leftIcon?: ReactNode;
  /** Optional icon rendered after the label */
  rightIcon?: ReactNode;
  /** Content to render inside the button */
  children: ReactNode;
}

/**
 * FilterButton — A toggle-style button used for filtering content.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function FilterButton({
  active = false,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: FilterButtonProps) {
  return (
    <button
      className={`${filterButtonRecipe({ active })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {leftIcon && (
        <span style={{ display: "inline-flex", flexShrink: 0, width: 16, height: 16 }}>
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span style={{ display: "inline-flex", flexShrink: 0, width: 12, height: 12 }}>
          {rightIcon}
        </span>
      )}
    </button>
  );
}
