import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { SelectMenu } from "./select-menu";

const options = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "de", label: "Deutsch" },
  { value: "it", label: "Italiano" },
  { value: "pt", label: "Português" },
  { value: "nl", label: "Nederlands" },
];

const meta = {
  title: "Data Entry/SelectMenu",
  component: SelectMenu,
  tags: ["autodocs"],
  args: {
    label: "Langue",
    placeholder: "Sélectionner une langue",
    options,
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <SelectMenu {...args} />
    </div>
  ),
} satisfies Meta<typeof SelectMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "es",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("es");
    return (
      <div style={{ width: 320 }}>
        <SelectMenu {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "es",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { value: "fr", label: "Français" },
      { value: "en", label: "English" },
      { value: "es", label: "Español", disabled: true },
    ],
  },
};
