import { css } from "styled-system/css";

/**
 * Shared layout helpers for the Billabex workspace template stories.
 *
 * Templates live under `src/templates/` as Storybook fixtures only — they are
 * not shipped in the public package (the barrel does not re-export them, and
 * the vite-plugin-dts config excludes them from the declaration output). This
 * module centralises the shell chrome so the fixtures read consistently.
 *
 * Two "card" variants:
 *   - `shellCard`  — list-style surface (flex row, `overflow: hidden`) used by
 *                    list and detail views that own their own scrolling.
 *   - `shellDoc`   — document-style surface (flex column, `overflowY: auto`)
 *                    used by reading-width scroll containers like invoice
 *                    detail and settings.
 */

/** Viewport-height page with 48 px icon rail and main area. */
export const shellPage = css({
  display: "flex",
  height: "100vh",
  bg: "bg.subtle",
  fontFamily: "body",
  color: "text.primary",
  fontSize: "body",
  overflow: "hidden",
});

/** Fixed-width sidebar rail. Host for the 48 px `<Sidebar>`. */
export const shellRail = css({
  flexShrink: 0,
  bg: "bg.subtle",
});

/** Flex column filling the remaining page; padded for the inner card. */
export const shellMain = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  padding: "xl",
  paddingLeft: "md",
  minWidth: 0,
});

/** List-style card surface. Flex row, clips its own overflow. */
export const shellCard = css({
  flex: 1,
  display: "flex",
  borderRadius: "md",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "border.default",
  bg: "bg.default",
  overflow: "hidden",
  minHeight: 0,
});

/** Document-style card surface. Flex column, vertically scrolls its content. */
export const shellDoc = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  borderRadius: "md",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "border.default",
  bg: "bg.default",
  overflowY: "auto",
  minHeight: 0,
});

/** Centred reading-width container (≈720 px) for document-style views. */
export const shellDocInner = css({
  maxWidth: "45rem",
  width: "100%",
  margin: "0 auto",
  paddingBlock: "padding.page",
  paddingInline: "3xl",
  display: "flex",
  flexDirection: "column",
  gap: "xl",
});

/** Square "Change company" button slot used as the Sidebar header. */
export const logoTile = css({
  width: "2rem",
  height: "2rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  bg: "action.primary",
  color: "text.inverse",
  borderRadius: "sm",
  fontFamily: "body",
  fontWeight: "semibold",
  fontSize: "caption",
  cursor: "pointer",
  border: "none",
  transition: "background 120ms ease",
  _hover: { bg: "action.primaryHover" },
  _active: { bg: "neutral.500" },
});
