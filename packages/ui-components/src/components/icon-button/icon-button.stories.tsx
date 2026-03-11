import type { Meta, StoryObj } from "@storybook/react-vite";
import { Settings, Trash, Plus, Pencil } from "lucide-react";
import { IconButton } from "./icon-button";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["medium", "small"],
      description: "Size preset",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
  },
  args: {
    icon: <Settings size={16} />,
    "aria-label": "Settings",
    size: "medium",
    disabled: false,
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Settings size={16} />,
    "aria-label": "Settings",
  },
};

export const Small: Story = {
  args: {
    icon: <Settings size={14} />,
    "aria-label": "Settings",
    size: "small",
  },
};

export const Disabled: Story = {
  args: {
    icon: <Trash size={16} />,
    "aria-label": "Delete",
    disabled: true,
  },
};

/** All sizes side by side */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <IconButton icon={<Plus size={16} />} aria-label="Add" size="medium" />
      <IconButton icon={<Plus size={14} />} aria-label="Add" size="small" />
    </div>
  ),
};

/** Multiple icons */
export const IconVariety: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <IconButton icon={<Settings size={16} />} aria-label="Settings" />
      <IconButton icon={<Pencil size={16} />} aria-label="Edit" />
      <IconButton icon={<Trash size={16} />} aria-label="Delete" />
      <IconButton icon={<Plus size={16} />} aria-label="Add" />
    </div>
  ),
};
