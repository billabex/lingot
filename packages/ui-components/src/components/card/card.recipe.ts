import { cva } from "styled-system/css";

export const cardRecipe = cva({
  base: {
    bg: "bg.default",
    border: "1px solid",
    borderColor: "border.default",
    borderRadius: "md",
    overflow: "hidden",
    transition: "border-color 120ms ease, background 120ms ease",
  },
  variants: {
    variant: {
      flat: {},
      elevated: {
        shadow: "sm",
      },
    },
    interactive: {
      true: {
        cursor: "pointer",
        _hover: {
          borderColor: "action.secondaryHover",
        },
        _focusVisible: {
          outline: "none",
          ring: "2px",
          ringColor: "border.focus",
          ringOffset: "-2px",
        },
      },
      false: {},
    },
    selected: {
      true: {
        borderColor: "action.primary",
        bg: "bg.subtle",
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      interactive: true,
      selected: true,
      css: {
        _hover: { borderColor: "action.primaryHover" },
      },
    },
  ],
  defaultVariants: {
    variant: "flat",
    interactive: false,
    selected: false,
  },
});

export type CardVariant = "flat" | "elevated";
