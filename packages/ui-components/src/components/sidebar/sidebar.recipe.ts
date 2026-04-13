import { cva } from "styled-system/css";

export const sidebarRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "clip",
    height: "100%",
    flexShrink: 0,
  },
  variants: {
    variant: {
      default: {
        bg: "bg.default",
        paddingBlock: "md",
        width: "auto",
      },
      rail: {
        bg: "bg.subtle",
        width: "48px",
        paddingBlock: "md",
        paddingInline: "0",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const sidebarHeaderRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "md",
    alignItems: "center",
    overflow: "clip",
    p: "md",
    flexShrink: 0,
  },
});

export const sidebarContentRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xs",
    alignItems: "center",
    overflow: "clip",
    p: "md",
    flexGrow: 1,
    width: "100%",
  },
});

export const sidebarFooterRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "md",
    alignItems: "center",
    overflow: "clip",
    p: "md",
    flexShrink: 0,
    marginTop: "auto",
  },
});

export type SidebarVariant = "default" | "rail";
