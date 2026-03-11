import type { HTMLAttributes, ReactNode } from "react";
import { tooltipRecipe } from "./tooltip.recipe";

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  /** Tooltip content */
  children: ReactNode;
}

/**
 * Tooltip — A small informational tooltip bubble.
 *
 * This is the visual atom only. Positioning/triggering is handled at a higher level.
 * RSC-compatible (no `'use client'` needed).
 */
export function Tooltip({
  children,
  className,
  ...props
}: TooltipProps) {
  return (
    <div
      role="tooltip"
      className={`${tooltipRecipe({})}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
