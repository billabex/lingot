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

type ListItemAccent = "reply" | "info" | "success" | "warning" | "error";

export interface ListItemProps
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "onClick"> {
  /** Root element. Use `button` for clickable rows, `a` for links, `div` for static. */
  as?: "div" | "button" | "a";
  /** Left-border accent tone (2 px colored stripe). Omit for no accent. */
  accent?: ListItemAccent;
  /** Persistent selection state — applies `bg.muted`. */
  active?: boolean;
  /** Main title text (account name). `bodySm / 500 / text.primary`, truncated. */
  title: string;
  /** Right side of the title row — a status `<Badge/>` or a short meta string. */
  titleTrailing?: ReactNode;
  /** Subject / snippet line. `bodySm / regular / text.secondary`, truncated. */
  preview?: ReactNode;
  /** Horizontal row beneath the preview — e.g. amount + aging + time. */
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
 * ListItem — A single row in a list. Used in the Tasks queue and the
 * Communications thread list with the same layout.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function ListItem({
  as = "div",
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
        <div className={listItemPreviewRecipe()}>{preview}</div>
      ) : null}
      {meta ? <div className={listItemMetaRecipe()}>{meta}</div> : null}
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
