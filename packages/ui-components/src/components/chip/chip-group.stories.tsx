import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "./chip";
import { ChipGroup } from "./chip-group";

const meta = {
  title: "Navigation/ChipGroup",
  component: ChipGroup,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <Chip active>Action requise</Chip>
        <Chip>En attente</Chip>
        <Chip>Tout</Chip>
      </>
    ),
  },
} satisfies Meta<typeof ChipGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ManyChips: Story = {
  render: () => (
    <ChipGroup>
      <Chip>Status</Chip>
      <Chip>Type</Chip>
      <Chip>Date</Chip>
      <Chip>Amount</Chip>
      <Chip>Client</Chip>
      <Chip>Category</Chip>
    </ChipGroup>
  ),
};
