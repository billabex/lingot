import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./checkbox";

const meta = {
  title: "Data Entry/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Label text" },
    checked: { control: "boolean", description: "Checked state" },
    disabled: { control: "boolean", description: "Disabled state" },
  },
  args: {
    label: "Label",
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Accept terms" },
};

export const Checked: Story = {
  args: { label: "Checked", defaultChecked: true },
};

export const WithoutLabel: Story = {
  args: { label: undefined, "aria-label": "Toggle option" },
};

export const Disabled: Story = {
  args: { label: "Disabled", disabled: true },
};

export const DisabledChecked: Story = {
  args: { label: "Disabled checked", disabled: true, defaultChecked: true },
};

/** All states */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Checkbox label="Default" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};
