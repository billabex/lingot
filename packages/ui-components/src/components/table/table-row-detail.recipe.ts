import { cva } from "styled-system/css";

export const tableRowDetailRecipe = cva({
  base: {
    width: "100%",
    bg: "bg.default",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "border.default",
    borderLeftWidth: "3px",
    borderLeftStyle: "solid",
    borderLeftColor: "transparent",
    fontFamily: "body",
    color: "text.primary",
    px: "2xl",
    py: "xl",
  },
});
