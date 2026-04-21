import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabItem } from "./tab-item";
import { Tabs } from "./tabs";

const meta = {
  title: "Navigation/TabItem",
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

/** Tab bar — use the `Tabs` container to get the standard bottom border. */
export const TabBar: Story = {
  render: () => (
    <Tabs>
      <TabItem active>Overview</TabItem>
      <TabItem>Activity</TabItem>
      <TabItem>Settings</TabItem>
    </Tabs>
  ),
};
