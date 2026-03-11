import type { HTMLAttributes, ReactNode } from "react";
import { tableRowRecipe } from "./table-row.recipe";

export interface TableRowProps extends HTMLAttributes<HTMLDivElement> {
  /** Row content (cells) */
  children: ReactNode;
  /** Selected state */
  selected?: boolean;
}

/**
 * TableRow — A generic table row container.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function TableRow({
  children,
  selected = false,
  className,
  ...props
}: TableRowProps) {
  return (
    <div
      role="row"
      className={`${tableRowRecipe({ selected })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
