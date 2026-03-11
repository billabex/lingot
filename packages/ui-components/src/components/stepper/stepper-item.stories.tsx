import type { Meta, StoryObj } from "@storybook/react-vite";
import { StepperItem } from "./stepper-item";

const meta = {
  title: "Navigation/StepperItem",
  component: StepperItem,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["completed", "active", "upcoming"],
      description: "Step state",
    },
    stepNumber: { control: "number", description: "Step number" },
    children: { control: "text", description: "Step label" },
  },
  args: {
    children: "Step label",
    state: "upcoming",
    stepNumber: 1,
  },
} satisfies Meta<typeof StepperItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Completed: Story = {
  args: { state: "completed", children: "Account setup" },
};

export const Active: Story = {
  args: { state: "active", stepNumber: 2, children: "Personal details" },
};

export const Upcoming: Story = {
  args: { state: "upcoming", stepNumber: 3, children: "Confirmation" },
};

/** Full stepper example */
export const StepperExample: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <StepperItem state="completed">Account setup</StepperItem>
      <StepperItem state="active" stepNumber={2}>Personal details</StepperItem>
      <StepperItem state="upcoming" stepNumber={3}>Confirmation</StepperItem>
    </div>
  ),
};
