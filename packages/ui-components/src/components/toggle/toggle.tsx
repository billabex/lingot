import type { ButtonHTMLAttributes } from "react";
import { toggleRecipe, toggleTrackRecipe, toggleKnobRecipe, toggleLabelRecipe } from "./toggle.recipe";

export interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "role" | "onToggle"> {
  /** Whether the toggle is checked/on */
  checked?: boolean;
  /** Optional label */
  label?: string;
  /** Callback when toggled */
  onToggle?: (checked: boolean) => void;
}

/**
 * Toggle — A switch toggle component.
 *
 * RSC-compatible (no `'use client'` needed). Uses `<button role="switch">`.
 */
export function Toggle({
  checked = false,
  label,
  disabled,
  className,
  onToggle,
  onClick,
  ...props
}: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={!label ? props["aria-label"] : undefined}
      disabled={disabled}
      className={`${toggleRecipe({ disabled: !!disabled })}${className ? ` ${className}` : ""}`}
      onClick={(e) => {
        onClick?.(e);
        onToggle?.(!checked);
      }}
      {...props}
    >
      <div className={toggleTrackRecipe({ checked, disabled })}>
        <div className={toggleKnobRecipe({ checked })} />
      </div>
      {label && (
        <span className={toggleLabelRecipe({})}>
          {label}
        </span>
      )}
    </button>
  );
}
