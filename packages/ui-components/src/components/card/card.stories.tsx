import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./card";

const meta = {
  title: "Data Display/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["flat", "elevated"],
      description: "Visual variant",
    },
    interactive: { control: "boolean" },
    selected: { control: "boolean" },
  },
  args: {
    variant: "flat",
    interactive: false,
    selected: false,
    children: "Card content",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Flat: Story = {
  args: { variant: "flat", children: "Flat card" },
  render: (args) => (
    <Card {...args} style={{ width: 200, height: 120 }} />
  ),
};

export const Elevated: Story = {
  args: { variant: "elevated", children: "Elevated card" },
  render: (args) => (
    <Card {...args} style={{ width: 200, height: 120 }} />
  ),
};

/** Both variants side by side */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Card variant="flat" style={{ width: 200, height: 120, padding: 16 }}>
        Flat
      </Card>
      <Card variant="elevated" style={{ width: 200, height: 120, padding: 16 }}>
        Elevated
      </Card>
    </div>
  ),
};

/** Interactive card — hover, focus-visible ring, Enter/Space activation. */
export const Interactive: Story = {
  args: { interactive: true, children: "Click me — or press Enter" },
  render: (args) => (
    <Card {...args} style={{ width: 240, height: 120, padding: 16 }} />
  ),
};

/** Selected interactive card — primary-accent border + subtle background. */
export const Selected: Story = {
  args: { interactive: true, selected: true, children: "Selected option" },
  render: (args) => (
    <Card {...args} style={{ width: 240, height: 120, padding: 16 }} />
  ),
};

/**
 * Picker — interactive cards wired as a radio group. Consumers provide the
 * `role="radio"` + `aria-checked` semantics; the Card handles keyboard and
 * focus styling.
 */
export const Picker: Story = {
  render: () => {
    const options = [
      { id: "one", label: "Option One" },
      { id: "two", label: "Option Two" },
      { id: "three", label: "Option Three" },
    ];
    const [selected, setSelected] = useState("one");
    return (
      <div role="radiogroup" style={{ display: "flex", gap: 16 }}>
        {options.map((opt) => (
          <Card
            key={opt.id}
            interactive
            selected={selected === opt.id}
            role="radio"
            aria-checked={selected === opt.id}
            onClick={() => setSelected(opt.id)}
            style={{
              width: 180,
              height: 100,
              padding: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {opt.label}
          </Card>
        ))}
      </div>
    );
  },
};
