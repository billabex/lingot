import type { HTMLAttributes } from "react";
import {
  breadcrumbRecipe,
  breadcrumbSeparatorRecipe,
  breadcrumbItemRecipe,
  breadcrumbCurrentRecipe,
  breadcrumbLinkRecipe,
} from "./breadcrumb.recipe";

export interface BreadcrumbItem {
  /** Display label */
  label: string;
  /** Link URL — omit for the current/last item */
  href?: string;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  /** Breadcrumb items — last item is treated as current page */
  items: BreadcrumbItem[];
}

const Separator = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 16 16"
    width={12}
    height={12}
    fill="none"
    className={className}
  >
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
 * Breadcrumb — A navigation breadcrumb trail.
 *
 * The chevron separator is fixed — templates must not customise it.
 * RSC-compatible (no `'use client'` needed).
 */
export function Breadcrumb({
  items,
  className,
  ...props
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" {...props}>
      <ol className={`${breadcrumbRecipe({})}${className ? ` ${className}` : ""}`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className={breadcrumbItemRecipe({})}>
              {index > 0 && (
                <span aria-hidden="true">
                  <Separator className={breadcrumbSeparatorRecipe({})} />
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className={breadcrumbCurrentRecipe({})}>
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href || "#"}
                  className={breadcrumbLinkRecipe({})}
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
