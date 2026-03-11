import type { ButtonHTMLAttributes, ReactNode } from "react";
import { iconButtonRecipe } from "./icon-button.recipe";
import type { IconButtonSize } from "./icon-button.recipe";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Size preset */
  size?: IconButtonSize;
  /** Icon to render — required */
  icon: ReactNode;
}

/**
 * IconButton — A button that renders a single icon with no label.
 *
 * RSC-compatible (no `'use client'` needed).
 *
 * @example
 * ```tsx
 * <IconButton icon={<Trash size={16} />} aria-label="Delete" />
 * ```
 */
export function IconButton({
  size = "medium",
  icon,
  className,
  ...props
}: IconButtonProps) {
  const iconSize = size === "small" ? 14 : 16;

  return (
    <button
      className={`${iconButtonRecipe({ size })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      <span style={{ display: "inline-flex", width: iconSize, height: iconSize }}>
        {icon}
      </span>
    </button>
  );
}
