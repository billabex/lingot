import type { HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import {
  listItemRecipe,
  listItemTitleRowRecipe,
  listItemTitleRecipe,
  listItemTitleTrailingRecipe,
  listItemPreviewRecipe,
  listItemMetaRecipe,
  listItemSubRecipe,
} from "./list-item.recipe.js";

type ListItemVariant = "task" | "thread";
type ListItemAccent = "reply" | "info" | "success" | "warning" | "error";

export interface ListItemProps
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "onClick"> {
  /** Root element. Use `button` for clickable rows, `a` for links, `div` for static. */
  as?: "div" | "button" | "a";
  /** Visual shape. `task` (rounded, no divider) or `thread` (flat, bottom divider). */
  variant?: ListItemVariant;
  /** Left-border accent tone (2 px colored stripe). Omit for no accent. */
  accent?: ListItemAccent;
  /** Persistent selection state — applies `bg.muted`. */
  active?: boolean;
  /** Main title text (account name). `bodySm / 500 / text.primary`, truncated. */
  title: string;
  /** Right side of the title row — a status `<Badge/>` (task) or a date string (thread). */
  titleTrailing?: ReactNode;
  /** Subject / snippet line. `bodySm` (task) or `caption` (thread), secondary, truncated. */
  preview?: ReactNode;
  /** Horizontal row beneath the preview — amount + aging + time (task) or badge + contact (thread). */
  meta?: ReactNode;
  /** Tertiary line at the bottom — `captionXs / tertiary`. */
  sub?: ReactNode;
  /** Anchor href — only used when `as="a"`. */
  href?: string;
  /** Disabled state — only meaningful when `as="button"`. */
  disabled?: boolean;
  /** Click handler. Works for any `as`. */
  onClick?: MouseEventHandler<HTMLElement>;
}

/**
 * ListItem — A single row in a list. Used in the Tasks list (variant="task")
 * and the Communications thread list (variant="thread").
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function ListItem({
  as = "div",
  variant = "task",
  accent,
  active = false,
  title,
  titleTrailing,
  preview,
  meta,
  sub,
  href,
  disabled,
  onClick,
  className,
  ...rest
}: ListItemProps) {
  const clickable = as === "button" || as === "a";
  const rootClass = `${listItemRecipe({
    variant,
    accent: accent ?? "none",
    active,
    clickable,
  })}${className ? ` ${className}` : ""}`;

  const body = (
    <>
      <div className={listItemTitleRowRecipe()}>
        <span className={listItemTitleRecipe()}>{title}</span>
        {titleTrailing ? (
          <div className={listItemTitleTrailingRecipe()}>{titleTrailing}</div>
        ) : null}
      </div>
      {preview ? (
        <div className={listItemPreviewRecipe({ variant })}>{preview}</div>
      ) : null}
      {meta ? (
        <div className={listItemMetaRecipe({ variant })}>{meta}</div>
      ) : null}
      {sub ? <div className={listItemSubRecipe()}>{sub}</div> : null}
    </>
  );

  if (as === "button") {
    return (
      <button
        type="button"
        className={rootClass}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {body}
      </button>
    );
  }

  if (as === "a") {
    return (
      <a className={rootClass} href={href} onClick={onClick} {...rest}>
        {body}
      </a>
    );
  }

  return (
    <div className={rootClass} onClick={onClick} {...rest}>
      {body}
    </div>
  );
}
