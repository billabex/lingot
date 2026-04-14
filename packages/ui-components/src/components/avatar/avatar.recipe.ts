import { cva } from "styled-system/css";

export const avatarRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    borderRadius: "full",
    overflow: "hidden",
    bg: "bg.muted",
    color: "text.secondary",
    fontFamily: "body",
    fontWeight: "semibold",
    textTransform: "uppercase",
    userSelect: "none",
  },
  variants: {
    size: {
      small: {
        width: "24px",
        height: "24px",
        fontSize: "micro",
        lineHeight: "micro",
      },
      medium: {
        width: "32px",
        height: "32px",
        fontSize: "caption",
        lineHeight: "caption",
      },
      large: {
        width: "40px",
        height: "40px",
        fontSize: "body.sm",
        lineHeight: "body.sm",
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type AvatarSize = "small" | "medium" | "large";
