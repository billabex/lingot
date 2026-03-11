import type { HTMLAttributes, ReactNode } from "react";
import { pageHeaderRecipe } from "./page-header.recipe";

export interface PageHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Page header content (typically a Breadcrumb component) */
  children: ReactNode;
}

/**
 * PageHeader — A top-level page header, typically containing breadcrumb navigation.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function PageHeader({ children, className, ...props }: PageHeaderProps) {
  return (
    <div
      className={`${pageHeaderRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
