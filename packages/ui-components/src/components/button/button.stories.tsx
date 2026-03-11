import type { Meta, StoryObj } from "@storybook/react-vite";
import { Plus, ChevronRight } from "lucide-react";
import { Button } from "./button";

const meta = {
  title: "Actions/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "destructive"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["medium", "small"],
      description: "Size preset",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
    children: {
      control: "text",
      description: "Button label",
    },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "medium",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Plus size={14} />,
    children: "Add Item",
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <ChevronRight size={14} />,
    children: "Next",
  },
};

export const WithBothIcons: Story = {
  args: {
    leftIcon: <Plus size={14} />,
    rightIcon: <ChevronRight size={14} />,
    children: "Create",
  },
};

/** All variants side by side */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

/** All sizes side by side */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Button size="medium">Medium</Button>
      <Button size="small">Small</Button>
    </div>
  ),
};
