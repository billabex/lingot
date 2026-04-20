import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckCircle2, MessageCircleMore, NotebookTabs } from "lucide-react";
import { css } from "styled-system/css";
import { NavItem } from "../components/nav-item";
import { NotificationBadge } from "../components/notification-badge";
import { Sidebar } from "../components/sidebar";
import { logoTile, shellCard, shellMain, shellPage, shellRail } from "./_shell";

function TasksShell() {
  return (
    <div className={shellPage}>
      <div className={shellRail}>
        <Sidebar header={<LogoTile />}>
          <NavItem variant="icon" active aria-label="Tâches">
            <CheckCircle2 size={16} />
            <NotificationBadge count={25} />
          </NavItem>
          <NavItem variant="icon" aria-label="Communications">
            <MessageCircleMore size={16} />
          </NavItem>
          <NavItem variant="icon" aria-label="Comptes clients">
            <NotebookTabs size={16} />
          </NavItem>
        </Sidebar>
      </div>

      <div className={shellMain}>
        <div className={shellCard}>
          <section className={listPanel}>
            <Placeholder label="List · 280" />
          </section>
          <section className={detailPanel}>
            <Placeholder label="Detail · flex" />
          </section>
          <aside className={contextPanel}>
            <Placeholder label="Context · 300" tone="subtle" />
          </aside>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Templates/Tasks Shell",
  component: TasksShell,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TasksShell>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

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
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "text.tertiary",
  fontSize: "caption",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
});

const placeholderSubtle = css({ bg: "bg.subtle" });

function Placeholder({ label, tone }: { label: string; tone?: "subtle" }) {
  return (
    <div className={`${placeholderBase}${tone === "subtle" ? ` ${placeholderSubtle}` : ""}`}>
      {label}
    </div>
  );
}
