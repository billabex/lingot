import type { ButtonHTMLAttributes } from "react";
import { toggleRecipe, toggleTrackRecipe } from "./toggle.recipe";

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
      className={`${toggleRecipe({})}${className ? ` ${className}` : ""}`}
      style={disabled ? { opacity: 0.4, cursor: "not-allowed" } : undefined}
      onClick={(e) => {
        onClick?.(e);
        onToggle?.(!checked);
      }}
      {...props}
    >
      <div className={toggleTrackRecipe({ checked, disabled })}>
        <div
          style={{
            position: "absolute",
            top: 2,
            left: checked ? 18 : 2,
            width: 20,
            height: 20,
            borderRadius: "9999px",
            backgroundColor: "white",
            transition: "left 0.15s ease",
            boxShadow: "0px 2px 8px 0px rgba(28, 28, 26, 0.08)",
          }}
        />
      </div>
      {label && (
        <span
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 400,
            color: "#1c1917",
          }}
        >
          {label}
        </span>
      )}
    </button>
  );
}
