import { cva } from "styled-system/css";

export const linkRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "xs",
    fontFamily: "body",
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
      tertiary: {
        color: "text.tertiary",
        textDecoration: "underline",
        textUnderlineOffset: "2px",
        _hover: {
          color: "text.secondary",
        },
      },
    },
    size: {
      md: {
        fontSize: "body",
        lineHeight: "body",
      },
      sm: {
        fontSize: "body.sm",
        lineHeight: "body.sm",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type LinkVariant = "default" | "subtle" | "tertiary";
export type LinkSize = "md" | "sm";
