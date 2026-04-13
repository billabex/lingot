import { cva } from "styled-system/css";

export const paginationRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "sm",
    paddingBlock: "lg",
    paddingInline: "xl",
    borderTop: "1px solid",
    borderTopColor: "border.subtle",
    fontFamily: "body",
  },
  variants: {
    size: {
      sm: {},
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export const paginationInfoRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "caption.xs",
    lineHeight: "14px",
    fontWeight: "regular",
    color: "text.tertiary",
    whiteSpace: "nowrap",
  },
});

export const paginationButtonRecipe = cva({
  base: {
    width: "24px",
    height: "24px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "xs",
    border: "none",
    bg: "transparent",
    color: "text.tertiary",
    cursor: "pointer",
    padding: "0",
    transition: "all 0.15s ease",
    _hover: {
      color: "text.secondary",
      bg: "bg.muted",
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "border.focus",
      outlineOffset: "1px",
    },
    _disabled: {
      opacity: 0.3,
      cursor: "default",
      _hover: {
        bg: "transparent",
        color: "text.tertiary",
      },
    },
  },
});

export type PaginationSize = "sm";
