import type { HTMLAttributes, ReactNode } from "react";
import {
  sidebarRecipe,
  sidebarHeaderRecipe,
  sidebarContentRecipe,
  sidebarFooterRecipe,
} from "./sidebar.recipe";

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /** Header content (e.g., logo icon button) */
  header?: ReactNode;
  /** Footer content (e.g., settings icon button) */
  footer?: ReactNode;
  /** Main navigation content */
  children: ReactNode;
}

/**
 * Sidebar — A vertical navigation container with optional header and footer.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Sidebar({
  header,
  footer,
  children,
  className,
  ...props
}: SidebarProps) {
  return (
    <nav
      role="navigation"
      className={`${sidebarRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {header && <div className={sidebarHeaderRecipe()}>{header}</div>}
      <div className={sidebarContentRecipe()}>{children}</div>
      {footer && <div className={sidebarFooterRecipe()}>{footer}</div>}
    </nav>
  );
}
