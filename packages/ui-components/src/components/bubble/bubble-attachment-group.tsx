import type { HTMLAttributes, ReactNode } from "react";
import { bubbleAttachmentGroupRecipe } from "./bubble-attachment.recipe";

export interface BubbleAttachmentGroupProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * BubbleAttachmentGroup — Wraps one or more `<BubbleAttachment>` chips inside
 * a `<Bubble>` with consistent flex/wrap/gap.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function BubbleAttachmentGroup({
  children,
  className,
  ...props
}: BubbleAttachmentGroupProps) {
  return (
    <div
      className={`${bubbleAttachmentGroupRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
