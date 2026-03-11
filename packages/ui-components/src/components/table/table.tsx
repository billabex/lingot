import type { HTMLAttributes, ReactNode } from "react";
import { tableRecipe, tableHeaderRecipe } from "./table.recipe";

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  /** Table header row content (column labels) */
  header?: ReactNode;
  /** Table body content (TableRow children or EmptyState) */
  children: ReactNode;
}

/**
 * Table — A data table container with an optional header row.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Table({ header, children, className, ...props }: TableProps) {
  return (
    <div
      role="table"
      className={`${tableRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {header && (
        <div role="rowgroup" className={tableHeaderRecipe()}>
          {header}
        </div>
      )}
      {children}
    </div>
  );
}
