import type { HTMLAttributes, ReactNode } from "react";
import { stepperItemRecipe, stepperCircleRecipe } from "./stepper-item.recipe";
import type { StepperItemState } from "./stepper-item.recipe";

export type { StepperItemState } from "./stepper-item.recipe";

export interface StepperItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Step state */
  state?: StepperItemState;
  /** Step number (shown for active/upcoming states) */
  stepNumber?: number;
  /** Custom completed icon (defaults to a check SVG) */
  completedIcon?: ReactNode;
  /** Step label */
  children: ReactNode;
}

const DefaultCheckIcon = () => (
  <svg viewBox="0 0 16 16" width={14} height={14} fill="none" style={{ color: "white" }}>
    <path
      d="M3.5 8.5L6.5 11.5L12.5 5.5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * StepperItem — A single step in a multi-step process.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function StepperItem({
  state = "upcoming",
  stepNumber,
  completedIcon,
  children,
  className,
  ...props
}: StepperItemProps) {
  return (
    <div
      className={`${stepperItemRecipe({ state })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      <span className={stepperCircleRecipe({ state })}>
        {state === "completed"
          ? (completedIcon || <DefaultCheckIcon />)
          : stepNumber}
      </span>
      {children}
    </div>
  );
}
