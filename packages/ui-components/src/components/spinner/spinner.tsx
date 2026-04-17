import type { HTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { spinnerRecipe, type SpinnerSize } from "./spinner.recipe";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  /** Spinner size — `small` (16px), `medium` (24px, default), `large` (32px). */
  size?: SpinnerSize;
  /** Accessible label. Defaults to "Chargement". Pass empty string to omit. */
  label?: string;
}

const SIZE_MAP: Record<SpinnerSize, number> = {
  small: 16,
  medium: 24,
  large: 32,
};

const keyframes = `@keyframes dsSpinnerRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`;

/**
 * Spinner — A rotating loader icon.
 *
 * Renders a lucide `Loader2` icon that rotates 360° every second. Use for
 * in-flight async indicators (form submits, OCR parsing, connector syncs).
 * The `@keyframes` rule is inlined so the component is self-contained.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Spinner({
  size = "medium",
  label = "Chargement",
  className,
  ...props
}: SpinnerProps) {
  return (
    <span
      className={`${spinnerRecipe({ size })}${className ? ` ${className}` : ""}`}
      role={label ? "status" : undefined}
      aria-label={label || undefined}
      {...props}
    >
      <style>{keyframes}</style>
      <Loader2 size={SIZE_MAP[size]} aria-hidden="true" />
    </span>
  );
}
