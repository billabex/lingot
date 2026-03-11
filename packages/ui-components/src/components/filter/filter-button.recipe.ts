import { cva } from "styled-system/css";

export const filterButtonRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "xs",
    px: "md",
    py: "xs",
    borderRadius: "sm",
    border: "1px solid",
    borderColor: "border.default",
    bg: "bg.default",
    color: "text.secondary",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "regular",
    fontFamily: "body",
    cursor: "pointer",
    transition: "all 0.15s ease",
    whiteSpace: "nowrap",
    outline: "none",
    _hover: {
      bg: "bg.muted",
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
        bg: "action.primary",
        color: "text.inverse",
        borderColor: "action.primary",
        _hover: {
          bg: "action.primaryHover",
        },
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});
