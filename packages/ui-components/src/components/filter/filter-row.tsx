import type { HTMLAttributes, ReactNode } from "react";
import { filterRowRecipe } from "./filter-row.recipe";

export interface FilterRowProps extends HTMLAttributes<HTMLDivElement> {
  /** FilterButton children */
  children: ReactNode;
}

/**
 * FilterRow — A horizontal row of filter buttons.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function FilterRow({
  children,
  className,
  ...props
}: FilterRowProps) {
  return (
    <div
      className={`${filterRowRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
