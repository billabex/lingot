import { cva } from "styled-system/css";

export const listItemRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    width: "100%",
    paddingBlock: "lg",
    paddingInline: "xl",
    borderRadius: "sm",
    bg: "transparent",
    textAlign: "left",
    fontFamily: "body",
    color: "text.primary",
    transition: "background-color 120ms ease",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "border.focus",
      outlineOffset: "-2px",
    },
  },
  variants: {
    active: {
      true: { bg: "bg.muted" },
      false: {},
    },
    clickable: {
      true: { cursor: "pointer", _hover: { bg: "bg.subtle" } },
      false: { cursor: "default" },
    },
  },
  compoundVariants: [
    {
      active: true,
      clickable: true,
      css: { _hover: { bg: "bg.muted" } },
    },
  ],
  defaultVariants: {
    active: false,
    clickable: false,
  },
});

export const listItemTitleRowRecipe = cva({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "md",
    width: "100%",
    minWidth: 0,
    marginBottom: "xs",
  },
});

export const listItemTitleRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "medium",
    color: "text.primary",
    flex: 1,
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

export const listItemTitleTrailingRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "xs",
    flexShrink: 0,
  },
});

export const listItemPreviewRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "regular",
    color: "text.secondary",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    minWidth: 0,
    marginBottom: "sm",
  },
});

export const listItemMetaRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "md",
    width: "100%",
    minWidth: 0,
    fontFamily: "body",
  },
});

export const listItemSubRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "caption.xs",
    lineHeight: "caption.xs",
    fontWeight: "regular",
    color: "text.tertiary",
    marginTop: "xs",
  },
});
