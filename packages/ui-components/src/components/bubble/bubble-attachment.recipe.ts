import { cva } from "styled-system/css";

export const bubbleAttachmentRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "xs",
    px: "sm",
    py: "xs",
    borderRadius: "sm",
    border: "1px solid",
    borderColor: "border.subtle",
    bg: "bg.default",
    color: "text.primary",
    fontFamily: "body",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    textDecoration: "none",
    cursor: "pointer",
    maxWidth: "100%",
    transition: "background 0.12s ease",
    _hover: { bg: "bg.subtle" },
    _focusVisible: {
      outline: "none",
      ring: "2px",
      ringColor: "border.focus",
      ringOffset: "1px",
    },
  },
});

export const bubbleAttachmentGroupRecipe = cva({
  base: {
    display: "flex",
    flexWrap: "wrap",
    gap: "xs",
  },
});

export const bubbleAttachmentIconRecipe = cva({
  base: {
    display: "inline-flex",
    flexShrink: 0,
    color: "text.secondary",
  },
});

export const bubbleAttachmentNameRecipe = cva({
  base: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});
