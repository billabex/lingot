import type { HTMLAttributes, KeyboardEvent, ReactNode } from "react";
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
  /** When true, the row advertises itself as clickable: cursor pointer, focusable, focus-visible ring, and Enter/Space invoke the row's `onClick`. In-row action buttons must call `e.stopPropagation()` to prevent row activation. */
  interactive?: boolean;
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
  interactive = false,
  className,
  onKeyDown,
  tabIndex,
  ...props
}: TableRowProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);
    if (!interactive || event.defaultPrevented) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.currentTarget.click();
    }
  };
  return (
    <div
      role="row"
      aria-selected={selected}
      tabIndex={interactive ? (tabIndex ?? 0) : tabIndex}
      onKeyDown={interactive ? handleKeyDown : onKeyDown}
      className={`${tableRowRecipe({ selected, density, accent, interactive })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
