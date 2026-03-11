import { cva } from "styled-system/css";

export const infoRowRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "md",
    fontFamily: "body",
    fontSize: "body",
    lineHeight: "body",
  },
  variants: {},
});

export const infoRowLabelRecipe = cva({
  base: {
    color: "text.tertiary",
    fontWeight: "regular",
    flexShrink: 0,
  },
  variants: {},
});

export const infoRowValueRecipe = cva({
  base: {
    fontWeight: "regular",
    textAlign: "right",
  },
  variants: {
    variant: {
      default: {
        color: "text.primary",
      },
      link: {
        color: "text.link",
        cursor: "pointer",
        textDecoration: "none",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type InfoRowVariant = "default" | "link";
