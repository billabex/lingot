import { cva } from "styled-system/css";

export const dropdownMenuRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xs",
    alignItems: "flex-start",
    minWidth: "160px",
    bg: "bg.default",
    borderRadius: "md",
    shadow: "sm",
    p: "xs",
    overflow: "hidden",
  },
});
