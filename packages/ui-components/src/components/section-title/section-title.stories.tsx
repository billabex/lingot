import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionTitle } from "./section-title";
import { IconButton } from "../icon-button";

const PlusIcon = () => (
  <svg viewBox="0 0 16 16" width={14} height={14} fill="none">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

const meta = {
  title: "Layout/SectionTitle",
  component: SectionTitle,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "Section label" },
    trailing: { control: false, description: "Optional trailing IconButton (forced to size=small)" },
  },
  args: {
    children: "Section title",
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Encours" },
};

export const WithTrailing: Story = {
  args: {
    children: "Contacts",
    trailing: <IconButton icon={<PlusIcon />} aria-label="Ajouter un contact" />,
  },
};

export const Stacked: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 280 }}>
      <SectionTitle>Encours</SectionTitle>
      <SectionTitle>Suivi</SectionTitle>
      <SectionTitle trailing={<IconButton icon={<PlusIcon />} aria-label="Ajouter" />}>
        Contacts
      </SectionTitle>
      <SectionTitle>Facturation</SectionTitle>
    </div>
  ),
};
