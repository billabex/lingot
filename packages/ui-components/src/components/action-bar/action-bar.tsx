import type { HTMLAttributes, ReactNode } from "react";
import { actionBarRecipe, type ActionBarAlign } from "./action-bar.recipe";

export interface ActionBarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Horizontal alignment of actions. Defaults to `start`. */
  align?: ActionBarAlign;
  /** Adds a top border + padding — useful when the bar closes a detail panel or modal body. */
  topBorder?: boolean;
}

/**
 * ActionBar — Layout primitive for grouping action buttons inside row details,
 * drawers, modals, or panel footers. Pure layout (flex + gap) — button variants
 * come from `Button`/`IconButton`.
 */
export function ActionBar({
  children,
  align = "start",
  topBorder = false,
  className,
  ...props
}: ActionBarProps) {
  return (
    <div
      className={`${actionBarRecipe({ align, topBorder })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
