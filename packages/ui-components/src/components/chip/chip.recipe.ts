import { cva } from "styled-system/css";

export const chipRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "xs",
    px: "md",
    py: "xs",
    borderRadius: "full",
    border: "1px solid",
    borderColor: "border.default",
    bg: "bg.default",
    color: "text.secondary",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "regular",
    fontFamily: "body",
    whiteSpace: "nowrap",
    boxShadow: "sm",
    outline: "none",
    transition: "all 0.15s ease",
    _focusVisible: {
      ring: "2px",
      ringColor: "border.focus",
      ringOffset: "2px",
    },
  },
  variants: {
    variant: {
      filter: {
        cursor: "pointer",
        _hover: { bg: "bg.muted" },
      },
      removable: {
        cursor: "default",
        paddingInlineEnd: "xs",
      },
      static: {
        cursor: "default",
        boxShadow: "none",
      },
    },
    active: {
      true: {
        bg: "action.primary",
        color: "text.inverse",
        borderColor: "action.primary",
        _hover: {
          bg: "action.primaryHover",
        },
      },
    },
  },
  defaultVariants: {
    variant: "filter",
    active: false,
  },
});

export const chipRemoveRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "16px",
    height: "16px",
    flexShrink: 0,
    borderRadius: "full",
    border: "none",
    bg: "transparent",
    color: "text.tertiary",
    cursor: "pointer",
    padding: "0",
    marginInlineStart: "xs",
    transition: "all 0.12s ease",
    _hover: {
      bg: "bg.muted",
      color: "text.secondary",
    },
    _focusVisible: {
      ring: "2px",
      ringColor: "border.focus",
      ringOffset: "1px",
      outline: "none",
    },
  },
});

export type ChipVariant = "filter" | "removable" | "static";
