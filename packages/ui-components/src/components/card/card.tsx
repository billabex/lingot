import type { HTMLAttributes, ReactNode } from "react";
import { cardRecipe } from "./card.recipe";
import type { CardVariant } from "./card.recipe";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual variant */
  variant?: CardVariant;
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
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={`${cardRecipe({ variant })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
