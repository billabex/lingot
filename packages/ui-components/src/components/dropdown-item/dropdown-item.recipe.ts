import { cva } from "styled-system/css";

export const dropdownItemRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "md",
    px: "md",
    py: "sm",
    borderRadius: "sm",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "regular",
    fontFamily: "body",
    color: "text.primary",
    cursor: "pointer",
    transition: "all 0.15s ease",
    border: "none",
    bg: "transparent",
    width: "100%",
    textAlign: "left",
    outline: "none",
    _hover: {
      bg: "bg.muted",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    _focusVisible: {
      ring: "2px",
      ringColor: "border.focus",
      ringOffset: "2px",
    },
  },
  variants: {
    selected: {
      true: {
        bg: "bg.muted",
        fontWeight: "medium",
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});
