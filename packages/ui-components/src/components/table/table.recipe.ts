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
    gap: 0,
    alignItems: "center",
    overflow: "clip",
    bg: "bg.default",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "border.default",
    borderLeftWidth: "3px",
    borderLeftStyle: "solid",
    borderLeftColor: "transparent",
    width: "100%",
    fontFamily: "body",
    fontWeight: "semibold",
    color: "text.tertiary",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    lineHeight: "20px",
  },
  variants: {
    density: {
      normal: {
        px: "2xl",
        py: "10px",
        fontSize: "11px",
      },
      compact: {
        px: "lg",
        py: "md",
        fontSize: "10px",
      },
    },
  },
  defaultVariants: {
    density: "normal",
  },
});

export type TableDensity = "normal" | "compact";
