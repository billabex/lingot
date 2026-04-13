import type { HTMLAttributes } from "react";
import { notificationBadgeRecipe } from "./notification-badge.recipe";

export interface NotificationBadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Count to display. When `0`, the badge is hidden unless `showZero` is set. */
  count: number;
  /** Threshold above which the count is displayed as `${max}+`. Defaults to 99. */
  max?: number;
  /** Render the badge even when `count === 0`. */
  showZero?: boolean;
  /** Accessible label. Defaults to `${count} new`. */
  "aria-label"?: string;
}

/**
 * NotificationBadge — Overlay count pill for icons (e.g. nav items).
 *
 * Absolutely positioned at top-right of its relatively-positioned parent.
 * The 2 px `bg.subtle` border creates a halo that separates the badge
 * from the surrounding rail background.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function NotificationBadge({
  count,
  max = 99,
  showZero = false,
  className,
  "aria-label": ariaLabel,
  ...rest
}: NotificationBadgeProps) {
  if (count <= 0 && !showZero) return null;

  const display = count > max ? `${max}+` : `${count}`;
  const label = ariaLabel ?? `${count} new`;

  return (
    <span
      aria-label={label}
      className={`${notificationBadgeRecipe()}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {display}
    </span>
  );
}
