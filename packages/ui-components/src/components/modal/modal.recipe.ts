import { cva } from "styled-system/css";

export const modalRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    bg: "bg.default",
    borderRadius: "lg",
    shadow: "lg",
    overflow: "hidden",
  },
  variants: {
    size: {
      /** Compact width — confirmation dialogs with short body text. */
      sm: { width: "360px" },
      /** Default width — form modals with fields. */
      md: { width: "480px" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type ModalSize = "sm" | "md";

export const modalHeaderRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    p: "xl",
    borderBottom: "1px solid",
    borderColor: "border.default",
    overflow: "hidden",
  },
});

export const modalTitleRecipe = cva({
  base: {
    fontSize: "headline.sm",
    lineHeight: "headline.sm",
    fontWeight: "semibold",
    fontFamily: "body",
    color: "text.primary",
    whiteSpace: "nowrap",
  },
});

export const modalContentRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    p: "xl",
    overflow: "hidden",
    fontSize: "body",
    lineHeight: "body",
    fontWeight: "regular",
    fontFamily: "body",
    color: "text.primary",
  },
});

export const modalFooterRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "md",
    width: "100%",
    p: "xl",
    borderTop: "1px solid",
    borderColor: "border.default",
    overflow: "hidden",
  },
});
