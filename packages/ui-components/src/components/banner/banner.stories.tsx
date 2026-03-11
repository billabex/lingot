import type { Meta, StoryObj } from "@storybook/react-vite";
import { Info, TriangleAlert, CircleAlert, CircleCheck } from "lucide-react";
import { Banner } from "./banner";

const meta = {
  title: "Components/Banner",
  component: Banner,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "info", "warning", "error", "success"],
      description: "Color variant",
    },
    children: { control: "text", description: "Banner message" },
  },
  args: {
    children: "This is a notification message.",
    variant: "neutral",
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};

export const InfoBanner: Story = {
  args: { variant: "info", icon: <Info size={16} />, children: "Information message." },
};

export const Warning: Story = {
  args: { variant: "warning", icon: <TriangleAlert size={16} />, children: "Warning message." },
};

export const Error: Story = {
  args: { variant: "error", icon: <CircleAlert size={16} />, children: "Error message." },
};

export const Success: Story = {
  args: { variant: "success", icon: <CircleCheck size={16} />, children: "Success message." },
};

/** All variants stacked */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "400px" }}>
      <Banner variant="neutral" icon={<Info size={16} />}>Neutral notification</Banner>
      <Banner variant="info" icon={<Info size={16} />}>Info notification</Banner>
      <Banner variant="warning" icon={<TriangleAlert size={16} />}>Warning notification</Banner>
      <Banner variant="error" icon={<CircleAlert size={16} />}>Error notification</Banner>
      <Banner variant="success" icon={<CircleCheck size={16} />}>Success notification</Banner>
    </div>
  ),
};
