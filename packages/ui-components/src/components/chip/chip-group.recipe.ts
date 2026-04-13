import { cva } from "styled-system/css";

export const chipGroupRecipe = cva({
  base: {
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "sm",
  },
});
