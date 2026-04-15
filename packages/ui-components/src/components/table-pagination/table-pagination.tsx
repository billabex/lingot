import type { HTMLAttributes } from "react";
import {
  tablePaginationRecipe,
  tablePaginationInfoRecipe,
  tablePaginationControlsRecipe,
  tablePaginationButtonRecipe,
} from "./table-pagination.recipe";

export interface TablePaginationProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Current page, 1-indexed. */
  page: number;
  /** Total number of items across all pages. */
  total: number;
  /** Items per page. */
  pageSize: number;
  /** Fired with the next page (1-indexed) when a control is pressed. */
  onChange: (page: number) => void;
  /** Custom range label on the left side. Defaults to `${start}–${end} of ${total}`. */
  formatLabel?: (start: number, end: number, total: number) => string;
  /** Accessible label for the Prev button. */
  prevLabel?: string;
  /** Accessible label for the Next button. */
  nextLabel?: string;
}

const defaultFormat = (start: number, end: number, total: number) =>
  `${start}–${end} of ${total}`;

/**
 * TablePagination — Full-width pager for data tables. Left side shows the
 * range label; right side shows Prev + numbered page buttons + Next.
 *
 * Mirrors the prototype pattern (accounts / comms full-screen tables).
 * For compact prev/next pagers inside list panels, use `ListPagination`.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function TablePagination({
  page,
  total,
  pageSize,
  onChange,
  formatLabel = defaultFormat,
  prevLabel = "Previous page",
  nextLabel = "Next page",
  className,
  ...rest
}: TablePaginationProps) {
  const safeTotal = Math.max(0, total);
  const safePageSize = Math.max(1, pageSize);
  const totalPages = Math.max(1, Math.ceil(safeTotal / safePageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = safeTotal === 0 ? 0 : (currentPage - 1) * safePageSize + 1;
  const end = Math.min(currentPage * safePageSize, safeTotal);

  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      className={`${tablePaginationRecipe()}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      <span className={tablePaginationInfoRecipe()}>
        {formatLabel(start, end, safeTotal)}
      </span>
      <div className={tablePaginationControlsRecipe()}>
        <button
          type="button"
          className={tablePaginationButtonRecipe()}
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
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            className={tablePaginationButtonRecipe({ active: p === currentPage })}
            aria-label={`Page ${p}`}
            aria-current={p === currentPage ? "page" : undefined}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        ))}
        <button
          type="button"
          className={tablePaginationButtonRecipe()}
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
    </div>
  );
}
