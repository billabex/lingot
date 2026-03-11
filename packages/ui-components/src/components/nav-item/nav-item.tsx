import type { ButtonHTMLAttributes, ReactNode } from "react";
import { navItemRecipe } from "./nav-item.recipe";

export interface NavItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether this nav item is the current/active item */
  active?: boolean;
  /** Optional icon before the label (16px) */
  leftIcon?: ReactNode;
  /** Optional icon after the label (16px) */
  rightIcon?: ReactNode;
  /** Nav item label */
  children: ReactNode;
}

/**
 * NavItem — A navigation menu item.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function NavItem({
  active = false,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: NavItemProps) {
  return (
    <button
      className={`${navItemRecipe({ active })}${className ? ` ${className}` : ""}`}
      data-active={active || undefined}
      {...props}
    >
      {leftIcon && (
        <span style={{ display: "inline-flex", flexShrink: 0, width: 16, height: 16 }}>
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span style={{ display: "inline-flex", flexShrink: 0, width: 16, height: 16, marginLeft: "auto" }}>
          {rightIcon}
        </span>
      )}
    </button>
  );
}
