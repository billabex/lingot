import type { HTMLAttributes, ReactNode } from "react";
import { breadcrumbRecipe } from "./breadcrumb.recipe";

export interface BreadcrumbItem {
  /** Display label */
  label: string;
  /** Link URL — omit for the current/last item */
  href?: string;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  /** Breadcrumb items — last item is treated as current page */
  items: BreadcrumbItem[];
  /** Custom separator (defaults to chevron-right) */
  separator?: ReactNode;
}

const DefaultSeparator = () => (
  <svg
    viewBox="0 0 16 16"
    width={12}
    height={12}
    fill="none"
    style={{ color: "#9c8e82", flexShrink: 0 }}
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
 * RSC-compatible (no `'use client'` needed).
 */
export function Breadcrumb({
  items,
  separator,
  className,
  ...props
}: BreadcrumbProps) {
  const sep = separator || <DefaultSeparator />;

  return (
    <nav aria-label="Breadcrumb" {...props}>
      <ol className={`${breadcrumbRecipe({})}${className ? ` ${className}` : ""}`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              {index > 0 && <span aria-hidden="true">{sep}</span>}
              {isLast ? (
                <span aria-current="page" style={{ color: "#1c1917" }}>
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href || "#"}
                  style={{
                    color: "#b5634b",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
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
