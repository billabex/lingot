import type { SelectHTMLAttributes, ReactNode } from "react";
import { selectRecipe } from "./select.recipe";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Show error styling */
  error?: boolean;
  /** Optional label rendered above the select */
  label?: string;
  /** Option elements */
  children: ReactNode;
}

const ChevronDown = () => (
  <svg
    viewBox="0 0 16 16"
    width={16}
    height={16}
    fill="none"
    style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
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
    <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%" }}>
      {label && (
        <label
          htmlFor={selectId}
          style={{
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: 500,
            color: "#534840",
          }}
        >
          {label}
        </label>
      )}
      <div style={{ position: "relative", color: "#9c8e82" }}>
        <select
          id={selectId}
          className={`${selectRecipe({ error })}${className ? ` ${className}` : ""}`}
          style={{ paddingRight: 32 }}
          {...props}
        >
          {children}
        </select>
        <ChevronDown />
      </div>
    </div>
  );
}
