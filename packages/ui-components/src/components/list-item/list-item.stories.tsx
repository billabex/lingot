import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../badge";
import { ListItem } from "./list-item";

const meta = {
  title: "Data Display/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Main title text" },
    meta: { control: "text", description: "Right side metadata (e.g., time)" },
    preview: { control: "text", description: "Second line preview text" },
    selected: { control: "boolean", description: "Selected state" },
  },
  args: {
    title: "John Doe",
    meta: "2 hours ago",
    preview: "Thanks for the update!",
    selected: false,
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Alice Johnson",
    meta: "10:30 AM",
    preview: "Let me know when you're ready",
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    title: "Bob Smith",
    meta: "5 min ago",
    preview: "Perfect! I'll send the files",
    selected: true,
  },
};

export const WithBadge: Story = {
  render: (args) => (
    <ListItem
      {...args}
      badge={<Badge variant="success">2 unread</Badge>}
    />
  ),
  args: {
    title: "Charlie Brown",
    meta: "just now",
    preview: "Great work on the project!",
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "lg" }}>
      <ListItem
        title="Unread Message"
        meta="1 min ago"
        preview="This is an important update"
      />
      <ListItem
        title="Selected Message"
        meta="5 min ago"
        preview="This one is selected"
        selected={true}
      />
      <ListItem
        title="With Badge"
        meta="10 min ago"
        preview="This has a status badge"
        badge={<Badge variant="info">3</Badge>}
      />
    </div>
  ),
};
