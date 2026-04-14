import type { HTMLAttributes, ReactNode } from "react";
import { tableRowRecipe, type TableRowAccent } from "./table-row.recipe";
import type { TableDensity } from "./table.recipe";

export interface TableRowProps extends HTMLAttributes<HTMLDivElement> {
  /** Row content (cells) */
  children: ReactNode;
  /** Selected (active) state. Renders the accent left-border + a subtle background. Requires `accent` to be set to show colour. */
  selected?: boolean;
  /** Row density. Inherited from the parent `Table` when omitted. */
  density?: TableDensity;
  /** Left-border accent color — only rendered when `selected` is true. Typically bound to a row type (received / sent / planned). */
  accent?: TableRowAccent;
}

/**
 * TableRow — A generic table row container.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function TableRow({
  children,
  selected = false,
  density = "normal",
  accent = "none",
  className,
  ...props
}: TableRowProps) {
  return (
    <div
      role="row"
      aria-selected={selected}
      className={`${tableRowRecipe({ selected, density, accent })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
