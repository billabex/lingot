import type { SelectHTMLAttributes, ReactNode } from "react";
import {
  selectRecipe,
  selectWrapperRecipe,
  selectLabelRecipe,
  selectContainerRecipe,
  selectIconRecipe,
} from "./select.recipe";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Show error styling */
  error?: boolean;
  /** Optional label rendered above the select */
  label?: string;
  /** Option elements */
  children: ReactNode;
}

const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 16 16"
    width={16}
    height={16}
    fill="none"
    className={className}
  >
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Select — A styled select dropdown.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Select({
  error = false,
  label,
  children,
  className,
  id,
  ...props
}: SelectProps) {
  const selectId = id || (label ? `select-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

  return (
    <div className={selectWrapperRecipe({})}>
      {label && (
        <label
          htmlFor={selectId}
          className={selectLabelRecipe({})}
        >
          {label}
        </label>
      )}
      <div className={selectContainerRecipe({})}>
        <select
          id={selectId}
          className={`${selectRecipe({ error })}${className ? ` ${className}` : ""}`}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className={selectIconRecipe({})} />
      </div>
    </div>
  );
}
