import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListFilter, ChevronDown } from "lucide-react";
import { FilterButton } from "./filter-button";

const meta = {
  title: "Navigation/FilterButton",
  component: FilterButton,
  tags: ["autodocs"],
  argTypes: {
    active: { control: "boolean", description: "Whether the filter is active" },
    children: { control: "text", description: "Button label" },
  },
  args: {
    children: "Filter",
    active: false,
  },
} satisfies Meta<typeof FilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Status" },
};

export const Active: Story = {
  args: { children: "Status", active: true },
};

export const WithIcons: Story = {
  args: {
    leftIcon: <ListFilter size={16} />,
    rightIcon: <ChevronDown size={12} />,
    children: "Filter",
  },
};

/** All states side by side */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <FilterButton leftIcon={<ListFilter size={16} />} rightIcon={<ChevronDown size={12} />}>
        Default
      </FilterButton>
      <FilterButton leftIcon={<ListFilter size={16} />} rightIcon={<ChevronDown size={12} />} active>
        Active
      </FilterButton>
    </div>
  ),
};
