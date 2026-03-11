import { cva } from "styled-system/css";

export const tooltipRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    px: "xs",
    borderRadius: "xs",
    bg: "bg.inverse",
    color: "text.inverse",
    fontSize: "caption",
    lineHeight: "caption",
    fontWeight: "medium",
    fontFamily: "body",
    whiteSpace: "nowrap",
  },
  variants: {},
  defaultVariants: {},
});
