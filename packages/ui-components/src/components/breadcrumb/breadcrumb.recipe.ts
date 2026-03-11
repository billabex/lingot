import { cva } from "styled-system/css";

export const breadcrumbRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "xs",
    fontSize: "body",
    lineHeight: "body",
    fontWeight: "regular",
    fontFamily: "body",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  variants: {},
  defaultVariants: {},
});
