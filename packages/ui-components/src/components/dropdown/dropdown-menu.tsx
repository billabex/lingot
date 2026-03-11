import type { HTMLAttributes, ReactNode } from "react";
import { dropdownMenuRecipe } from "./dropdown-menu.recipe";

export interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
  /** DropdownItem and Divider children */
  children: ReactNode;
}

/**
 * DropdownMenu — A floating list of actions or options.
 *
 * Compose with `DropdownItem` and `Divider` children.
 * RSC-compatible (no `'use client'` needed).
 */
export function DropdownMenu({
  children,
  className,
  ...props
}: DropdownMenuProps) {
  return (
    <div
      role="menu"
      className={`${dropdownMenuRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
