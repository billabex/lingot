import type { ButtonHTMLAttributes, ReactNode } from "react";
import { tabItemRecipe } from "./tab-item.recipe";

export interface TabItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether this tab is active */
  active?: boolean;
  /** Tab label */
  children: ReactNode;
}

/**
 * TabItem — A tab navigation item.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function TabItem({
  active = false,
  children,
  className,
  ...props
}: TabItemProps) {
  return (
    <button
      role="tab"
      aria-selected={active}
      className={`${tabItemRecipe({ active })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
