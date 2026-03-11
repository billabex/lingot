import { cva } from "styled-system/css";

export const breadcrumbRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "xs",
    fontSize: "body",
    lineHeight: "body",
    fontWeight: "regular",
    fontFamily: "body",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  variants: {},
  defaultVariants: {},
});

export const breadcrumbSeparatorRecipe = cva({
  base: {
    color: "text.tertiary",
    flexShrink: 0,
  },
  variants: {},
  defaultVariants: {},
});

export const breadcrumbItemRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "xs",
  },
  variants: {},
  defaultVariants: {},
});

export const breadcrumbCurrentRecipe = cva({
  base: {
    color: "text.primary",
  },
  variants: {},
  defaultVariants: {},
});

export const breadcrumbLinkRecipe = cva({
  base: {
    color: "text.link",
    textDecoration: "none",
    cursor: "pointer",
    _hover: {
      color: "text.linkHover",
    },
  },
  variants: {},
  defaultVariants: {},
});
