import type { HTMLAttributes, ReactNode } from "react";
import { pageHeaderRecipe, pageHeaderTitleRecipe } from "./page-header.recipe";

export interface PageHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Page title — rendered as an `<h1>`. */
  title: ReactNode;
  /** Trailing actions (Buttons / IconButtons) pushed to the right. */
  actions?: ReactNode;
}

/**
 * PageHeader — Top-level page title row with optional trailing actions.
 *
 * For panel-scoped headers (48px bar inside a panel), use `PanelHeader` instead.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function PageHeader({
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
      <h1 className={pageHeaderTitleRecipe()}>{title}</h1>
      {actions}
    </div>
  );
}
