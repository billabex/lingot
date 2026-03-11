import { cva } from "styled-system/css";

export const iconButtonRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "sm",
    cursor: "pointer",
    transition: "all 0.15s ease",
    border: "none",
    outline: "none",
    bg: "transparent",
    color: "text.primary",
    _hover: {
      bg: "bg.muted",
    },
    _active: {
      bg: "action.secondary",
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
    size: {
      medium: {
        width: "32px",
        height: "32px",
      },
      small: {
        width: "24px",
        height: "24px",
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type IconButtonSize = "medium" | "small";
