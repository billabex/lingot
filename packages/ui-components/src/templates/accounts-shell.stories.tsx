import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckCircle2, Mail, Users } from "lucide-react";
import { css } from "styled-system/css";
import { NavItem } from "../components/nav-item";
import { Sidebar } from "../components/sidebar";
import { logoTile, shellCard, shellMain, shellPage, shellRail } from "./_shell";

type Variant = "list" | "detail";

function AccountsShell({ variant }: { variant: Variant }) {
  return (
    <div className={shellPage}>
      <div className={shellRail}>
        <Sidebar header={<LogoTile />}>
          <NavItem variant="icon" aria-label="Tâches">
            <CheckCircle2 size={16} />
          </NavItem>
          <NavItem variant="icon" aria-label="Communications">
            <Mail size={16} />
          </NavItem>
          <NavItem variant="icon" active aria-label="Comptes clients">
            <Users size={16} />
          </NavItem>
        </Sidebar>
      </div>

      <div className={shellMain}>
        <div className={shellCard}>
          {variant === "list" ? (
            <section className={fullPanel}>
              <Placeholder label="Accounts table · full width" />
            </section>
          ) : (
            <>
              <section className={detailPanel}>
                <header className={detailHeader}>
                  <Placeholder label="Header · breadcrumb + title + actions" inline />
                </header>
                <div className={detailBody}>
                  <Placeholder label="Account detail · flex" />
                </div>
              </section>
              <aside className={contextPanel}>
                <Placeholder label="Context · 300" tone="subtle" />
              </aside>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Templates/Accounts Shell",
  component: AccountsShell,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AccountsShell>;
export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = { args: { variant: "list" } };
export const Detail: Story = { args: { variant: "detail" } };

const fullPanel = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
});

const detailHeader = css({
  height: "3rem",
  flexShrink: 0,
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderColor: "border.default",
  display: "flex",
  alignItems: "center",
  paddingX: "padding.page",
});

const detailBody = css({
  flex: 1,
  display: "flex",
  minHeight: 0,
});

const detailPanel = css({
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
});

const contextPanel = css({
  width: "18.75rem",
  flexShrink: 0,
  borderLeftWidth: "1px",
  borderLeftStyle: "solid",
  borderColor: "border.default",
  bg: "bg.subtle",
  overflowY: "auto",
});

function LogoTile() {
  return (
    <button type="button" className={logoTile} aria-label="Changer d'entreprise">
      B
    </button>
  );
}

const placeholderBase = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "text.tertiary",
  fontSize: "caption",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
});

const placeholderFill = css({ flex: 1 });
const placeholderSubtle = css({ bg: "bg.subtle" });

function Placeholder({
  label,
  tone,
  inline,
}: {
  label: string;
  tone?: "subtle";
  inline?: boolean;
}) {
  const classes = [
    placeholderBase,
    inline ? "" : placeholderFill,
    tone === "subtle" ? placeholderSubtle : "",
  ]
    .filter(Boolean)
    .join(" ");
  return <div className={classes}>{label}</div>;
}
