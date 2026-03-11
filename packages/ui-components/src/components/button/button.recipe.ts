import { cva } from "styled-system/css";

export const buttonRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "md",
    borderRadius: "sm",
    fontFamily: "body",
    fontWeight: "regular",
    cursor: "pointer",
    transition: "all 0.15s ease",
    border: "none",
    outline: "none",
    whiteSpace: "nowrap",
    userSelect: "none",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    _focusVisible: {
      ring: "2px",
      ringColor: "border.focus",
      ringOffset: "2px",
    },
  },
  variants: {
    variant: {
      primary: {
        bg: "action.primary",
        color: "text.inverse",
        _hover: {
          bg: "action.primaryHover",
        },
        _active: {
          bg: "action.primaryPressed",
        },
      },
      secondary: {
        bg: "action.secondary",
        color: "text.primary",
        _hover: {
          bg: "action.secondaryHover",
        },
        _active: {
          bg: "action.secondaryHover",
        },
      },
      ghost: {
        bg: "transparent",
        color: "text.primary",
        _hover: {
          bg: "bg.muted",
        },
        _active: {
          bg: "action.secondary",
        },
      },
      destructive: {
        bg: "action.destructive",
        color: "text.inverse",
        _hover: {
          opacity: 0.9,
        },
        _active: {
          opacity: 0.8,
        },
      },
    },
    size: {
      medium: {
        height: "32px",
        px: "lg",
        py: "sm",
        fontSize: "body",
        lineHeight: "body",
      },
      small: {
        height: "26px",
        px: "md",
        py: "xs",
        fontSize: "body.sm",
        lineHeight: "body.sm",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
export type ButtonSize = "medium" | "small";
