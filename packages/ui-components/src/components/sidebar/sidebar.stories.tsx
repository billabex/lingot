import type { Meta, StoryObj } from "@storybook/react-vite";
import { Home, Inbox, Users, Settings, Mail, BookOpen, CheckCircle2 } from "lucide-react";
import { Sidebar } from "./sidebar";
import { IconButton } from "../icon-button";
import { NavItem } from "../nav-item";
import { NotificationBadge } from "../notification-badge";

const meta = {
  title: "Layout/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <IconButton icon={<Home size={16} />} aria-label="Home" />
        <IconButton icon={<Inbox size={16} />} aria-label="Inbox" />
        <IconButton icon={<Users size={16} />} aria-label="Users" />
      </>
    ),
    header: <IconButton icon={<Home size={16} />} aria-label="Logo" />,
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFooter: Story = {
  args: {
    footer: <IconButton icon={<Settings size={16} />} aria-label="Settings" />,
  },
};

export const MinimalNoHeader: Story = {
  args: {
    header: undefined,
    children: (
      <>
        <IconButton icon={<Inbox size={16} />} aria-label="Inbox" />
        <IconButton icon={<Users size={16} />} aria-label="Users" />
      </>
    ),
  },
};

/* ── Rail variant — 48 px icon rail used across the workspace ─────── */

const logoTile = {
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--colors-action\\.primary)",
  color: "var(--colors-text\\.inverse)",
  borderRadius: 8,
  fontWeight: 600,
  fontFamily: "Outfit, sans-serif",
  fontSize: 12,
};

export const Rail: Story = {
  render: () => (
    <div style={{ height: 560 }}>
      <Sidebar
        variant="rail"
        header={<div style={logoTile}>B</div>}
        footer={<IconButton icon={<Settings size={16} />} aria-label="Settings" />}
      >
        <NavItem variant="icon" active aria-label="Tasks">
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
