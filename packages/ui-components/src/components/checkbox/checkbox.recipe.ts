import { cva } from "styled-system/css";

export const checkboxRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "md",
    cursor: "pointer",
  },
  variants: {},
  defaultVariants: {},
});

export const checkboxInputRecipe = cva({
  base: {
    width: "14px",
    height: "14px",
    borderRadius: "xs",
    border: "1.5px solid",
    borderColor: "border.default",
    bg: "bg.default",
    appearance: "none",
    cursor: "pointer",
    transition: "all 0.15s ease",
    flexShrink: 0,
    _checked: {
      bg: "action.primary",
      borderColor: "action.primary",
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 6L5 8.5L9.5 4' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
      backgroundSize: "12px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    _hover: {
      borderColor: "border.focus",
    },
    _focusVisible: {
      ring: "2px",
      ringColor: "border.focus",
      ringOffset: "2px",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },
  variants: {},
  defaultVariants: {},
});
