import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckCircle2, Mail, Users } from "lucide-react";
import { css } from "styled-system/css";
import { NavItem } from "../components/nav-item";
import { Sidebar } from "../components/sidebar";

function CommsShell() {
  return (
    <div className={shellPage}>
      <div className={shellRail}>
        <Sidebar header={<LogoTile />}>
          <NavItem variant="icon" aria-label="Tâches">
            <CheckCircle2 size={16} />
          </NavItem>
          <NavItem variant="icon" active aria-label="Communications">
            <Mail size={16} />
          </NavItem>
          <NavItem variant="icon" aria-label="Comptes clients">
            <Users size={16} />
          </NavItem>
        </Sidebar>
      </div>

      <div className={shellMain}>
        <div className={shellCard}>
          <section className={listPanel}>
            <Placeholder label="Threads · 280" />
          </section>
          <section className={detailPanel}>
            <Placeholder label="Conversation · flex" />
          </section>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Templates/Comms Shell",
  component: CommsShell,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof CommsShell>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const shellPage = css({
  display: "flex",
  height: "100vh",
  bg: "bg.subtle",
  fontFamily: "body",
  color: "text.primary",
  fontSize: "body",
  overflow: "hidden",
});

const shellRail = css({
  flexShrink: 0,
  bg: "bg.subtle",
});

const shellMain = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  padding: "xl",
  paddingLeft: "md",
  minWidth: 0,
});

const shellCard = css({
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

const listPanel = css({
  width: "17.5rem",
  flexShrink: 0,
  borderRightWidth: "1px",
  borderRightStyle: "solid",
  borderColor: "border.default",
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
});

const detailPanel = css({
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
});

const logoTile = css({
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
  border: "none",
  cursor: "pointer",
});

function LogoTile() {
  return (
    <button type="button" className={logoTile} aria-label="Changer d'entreprise">
      B
    </button>
  );
}

const placeholderBase = css({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "text.tertiary",
  fontSize: "caption",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
});

function Placeholder({ label }: { label: string }) {
  return <div className={placeholderBase}>{label}</div>;
}
