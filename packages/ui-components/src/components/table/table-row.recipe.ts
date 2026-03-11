import { cva } from "styled-system/css";

export const tableRowRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "xl",
    px: "xl",
    py: "sm",
    borderBottom: "1px solid",
    borderColor: "border.default",
    fontSize: "body",
    lineHeight: "body",
    fontWeight: "regular",
    fontFamily: "body",
    width: "100%",
  },
  variants: {
    selected: {
      true: {
        bg: "bg.muted",
      },
      false: {
        bg: "bg.default",
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});
