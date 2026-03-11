import type { Meta, StoryObj } from "@storybook/react-vite";
import { Settings, Pencil, Trash } from "lucide-react";
import { DropdownMenu } from "./dropdown-menu";
import { DropdownItem } from "./dropdown-item";
import { Divider } from "../divider";

const meta = {
  title: "Layout/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <DropdownItem leftIcon={<Pencil size={16} />}>Edit</DropdownItem>
        <DropdownItem leftIcon={<Settings size={16} />}>Settings</DropdownItem>
        <Divider />
        <DropdownItem leftIcon={<Trash size={16} />}>Delete</DropdownItem>
      </>
    ),
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** With sections */
export const WithSections: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownItem leftIcon={<Pencil size={16} />}>Edit</DropdownItem>
      <DropdownItem leftIcon={<Settings size={16} />}>Settings</DropdownItem>
      <DropdownItem>Duplicate</DropdownItem>
      <Divider />
      <DropdownItem leftIcon={<Trash size={16} />}>Delete</DropdownItem>
    </DropdownMenu>
  ),
};
