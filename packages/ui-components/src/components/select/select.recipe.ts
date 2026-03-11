import { cva } from "styled-system/css";

export const selectRecipe = cva({
  base: {
    width: "100%",
    bg: "bg.default",
    border: "1px solid",
    borderColor: "border.default",
    borderRadius: "sm",
    px: "md",
    pr: "3xl",
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

export const selectWrapperRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xs",
    width: "100%",
  },
  variants: {},
  defaultVariants: {},
});

export const selectLabelRecipe = cva({
  base: {
    fontSize: "caption",
    lineHeight: "caption",
    fontWeight: "medium",
    color: "text.secondary",
  },
  variants: {},
  defaultVariants: {},
});

export const selectContainerRecipe = cva({
  base: {
    position: "relative",
    color: "text.tertiary",
  },
  variants: {},
  defaultVariants: {},
});

export const selectIconRecipe = cva({
  base: {
    position: "absolute",
    right: "md",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  },
  variants: {},
  defaultVariants: {},
});
