import type { Meta, StoryObj } from "@storybook/react-vite";
import { Home, Inbox, Users, Settings } from "lucide-react";
import { Sidebar } from "./sidebar";
import { IconButton } from "../icon-button";

const meta = {
  title: "Navigation/Sidebar",
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
