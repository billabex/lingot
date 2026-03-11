import { cva } from "styled-system/css";

export const panelHeaderRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
});

export const panelHeaderTopRowRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "md",
    alignItems: "flex-start",
    width: "100%",
    bg: "bg.default",
    borderBottom: "1px solid",
    borderColor: "border.default",
    overflow: "hidden",
    p: "xl",
  },
});

export const panelHeaderTitleBarRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "32px",
  },
});

export const panelHeaderTitleRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "md",
    fontSize: "body",
    lineHeight: "body",
    fontWeight: "regular",
    fontFamily: "body",
    color: "text.primary",
  },
});

export const panelHeaderRowRecipe = cva({
  base: {
    display: "flex",
    alignItems: "flex-start",
    gap: "xs",
    px: "xl",
    py: "md",
    bg: "bg.default",
    borderBottom: "1px solid",
    borderColor: "border.default",
    overflow: "hidden",
    width: "100%",
  },
});
