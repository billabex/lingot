import { cva } from "styled-system/css";

export const statusDotRecipe = cva({
  base: {
    display: "inline-block",
    flexShrink: 0,
    borderRadius: "full",
  },
  variants: {
    size: {
      small: { width: "6px", height: "6px" },
      medium: { width: "8px", height: "8px" },
    },
    tone: {
      neutral: { bg: "text.tertiary" },
      success: { bg: "status.success" },
      warning: { bg: "status.warning" },
      danger: { bg: "status.error" },
      info: { bg: "status.info" },
    },
  },
  defaultVariants: {
    size: "medium",
    tone: "neutral",
  },
});

export type StatusDotSize = "small" | "medium";
export type StatusDotTone = "neutral" | "success" | "warning" | "danger" | "info";
