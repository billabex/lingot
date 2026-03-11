import { cva } from "styled-system/css";

export const listItemRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xs",
    alignItems: "flex-start",
    overflow: "hidden",
    p: "xs",
    borderRadius: "md",
  },
  variants: {
    selected: {
      true: {
        bg: "bg.muted",
      },
      false: {},
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export const listItemTitleRecipe = cva({
  base: {
    fontSize: "body",
    lineHeight: "body",
    fontWeight: "regular",
    fontFamily: "body",
    color: "text.primary",
  },
});

export const listItemMetaRecipe = cva({
  base: {
    fontSize: "caption",
    lineHeight: "caption",
    fontWeight: "medium",
    fontFamily: "body",
    color: "text.tertiary",
  },
});

export const listItemPreviewRecipe = cva({
  base: {
    fontSize: "body",
    lineHeight: "body",
    fontWeight: "regular",
    fontFamily: "body",
    color: "text.secondary",
  },
});

export const listItemWrapperRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "lg",
    alignItems: "flex-start",
    px: "xl",
    py: "lg",
    bg: "bg.default",
    width: "100%",
  },
});

export const listItemRowRecipe = cva({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: "md",
  },
});
