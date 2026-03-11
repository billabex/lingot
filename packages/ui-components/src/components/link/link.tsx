import type { AnchorHTMLAttributes, ReactNode } from "react";
import { linkRecipe } from "./link.recipe";
import type { LinkVariant } from "./link.recipe";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Visual style variant */
  variant?: LinkVariant;
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
  children,
  className,
  ...props
}: LinkProps) {
  return (
    <a
      className={`${linkRecipe({ variant })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </a>
  );
}
