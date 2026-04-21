import type { HTMLAttributes, ReactNode } from "react";
import { chipGroupRecipe } from "./chip-group.recipe";

export interface ChipGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Chip children */
  children: ReactNode;
}

/**
 * ChipGroup — A horizontal, wrapping row of `<Chip/>` items.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function ChipGroup({ children, className, ...props }: ChipGroupProps) {
  return (
    <div
      className={`${chipGroupRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
