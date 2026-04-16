import { cva } from "styled-system/css";

export const statCardRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "md",
    flex: 1,
    minWidth: 0,
    textAlign: "center",
  },
});

export const statCardLabelRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "caption.xs",
    lineHeight: "caption.xs",
    fontWeight: "regular",
    color: "text.tertiary",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
});

export const statCardValueRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "headline.sm",
    lineHeight: "headline.sm",
    fontWeight: "semibold",
    color: "text.primary",
    margin: 0,
  },
});
