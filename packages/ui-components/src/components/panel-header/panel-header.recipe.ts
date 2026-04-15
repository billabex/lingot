import { cva } from "styled-system/css";

export const panelHeaderRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    height: "4xl",
    bg: "bg.default",
    flexShrink: 0,
    width: "100%",
  },
  variants: {
    variant: {
      /** Center / main panel: padding.page (24px), gap md, left-aligned. Task / comm / account detail. */
      page: {
        px: "padding.page",
        gap: "md",
      },
      /** Left list or right aside panel: padding.card (16px), items pushed to edges. */
      card: {
        px: "padding.card",
        justifyContent: "space-between",
      },
    },
  },
  defaultVariants: {
    variant: "page",
  },
});

export type PanelHeaderVariant = "page" | "card";

export const panelHeaderTitleRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "body",
    lineHeight: "body",
    fontWeight: "medium",
    color: "text.primary",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    minWidth: 0,
  },
});

export const panelHeaderSpacerRecipe = cva({
  base: {
    flex: "1",
  },
});
