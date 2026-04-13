import type { HTMLAttributes, ReactNode } from "react";
import {
  sidebarRecipe,
  sidebarHeaderRecipe,
  sidebarContentRecipe,
  sidebarFooterRecipe,
} from "./sidebar.recipe";
import type { SidebarVariant } from "./sidebar.recipe";

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /** Visual shape — `default` (auto-width shell) or `rail` (48 px icon rail). */
  variant?: SidebarVariant;
  /** Header content (e.g. a logo tile) */
  header?: ReactNode;
  /** Footer content (e.g. settings / account icon) */
  footer?: ReactNode;
  /** Main navigation content */
  children: ReactNode;
}

/**
 * Sidebar — A vertical navigation container with optional header and footer.
 * Use `variant="rail"` for the 48 px icon-only rail.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Sidebar({
  variant = "default",
  header,
  footer,
  children,
  className,
  ...props
}: SidebarProps) {
  return (
    <nav
      role="navigation"
      className={`${sidebarRecipe({ variant })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {header && <div className={sidebarHeaderRecipe()}>{header}</div>}
      <div className={sidebarContentRecipe()}>{children}</div>
      {footer && <div className={sidebarFooterRecipe()}>{footer}</div>}
    </nav>
  );
}
