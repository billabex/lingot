import { cva } from "styled-system/css";

export const tablePaginationRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "md",
    paddingBlock: "lg",
    paddingInline: "padding.page",
    borderTop: "1px solid",
    borderTopColor: "border.default",
    fontFamily: "body",
    flexShrink: 0,
    bg: "bg.default",
  },
});

export const tablePaginationInfoRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "caption",
    lineHeight: "caption",
    fontWeight: "regular",
    color: "text.tertiary",
    whiteSpace: "nowrap",
  },
});

export const tablePaginationControlsRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "xs",
  },
});

export const tablePaginationButtonRecipe = cva({
  base: {
    minWidth: "28px",
    height: "28px",
    paddingInline: "xs",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "xs",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "border.default",
    bg: "bg.default",
    color: "text.secondary",
    fontFamily: "body",
    fontSize: "caption",
    lineHeight: "caption",
    fontWeight: "medium",
    cursor: "pointer",
    transition: "all 0.15s ease",
    _hover: {
      bg: "bg.muted",
      borderColor: "action.secondaryHover",
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "border.focus",
      outlineOffset: "1px",
    },
    _disabled: {
      opacity: 0.5,
      cursor: "default",
      color: "text.tertiary",
      _hover: {
        bg: "bg.default",
        borderColor: "border.default",
      },
    },
  },
  variants: {
    active: {
      true: {
        bg: "action.primary",
        color: "text.inverse",
        borderColor: "action.primary",
        _hover: {
          bg: "action.primaryHover",
          borderColor: "action.primaryHover",
        },
      },
    },
  },
});
