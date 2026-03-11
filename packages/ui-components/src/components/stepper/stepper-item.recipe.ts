import { cva } from "styled-system/css";

export const stepperItemRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "md",
    fontFamily: "body",
    fontSize: "body.sm",
    lineHeight: "body.sm",
    fontWeight: "regular",
  },
  variants: {
    state: {
      completed: {
        color: "text.primary",
      },
      active: {
        color: "text.primary",
        fontWeight: "bold",
      },
      upcoming: {
        color: "text.tertiary",
      },
    },
  },
  defaultVariants: {
    state: "upcoming",
  },
});

export const stepperCircleRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "24px",
    height: "24px",
    borderRadius: "full",
    flexShrink: 0,
    fontSize: "caption",
    lineHeight: "caption",
    fontWeight: "medium",
    fontFamily: "body",
  },
  variants: {
    state: {
      completed: {
        bg: "action.primary",
        color: "text.inverse",
      },
      active: {
        bg: "transparent",
        color: "text.primary",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "action.primary",
      },
      upcoming: {
        bg: "bg.muted",
        color: "text.tertiary",
      },
    },
  },
  defaultVariants: {
    state: "upcoming",
  },
});

export type StepperItemState = "completed" | "active" | "upcoming";
