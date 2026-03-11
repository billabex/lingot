import { cva } from "styled-system/css";

export const tabItemRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "flex-start",
    py: "xs",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "regular",
    fontFamily: "body",
    color: "text.secondary",
    cursor: "pointer",
    border: "none",
    bg: "transparent",
    transition: "all 0.15s ease",
    borderBottom: "2px solid transparent",
    outline: "none",
    _hover: {
      color: "text.primary",
    },
    _focusVisible: {
      ring: "2px",
      ringColor: "border.focus",
      ringOffset: "2px",
    },
  },
  variants: {
    active: {
      true: {
        color: "text.primary",
        fontWeight: "medium",
        borderBottomColor: "action.primary",
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});
