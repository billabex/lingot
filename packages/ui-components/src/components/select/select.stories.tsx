import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./select";

const meta = {
  title: "Data Entry/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    error: { control: "boolean", description: "Show error styling" },
    disabled: { control: "boolean", description: "Disable the select" },
    label: { control: "text", description: "Label above the select" },
  },
  args: {
    error: false,
    disabled: false,
    children: undefined,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="">Select an option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: (args) => (
    <Select {...args} label="Country">
      <option value="">Select a country</option>
      <option value="fr">France</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <option>Disabled</option>
    </Select>
  ),
};

export const Error: Story = {
  render: () => (
    <Select error>
      <option value="">Select required</option>
    </Select>
  ),
};

/** All states side by side */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", maxWidth: "600px" }}>
      <Select><option>Default</option></Select>
      <Select disabled><option>Disabled</option></Select>
      <Select error><option>Error</option></Select>
    </div>
  ),
};
