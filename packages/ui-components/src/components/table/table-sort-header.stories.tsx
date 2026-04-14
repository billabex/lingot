import type { Meta, StoryObj } from "@storybook/react-vite";
import { TableSortHeader } from "./table-sort-header";

const meta = {
  title: "Data Display/TableSortHeader",
  component: TableSortHeader,
  tags: ["autodocs"],
  argTypes: {
    active: { control: "boolean", description: "Whether this column is the active sort column" },
    direction: {
      control: { type: "radio" },
      options: ["asc", "desc"],
      description: "Sort direction — chevron points down on `desc`, rotates 180° on `asc`",
    },
    children: { control: "text", description: "Column label" },
  },
  args: {
    active: false,
    direction: "desc",
    children: "Date",
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof TableSortHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Idle column — chevron faint, label inherits the header's tertiary color. */
export const Default: Story = {};

/** Active column, descending — label + chevron darken to `text.primary`. */
export const ActiveDesc: Story = { args: { active: true, direction: "desc" } };

/** Active column, ascending — chevron rotates 180°. */
export const ActiveAsc: Story = { args: { active: true, direction: "asc" } };
