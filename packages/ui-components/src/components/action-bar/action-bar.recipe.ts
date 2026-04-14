import { cva } from "styled-system/css";

export const actionBarRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "md",
    flexWrap: "wrap",
  },
  variants: {
    align: {
      start: { justifyContent: "flex-start" },
      end: { justifyContent: "flex-end" },
      between: { justifyContent: "space-between" },
    },
    topBorder: {
      true: {
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "border.subtle",
        pt: "lg",
        mt: "lg",
      },
      false: {},
    },
  },
  defaultVariants: {
    align: "start",
    topBorder: false,
  },
});

export type ActionBarAlign = "start" | "end" | "between";
