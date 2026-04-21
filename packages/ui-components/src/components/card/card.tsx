import type { HTMLAttributes, KeyboardEvent, ReactNode } from "react";
import { cardRecipe } from "./card.recipe";
import type { CardVariant } from "./card.recipe";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual variant */
  variant?: CardVariant;
  /** When true, the card advertises itself as clickable: cursor pointer, focusable, focus-visible ring, and Enter/Space invoke the card's `onClick`. Consumers own ARIA (`role`, `aria-pressed`, `aria-checked`, etc.). */
  interactive?: boolean;
  /** Selected state. With `interactive`, renders the primary-accent border + a subtle background tint. */
  selected?: boolean;
  /** Optional 3px left-edge accent stripe. Accepts any CSS color; intended for visual categorization (e.g. by source, priority, or persona). */
  accent?: string;
  /** Card content */
  children: ReactNode;
}

/**
 * Card — A container with border and optional elevation.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Card({
  variant = "flat",
  interactive = false,
  selected = false,
  accent,
  children,
  className,
  onKeyDown,
  tabIndex,
  style,
  ...props
}: CardProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);
    if (!interactive || event.defaultPrevented) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.currentTarget.click();
    }
  };
  const mergedStyle = accent
    ? { ...style, borderLeftWidth: "3px", borderLeftColor: accent }
    : style;
  return (
    <div
      tabIndex={interactive ? (tabIndex ?? 0) : tabIndex}
      onKeyDown={interactive ? handleKeyDown : onKeyDown}
      className={`${cardRecipe({ variant, interactive, selected })}${className ? ` ${className}` : ""}`}
      style={mergedStyle}
      {...props}
    >
      {children}
    </div>
  );
}
