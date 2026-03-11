import type { HTMLAttributes, ReactNode } from "react";
import { bannerRecipe } from "./banner.recipe";
import type { BannerVariant } from "./banner.recipe";

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  /** Color variant */
  variant?: BannerVariant;
  /** Optional icon on the left (16px) */
  icon?: ReactNode;
  /** Banner content */
  children: ReactNode;
}

/**
 * Banner — An alert/notification banner.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Banner({
  variant = "neutral",
  icon,
  children,
  className,
  ...props
}: BannerProps) {
  return (
    <div
      role="alert"
      className={`${bannerRecipe({ variant })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {icon && (
        <span style={{ display: "inline-flex", flexShrink: 0, width: 16, height: 16 }}>
          {icon}
        </span>
      )}
      {children}
    </div>
  );
}
