import type { HTMLAttributes, ReactNode } from "react";
import { tableRowDetailRecipe } from "./table-row-detail.recipe";

export interface TableRowDetailProps extends HTMLAttributes<HTMLDivElement> {
  /** Detail panel content (meta + preview + actions) */
  children: ReactNode;
}

/**
 * TableRowDetail — Expanded detail panel rendered as a sibling after a `TableRow`.
 *
 * Consumers conditionally mount based on expanded state:
 *
 * ```tsx
 * <TableRow selected={open} onClick={toggle} accent="info">…</TableRow>
 * {open && <TableRowDetail>…</TableRowDetail>}
 * ```
 *
 * RSC-compatible.
 */
export function TableRowDetail({ children, className, ...props }: TableRowDetailProps) {
  return (
    <div
      role="row"
      className={`${tableRowDetailRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
