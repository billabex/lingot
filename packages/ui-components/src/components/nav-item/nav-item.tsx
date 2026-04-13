import type { ButtonHTMLAttributes, ReactNode } from "react";
import { navItemRecipe } from "./nav-item.recipe";
import type { NavItemVariant } from "./nav-item.recipe";

export interface NavItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual shape — `default` (horizontal with label) or `icon` (32×32 square, icon-only). */
  variant?: NavItemVariant;
  /** Whether this nav item is the current/active item */
  active?: boolean;
  /** Leading icon (16 px). Not used when `variant="icon"` — pass the icon as children instead. */
  leftIcon?: ReactNode;
  /** Trailing icon (16 px). Default variant only. */
  rightIcon?: ReactNode;
  /**
   * Content — the label for `variant="default"` or the icon element
   * (and optional overlay badge) for `variant="icon"`.
   */
  children: ReactNode;
}

/**
 * NavItem — A navigation menu item.
 *
 * Use `variant="icon"` for rail/tab-bar icon buttons. Icon variant is
 * `position: relative` so you can nest a `<NotificationBadge/>` overlay.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function NavItem({
  variant = "default",
  active = false,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: NavItemProps) {
  if (variant === "icon") {
    return (
      <button
        type="button"
        className={`${navItemRecipe({ variant, active })}${className ? ` ${className}` : ""}`}
        data-active={active || undefined}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`${navItemRecipe({ variant, active })}${className ? ` ${className}` : ""}`}
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
