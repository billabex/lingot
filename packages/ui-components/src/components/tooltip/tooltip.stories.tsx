import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./tooltip";

const meta = {
  title: "Data Display/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "Tooltip content" },
  },
  args: {
    children: "Label",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongText: Story = {
  args: { children: "This is a longer tooltip message" },
};
