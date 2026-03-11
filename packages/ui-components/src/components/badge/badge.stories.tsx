import type { Meta, StoryObj } from "@storybook/react-vite";
import { CircleAlert, Info, CircleCheck, TriangleAlert, ChevronDown } from "lucide-react";
import { Badge } from "./badge";

const meta = {
  title: "Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "info", "success", "warning", "error"],
      description: "Color variant",
    },
    children: { control: "text", description: "Badge label" },
  },
  args: {
    children: "Label",
    variant: "neutral",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: { children: "Neutral" },
};

export const InfoBadge: Story = {
  args: { variant: "info", children: "Info" },
};

export const Success: Story = {
  args: { variant: "success", children: "Success" },
};

export const Warning: Story = {
  args: { variant: "warning", children: "Warning" },
};

export const Error: Story = {
  args: { variant: "error", children: "Error" },
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Badge variant="info" leftIcon={<Info size={12} />}>Info</Badge>
      <Badge variant="success" leftIcon={<CircleCheck size={12} />}>Success</Badge>
      <Badge variant="warning" leftIcon={<TriangleAlert size={12} />}>Warning</Badge>
      <Badge variant="error" leftIcon={<CircleAlert size={12} />}>Error</Badge>
      <Badge rightIcon={<ChevronDown size={12} />}>Dropdown</Badge>
    </div>
  ),
};

/** All variants side by side */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
};
