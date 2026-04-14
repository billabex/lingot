import { cva } from "styled-system/css";

export const sectionTitleRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "md",
    width: "100%",
    height: "24px",
    fontFamily: "body",
    fontSize: "caption.soft",
    lineHeight: "caption.soft",
    fontWeight: "regular",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "text.tertiary",
  },
});

export const sectionTitleTrailingRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    flexShrink: 0,
    textTransform: "none",
    letterSpacing: "normal",
    // Force the trailing IconButton's icon color to match the label.
    "& > button": {
      color: "text.tertiary",
    },
  },
});
