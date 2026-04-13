import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../badge";
import { ListItem } from "./list-item";

const meta = {
  title: "Data Display/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  args: {
    title: "Acme Corp",
    preview: "Re: invoice #1204 — payment confirmation",
    trailing: "10:30 AM",
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const Row = (node: React.ReactNode) => (
  <div style={{ maxWidth: 520, display: "flex", flexDirection: "column", gap: 4 }}>
    {node}
  </div>
);

export const Default: Story = {
  render: (args) => Row(<ListItem {...args} />),
};

export const Compact: Story = {
  render: (args) => Row(<ListItem {...args} density="compact" />),
};

export const Active: Story = {
  render: (args) => Row(<ListItem {...args} active />),
};

export const Clickable: Story = {
  render: (args) => Row(<ListItem {...args} as="button" onClick={() => {}} />),
};

export const WithTitleBadge: Story = {
  render: (args) =>
    Row(
      <ListItem
        {...args}
        titleTrailing={<Badge variant="warning">Action</Badge>}
      />
    ),
};

export const WithSub: Story = {
  render: (args) => Row(<ListItem {...args} sub="Updated by Jane Doe · 2 min ago" />),
};

export const AccentTones: Story = {
  render: () =>
    Row(
      <>
        <ListItem title="Reply accent" accent="reply" preview="Terracotta left border" />
        <ListItem title="Info accent" accent="info" preview="Informational emphasis" />
        <ListItem title="Success accent" accent="success" preview="Positive tone" />
        <ListItem title="Warning accent" accent="warning" preview="Needs attention" />
        <ListItem title="Error accent" accent="error" preview="Critical" />
      </>
    ),
};

export const TaskItemShape: Story = {
  render: () =>
    Row(
      <ListItem
        as="button"
        title="Acme Corp"
        titleTrailing={<Badge variant="error">Action</Badge>}
        preview={
          <span style={{ display: "flex", gap: 12 }}>
            <span>€1,240.00</span>
            <span style={{ color: "var(--colors-status-warning, #f99307)" }}>
              14 days overdue
            </span>
          </span>
        }
        sub="3 open disputes"
        trailing="10:30 AM"
        onClick={() => {}}
      />
    ),
};

export const CommThreadShape: Story = {
  render: () =>
    Row(
      <ListItem
        as="button"
        accent="reply"
        title="Jane Doe — Acme Corp"
        preview="Thanks for the update, I'll confirm with finance…"
        trailing="2h"
        onClick={() => {}}
      />
    ),
};

export const MsgRowShape: Story = {
  render: () =>
    Row(
      <ListItem
        as="button"
        title="Beta Industries"
        preview="Reminder scheduled — 1st dunning follow-up"
        sub="Planned for Apr 18"
        trailing="Apr 12"
        onClick={() => {}}
      />
    ),
};

export const MultipleItems: Story = {
  render: () =>
    Row(
      <>
        <ListItem as="button" title="Unread" preview="Important update" trailing="1m" onClick={() => {}} />
        <ListItem as="button" active title="Selected" preview="Currently open" trailing="5m" onClick={() => {}} />
        <ListItem as="button" title="With badge" preview="Has a badge" titleTrailing={<Badge variant="info">3</Badge>} trailing="10m" onClick={() => {}} />
        <ListItem as="button" accent="success" title="With accent" preview="Left border accent" trailing="1h" onClick={() => {}} />
      </>
    ),
};
