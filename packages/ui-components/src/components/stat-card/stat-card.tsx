import type { HTMLAttributes, ReactNode } from "react";
import {
  statCardRecipe,
  statCardLabelRecipe,
  statCardValueRecipe,
} from "./stat-card.recipe";

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Small uppercase label above the value. */
  label: ReactNode;
  /** The value slot — typically a formatted string or a `Badge`. */
  children: ReactNode;
}

/**
 * StatCard — A single KPI cell: small uppercase label above a prominent value.
 *
 * Renders as a `<dt>`/`<dd>` pair so screen readers announce the label-value
 * relationship. Must be wrapped in a `StatCardGroup` (a `<dl>`).
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function StatCard({ label, children, className, ...props }: StatCardProps) {
  return (
    <div
      className={`${statCardRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      <dt className={statCardLabelRecipe()}>{label}</dt>
      <dd className={statCardValueRecipe()}>{children}</dd>
    </div>
  );
}
