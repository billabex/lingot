import type { HTMLAttributes, ReactNode } from "react";
import { badgeRecipe } from "./badge.recipe";
import type { BadgeShape, BadgeVariant } from "./badge.recipe";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Color variant */
  variant?: BadgeVariant;
  /** Visual shape — `pill` (default, rounded-full) or `square` (rounded-xs, padded for counts). */
  shape?: BadgeShape;
  /** Optional icon before the label (12px) */
  leftIcon?: ReactNode;
  /** Optional icon after the label (12px) */
  rightIcon?: ReactNode;
  /** Badge content */
  children: ReactNode;
}

/**
 * Badge — A small status indicator.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Badge({
  variant = "neutral",
  shape = "pill",
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`${badgeRecipe({ variant, shape })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {leftIcon && (
        <span style={{ display: "inline-flex", flexShrink: 0, width: 12, height: 12 }}>
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span style={{ display: "inline-flex", flexShrink: 0, width: 12, height: 12 }}>
          {rightIcon}
        </span>
      )}
    </span>
  );
}
