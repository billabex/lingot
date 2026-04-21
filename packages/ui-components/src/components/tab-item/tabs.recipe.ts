import { cva } from "styled-system/css";

export const tabsRecipe = cva({
  base: {
    display: "flex",
    gap: 0,
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderColor: "border.default",
  },
});
