import { cva } from "styled-system/css";

export const tableSortHeaderRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "xs",
    border: "none",
    bg: "transparent",
    p: 0,
    m: 0,
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit",
    fontWeight: "inherit",
    letterSpacing: "inherit",
    textTransform: "inherit",
    textAlign: "inherit",
    color: "inherit",
    verticalAlign: "baseline",
    whiteSpace: "nowrap",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "border.focus",
      outlineOffset: "2px",
    },
  },
  variants: {
    active: {
      true: { color: "text.primary" },
      false: {
        color: "inherit",
        _hover: { color: "text.secondary" },
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const tableSortIconRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 150ms ease",
  },
  variants: {
    direction: {
      asc: { transform: "rotate(180deg)" },
      desc: { transform: "rotate(0deg)" },
    },
    active: {
      true: { color: "text.primary" },
      false: { color: "text.tertiary" },
    },
  },
  defaultVariants: {
    direction: "desc",
    active: false,
  },
});
