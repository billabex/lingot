import type { HTMLAttributes } from "react";
import {
  paginationRecipe,
  paginationInfoRecipe,
  paginationButtonRecipe,
} from "./pagination.recipe";
import type { PaginationSize } from "./pagination.recipe";

export interface PaginationProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Current page, 1-indexed. */
  page: number;
  /** Total number of items across all pages. */
  total: number;
  /** Items per page. */
  pageSize: number;
  /** Fired with the next page (1-indexed) when Prev / Next is pressed. */
  onChange: (page: number) => void;
  /** Visual size. `sm` is the panel-light variant (chevrons + range). */
  size?: PaginationSize;
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
 * Pagination — A minimal prev/next + range pager for list panels.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Pagination({
  page,
  total,
  pageSize,
  onChange,
  size = "sm",
  formatLabel = defaultFormat,
  prevLabel = "Previous page",
  nextLabel = "Next page",
  className,
  ...rest
}: PaginationProps) {
  const safeTotal = Math.max(0, total);
  const safePageSize = Math.max(1, pageSize);
  const totalPages = Math.max(1, Math.ceil(safeTotal / safePageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = safeTotal === 0 ? 0 : (currentPage - 1) * safePageSize + 1;
  const end = Math.min(currentPage * safePageSize, safeTotal);

  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  return (
    <div
      className={`${paginationRecipe({ size })}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      <button
        type="button"
        className={paginationButtonRecipe()}
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
      <span className={paginationInfoRecipe()}>
        {formatLabel(start, end, safeTotal)}
      </span>
      <button
        type="button"
        className={paginationButtonRecipe()}
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
    </div>
  );
}
