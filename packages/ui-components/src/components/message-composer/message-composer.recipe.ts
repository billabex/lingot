import { cva } from "styled-system/css";

export const messageComposerRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid",
    borderColor: "border.default",
    borderRadius: "md",
    boxShadow: "sm",
    bg: "bg.default",
    _focusWithin: {
      borderColor: "border.focus",
    },
  },
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        bg: "bg.subtle",
        borderColor: "border.subtle",
        _focusWithin: {
          borderColor: "border.subtle",
        },
      },
      false: {},
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const messageComposerTextareaRecipe = cva({
  base: {
    width: "100%",
    border: "none",
    outline: "none",
    resize: "none",
    bg: "transparent",
    fontFamily: "body",
    fontSize: "body",
    lineHeight: "body",
    color: "text.primary",
    minHeight: "32px",
    maxHeight: "160px",
    pt: "xl",
    px: "xl",
    pb: "xs",
    _placeholder: {
      color: "text.tertiary",
    },
  },
});

export const messageComposerToolbarRecipe = cva({
  base: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "md",
    pt: "xs",
    pr: "lg",
    pb: "lg",
  },
});

export const messageComposerSendRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    borderRadius: "sm",
    border: "none",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.15s ease",
    bg: "action.primary",
    color: "text.inverse",
    _hover: {
      bg: "action.primaryHover",
    },
    _active: {
      bg: "action.primaryPressed",
    },
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
});
