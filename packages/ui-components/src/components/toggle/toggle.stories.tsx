import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "./toggle";

const meta = {
  title: "Actions/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean", description: "Checked state" },
    disabled: { control: "boolean", description: "Disabled state" },
    label: { control: "text", description: "Label text" },
  },
  args: {
    checked: false,
    disabled: false,
    label: "Placeholder",
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Notifications", "aria-label": undefined },
};

export const Checked: Story = {
  args: { checked: true, label: "Enabled" },
};

export const WithoutLabel: Story = {
  args: { label: undefined, "aria-label": "Toggle setting" },
};

export const Disabled: Story = {
  args: { label: "Disabled", disabled: true },
};

/** All states */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Toggle label="Unchecked" />
      <Toggle label="Checked" checked />
      <Toggle label="Disabled unchecked" disabled />
      <Toggle label="Disabled checked" disabled checked />
    </div>
  ),
};
