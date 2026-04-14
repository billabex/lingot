import { cva } from "styled-system/css";

export const bubbleRecipe = cva({
  base: {
    display: "inline-flex",
    flexDirection: "column",
    gap: "sm",
    maxWidth: "min(560px, 90%)",
    px: "lg",
    py: "lg",
    borderRadius: "md",
    fontFamily: "body",
    fontSize: "body",
    lineHeight: "body",
  },
  variants: {
    side: {
      agent: {
        bg: "bg.inverse",
        color: "text.inverse",
        alignSelf: "flex-start",
      },
      user: {
        bg: "bg.muted",
        color: "text.primary",
        alignSelf: "flex-end",
      },
    },
  },
  defaultVariants: {
    side: "agent",
  },
});

export type BubbleSide = "agent" | "user";
