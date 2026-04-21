import type { HTMLAttributes, ReactNode } from "react";
import { Divider } from "../divider";
import {
  sectionHeaderRecipe,
  sectionHeaderTitleRowRecipe,
  sectionHeaderTitleRecipe,
  sectionHeaderTrailingRecipe,
  sectionHeaderDescriptionRecipe,
} from "./section-header.recipe";

export interface SectionHeaderProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  /** Section title — rendered as an `<h2>`. */
  title: ReactNode;
  /** Optional trailing slot on the title row (typically a primary action `Button`). */
  trailing?: ReactNode;
  /** Optional helper prose shown below the title divider. */
  description?: ReactNode;
}

/**
 * SectionHeader — A page-section heading: bold `<h2>` title with an optional
 * trailing action, divider, and optional descriptive prose. Used to group
 * related rows/forms inside a page (e.g. settings tabs).
 *
 * For panel-scoped micro headings (small uppercase tertiary), use `SectionTitle`.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function SectionHeader({
  title,
  trailing,
  description,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <header
      className={`${sectionHeaderRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      <div className={sectionHeaderTitleRowRecipe()}>
        <h2 className={sectionHeaderTitleRecipe()}>{title}</h2>
        {trailing && (
          <div className={sectionHeaderTrailingRecipe()}>{trailing}</div>
        )}
      </div>
      <Divider />
      {description && (
        <p className={sectionHeaderDescriptionRecipe()}>{description}</p>
      )}
    </header>
  );
}
