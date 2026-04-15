import type { AnchorHTMLAttributes, ReactNode } from "react";
import { linkRecipe } from "./link.recipe";
import type { LinkSize, LinkVariant } from "./link.recipe";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Visual style variant */
  variant?: LinkVariant;
  /** Type scale */
  size?: LinkSize;
  /** Optional icon rendered before the label */
  leftIcon?: ReactNode;
  /** Optional icon rendered after the label */
  rightIcon?: ReactNode;
  /** Content to render inside the link */
  children: ReactNode;
}

/**
 * Link — A styled anchor element.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Link({
  variant = "default",
  size = "md",
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: LinkProps) {
  const iconSize = size === "sm" ? 12 : 14;

  return (
    <a
      className={`${linkRecipe({ variant, size })}${className ? ` ${className}` : ""}`}
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
    </a>
  );
}
