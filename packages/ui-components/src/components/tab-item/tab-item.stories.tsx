import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabItem } from "./tab-item";

const meta = {
  title: "Components/TabItem",
  component: TabItem,
  tags: ["autodocs"],
  argTypes: {
    active: { control: "boolean", description: "Active state" },
    children: { control: "text", description: "Tab label" },
  },
  args: { children: "Tab", active: false },
} satisfies Meta<typeof TabItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Overview" },
};

export const Active: Story = {
  args: { children: "Overview", active: true },
};

/** Tab bar example */
export const TabBar: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", borderBottom: "1px solid #e3dbd2" }}>
      <TabItem active>Overview</TabItem>
      <TabItem>Activity</TabItem>
      <TabItem>Settings</TabItem>
    </div>
  ),
};
