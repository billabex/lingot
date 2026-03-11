import { cva } from "styled-system/css";

export const badgeRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "xs",
    px: "xs",
    borderRadius: "full",
    fontSize: "caption",
    lineHeight: "caption",
    fontWeight: "medium",
    fontFamily: "body",
    whiteSpace: "nowrap",
  },
  variants: {
    variant: {
      neutral: {
        bg: "bg.muted",
        color: "text.secondary",
      },
      info: {
        bg: "status.infoSubtle",
        color: "status.info",
      },
      success: {
        bg: "status.successSubtle",
        color: "status.success",
      },
      warning: {
        bg: "status.warningSubtle",
        color: "status.warning",
      },
      error: {
        bg: "status.errorSubtle",
        color: "status.error",
      },
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

export type BadgeVariant = "neutral" | "info" | "success" | "warning" | "error";
