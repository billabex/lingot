import type { HTMLAttributes, ReactNode } from "react";
import {
  listItemRecipe,
  listItemTitleRecipe,
  listItemMetaRecipe,
  listItemPreviewRecipe,
  listItemRowRecipe,
} from "./list-item.recipe";

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Main title text */
  title: string;
  /** Right side metadata (e.g., time) */
  meta?: string;
  /** Second line preview text */
  preview?: string;
  /** Badge or icon on the right of preview */
  badge?: ReactNode;
  /** Selected state */
  selected?: boolean;
}

/**
 * ListItem — A single item in a conversation or message list.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function ListItem({
  title,
  meta,
  preview,
  badge,
  selected = false,
  className,
  ...props
}: ListItemProps) {
  return (
    <div
      className={`${listItemRecipe({ selected })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {/* Top row: title + meta */}
      <div className={listItemRowRecipe()}>
        <span className={listItemTitleRecipe()}>{title}</span>
        {meta && <span className={listItemMetaRecipe()}>{meta}</span>}
      </div>

      {/* Preview row: preview + badge */}
      {preview && (
        <div className={listItemRowRecipe()}>
          <span className={listItemPreviewRecipe()}>{preview}</span>
          {badge && <div>{badge}</div>}
        </div>
      )}
    </div>
  );
}
