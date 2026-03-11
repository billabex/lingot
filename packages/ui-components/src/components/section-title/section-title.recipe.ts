import { cva } from "styled-system/css";

export const sectionTitleRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "md",
    width: "100%",
    px: "lg",
    py: "md",
    borderRadius: "sm",
    fontFamily: "body",
    fontSize: "body",
    lineHeight: "body",
    fontWeight: "bold",
    color: "text.primary",
    cursor: "pointer",
    bg: "transparent",
    border: "none",
    outline: "none",
    transition: "background 0.15s ease",
    _hover: {
      bg: "bg.muted",
    },
    _focusVisible: {
      ring: "2px",
      ringColor: "border.focus",
      ringOffset: "2px",
    },
  },
  variants: {},
});

export const sectionTitleChevronRecipe = cva({
  base: {
    display: "inline-flex",
    flexShrink: 0,
    transition: "transform 0.15s ease",
  },
  variants: {
    expanded: {
      true: {
        transform: "rotate(90deg)",
      },
      false: {
        transform: "rotate(0deg)",
      },
    },
  },
  defaultVariants: {
    expanded: false,
  },
});
