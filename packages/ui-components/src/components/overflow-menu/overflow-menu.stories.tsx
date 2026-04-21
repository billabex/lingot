import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pencil, Trash2 } from "lucide-react";
import { OverflowMenu } from "./overflow-menu";
import { DropdownItem } from "../dropdown";
import { Divider } from "../divider";

const meta = {
  title: "Layout/OverflowMenu",
  component: OverflowMenu,
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: { type: "radio" },
      options: ["start", "end"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium"],
    },
    label: { control: "text" },
  },
  args: {
    label: "Actions",
    align: "end",
    size: "small",
    children: (
      <>
        <DropdownItem leftIcon={<Pencil size={14} />}>Modifier</DropdownItem>
        <Divider />
        <DropdownItem leftIcon={<Trash2 size={14} />}>Supprimer</DropdownItem>
      </>
    ),
  },
} satisfies Meta<typeof OverflowMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default — kebab trigger aligned at the end (right edge), matching row-level kebabs. */
export const Default: Story = {
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "flex-end", padding: 80 }}>
      <OverflowMenu {...args}>
        <DropdownItem leftIcon={<Pencil size={14} />}>Modifier</DropdownItem>
        <Divider />
        <DropdownItem leftIcon={<Trash2 size={14} />}>Supprimer</DropdownItem>
      </OverflowMenu>
    </div>
  ),
};

/** Align start — panel left-aligns with the trigger. Use when the kebab sits on the left edge of its container. */
export const AlignStart: Story = {
  args: { align: "start" },
  render: (args) => (
    <div style={{ padding: 80 }}>
      <OverflowMenu {...args}>
        <DropdownItem>Action one</DropdownItem>
        <DropdownItem>Action two</DropdownItem>
      </OverflowMenu>
    </div>
  ),
};

/** Medium trigger — for screens where the kebab sits outside dense tables (e.g. detail views). */
export const MediumSize: Story = {
  args: { size: "medium" },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "flex-end", padding: 80 }}>
      <OverflowMenu {...args}>
        <DropdownItem leftIcon={<Pencil size={16} />}>Modifier</DropdownItem>
        <Divider />
        <DropdownItem leftIcon={<Trash2 size={16} />}>Supprimer</DropdownItem>
      </OverflowMenu>
    </div>
  ),
};
