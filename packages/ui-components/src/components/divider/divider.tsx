import type { HTMLAttributes } from "react";
import { dividerRecipe } from "./divider.recipe";
import type { DividerOrientation } from "./divider.recipe";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** Divider orientation */
  orientation?: DividerOrientation;
}

/**
 * Divider — A visual separator between content sections.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Divider({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      role="separator"
      aria-orientation={orientation}
      className={`${dividerRecipe({ orientation })}${className ? ` ${className}` : ""}`}
      {...props}
    />
  );
}
