import { cva } from "styled-system/css";

export const settingsRowRecipe = cva({
  base: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "xl",
    paddingBlock: "lg",
    borderBottom: "1px solid",
    borderBottomColor: "border.subtle",
    _last: {
      borderBottom: "none",
    },
  },
});

export const settingsRowBodyRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xs",
    flex: 1,
    minWidth: 0,
  },
});

export const settingsRowLabelRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "medium",
    color: "text.primary",
  },
});

export const settingsRowDescriptionRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "caption.soft",
    lineHeight: "caption.soft",
    fontWeight: "regular",
    color: "text.tertiary",
  },
});

export const settingsRowValueRecipe = cva({
  base: {
    fontFamily: "body",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "regular",
    color: "text.secondary",
    marginTop: "xs",
  },
});

export const settingsRowTrailingRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    flexShrink: 0,
  },
});
