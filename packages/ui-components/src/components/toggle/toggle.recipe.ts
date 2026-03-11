import { cva } from "styled-system/css";

export const toggleRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "md",
    cursor: "pointer",
  },
  variants: {},
  defaultVariants: {},
});

export const toggleTrackRecipe = cva({
  base: {
    position: "relative",
    width: "40px",
    height: "24px",
    borderRadius: "full",
    bg: "bg.muted",
    transition: "all 0.15s ease",
    flexShrink: 0,
    cursor: "pointer",
    shadow: "sm",
  },
  variants: {
    checked: {
      true: {
        bg: "action.primary",
      },
    },
    disabled: {
      true: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
  },
  defaultVariants: {
    checked: false,
    disabled: false,
  },
});
