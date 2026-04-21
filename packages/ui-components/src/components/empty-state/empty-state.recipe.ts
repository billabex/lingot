import { cva } from "styled-system/css";

export const emptyStateRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "body",
    gap: "md",
  },
  variants: {
    variant: {
      default: {
        py: "2xl",
        px: "2xl",
      },
      compact: {
        py: "lg",
        px: "lg",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const emptyStateIconRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "3xl",
    height: "3xl",
    color: "text.tertiary",
    "& > svg": {
      width: "100%",
      height: "100%",
      strokeWidth: 1.5,
    },
  },
});

export const emptyStateTitleRecipe = cva({
  base: {
    fontSize: "body",
    lineHeight: "body",
    fontWeight: "regular",
    color: "text.primary",
  },
});

export const emptyStateDescriptionRecipe = cva({
  base: {
    fontSize: "body.sm",
    lineHeight: "body.sm",
    color: "text.secondary",
  },
});

export type EmptyStateVariant = "default" | "compact";

export const emptyStateTextRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "md",
  },
  variants: {},
  defaultVariants: {},
});
