import type { ButtonHTMLAttributes, ReactNode } from "react";
import { dropdownItemRecipe } from "./dropdown-item.recipe";

export interface DropdownItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether this item is selected */
  selected?: boolean;
  /** Optional icon before the label (16px) */
  leftIcon?: ReactNode;
  /** Optional icon after the label (12px) */
  rightIcon?: ReactNode;
  /** Item label */
  children: ReactNode;
}

/**
 * DropdownItem — A menu/dropdown item.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function DropdownItem({
  selected = false,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: DropdownItemProps) {
  return (
    <button
      role="menuitem"
      className={`${dropdownItemRecipe({ selected })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {leftIcon && (
        <span style={{ display: "inline-flex", flexShrink: 0, width: 16, height: 16 }}>
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span style={{ display: "inline-flex", flexShrink: 0, width: 12, height: 12, marginLeft: "auto" }}>
          {rightIcon}
        </span>
      )}
    </button>
  );
}
