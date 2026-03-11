import type { InputHTMLAttributes } from "react";
import { inputRecipe, inputWrapperRecipe, inputLabelRecipe } from "./input.recipe";

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
    <div className={inputWrapperRecipe({})}>
      {label && (
        <label
          htmlFor={inputId}
          className={inputLabelRecipe({})}
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
