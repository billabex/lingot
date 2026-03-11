import type { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonRecipe } from "./button.recipe";
import type { ButtonVariant, ButtonSize } from "./button.recipe";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Optional icon rendered before the label */
  leftIcon?: ReactNode;
  /** Optional icon rendered after the label */
  rightIcon?: ReactNode;
  /** Content to render inside the button */
  children: ReactNode;
}

/**
 * Button — The primary interactive element.
 *
 * RSC-compatible (no `'use client'` needed — pure presentational).
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="medium">
 *   Click me
 * </Button>
 * ```
 */
export function Button({
  variant = "primary",
  size = "medium",
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const iconSize = size === "small" ? 12 : 14;

  return (
    <button
      className={`${buttonRecipe({ variant, size })}${className ? ` ${className}` : ""}`}
      disabled={disabled}
      {...props}
    >
      {leftIcon && (
        <span style={{ display: "inline-flex", flexShrink: 0, width: iconSize, height: iconSize }}>
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span style={{ display: "inline-flex", flexShrink: 0, width: iconSize, height: iconSize }}>
          {rightIcon}
        </span>
      )}
    </button>
  );
}
