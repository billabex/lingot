import type {
  ButtonHTMLAttributes,
  CSSProperties,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";
import { chipRecipe, chipRemoveRecipe } from "./chip.recipe";
import type { ChipVariant } from "./chip.recipe";

type CommonProps = {
  /** Chip behavior. `filter` (toggleable), `removable` (tag with X), `static` (read-only). */
  variant?: ChipVariant;
  /** Optional icon rendered before the label */
  leftIcon?: ReactNode;
  /** Optional accent tone. Accepts any CSS color; text renders in the tone with a 15% tinted background and transparent border. Intended for categorical display (e.g. by persona, status, or source). */
  tone?: string;
  /** Content */
  children: ReactNode;
};

type FilterChipProps = CommonProps & {
  variant?: "filter";
  /** Whether the filter is currently active (filter variant only) */
  active?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

type RemovableChipProps = CommonProps & {
  variant: "removable";
  /** Handler fired when the remove (×) button is clicked */
  onRemove: MouseEventHandler<HTMLButtonElement>;
  /** Accessible label for the remove button. Defaults to "Remove". */
  removeLabel?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, keyof CommonProps>;

type StaticChipProps = CommonProps & {
  variant: "static";
} & Omit<HTMLAttributes<HTMLSpanElement>, keyof CommonProps>;

export type ChipProps = FilterChipProps | RemovableChipProps | StaticChipProps;

/**
 * Chip — A pill-shaped primitive used for filters, removable tags, and
 * read-only labels. RSC-compatible (no `'use client'` needed).
 */
export function Chip(props: ChipProps) {
  const { variant = "filter", leftIcon, children, className, tone } = props;

  const classes = `${chipRecipe({
    variant,
    active: variant === "filter" && (props as FilterChipProps).active,
  })}${className ? ` ${className}` : ""}`;

  const tonedStyle = (style?: CSSProperties): CSSProperties | undefined =>
    tone
      ? {
          ...style,
          color: tone,
          background: `color-mix(in srgb, ${tone} 15%, white)`,
          borderColor: "transparent",
        }
      : style;

  const leadingIcon = leftIcon ? (
    <span
      style={{ display: "inline-flex", flexShrink: 0, width: 16, height: 16 }}
    >
      {leftIcon}
    </span>
  ) : null;

  if (variant === "removable") {
    const {
      onRemove,
      removeLabel = "Remove",
      variant: _v,
      leftIcon: _li,
      children: _c,
      className: _cn,
      tone: _t,
      style,
      ...rest
    } = props as RemovableChipProps;
    return (
      <span className={classes} style={tonedStyle(style)} {...rest}>
        {leadingIcon}
        {children}
        <button
          type="button"
          className={chipRemoveRecipe()}
          onClick={onRemove}
          aria-label={removeLabel}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M2 2L8 8M8 2L2 8" />
          </svg>
        </button>
      </span>
    );
  }

  if (variant === "static") {
    const {
      variant: _v,
      leftIcon: _li,
      children: _c,
      className: _cn,
      tone: _t,
      style,
      ...rest
    } = props as StaticChipProps;
    return (
      <span className={classes} style={tonedStyle(style)} {...rest}>
        {leadingIcon}
        {children}
      </span>
    );
  }

  const {
    active: _a,
    variant: _v,
    leftIcon: _li,
    children: _c,
    className: _cn,
    tone: _t,
    style,
    ...rest
  } = props as FilterChipProps;
  return (
    <button className={classes} style={tonedStyle(style)} {...rest}>
      {leadingIcon}
      {children}
    </button>
  );
}
