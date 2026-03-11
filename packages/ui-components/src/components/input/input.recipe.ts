import { cva } from "styled-system/css";

export const inputRecipe = cva({
  base: {
    width: "100%",
    bg: "bg.default",
    border: "1px solid",
    borderColor: "border.default",
    borderRadius: "sm",
    px: "md",
    py: "xs",
    fontSize: "body",
    lineHeight: "body",
    fontFamily: "body",
    fontWeight: "regular",
    color: "text.primary",
    outline: "none",
    transition: "all 0.15s ease",
    _placeholder: {
      color: "text.tertiary",
    },
    _hover: {
      borderColor: "border.focus",
    },
    _focus: {
      borderColor: "border.focus",
      ring: "2px",
      ringColor: "border.focus",
      ringOffset: "2px",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      bg: "bg.subtle",
    },
  },
  variants: {
    error: {
      true: {
        borderColor: "border.error",
        _hover: {
          borderColor: "border.error",
        },
        _focus: {
          borderColor: "border.error",
          ringColor: "border.error",
        },
      },
    },
  },
  defaultVariants: {
    error: false,
  },
});

export const inputWrapperRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xs",
    width: "100%",
  },
  variants: {},
  defaultVariants: {},
});

export const inputLabelRecipe = cva({
  base: {
    fontSize: "caption",
    lineHeight: "caption",
    fontWeight: "medium",
    color: "text.secondary",
  },
  variants: {},
  defaultVariants: {},
});
