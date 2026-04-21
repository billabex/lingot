import { cloneElement, isValidElement, type HTMLAttributes, type ReactElement, type ReactNode } from "react";
import type { IconButtonProps } from "../icon-button";
import { sectionTitleRecipe, sectionTitleTrailingRecipe } from "./section-title.recipe";

export interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  /** Section label */
  children: ReactNode;
  /** Optional trailing action — must be an `IconButton`. Size is forced to `small`. */
  trailing?: ReactElement<IconButtonProps>;
}

/**
 * SectionTitle — Static, uppercase section label with an optional trailing `IconButton`.
 *
 * Height: 24px. Typography: `caption.soft` uppercase, `text.tertiary`.
 * RSC-compatible (no `'use client'` needed).
 */
export function SectionTitle({ children, trailing, className, ...props }: SectionTitleProps) {
  const trailingNode = isValidElement<IconButtonProps>(trailing)
    ? cloneElement(trailing, { size: "small" })
    : null;

  return (
    <div className={`${sectionTitleRecipe({})}${className ? ` ${className}` : ""}`} {...props}>
      <span>{children}</span>
      {trailingNode ? <span className={sectionTitleTrailingRecipe({})}>{trailingNode}</span> : null}
    </div>
  );
}
