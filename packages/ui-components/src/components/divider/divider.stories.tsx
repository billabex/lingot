import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./divider";

const meta = {
  title: "Data Display/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientation",
    },
  },
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", height: "40px", alignItems: "stretch" }}>
        <span>Left</span>
        <Story />
        <span>Right</span>
      </div>
    ),
  ],
};
