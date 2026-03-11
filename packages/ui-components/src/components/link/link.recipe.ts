import { cva } from "styled-system/css";

export const linkRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "body",
    fontSize: "body",
    lineHeight: "body",
    fontWeight: "regular",
    cursor: "pointer",
    transition: "color 0.15s ease",
    textDecoration: "none",
    _focusVisible: {
      ring: "2px",
      ringColor: "border.focus",
      ringOffset: "2px",
    },
  },
  variants: {
    variant: {
      default: {
        color: "text.link",
        _hover: {
          color: "text.linkHover",
          textDecoration: "underline",
        },
      },
      subtle: {
        color: "text.secondary",
        _hover: {
          color: "text.primary",
          textDecoration: "underline",
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type LinkVariant = "default" | "subtle";
