import type { InputHTMLAttributes } from "react";
import {
  inputRecipe,
  inputWrapperRecipe,
  inputLabelRecipe,
} from "./input.recipe";
import type { InputSize } from "./input.recipe";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Visual size. `md` is the default, `sm` matches panel search fields. */
  size?: InputSize;
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
  size = "md",
  error = false,
  label,
  className,
  id,
  ...props
}: InputProps) {
  const inputId =
    id ||
    (label ? `input-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

  return (
    <div className={inputWrapperRecipe({})}>
      {label && (
        <label htmlFor={inputId} className={inputLabelRecipe({})}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`${inputRecipe({ size, error })}${className ? ` ${className}` : ""}`}
        {...props}
      />
    </div>
  );
}
