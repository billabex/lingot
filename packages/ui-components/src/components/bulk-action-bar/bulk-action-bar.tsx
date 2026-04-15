import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import {
  bulkActionBarRecipe,
  bulkActionBarCountRecipe,
  bulkActionBarActionsRecipe,
  bulkActionBarActionRecipe,
  bulkActionBarCloseRecipe,
} from "./bulk-action-bar.recipe";

export interface BulkActionBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Leading label, typically a selection count (e.g. "21 sélectionnés"). */
  count: ReactNode;
  /** Action buttons grouped to the left of the close control. */
  children: ReactNode;
  /** Fired when the close (×) control is pressed — typically clears the selection. */
  onClose?: () => void;
  /** Accessible label for the close button. Defaults to "Close". */
  closeLabel?: string;
}

/**
 * BulkActionBar — Dark footer that surfaces bulk actions when one or more rows
 * are selected in a table. Matches the prototype's full-width accounts bar:
 * count on the left, action buttons in the middle, close (×) on the right.
 *
 * Pure layout — wrap any `Button` variants as children. RSC-compatible.
 */
export function BulkActionBar({
  count,
  children,
  onClose,
  closeLabel = "Close",
  className,
  ...props
}: BulkActionBarProps) {
  return (
    <div
      className={`${bulkActionBarRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      <span className={bulkActionBarCountRecipe()}>{count}</span>
      <div className={bulkActionBarActionsRecipe()}>{children}</div>
      {onClose && (
        <button
          type="button"
          aria-label={closeLabel}
          onClick={onClose}
          className={bulkActionBarCloseRecipe()}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export type BulkActionBarActionProps = ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Inverse-themed action button to render inside a `BulkActionBar`. Rendered as
 * a native `<button>` with the bar's dark-on-dark styling (transparent bg,
 * translucent white border, white label) — the DS `Button` variants assume a
 * light background and do not work on the inverse surface.
 */
function BulkActionBarAction({
  className,
  type = "button",
  children,
  ...props
}: BulkActionBarActionProps) {
  return (
    <button
      type={type}
      className={`${bulkActionBarActionRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

BulkActionBar.Action = BulkActionBarAction;
