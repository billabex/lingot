import type { HTMLAttributes, ReactNode } from "react";
import { bubbleRecipe, type BubbleSide } from "./bubble.recipe";

export interface BubbleProps extends HTMLAttributes<HTMLDivElement> {
  /** Which side of the conversation the bubble belongs to */
  side?: BubbleSide;
  /** Bubble content */
  children: ReactNode;
}

/**
 * Bubble — A single chat message. Pair with `<BubbleGroup>` to render an
 * author + date header and stack consecutive bubbles from the same speaker.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Bubble({
  side = "agent",
  children,
  className,
  ...props
}: BubbleProps) {
  return (
    <div
      className={`${bubbleRecipe({ side })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
