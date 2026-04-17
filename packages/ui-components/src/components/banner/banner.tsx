import type { HTMLAttributes, ReactNode } from "react";
import { bannerRecipe, bannerBodyRecipe } from "./banner.recipe";
import type { BannerVariant } from "./banner.recipe";

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  /** Color variant */
  variant?: BannerVariant;
  /** Optional icon on the left (16px) */
  icon?: ReactNode;
  /** Banner content — the primary message. */
  children: ReactNode;
  /** Optional trailing action (e.g. a CTA Button) pushed to the right. */
  action?: ReactNode;
}

/**
 * Banner — An alert/notification banner.
 *
 * Composes: optional icon, a primary text body (grows to fill), and an
 * optional trailing `action` slot for a CTA.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Banner({
  variant = "neutral",
  icon,
  children,
  action,
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
      <span className={bannerBodyRecipe()}>{children}</span>
      {action}
    </div>
  );
}
