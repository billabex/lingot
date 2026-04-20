import { cva } from "styled-system/css";

export const navItemRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    borderRadius: "sm",
    fontFamily: "body",
    cursor: "pointer",
    transition: "all 0.15s ease",
    border: "none",
    bg: "transparent",
    outline: "none",
    _focusVisible: {
      ring: "2px",
      ringColor: "border.focus",
      ringOffset: "2px",
    },
  },
  variants: {
    variant: {
      default: {
        gap: "md",
        px: "md",
        py: "sm",
        fontSize: "body.sm",
        lineHeight: "body.sm",
        fontWeight: "regular",
        color: "text.primary",
        width: "100%",
        textAlign: "left",
        _hover: {
          bg: "bg.muted",
        },
      },
      icon: {
        position: "relative",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        color: "text.tertiary",
        flexShrink: 0,
        _hover: {
          bg: "action.secondary",
          color: "text.secondary",
          "& [role='tooltip']": {
            opacity: 1,
          },
        },
      },
    },
    active: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variant: "default",
      active: true,
      css: {
        bg: "bg.muted",
        fontWeight: "medium",
      },
    },
    {
      variant: "icon",
      active: true,
      css: {
        bg: "action.secondary",
        color: "text.secondary",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    active: false,
  },
});

export type NavItemVariant = "default" | "icon";
