import { cva } from "styled-system/css";

export const pageHeaderRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "2xl",
    width: "100%",
  },
});

export const pageHeaderRowRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "lg",
    width: "100%",
  },
});

export const pageHeaderTitleRecipe = cva({
  base: {
    flex: 1,
    fontFamily: "body",
    fontSize: "headline.lg",
    lineHeight: "headline.lg",
    fontWeight: "semibold",
    color: "text.primary",
    margin: 0,
    minWidth: 0,
  },
});
