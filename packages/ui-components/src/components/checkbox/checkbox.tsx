import type { InputHTMLAttributes } from "react";
import { checkboxRecipe, checkboxInputRecipe, checkboxLabelRecipe } from "./checkbox.recipe";

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
      className={`${checkboxRecipe({ disabled: !!disabled })}${className ? ` ${className}` : ""}`}
    >
      <input
        type="checkbox"
        id={inputId}
        className={checkboxInputRecipe({})}
        disabled={disabled}
        {...props}
      />
      {label && (
        <span className={checkboxLabelRecipe({})}>
          {label}
        </span>
      )}
    </label>
  );
}
