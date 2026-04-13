import type { HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import {
  listItemRecipe,
  listItemLeadingRecipe,
  listItemContentRecipe,
  listItemTitleRowRecipe,
  listItemTitleRecipe,
  listItemTitleTrailingRecipe,
  listItemPreviewRecipe,
  listItemSubRecipe,
  listItemTrailingRecipe,
} from "./list-item.recipe.js";

type ListItemAccent = "reply" | "info" | "success" | "warning" | "error";
type ListItemDensity = "default" | "compact";

export interface ListItemProps
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "onClick"> {
  /** Root element. Use `button` for clickable rows, `a` for links, `div` for static. */
  as?: "div" | "button" | "a";
  /** Left-border accent tone (3 px colored stripe). Omit for no accent. */
  accent?: ListItemAccent;
  /** Persistent selection state — applies `bg.muted`. */
  active?: boolean;
  /** Vertical density. */
  density?: ListItemDensity;
  /** Leading slot — icon, avatar, or status dot. */
  leading?: ReactNode;
  /** Main title text. Truncates with ellipsis. */
  title: string;
  /** Right side of the title row — badge, count, chip, etc. */
  titleTrailing?: ReactNode;
  /** Secondary preview / subtitle text. Truncates. Accepts ReactNode for
   *  composed content (e.g. amount + aging + time). */
  preview?: ReactNode;
  /** Tertiary line — captionXs (11/16/400) tertiary color. */
  sub?: ReactNode;
  /** Right rail — timestamp, count, action button. */
  trailing?: ReactNode;
  /** Anchor href — only used when `as="a"`. */
  href?: string;
  /** Disabled state — only meaningful when `as="button"`. */
  disabled?: boolean;
  /** Click handler. Works for any `as`. */
  onClick?: MouseEventHandler<HTMLElement>;
}

/**
 * ListItem — A single row in a list (task, conversation, message).
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function ListItem({
  as = "div",
  accent,
  active = false,
  density = "default",
  leading,
  title,
  titleTrailing,
  preview,
  sub,
  trailing,
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
    density,
    clickable,
  })}${className ? ` ${className}` : ""}`;

  const body = (
    <>
      {leading ? <div className={listItemLeadingRecipe()}>{leading}</div> : null}
      <div className={listItemContentRecipe()}>
        <div className={listItemTitleRowRecipe()}>
          <span className={listItemTitleRecipe()}>{title}</span>
          {titleTrailing ? (
            <div className={listItemTitleTrailingRecipe()}>{titleTrailing}</div>
          ) : null}
        </div>
        {preview ? <div className={listItemPreviewRecipe()}>{preview}</div> : null}
        {sub ? <div className={listItemSubRecipe()}>{sub}</div> : null}
      </div>
      {trailing ? <div className={listItemTrailingRecipe()}>{trailing}</div> : null}
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
