import { cva } from "styled-system/css";

export const emptyStateRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "body",
  },
  variants: {
    variant: {
      default: {
        gap: "xl",
        py: "4xl",
        px: "2xl",
      },
      compact: {
        gap: "md",
        py: "xl",
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
    color: "text.tertiary",
  },
  variants: {
    variant: {
      default: {
        width: "48px",
        height: "48px",
      },
      compact: {
        width: "32px",
        height: "32px",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const emptyStateTitleRecipe = cva({
  base: {
    fontWeight: "bold",
    color: "text.primary",
  },
  variants: {
    variant: {
      default: {
        fontSize: "body",
        lineHeight: "body",
      },
      compact: {
        fontSize: "body.sm",
        lineHeight: "body.sm",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const emptyStateDescriptionRecipe = cva({
  base: {
    color: "text.secondary",
  },
  variants: {
    variant: {
      default: {
        fontSize: "body.sm",
        lineHeight: "body.sm",
      },
      compact: {
        fontSize: "caption",
        lineHeight: "caption",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type EmptyStateVariant = "default" | "compact";
