import { Children, type HTMLAttributes, type ReactNode } from "react";
import { stepperRecipe, stepperConnectorRecipe, stepperStepRecipe } from "./stepper.recipe";

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  /** StepperItem children */
  children: ReactNode;
}

/**
 * Stepper — A horizontal sequence of steps with connector lines.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function Stepper({ children, className, ...props }: StepperProps) {
  const childArray = Children.toArray(children);

  return (
    <div
      className={`${stepperRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {childArray.map((child, index) => (
        <div key={index} className={stepperStepRecipe()}>
          {child}
          {index < childArray.length - 1 && (
            <span className={stepperConnectorRecipe()} />
          )}
        </div>
      ))}
    </div>
  );
}
