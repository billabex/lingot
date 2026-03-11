import type { Meta, StoryObj } from "@storybook/react-vite";
import { Check, Settings, Pencil, Trash } from "lucide-react";
import { DropdownItem } from "./dropdown-item";
import { border, action } from "@billabex/ui-tokens";

const meta = {
  title: "Layout/DropdownItem",
  component: DropdownItem,
  tags: ["autodocs"],
  argTypes: {
    selected: { control: "boolean", description: "Selected state" },
    disabled: { control: "boolean", description: "Disabled state" },
    children: { control: "text", description: "Label" },
  },
  args: { children: "Menu item", selected: false, disabled: false },
} satisfies Meta<typeof DropdownItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { leftIcon: <Settings size={16} />, children: "Settings" },
};

export const Selected: Story = {
  args: { leftIcon: <Check size={16} />, children: "Selected Item", selected: true },
};

export const Disabled: Story = {
  args: { children: "Disabled Item", disabled: true },
};

/** Dropdown menu example */
export const DropdownExample: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", width: "180px", padding: "4px", border: `1px solid ${border.default.hex}`, borderRadius: "8px" }}>
      <DropdownItem leftIcon={<Pencil size={16} />}>Edit</DropdownItem>
      <DropdownItem leftIcon={<Settings size={16} />}>Settings</DropdownItem>
      <DropdownItem leftIcon={<Trash size={16} />} style={{ color: action.destructive.hex }}>Delete</DropdownItem>
    </div>
  ),
};
