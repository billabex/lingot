import type { HTMLAttributes, ReactNode } from "react";
import {
  settingsRowRecipe,
  settingsRowBodyRecipe,
  settingsRowLabelRecipe,
  settingsRowDescriptionRecipe,
  settingsRowValueRecipe,
  settingsRowTrailingRecipe,
} from "./settings-row.recipe";

export interface SettingsRowProps extends HTMLAttributes<HTMLDivElement> {
  /** Row label — bold primary text on the left. */
  label: ReactNode;
  /** Optional helper text shown beneath the label. */
  description?: ReactNode;
  /** Optional current value shown beneath the label / description. */
  value?: ReactNode;
  /** Trailing slot — typically a Modifier `Button`, a `SelectMenu`, or a destructive `Button`. */
  trailing?: ReactNode;
}

/**
 * SettingsRow — A single configurable preference inside a settings panel.
 *
 * Layout: label (+ optional description) (+ optional value) on the left,
 * a trailing action slot on the right. Renders a faint bottom border so
 * consecutive rows in the same section read as a list.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function SettingsRow({
  label,
  description,
  value,
  trailing,
  className,
  ...props
}: SettingsRowProps) {
  return (
    <div
      className={`${settingsRowRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      <div className={settingsRowBodyRecipe()}>
        <span className={settingsRowLabelRecipe()}>{label}</span>
        {description && (
          <span className={settingsRowDescriptionRecipe()}>{description}</span>
        )}
        {value && <span className={settingsRowValueRecipe()}>{value}</span>}
      </div>
      {trailing && <div className={settingsRowTrailingRecipe()}>{trailing}</div>}
    </div>
  );
}
