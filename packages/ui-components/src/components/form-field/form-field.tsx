import type { HTMLAttributes, ReactNode } from "react";
import {
  formFieldRecipe,
  formFieldLabelRecipe,
  formFieldHelperRecipe,
} from "./form-field.recipe";

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  /** Label text displayed above the field */
  label: string;
  /** Whether the field is in an error state */
  error?: boolean;
  /** Helper or error message below the field */
  helper?: string;
  /** The form control (Input, Select, etc.) */
  children: ReactNode;
}

/**
 * FormField — Wraps a form control with a label and optional helper text.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function FormField({
  label,
  error = false,
  helper,
  children,
  className,
  ...props
}: FormFieldProps) {
  return (
    <div
      className={`${formFieldRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      <span className={formFieldLabelRecipe()}>{label}</span>
      {children}
      {helper && (
        <span className={formFieldHelperRecipe({ error })}>{helper}</span>
      )}
    </div>
  );
}
