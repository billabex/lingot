import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../badge";
import { FilterButton } from "../filter";
import { PanelHeader } from "./panel-header";
import { action as actionToken } from "@billabex/ui-tokens";

const meta = {
  title: "Layout/PanelHeader",
  component: PanelHeader,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Title or breadcrumb" },
  },
  args: {
    title: "Page Title",
  },
} satisfies Meta<typeof PanelHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <PanelHeader
      {...args}
      title="Dashboard"
      actions={
        <div style={{ display: "flex", gap: "sm" }}>
          <button style={{ padding: "8px 16px", fontSize: "14px" }}>Save</button>
          <button style={{ padding: "8px 16px", fontSize: "14px" }}>Cancel</button>
        </div>
      }
    />
  ),
};

export const TitleOnly: Story = {
  args: {
    title: "Simple Title",
  },
};

export const WithBadge: Story = {
  render: (args) => (
    <PanelHeader
      {...args}
      title="Users"
      badge={<Badge variant="success">12 active</Badge>}
    />
  ),
};

export const WithTabs: Story = {
  render: (args) => (
    <PanelHeader
      {...args}
      title="Settings"
      tabs={
        <div style={{ display: "flex", gap: "md" }}>
          <button style={{ padding: "8px 16px", borderBottom: `2px solid ${actionToken.primary.hex}` }}>Profile</button>
          <button style={{ padding: "8px 16px" }}>Security</button>
          <button style={{ padding: "8px 16px" }}>Notifications</button>
        </div>
      }
    />
  ),
};

export const WithFilters: Story = {
  render: (args) => (
    <PanelHeader
      {...args}
      title="Data Table"
      filters={
        <div style={{ display: "flex", gap: "xs" }}>
          <FilterButton>All</FilterButton>
          <FilterButton>Completed</FilterButton>
          <FilterButton>Pending</FilterButton>
        </div>
      }
    />
  ),
};

export const FullExample: Story = {
  render: (args) => (
    <PanelHeader
      {...args}
      title="Projects"
      badge={<Badge variant="info">8 total</Badge>}
      actions={
        <div style={{ display: "flex", gap: "sm" }}>
          <button style={{ padding: "8px 16px" }}>Export</button>
          <button style={{ padding: "8px 16px" }}>+ New</button>
        </div>
      }
      tabs={
        <div style={{ display: "flex", gap: "md" }}>
          <button style={{ padding: "8px 16px", borderBottom: `2px solid ${actionToken.primary.hex}` }}>Active</button>
          <button style={{ padding: "8px 16px" }}>Archived</button>
        </div>
      }
      filters={
        <div style={{ display: "flex", gap: "xs" }}>
          <FilterButton>By Owner</FilterButton>
          <FilterButton>By Status</FilterButton>
        </div>
      }
    />
  ),
};
