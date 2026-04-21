import { cva } from "styled-system/css";

export const tableRowRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "border.default",
    borderLeftWidth: "3px",
    borderLeftStyle: "solid",
    borderLeftColor: "transparent",
    fontFamily: "body",
    fontSize: "body.sm",
    lineHeight: "20px",
    fontWeight: "regular",
    color: "text.primary",
    width: "100%",
    transition: "background 120ms ease",
    _hover: {
      bg: "bg.subtle",
    },
  },
  variants: {
    density: {
      normal: {
        px: "2xl",
        py: "11px",
        minHeight: "44px",
      },
      compact: {
        px: "lg",
        py: "md",
        minHeight: "38px",
      },
    },
    selected: {
      true: {},
      false: {},
    },
    accent: {
      none: {},
      success: {},
      info: {},
      warning: {},
      error: {},
    },
    interactive: {
      true: {
        cursor: "pointer",
        _focusVisible: {
          outline: "none",
          ring: "2px",
          ringColor: "border.focus",
          ringOffset: "-2px",
        },
      },
      false: {},
    },
  },
  compoundVariants: [
    { selected: true, accent: "success", css: { borderLeftColor: "status.success" } },
    { selected: true, accent: "info", css: { borderLeftColor: "status.info" } },
    { selected: true, accent: "warning", css: { borderLeftColor: "status.warning" } },
    { selected: true, accent: "error", css: { borderLeftColor: "status.error" } },
  ],
  defaultVariants: {
    density: "normal",
    selected: false,
    accent: "none",
    interactive: false,
  },
});

export type TableRowAccent = "none" | "success" | "info" | "warning" | "error";
