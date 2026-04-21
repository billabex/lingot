import type { HTMLAttributes, ReactNode } from "react";
import { avatarRecipe, type AvatarSize } from "./avatar.recipe";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Avatar size — small (24px), medium (32px, default), large (40px) */
  size?: AvatarSize;
  /** Initials (typically 1–2 characters). Takes precedence over `icon`. */
  initials?: string;
  /** Fallback icon rendered when `initials` is absent. */
  icon?: ReactNode;
  /** Accessible label. When provided, the avatar gets `role="img"`. */
  label?: string;
  /** Optional background tone override. Accepts any CSS color; contents render in white for contrast. Intended for categorical display (e.g. by persona, status, or source). */
  tone?: string;
}

/**
 * Avatar — A circular display primitive for people and accounts.
 *
 * Decorative by default. Pass `label` to expose it to assistive tech.
 * Non-interactive: wrap in `ListItem` or `<a>` to make rows clickable.
 * RSC-compatible (no `'use client'` needed).
 */
export function Avatar({
  size = "medium",
  initials,
  icon,
  label,
  tone,
  className,
  style,
  ...props
}: AvatarProps) {
  const content = initials ? <span aria-hidden="true">{initials}</span> : icon ?? null;
  const mergedStyle = tone ? { ...style, background: tone, color: "#fff" } : style;

  return (
    <span
      className={`${avatarRecipe({ size })}${className ? ` ${className}` : ""}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={mergedStyle}
      {...props}
    >
      {content}
    </span>
  );
}
