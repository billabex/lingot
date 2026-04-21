import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import {
  tableSortHeaderRecipe,
  tableSortIconRecipe,
} from "./table-sort-header.recipe";

export type TableSortDirection = "asc" | "desc";

export interface TableSortHeaderProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children: ReactNode;
  /** Whether this column is the active sort column. Default `false`. */
  active?: boolean;
  /** Sort direction. Always `asc` | `desc` — a sortable column always has a chevron; rotation indicates direction. Defaults to `desc`. */
  direction?: TableSortDirection;
}

/**
 * TableSortHeader — A clickable header cell with a sort-direction indicator.
 *
 * Every sortable column shows a chevron at all times. The `active` column renders
 * label + chevron in `text.primary`; idle columns inherit the header's tertiary color.
 * Parent owns the sort state (which column + direction) and handles `onClick`.
 *
 * RSC-compatible.
 */
export function TableSortHeader({
  children,
  active = false,
  direction = "desc",
  className,
  ...props
}: TableSortHeaderProps) {
  return (
    <button
      type="button"
      aria-sort={active ? (direction === "asc" ? "ascending" : "descending") : "none"}
      className={`${tableSortHeaderRecipe({ active })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      <span>{children}</span>
      <span className={tableSortIconRecipe({ direction, active })}>
        <ChevronDown size={12} strokeWidth={2} />
      </span>
    </button>
  );
}
