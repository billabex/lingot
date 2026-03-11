import type { HTMLAttributes, ReactNode } from "react";
import {
  emptyStateRecipe,
  emptyStateIconRecipe,
  emptyStateTitleRecipe,
  emptyStateDescriptionRecipe,
  emptyStateTextRecipe,
} from "./empty-state.recipe";
import type { EmptyStateVariant } from "./empty-state.recipe";

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  /** Size variant */
  variant?: EmptyStateVariant;
  /** Optional icon or illustration */
  icon?: ReactNode;
  /** Title text */
  title: string;
  /** Optional description text */
  description?: string;
  /** Optional action slot (e.g. a button) */
  action?: ReactNode;
}

/**
 * EmptyState — A placeholder shown when content is empty.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function EmptyState({
  variant = "default",
  icon,
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={`${emptyStateRecipe({ variant })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {icon && (
        <span className={emptyStateIconRecipe({ variant })}>
          {icon}
        </span>
      )}
      <div className={emptyStateTextRecipe({})}>
        <span className={emptyStateTitleRecipe({ variant })}>{title}</span>
        {description && (
          <span className={emptyStateDescriptionRecipe({ variant })}>{description}</span>
        )}
      </div>
      {action && action}
    </div>
  );
}
