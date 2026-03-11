import { cva } from "styled-system/css";

export const cardRecipe = cva({
  base: {
    bg: "bg.default",
    border: "1px solid",
    borderColor: "border.default",
    borderRadius: "md",
    overflow: "hidden",
  },
  variants: {
    variant: {
      flat: {},
      elevated: {
        shadow: "sm",
      },
    },
  },
  defaultVariants: {
    variant: "flat",
  },
});

export type CardVariant = "flat" | "elevated";
