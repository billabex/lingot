import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper } from "./stepper";
import { StepperItem } from "./stepper-item";

const meta = {
  title: "Navigation/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <StepperItem state="completed" stepNumber={1}>
          Step 1
        </StepperItem>
        <StepperItem state="completed" stepNumber={2}>
          Step 2
        </StepperItem>
        <StepperItem state="active" stepNumber={3}>
          Step 3
        </StepperItem>
        <StepperItem state="upcoming" stepNumber={4}>
          Step 4
        </StepperItem>
      </>
    ),
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllCompleted: Story = {
  args: {
    children: (
      <>
        <StepperItem state="completed" stepNumber={1}>
          Review
        </StepperItem>
        <StepperItem state="completed" stepNumber={2}>
          Confirm
        </StepperItem>
        <StepperItem state="completed" stepNumber={3}>
          Payment
        </StepperItem>
      </>
    ),
  },
};

export const ThreeSteps: Story = {
  args: {
    children: (
      <>
        <StepperItem state="upcoming" stepNumber={1}>
          Start
        </StepperItem>
        <StepperItem state="upcoming" stepNumber={2}>
          Middle
        </StepperItem>
        <StepperItem state="upcoming" stepNumber={3}>
          End
        </StepperItem>
      </>
    ),
  },
};
