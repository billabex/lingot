import { cva } from "styled-system/css";

export const selectRecipe = cva({
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
    cursor: "pointer",
    transition: "all 0.15s ease",
    appearance: "none",
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
