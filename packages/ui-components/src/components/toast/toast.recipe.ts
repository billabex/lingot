import { cva } from "styled-system/css";

export const toastRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "lg",
    minWidth: "320px",
    bg: "bg.default",
    border: "1px solid",
    borderRadius: "md",
    shadow: "md",
    px: "xl",
    py: "lg",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "regular",
    fontFamily: "body",
    color: "text.secondary",
    overflow: "hidden",
  },
  variants: {
    variant: {
      info: {
        borderColor: "border.default",
      },
      success: {
        borderColor: "status.success",
      },
      warning: {
        borderColor: "status.warning",
      },
      error: {
        borderColor: "status.error",
      },
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export type ToastVariant = "info" | "success" | "warning" | "error";
