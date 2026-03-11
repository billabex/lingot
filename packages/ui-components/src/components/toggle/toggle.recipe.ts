import { cva } from "styled-system/css";

export const toggleRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "md",
    cursor: "pointer",
  },
  variants: {
    disabled: {
      true: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
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

export const toggleKnobRecipe = cva({
  base: {
    position: "absolute",
    top: "2px",
    width: "20px",
    height: "20px",
    borderRadius: "full",
    bg: "bg.default",
    transition: "left 0.15s ease",
    shadow: "sm",
  },
  variants: {
    checked: {
      true: {
        left: "18px",
      },
      false: {
        left: "2px",
      },
    },
  },
  defaultVariants: {
    checked: false,
  },
});

export const toggleLabelRecipe = cva({
  base: {
    fontSize: "body",
    lineHeight: "body",
    fontWeight: "regular",
    color: "text.primary",
  },
  variants: {},
  defaultVariants: {},
});
