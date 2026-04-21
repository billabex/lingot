import type { HTMLAttributes } from "react";
import { statusDotRecipe, type StatusDotSize, type StatusDotTone } from "./status-dot.recipe";

export interface StatusDotProps extends HTMLAttributes<HTMLSpanElement> {
  /** Dot size — `medium` = 8px, `small` = 6px */
  size?: StatusDotSize;
  /** Semantic tone */
  tone?: StatusDotTone;
  /** Accessible label. If provided, `role="img"` is applied. */
  label?: string;
}

/**
 * StatusDot — A small circular indicator for semantic status.
 *
 * Decorative by default. Pass `label` for a screen-reader-announced meaning.
 * RSC-compatible (no `'use client'` needed).
 */
export function StatusDot({
  size = "medium",
  tone = "neutral",
  label,
  className,
  ...props
}: StatusDotProps) {
  return (
    <span
      className={`${statusDotRecipe({ size, tone })}${className ? ` ${className}` : ""}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      {...props}
    />
  );
}
