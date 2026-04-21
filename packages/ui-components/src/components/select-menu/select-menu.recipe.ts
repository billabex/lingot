import { cva } from "styled-system/css";

export const selectMenuWrapperRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xs",
    width: "100%",
  },
});

export const selectMenuLabelRecipe = cva({
  base: {
    fontSize: "caption",
    lineHeight: "caption",
    fontWeight: "medium",
    color: "text.secondary",
  },
});

export const selectMenuContainerRecipe = cva({
  base: {
    position: "relative",
    width: "100%",
  },
});

export const selectMenuTriggerRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "md",
    width: "100%",
    bg: "bg.default",
    border: "1px solid",
    borderColor: "border.default",
    borderRadius: "sm",
    paddingLeft: "md",
    paddingRight: "md",
    paddingBlock: "xs",
    fontSize: "body",
    lineHeight: "body",
    fontFamily: "body",
    fontWeight: "regular",
    color: "text.primary",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.15s ease",
    _hover: {
      borderColor: "border.focus",
    },
    _focusVisible: {
      borderColor: "border.focus",
      ring: "2px",
      ringColor: "border.focus",
      ringOffset: "2px",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      bg: "bg.subtle",
    },
  },
  variants: {
    error: {
      true: {
        borderColor: "border.error",
        _hover: { borderColor: "border.error" },
        _focusVisible: {
          borderColor: "border.error",
          ringColor: "border.error",
        },
      },
    },
    placeholder: {
      true: { color: "text.tertiary" },
    },
  },
});

export const selectMenuChevronRecipe = cva({
  base: {
    display: "inline-flex",
    color: "text.tertiary",
    transition: "transform 150ms ease",
  },
  variants: {
    open: {
      true: { transform: "rotate(180deg)" },
    },
  },
});

export const selectMenuPanelRecipe = cva({
  base: {
    position: "fixed",
    zIndex: 600,
    bg: "bg.default",
    borderRadius: "md",
    shadow: "md",
    padding: "xs",
    display: "flex",
    flexDirection: "column",
    gap: "xs",
    // Caps the panel at ~7 visible options before scroll — a density target, not a layout token.
    maxHeight: "15rem",
    overflowY: "auto",
  },
});
