import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "./form-field";
import { Input } from "../input";
import { Select } from "../select";

const meta = {
  title: "Data Entry/FormField",
  component: FormField,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Label text" },
    helper: { control: "text", description: "Helper text" },
    error: { control: "boolean", description: "Error state" },
  },
  args: {
    label: "Label",
    helper: "Helper text",
    error: false,
    children: <Input placeholder="Placeholder" />,
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSelect: Story = {
  args: {
    label: "Country",
    helper: "Select your country",
    children: <Select><option>France</option><option>Germany</option></Select>,
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    helper: "This field is required",
    error: true,
    children: <Input placeholder="Placeholder" />,
  },
};

export const WithoutHelper: Story = {
  args: {
    label: "Name",
    helper: undefined,
    children: <Input placeholder="Enter your name" />,
  },
};

/** All states */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", maxWidth: "600px" }}>
      <FormField label="Default" helper="Helper text">
        <Input placeholder="Placeholder" />
      </FormField>
      <FormField label="Error" helper="This field is required" error>
        <Input placeholder="Placeholder" />
      </FormField>
      <FormField label="Select" helper="Helper text">
        <Select><option>France</option><option>Germany</option></Select>
      </FormField>
      <FormField label="Select Error" helper="Required" error>
        <Select><option>France</option><option>Germany</option></Select>
      </FormField>
    </div>
  ),
};
