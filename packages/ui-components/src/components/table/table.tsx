import { Children, cloneElement, isValidElement, type HTMLAttributes, type ReactNode } from "react";
import { tableRecipe, tableHeaderRecipe, type TableDensity } from "./table.recipe";
import { TableRow } from "./table-row";

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  /** Table header row content (column labels) */
  header?: ReactNode;
  /** Table body content (TableRow children or EmptyState) */
  children: ReactNode;
  /** Row density. `compact` uses smaller padding + 12px text (TaskComms). `normal` uses 13px text (full-width Comms module). */
  density?: TableDensity;
}

/**
 * Table — A data table container with an optional header row.
 *
 * Propagates `density` to direct `TableRow` children (unless they set their own).
 * RSC-compatible (no `'use client'` needed).
 */
export function Table({
  header,
  children,
  density = "normal",
  className,
  ...props
}: TableProps) {
  const rows = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    if (child.type !== TableRow) return child;
    const rowProps = child.props as { density?: TableDensity };
    if (rowProps.density) return child;
    return cloneElement(child, { density } as Partial<typeof rowProps>);
  });

  return (
    <div
      role="table"
      className={`${tableRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {header && (
        <div role="rowgroup" className={tableHeaderRecipe({ density })}>
          {header}
        </div>
      )}
      {rows}
    </div>
  );
}
