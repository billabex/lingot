import { cva } from "styled-system/css";

export const contactCardRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "lg",
    width: "100%",
    minWidth: 0,
    fontFamily: "body",
    textAlign: "left",
    bg: "transparent",
    border: "none",
    padding: 0,
  },
  variants: {
    clickable: {
      true: {
        cursor: "pointer",
        paddingBlock: "sm",
        paddingInline: "sm",
        borderRadius: "xs",
        transition: "background-color 120ms ease",
        _hover: { bg: "bg.muted" },
        _focusVisible: {
          outline: "2px solid",
          outlineColor: "border.focus",
          outlineOffset: "-2px",
        },
      },
      false: {
        cursor: "default",
      },
    },
  },
  defaultVariants: { clickable: false },
});

export const contactCardBodyRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minWidth: 0,
  },
});

export const contactCardNameRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "medium",
    color: "text.primary",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

export const contactCardEmailRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "caption.soft",
    lineHeight: "caption.soft",
    fontWeight: "regular",
    color: "text.tertiary",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

export const contactCardLanguageRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "micro",
    lineHeight: "micro",
    fontWeight: "semibold",
    color: "text.tertiary",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    marginTop: "xs",
  },
});
