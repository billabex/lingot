import { cva } from "styled-system/css";

export const badgeRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "xs",
    fontSize: "caption",
    lineHeight: "caption",
    fontFamily: "body",
    whiteSpace: "nowrap",
  },
  variants: {
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
  defaultVariants: {
    variant: "neutral",
    shape: "pill",
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
