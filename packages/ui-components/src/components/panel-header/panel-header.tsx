import type { HTMLAttributes, ReactNode } from "react";
import {
  panelHeaderRecipe,
  panelHeaderTopRowRecipe,
  panelHeaderTitleBarRecipe,
  panelHeaderTitleRecipe,
  panelHeaderRowRecipe,
} from "./panel-header.recipe";

export interface PanelHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Title or breadcrumb component */
  /** Title or breadcrumb component */
  title?: ReactNode;
  /** Badge next to title */
  badge?: ReactNode;
  /** Right side action buttons */
  actions?: ReactNode;
  /** Tab navigation row */
  tabs?: ReactNode;
  /** Filter buttons row */
  filters?: ReactNode;
}

/**
 * PanelHeader — A composable page/panel header with sections.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function PanelHeader({
  title,
  badge,
  actions,
  tabs,
  filters,
  className,
  ...props
}: PanelHeaderProps) {
  return (
    <div
      className={`${panelHeaderRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {/* Top section: title + badge + actions */}
      {(title || badge || actions) && (
        <div className={panelHeaderTopRowRecipe()}>
          <div className={panelHeaderTitleBarRecipe()}>
            <div className={panelHeaderTitleRecipe()}>
              {title}
              {badge && <div>{badge}</div>}
            </div>
            {actions && <div>{actions}</div>}
          </div>
        </div>
      )}

      {/* Tabs row */}
      {tabs && <div className={panelHeaderRowRecipe()}>{tabs}</div>}

      {/* Filters row */}
      {filters && <div className={panelHeaderRowRecipe()}>{filters}</div>}
    </div>
  );
}
