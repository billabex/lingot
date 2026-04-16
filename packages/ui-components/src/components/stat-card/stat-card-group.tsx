import type { HTMLAttributes, ReactNode } from "react";
import { statCardGroupRecipe } from "./stat-card-group.recipe";

export interface StatCardGroupProps extends HTMLAttributes<HTMLDListElement> {
  /** One or more `StatCard` children. */
  children: ReactNode;
}

/**
 * StatCardGroup — A bordered, bg.subtle container that lays out a row of
 * equal-width `StatCard` cells. Used at the top of detail views to surface
 * record-level KPIs (status, totals, balances).
 *
 * Renders as a `<dl>` so the contained `StatCard`s' `<dt>`/`<dd>` pairs are
 * semantically grouped for assistive tech.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function StatCardGroup({
  children,
  className,
  ...props
}: StatCardGroupProps) {
  return (
    <dl
      className={`${statCardGroupRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </dl>
  );
}
