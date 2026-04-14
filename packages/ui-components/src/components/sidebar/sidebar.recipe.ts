import { cva } from "styled-system/css";

export const sidebarRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "clip",
    height: "100%",
    flexShrink: 0,
    width: "48px",
    paddingBlock: "md",
    paddingInline: "0",
  },
});

export const sidebarHeaderRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "md",
    alignItems: "center",
    overflow: "clip",
    p: "md",
    flexShrink: 0,
  },
});

export const sidebarContentRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xs",
    alignItems: "center",
    overflow: "clip",
    p: "md",
    flexGrow: 1,
    width: "100%",
  },
});

