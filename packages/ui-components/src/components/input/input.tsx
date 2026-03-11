import type { InputHTMLAttributes } from "react";
import { inputRecipe } from "./input.recipe";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Show error styling */
  error?: boolean;
  /** Optional label rendered above the input */
  label?: string;
}

/**
 * Input — A styled text input field.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Input({
  error = false,
  label,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%" }}>
      {label && (
        <label
          htmlFor={inputId}
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
      <input
        id={inputId}
        className={`${inputRecipe({ error })}${className ? ` ${className}` : ""}`}
        {...props}
      />
    </div>
  );
}
