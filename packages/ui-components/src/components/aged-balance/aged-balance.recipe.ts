import { cva } from "styled-system/css";

export const agedBalanceRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "md",
    width: "100%",
  },
});

export const agedBalanceTotalRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "headline.lg",
    lineHeight: "headline.lg",
    fontWeight: "semibold",
    color: "text.primary",
  },
});

export const agedBalanceBarRecipe = cva({
  base: {
    display: "flex",
    height: "sm",
    width: "100%",
    borderRadius: "xs",
    overflow: "hidden",
    bg: "bg.muted",
  },
});

export const agedBalanceSegmentRecipe = cva({
  base: {
    height: "100%",
    transition: "width 0.3s ease",
  },
  variants: {
    tone: {
      success: { bg: "status.success" },
      warning: { bg: "status.warning" },
      danger: { bg: "status.error" },
      critical: { bg: "neutral.600" },
      neutral: { bg: "border.default" },
    },
  },
});

export const agedBalanceLegendRecipe = cva({
  base: {
    display: "flex",
    flexWrap: "wrap",
    gap: "lg",
  },
});

export const agedBalanceLegendItemRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "xs",
    fontFamily: "body",
    fontSize: "caption.xs",
    lineHeight: "caption.xs",
    fontWeight: "regular",
    color: "text.tertiary",
  },
});

export const agedBalanceLegendSwatchRecipe = cva({
  base: {
    display: "inline-block",
    width: "6px",
    height: "6px",
    borderRadius: "xs",
    flexShrink: 0,
  },
  variants: {
    tone: {
      success: { bg: "status.success" },
      warning: { bg: "status.warning" },
      danger: { bg: "status.error" },
      critical: { bg: "neutral.600" },
      neutral: { bg: "border.default" },
    },
  },
});

export type AgedBalanceTone = "success" | "warning" | "danger" | "critical";
export type AgedBalanceSegmentTone = AgedBalanceTone | "neutral";
