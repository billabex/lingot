import { cva } from "styled-system/css";

export const statCardGroupRecipe = cva({
  base: {
    display: "flex",
    gap: "lg",
    padding: "padding.card",
    bg: "bg.subtle",
    border: "1px solid",
    borderColor: "border.default",
    borderRadius: "sm",
    margin: 0,
  },
});
