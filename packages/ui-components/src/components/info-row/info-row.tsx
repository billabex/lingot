import type { HTMLAttributes, ReactNode } from "react";
import { infoRowRecipe, infoRowLabelRecipe, infoRowValueRecipe } from "./info-row.recipe";
import type { InfoRowVariant } from "./info-row.recipe";

export interface InfoRowProps extends HTMLAttributes<HTMLDivElement> {
  /** Row label (left side) */
  label: string;
  /** Row value (right side) */
  value: ReactNode;
  /** Value display variant */
  variant?: InfoRowVariant;
  /** Link URL when variant is "link" */
  href?: string;
}

/**
 * InfoRow — A label-value pair for displaying information.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function InfoRow({
  label,
  value,
  variant = "default",
  href,
  className,
  ...props
}: InfoRowProps) {
  return (
    <div
      className={`${infoRowRecipe({})}${className ? ` ${className}` : ""}`}
      {...props}
    >
      <span className={infoRowLabelRecipe({})}>{label}</span>
      {variant === "link" && href ? (
        <a href={href} className={infoRowValueRecipe({ variant: "link" })}>
          {value}
        </a>
      ) : (
        <span className={infoRowValueRecipe({ variant })}>{value}</span>
      )}
    </div>
  );
}
