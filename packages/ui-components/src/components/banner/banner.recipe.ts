import { cva } from "styled-system/css";

export const bannerRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "md",
    px: "xl",
    py: "md",
    borderRadius: "sm",
    border: "1px solid",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "regular",
    fontFamily: "body",
    width: "100%",
  },
  variants: {
    variant: {
      neutral: {
        bg: "bg.muted",
        borderColor: "border.default",
        color: "text.secondary",
      },
      info: {
        bg: "status.infoSubtle",
        borderColor: "status.info",
        color: "status.info",
      },
      warning: {
        bg: "status.warningSubtle",
        borderColor: "status.warning",
        color: "status.warning",
      },
      error: {
        bg: "status.errorSubtle",
        borderColor: "status.error",
        color: "status.error",
      },
      success: {
        bg: "status.successSubtle",
        borderColor: "status.success",
        color: "status.success",
      },
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

export type BannerVariant = "neutral" | "info" | "warning" | "error" | "success";
