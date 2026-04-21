import type { ButtonHTMLAttributes, HTMLAttributes, MouseEventHandler } from "react";
import { Avatar } from "../avatar";
import {
  contactCardRecipe,
  contactCardBodyRecipe,
  contactCardNameRecipe,
  contactCardEmailRecipe,
  contactCardLanguageRecipe,
} from "./contact-card.recipe";

type CommonProps = {
  /** Contact's display name. */
  name: string;
  /** Optional email address — truncated with ellipsis when the row is narrow. */
  email?: string;
  /** Short language code (e.g. "ES", "fr"). Uppercased visually. */
  language?: string;
  /** Overrides the initials derived from `name`. */
  initials?: string;
};

type StaticProps = CommonProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CommonProps | "onClick"> & {
    onClick?: undefined;
  };

type ClickableProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps | "onClick"> & {
    /** Click handler — when provided, the card renders as a `<button>` with hover and focus affordances. */
    onClick: MouseEventHandler<HTMLButtonElement>;
  };

export type ContactCardProps = StaticProps | ClickableProps;

function deriveInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0]! + parts[parts.length - 1]![0]!).toUpperCase();
}

/**
 * ContactCard — Stacked contact summary row for account panels.
 *
 * Avatar + name + optional email + optional language tag. Static by default;
 * when `onClick` is provided, renders as a `<button>` with hover background
 * and visible focus ring.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function ContactCard(props: ContactCardProps) {
  const { name, email, language, initials, className, onClick, ...rest } = props;
  const clickable = typeof onClick === "function";
  const rootClass = `${contactCardRecipe({ clickable })}${className ? ` ${className}` : ""}`;
  const avatarInitials = initials ?? deriveInitials(name);

  const body = (
    <>
      <Avatar initials={avatarInitials} label={name} />
      <div className={contactCardBodyRecipe()}>
        <span className={contactCardNameRecipe()}>{name}</span>
        {email ? <span className={contactCardEmailRecipe()}>{email}</span> : null}
        {language ? (
          <span className={contactCardLanguageRecipe()}>{language}</span>
        ) : null}
      </div>
    </>
  );

  if (clickable) {
    return (
      <button
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
        type="button"
        className={rootClass}
        onClick={onClick}
      >
        {body}
      </button>
    );
  }

  return (
    <div
      role="group"
      aria-label={name}
      className={rootClass}
      {...(rest as HTMLAttributes<HTMLDivElement>)}
    >
      {body}
    </div>
  );
}
