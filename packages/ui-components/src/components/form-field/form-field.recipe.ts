import { cva } from "styled-system/css";

export const formFieldRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xs",
    alignItems: "flex-start",
    width: "100%",
  },
});

export const formFieldLabelRecipe = cva({
  base: {
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "regular",
    fontFamily: "body",
    color: "text.primary",
    width: "100%",
  },
});

export const formFieldHelperRecipe = cva({
  base: {
    fontSize: "caption",
    lineHeight: "caption",
    fontWeight: "medium",
    fontFamily: "body",
    width: "100%",
  },
  variants: {
    error: {
      true: {
        color: "status.error",
      },
      false: {
        color: "text.tertiary",
      },
    },
  },
  defaultVariants: {
    error: false,
  },
});
