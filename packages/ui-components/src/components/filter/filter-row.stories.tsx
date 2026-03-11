import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterRow } from "./filter-row";
import { FilterButton } from "./filter-button";

const meta = {
  title: "Layout/FilterRow",
  component: FilterRow,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <FilterButton>Status</FilterButton>
        <FilterButton>Type</FilterButton>
        <FilterButton>Date</FilterButton>
      </>
    ),
  },
} satisfies Meta<typeof FilterRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Many filters */
export const ManyFilters: Story = {
  render: () => (
    <FilterRow>
      <FilterButton>Status</FilterButton>
      <FilterButton>Type</FilterButton>
      <FilterButton>Date</FilterButton>
      <FilterButton>Amount</FilterButton>
      <FilterButton>Client</FilterButton>
      <FilterButton>Category</FilterButton>
    </FilterRow>
  ),
};
