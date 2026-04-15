import { cva } from "styled-system/css";

export const bulkActionBarRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "xl",
    paddingBlock: "lg",
    paddingInline: "padding.page",
    bg: "bg.inverse",
    color: "text.inverse",
    fontFamily: "body",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "medium",
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderTopColor: "neutral.500",
    flexShrink: 0,
  },
});

export const bulkActionBarCountRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "medium",
    color: "text.inverse",
  },
});

export const bulkActionBarActionsRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "md",
  },
});

export const bulkActionBarActionRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "sm",
    paddingBlock: "sm",
    paddingInline: "xl",
    borderRadius: "xs",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(255,255,255,0.2)",
    bg: "transparent",
    color: "text.inverse",
    fontFamily: "body",
    fontSize: "caption",
    lineHeight: "caption",
    fontWeight: "medium",
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "background 120ms ease",
    _hover: { bg: "rgba(255,255,255,0.1)" },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "border.focus",
      outlineOffset: "1px",
    },
    _disabled: {
      opacity: 0.5,
      cursor: "default",
      _hover: { bg: "transparent" },
    },
  },
});

export const bulkActionBarCloseRecipe = cva({
  base: {
    width: "1.5rem",
    height: "1.5rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    border: "none",
    bg: "transparent",
    color: "text.inverse",
    borderRadius: "xs",
    cursor: "pointer",
    flexShrink: 0,
    transition: "background 120ms ease",
    _hover: { bg: "rgba(255,255,255,0.1)" },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "border.focus",
      outlineOffset: "1px",
    },
  },
});
