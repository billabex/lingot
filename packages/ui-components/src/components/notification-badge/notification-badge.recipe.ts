import { cva } from "styled-system/css";

export const notificationBadgeRecipe = cva({
  base: {
    position: "absolute",
    top: "0",
    right: "-2px",
    minWidth: "14px",
    height: "14px",
    paddingInline: "3px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "full",
    bg: "status.error",
    color: "text.inverse",
    fontSize: "9px",
    lineHeight: "10px",
    fontWeight: "semibold",
    fontFamily: "body",
    border: "2px solid",
    borderColor: "bg.subtle",
    pointerEvents: "none",
    whiteSpace: "nowrap",
  },
});
