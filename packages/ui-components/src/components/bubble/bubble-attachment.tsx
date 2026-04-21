import type { AnchorHTMLAttributes, ReactNode } from "react";
import {
  bubbleAttachmentRecipe,
  bubbleAttachmentIconRecipe,
  bubbleAttachmentNameRecipe,
} from "./bubble-attachment.recipe";

export interface BubbleAttachmentProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** File name shown in the chip */
  name: ReactNode;
  /** Optional leading icon. Defaults to a generic file glyph. */
  icon?: ReactNode;
}

const DefaultFileIcon = () => (
  <svg width={14} height={14} viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M4 1.5h5L12.5 5v9a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5Z"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinejoin="round"
    />
    <path
      d="M9 1.5V5h3.5"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * BubbleAttachment — Inline file chip rendered inside a `<Bubble>`.
 * Renders as an `<a>` so `href`, `download`, `target` all work.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function BubbleAttachment({
  name,
  icon,
  className,
  ...props
}: BubbleAttachmentProps) {
  return (
    <a
      className={`${bubbleAttachmentRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      <span className={bubbleAttachmentIconRecipe()}>
        {icon ?? <DefaultFileIcon />}
      </span>
      <span className={bubbleAttachmentNameRecipe()}>{name}</span>
    </a>
  );
}
