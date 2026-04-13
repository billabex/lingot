import { cva } from "styled-system/css";

export const listItemRecipe = cva({
  base: {
    display: "flex",
    gap: "md",
    alignItems: "flex-start",
    width: "100%",
    borderRadius: "md",
    borderLeft: "3px solid transparent",
    textAlign: "left",
    bg: "transparent",
    color: "text.primary",
    fontFamily: "body",
    transition: "background-color 120ms ease",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "border.focus",
      outlineOffset: "-2px",
    },
  },
  variants: {
    accent: {
      none: { borderLeftColor: "transparent" },
      reply: { borderLeftColor: "terracotta.400" },
      info: { borderLeftColor: "status.info" },
      success: { borderLeftColor: "status.success" },
      warning: { borderLeftColor: "status.warning" },
      error: { borderLeftColor: "status.error" },
    },
    active: {
      true: { bg: "bg.muted" },
      false: {},
    },
    density: {
      default: { paddingBlock: "md", paddingInline: "md" },
      compact: { paddingBlock: "sm", paddingInline: "md" },
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
    accent: "none",
    active: false,
    density: "default",
    clickable: false,
  },
});

export const listItemLeadingRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: "text.secondary",
    marginTop: "0.125rem",
  },
});

export const listItemContentRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xs",
    flex: 1,
    minWidth: 0,
  },
});

export const listItemTitleRowRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "md",
    width: "100%",
    minWidth: 0,
  },
});

export const listItemTitleRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "body",
    lineHeight: "body",
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
  },
});

export const listItemSubRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "caption.xs",
    lineHeight: "caption.xs",
    fontWeight: "regular",
    color: "text.tertiary",
  },
});

export const listItemTrailingRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "sm",
    flexShrink: 0,
    color: "text.tertiary",
    fontFamily: "body",
    fontSize: "caption",
    lineHeight: "caption",
  },
});
