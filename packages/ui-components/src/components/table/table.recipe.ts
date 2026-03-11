import { cva } from "styled-system/css";

export const tableRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
});

export const tableHeaderRecipe = cva({
  base: {
    display: "flex",
    gap: "xl",
    alignItems: "center",
    overflow: "clip",
    px: "xl",
    py: "xs",
    bg: "bg.subtle",
    borderBottom: "1px solid",
    borderTop: "1px solid",
    borderColor: "border.default",
    width: "100%",
    fontSize: "body",
    lineHeight: "body",
    fontWeight: "regular",
    fontFamily: "body",
    color: "text.secondary",
  },
});
