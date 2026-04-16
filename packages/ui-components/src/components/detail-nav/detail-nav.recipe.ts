import { cva } from "styled-system/css";

export const detailNavRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "md",
    paddingBlock: "lg",
    borderBottom: "1px solid",
    borderBottomColor: "border.subtle",
    fontFamily: "body",
  },
});

export const detailNavButtonRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "xs",
    fontFamily: "body",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "medium",
    color: "text.link",
    bg: "transparent",
    border: "none",
    borderRadius: "xs",
    paddingBlock: "sm",
    paddingInline: "md",
    cursor: "pointer",
    transition: "all 0.15s ease",
    _hover: {
      bg: "bg.muted",
      color: "text.linkHover",
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "border.focus",
      outlineOffset: "1px",
    },
    _disabled: {
      color: "text.tertiary",
      cursor: "default",
      _hover: {
        bg: "transparent",
        color: "text.tertiary",
      },
    },
  },
});

export const detailNavPositionRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "caption.soft",
    lineHeight: "caption.soft",
    fontWeight: "regular",
    color: "text.tertiary",
    whiteSpace: "nowrap",
  },
});
