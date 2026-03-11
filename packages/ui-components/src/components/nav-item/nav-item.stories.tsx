import type { Meta, StoryObj } from "@storybook/react-vite";
import { House, Settings, Inbox, NotebookText } from "lucide-react";
import { NavItem } from "./nav-item";

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
