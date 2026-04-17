import type { HTMLAttributes, ReactNode } from "react";
import { Breadcrumb, type BreadcrumbItem } from "../breadcrumb";
import {
  pageHeaderRecipe,
  pageHeaderRowRecipe,
  pageHeaderTitleRecipe,
} from "./page-header.recipe";

export interface PageHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Optional breadcrumb rendered above the title — the page-level navigation. */
  breadcrumb?: BreadcrumbItem[];
  /** Page title — rendered as an `<h1>`. */
  title: ReactNode;
  /** Trailing actions (Buttons / IconButtons) pushed to the right of the title. */
  actions?: ReactNode;
}

/**
 * PageHeader — Top-of-page unit: optional breadcrumb + title + trailing actions.
 *
 * For panel-scoped headers (48px bar inside a panel), use `PanelHeader` instead.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function PageHeader({
  breadcrumb,
  title,
  actions,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div
      className={`${pageHeaderRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {breadcrumb && <Breadcrumb items={breadcrumb} />}
      <div className={pageHeaderRowRecipe()}>
        <h1 className={pageHeaderTitleRecipe()}>{title}</h1>
        {actions}
      </div>
    </div>
  );
}
