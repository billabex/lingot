import type { InputHTMLAttributes } from "react";
import { checkboxRecipe, checkboxInputRecipe } from "./checkbox.recipe";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Optional label next to the checkbox */
  label?: string;
}

/**
 * Checkbox — A styled checkbox input with optional label.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Checkbox({
  label,
  className,
  id,
  disabled,
  ...props
}: CheckboxProps) {
  const inputId = id || (label ? `checkbox-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

  return (
    <label
      className={`${checkboxRecipe({})}${className ? ` ${className}` : ""}`}
      style={disabled ? { opacity: 0.4, cursor: "not-allowed" } : undefined}
    >
      <input
        type="checkbox"
        id={inputId}
        className={checkboxInputRecipe({})}
        disabled={disabled}
        {...props}
      />
      {label && (
        <span
          style={{
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: 500,
            color: "#1c1917",
          }}
        >
          {label}
        </span>
      )}
    </label>
  );
}
