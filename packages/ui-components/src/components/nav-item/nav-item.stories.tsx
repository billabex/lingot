import type { Meta, StoryObj } from "@storybook/react-vite";
import { House, Settings, Inbox, NotebookText, Mail, CheckCircle2 } from "lucide-react";
import { NavItem } from "./nav-item";
import { NotificationBadge } from "../notification-badge";

const meta = {
  title: "Navigation/NavItem",
  component: NavItem,
  tags: ["autodocs"],
  argTypes: {
    active: { control: "boolean", description: "Active state" },
    children: { control: "text", description: "Label" },
  },
  args: { children: "Menu Item", active: false },
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { leftIcon: <House size={16} />, children: "Dashboard" },
};

export const Active: Story = {
  args: { leftIcon: <House size={16} />, children: "Dashboard", active: true },
};

/** Navigation sidebar example */
export const NavigationExample: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px", width: "200px" }}>
      <NavItem leftIcon={<House size={16} />} active>Dashboard</NavItem>
      <NavItem leftIcon={<Inbox size={16} />}>Inbox</NavItem>
      <NavItem leftIcon={<NotebookText size={16} />}>Documents</NavItem>
      <NavItem leftIcon={<Settings size={16} />}>Settings</NavItem>
    </div>
  ),
};

/* ── Icon variant — square 32×32 used in the rail ────────────────── */

const railHost = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  gap: 4,
  padding: 8,
  background: "var(--colors-bg\\.subtle)",
  borderRadius: 12,
  width: 48,
};

export const IconDefault: Story = {
  render: () => (
    <div style={railHost}>
      <NavItem variant="icon" aria-label="Tasks">
        <CheckCircle2 size={16} />
      </NavItem>
    </div>
  ),
};

export const IconActive: Story = {
  render: () => (
    <div style={railHost}>
      <NavItem variant="icon" active aria-label="Tasks">
        <CheckCircle2 size={16} />
      </NavItem>
    </div>
  ),
};

export const IconWithBadge: Story = {
  render: () => (
    <div style={railHost}>
      <NavItem variant="icon" active aria-label="Tasks">
        <CheckCircle2 size={16} />
        <NotificationBadge count={25} />
      </NavItem>
      <NavItem variant="icon" aria-label="Communications">
        <Mail size={16} />
        <NotificationBadge count={3} />
      </NavItem>
      <NavItem variant="icon" aria-label="Documents">
        <NotebookText size={16} />
      </NavItem>
    </div>
  ),
};
