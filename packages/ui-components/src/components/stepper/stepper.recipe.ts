import { cva } from "styled-system/css";

export const stepperRecipe = cva({
  base: {
    display: "flex",
    gap: "md",
    alignItems: "center",
  },
});

export const stepperConnectorRecipe = cva({
  base: {
    width: "32px",
    height: "2px",
    bg: "action.primary",
    flexShrink: 0,
  },
});

export const stepperStepRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "md",
  },
});
