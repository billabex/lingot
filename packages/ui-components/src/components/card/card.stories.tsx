import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./card";

const meta = {
  title: "Data Display/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["flat", "elevated"],
      description: "Visual variant",
    },
  },
  args: {
    variant: "flat",
    children: "Card content",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Flat: Story = {
  args: { variant: "flat", children: "Flat card" },
  render: (args) => (
    <Card {...args} style={{ width: 200, height: 120 }} />
  ),
};

export const Elevated: Story = {
  args: { variant: "elevated", children: "Elevated card" },
  render: (args) => (
    <Card {...args} style={{ width: 200, height: 120 }} />
  ),
};

/** Both variants side by side */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Card variant="flat" style={{ width: 200, height: 120, padding: 16 }}>
        Flat
      </Card>
      <Card variant="elevated" style={{ width: 200, height: 120, padding: 16 }}>
        Elevated
      </Card>
    </div>
  ),
};
