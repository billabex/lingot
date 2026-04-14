import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import { Mail, BookOpen, CheckCircle2, Settings } from "lucide-react";
import { Sidebar } from "./sidebar";
import { IconButton } from "../icon-button";
import { NavItem } from "../nav-item";
import { NotificationBadge } from "../notification-badge";

const meta = {
  title: "Layout/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: null,
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

/* Clickable company-logo tile — 32×32. Hover → action.primary.hover, active → neutral.500. */
const logoTile = css({
  width: "32px",
  height: "32px",
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

export const Default: Story = {
  render: () => (
    <div style={{ height: 560 }}>
      <Sidebar
        header={
          <button
            type="button"
            className={logoTile}
            aria-label="Changer d'entreprise"
            aria-haspopup="menu"
          >
            B
          </button>
        }
        footer={<IconButton icon={<Settings size={16} />} aria-label="Paramètres" />}
      >
        <NavItem variant="icon" active aria-label="Tâches">
          <CheckCircle2 size={16} />
          <NotificationBadge count={25} />
        </NavItem>
        <NavItem variant="icon" aria-label="Communications">
          <Mail size={16} />
        </NavItem>
        <NavItem variant="icon" aria-label="Documents">
          <BookOpen size={16} />
        </NavItem>
      </Sidebar>
    </div>
  ),
};
