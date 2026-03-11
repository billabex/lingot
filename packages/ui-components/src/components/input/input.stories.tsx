import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";

const meta = {
  title: "Data Entry/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    error: { control: "boolean", description: "Show error styling" },
    disabled: { control: "boolean", description: "Disable the input" },
    label: { control: "text", description: "Label above the input" },
    placeholder: { control: "text", description: "Placeholder text" },
  },
  args: {
    placeholder: "Placeholder",
    error: false,
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Enter text..." },
};

export const Filled: Story = {
  args: { defaultValue: "Hello World" },
};

export const WithLabel: Story = {
  args: { label: "Email", placeholder: "you@example.com" },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled" },
};

export const Error: Story = {
  args: { error: true, placeholder: "Invalid input" },
};

/** All states side by side */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", maxWidth: "600px" }}>
      <Input placeholder="Default" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Error" error />
      <Input defaultValue="Filled" />
    </div>
  ),
};
