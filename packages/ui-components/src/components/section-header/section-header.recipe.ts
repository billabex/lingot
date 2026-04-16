import { cva } from "styled-system/css";

export const sectionHeaderRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "md",
    width: "100%",
  },
});

export const sectionHeaderTitleRowRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "lg",
    width: "100%",
  },
});

export const sectionHeaderTitleRecipe = cva({
  base: {
    flex: 1,
    fontFamily: "body",
    fontSize: "headline.md",
    lineHeight: "headline.md",
    fontWeight: "semibold",
    color: "text.primary",
    margin: 0,
    minWidth: 0,
  },
});

export const sectionHeaderTrailingRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    flexShrink: 0,
  },
});

export const sectionHeaderDescriptionRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "regular",
    color: "text.secondary",
    margin: 0,
  },
});
