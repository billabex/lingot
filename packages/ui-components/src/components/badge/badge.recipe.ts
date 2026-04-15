import { cva } from "styled-system/css";

export const badgeRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "xs",
    fontFamily: "body",
    whiteSpace: "nowrap",
  },
  variants: {
    size: {
      /** Default size — caption typography, standard padding. */
      md: {
        fontSize: "caption",
        lineHeight: "caption",
      },
      /** Compact inline label — caption.xs typography, tighter padding.
       *  Use for table source chips, inline tags, dense rows. */
      xs: {
        fontSize: "caption.xs",
        lineHeight: "caption.xs",
      },
    },
    variant: {
      neutral: {
        bg: "bg.muted",
        color: "text.secondary",
        fontWeight: "medium",
      },
      info: {
        bg: "status.infoSubtle",
        color: "status.info",
        fontWeight: "medium",
      },
      success: {
        bg: "status.successSubtle",
        color: "status.success",
        fontWeight: "medium",
      },
      warning: {
        bg: "status.warningSubtle",
        color: "status.warning",
        fontWeight: "medium",
      },
      error: {
        bg: "status.errorSubtle",
        color: "status.error",
        fontWeight: "medium",
      },
      count: {
        bg: "bg.subtle",
        color: "text.tertiary",
        fontWeight: "regular",
        border: "1px solid",
        borderColor: "border.subtle",
      },
    },
    shape: {
      pill: {
        borderRadius: "full",
        paddingInline: "xs",
      },
      square: {
        borderRadius: "xs",
        paddingInline: "md",
        paddingBlock: "xs",
      },
    },
  },
  compoundVariants: [
    {
      size: "xs",
      shape: "square",
      css: { paddingInline: "sm", paddingBlock: 0 },
    },
    {
      size: "xs",
      shape: "pill",
      css: { paddingInline: "xs", paddingBlock: 0 },
    },
  ],
  defaultVariants: {
    variant: "neutral",
    shape: "pill",
    size: "md",
  },
});

export type BadgeVariant =
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "count";

export type BadgeShape = "pill" | "square";

export type BadgeSize = "md" | "xs";
