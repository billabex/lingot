import type { HTMLAttributes } from "react";
import {
  detailNavRecipe,
  detailNavButtonRecipe,
  detailNavPositionRecipe,
} from "./detail-nav.recipe";

export interface DetailNavProps extends HTMLAttributes<HTMLDivElement> {
  /** Current position, 1-indexed. */
  current: number;
  /** Total number of records. */
  total: number;
  /** Fired when Prev is pressed. Disabled when `current <= 1`. */
  onPrev?: () => void;
  /** Fired when Next is pressed. Disabled when `current >= total`. */
  onNext?: () => void;
  /** Visible label for the Prev button. */
  prevLabel?: string;
  /** Visible label for the Next button. */
  nextLabel?: string;
  /** Custom position formatter. Defaults to `${current} / ${total}`. */
  formatPosition?: (current: number, total: number) => string;
}

const ChevronLeft = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const defaultFormatPosition = (current: number, total: number) =>
  `${current} / ${total}`;

/**
 * DetailNav — Previous / position / Next navigation for record detail views.
 *
 * Used at the top of a detail page to step through sibling records
 * (e.g. invoices within an account). For paged lists/tables, use
 * `ListPagination` or `TablePagination` instead.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function DetailNav({
  current,
  total,
  onPrev,
  onNext,
  prevLabel = "Previous",
  nextLabel = "Next",
  formatPosition = defaultFormatPosition,
  className,
  ...rest
}: DetailNavProps) {
  const safeTotal = Math.max(0, total);
  const safeCurrent =
    safeTotal === 0 ? 0 : Math.min(Math.max(1, current), safeTotal);
  const prevDisabled = safeCurrent <= 1;
  const nextDisabled = safeCurrent >= safeTotal;

  return (
    <div
      className={`${detailNavRecipe()}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      <button
        type="button"
        className={detailNavButtonRecipe()}
        disabled={prevDisabled}
        onClick={onPrev}
      >
        <ChevronLeft />
        {prevLabel}
      </button>
      <span className={detailNavPositionRecipe()}>
        {formatPosition(safeCurrent, safeTotal)}
      </span>
      <button
        type="button"
        className={detailNavButtonRecipe()}
        disabled={nextDisabled}
        onClick={onNext}
      >
        {nextLabel}
        <ChevronRight />
      </button>
    </div>
  );
}
