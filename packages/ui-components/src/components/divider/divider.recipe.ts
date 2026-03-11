import { cva } from "styled-system/css";

export const dividerRecipe = cva({
  base: {
    border: "none",
    flexShrink: 0,
    bg: "border.default",
  },
  variants: {
    orientation: {
      horizontal: {
        width: "100%",
        height: "1px",
      },
      vertical: {
        height: "100%",
        width: "1px",
      },
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export type DividerOrientation = "horizontal" | "vertical";
