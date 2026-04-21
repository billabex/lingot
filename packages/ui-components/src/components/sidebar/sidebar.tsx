import type { HTMLAttributes, ReactNode } from "react";
import {
  sidebarRecipe,
  sidebarHeaderRecipe,
  sidebarContentRecipe,
} from "./sidebar.recipe";

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /** Header content (e.g. a logo tile / company dropdown trigger) */
  header?: ReactNode;
  /** Main navigation content */
  children: ReactNode;
}

/**
 * Sidebar — 48 px vertical icon rail with optional header.
 * Transparent background — the surrounding layout owns the color.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Sidebar({
  header,
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
    </nav>
  );
}
