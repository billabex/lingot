import type { ButtonHTMLAttributes, ReactNode } from "react";
import { sectionTitleRecipe, sectionTitleChevronRecipe } from "./section-title.recipe";

export interface SectionTitleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the section is expanded */
  expanded?: boolean;
  /** Section title label */
  children: ReactNode;
}

const ChevronIcon = () => (
  <svg viewBox="0 0 16 16" width={14} height={14} fill="none" style={{ color: "currentColor" }}>
    <path
      d="M6 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * SectionTitle — A collapsible section header with chevron indicator.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function SectionTitle({
  expanded = false,
  children,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <button
      type="button"
      aria-expanded={expanded}
      className={`${sectionTitleRecipe({})}${className ? ` ${className}` : ""}`}
      {...props}
    >
      <span className={sectionTitleChevronRecipe({ expanded })}>
        <ChevronIcon />
      </span>
      {children}
    </button>
  );
}
