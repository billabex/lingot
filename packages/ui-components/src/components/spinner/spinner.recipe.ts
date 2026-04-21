import { cva } from "styled-system/css";

export const spinnerRecipe = cva({
  base: {
    display: "inline-flex",
    flexShrink: 0,
    color: "text.tertiary",
    animation: "dsSpinnerRotate 1s linear infinite",
  },
  variants: {
    size: {
      small: { width: "1rem", height: "1rem" },
      medium: { width: "1.5rem", height: "1.5rem" },
      large: { width: "2rem", height: "2rem" },
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type SpinnerSize = "small" | "medium" | "large";
