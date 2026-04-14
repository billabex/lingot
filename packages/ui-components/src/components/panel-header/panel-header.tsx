import type { HTMLAttributes, ReactNode } from "react";
import {
  panelHeaderRecipe,
  panelHeaderTitleRecipe,
  panelHeaderSpacerRecipe,
  type PanelHeaderVariant,
} from "./panel-header.recipe";

export interface PanelHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Layout variant.
   * - `"page"` (default) — center panel: `padding.page` (24px), `gap md`, left-aligned. Task / comm / account detail.
   * - `"card"` — left list or right aside panel: `padding.card` (16px), `justify-content: space-between`.
   */
  variant?: PanelHeaderVariant;
  /** Header content */
  children: ReactNode;
}

export interface PanelHeaderTitleProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export type PanelHeaderSpacerProps = HTMLAttributes<HTMLSpanElement>;

/**
 * PanelHeader — Fixed top bar shared by all detail and list panels.
 * 48 px tall.
 *
 * - `variant="page"` (default): center panels — task / comm / account detail (`padding.page`, `gap md`)
 * - `variant="card"`: left list or right aside panels (`padding.card`, space-between)
 *
 * Compose content via children. Use `<PanelHeader.Title>` for the text label
 * and `<PanelHeader.Spacer>` (page variant) to push trailing items right.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function PanelHeader({
  variant = "page",
  children,
  className,
  ...props
}: PanelHeaderProps) {
  return (
    <div
      className={`${panelHeaderRecipe({ variant })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}

function PanelHeaderTitle({
  children,
  className,
  ...props
}: PanelHeaderTitleProps) {
  return (
    <span
      className={`${panelHeaderTitleRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </span>
  );
}

function PanelHeaderSpacer({ className, ...props }: PanelHeaderSpacerProps) {
  return (
    <span
      aria-hidden
      className={`${panelHeaderSpacerRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    />
  );
}

PanelHeader.Title = PanelHeaderTitle;
PanelHeader.Spacer = PanelHeaderSpacer;
