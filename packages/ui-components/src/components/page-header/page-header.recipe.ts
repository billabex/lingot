import { cva } from "styled-system/css";

export const pageHeaderRecipe = cva({
  base: {
    display: "flex",
    gap: "xl",
    alignItems: "center",
    p: "xl",
    bg: "bg.default",
    width: "100%",
  },
});
