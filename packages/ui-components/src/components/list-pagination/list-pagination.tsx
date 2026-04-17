import type { HTMLAttributes } from "react";
import {
  listPaginationRecipe,
  listPaginationInfoRecipe,
  listPaginationButtonRecipe,
} from "./list-pagination.recipe";

export interface ListPaginationProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  /** Current page, 1-indexed. */
  page: number;
  /** Total number of items across all pages. */
  total: number;
  /** Items per page. */
  pageSize: number;
  /** Fired with the next page (1-indexed) when Prev / Next is pressed. */
  onChange: (page: number) => void;
  /** Custom range label. Defaults to `${start}–${end} of ${total}`. */
  formatLabel?: (start: number, end: number, total: number) => string;
  /** Accessible label for the Prev button. */
  prevLabel?: string;
  /** Accessible label for the Next button. */
  nextLabel?: string;
}

const defaultFormat = (start: number, end: number, total: number) =>
  `${start}–${end} of ${total}`;

/**
 * ListPagination — A minimal prev/next + range pager for list panels.
 * For numbered pagination inside tables, use `TablePagination` (coming later).
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function ListPagination({
  page,
  total,
  pageSize,
  onChange,
  formatLabel = defaultFormat,
  prevLabel = "Previous page",
  nextLabel = "Next page",
  className,
  "aria-label": ariaLabel = "Pagination",
  ...rest
}: ListPaginationProps) {
  const safeTotal = Math.max(0, total);
  const safePageSize = Math.max(1, pageSize);
  const totalPages = Math.max(1, Math.ceil(safeTotal / safePageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = safeTotal === 0 ? 0 : (currentPage - 1) * safePageSize + 1;
  const end = Math.min(currentPage * safePageSize, safeTotal);

  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  return (
    <nav
      aria-label={ariaLabel}
      className={`${listPaginationRecipe()}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      <button
        type="button"
        className={listPaginationButtonRecipe()}
        aria-label={prevLabel}
        disabled={prevDisabled}
        onClick={() => onChange(currentPage - 1)}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7.5 2.5L4 6l3.5 3.5" />
        </svg>
      </button>
      <span className={listPaginationInfoRecipe()}>
        {formatLabel(start, end, safeTotal)}
      </span>
      <button
        type="button"
        className={listPaginationButtonRecipe()}
        aria-label={nextLabel}
        disabled={nextDisabled}
        onClick={() => onChange(currentPage + 1)}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4.5 2.5L8 6l-3.5 3.5" />
        </svg>
      </button>
    </nav>
  );
}
