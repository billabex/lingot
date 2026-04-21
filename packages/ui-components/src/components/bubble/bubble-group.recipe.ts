import { cva } from "styled-system/css";

export const bubbleGroupRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xs",
    width: "100%",
  },
  variants: {
    side: {
      agent: { alignItems: "flex-start" },
      user: { alignItems: "flex-end" },
    },
  },
  defaultVariants: {
    side: "agent",
  },
});

export const bubbleGroupStackRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xl",
    width: "100%",
  },
  variants: {
    side: {
      agent: { alignItems: "flex-start" },
      user: { alignItems: "flex-end" },
    },
  },
  defaultVariants: {
    side: "agent",
  },
});

export const bubbleGroupHeaderRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "md",
    fontFamily: "body",
    fontSize: "caption",
    lineHeight: "caption",
    fontWeight: "semibold",
    color: "text.tertiary",
  },
});

export const bubbleGroupAuthorRecipe = cva({
  base: {},
});

export const bubbleGroupDateRecipe = cva({
  base: {},
});
