import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionTitle } from "./section-title";

const meta = {
  title: "Navigation/SectionTitle",
  component: SectionTitle,
  tags: ["autodocs"],
  argTypes: {
    expanded: { control: "boolean", description: "Whether the section is expanded" },
    children: { control: "text", description: "Section title" },
  },
  args: {
    children: "Section Title",
    expanded: false,
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {
  args: { expanded: false, children: "General Settings" },
};

export const Expanded: Story = {
  args: { expanded: true, children: "General Settings" },
};

/** Multiple sections example */
export const MultipleSections: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px", width: "300px" }}>
      <SectionTitle expanded>General</SectionTitle>
      <SectionTitle>Notifications</SectionTitle>
      <SectionTitle>Privacy</SectionTitle>
    </div>
  ),
};
