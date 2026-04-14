import { cva } from "styled-system/css";

export const invoiceCardRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xs",
    py: "lg",
    borderBottom: "1px solid",
    borderColor: "border.subtle",
    _last: { borderBottom: "none" },
  },
});

export const invoiceCardTopRecipe = cva({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "md",
  },
});

export const invoiceCardLeftRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "xs",
    minWidth: 0,
  },
});

export const invoiceCardRightRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "xs",
    flexShrink: 0,
  },
});

export const invoiceCardRefRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "medium",
    color: "text.primary",
  },
});

export const invoiceCardAmountRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "medium",
    color: "text.primary",
  },
});

export const invoiceCardDueRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "caption.xs",
    lineHeight: "caption.xs",
    fontWeight: "regular",
  },
  variants: {
    tone: {
      default: { color: "text.tertiary" },
      warning: { color: "status.warning" },
      danger: { color: "status.error" },
    },
  },
  defaultVariants: { tone: "default" },
});

export const invoiceCardMetaRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "caption",
    lineHeight: "caption",
    fontWeight: "regular",
    color: "text.tertiary",
  },
});

export type InvoiceDueTone = "default" | "warning" | "danger";
