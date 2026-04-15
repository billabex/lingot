import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContactCard } from "./contact-card";

const meta = {
  title: "Data Display/ContactCard",
  component: ContactCard,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    email: { control: "text" },
    language: { control: "text" },
    initials: { control: "text" },
  },
  args: {
    name: "Jaime Sánchez",
    email: "jaime.sanchez@atida.com",
    language: "ES",
  },
  render: (args) => (
    <div style={{ width: 280 }}>
      <ContactCard {...args} />
    </div>
  ),
} satisfies Meta<typeof ContactCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NameOnly: Story = {
  args: {
    email: undefined,
    language: undefined,
  },
};

export const NoLanguage: Story = {
  args: {
    language: undefined,
  },
};

/** Clickable — renders as a `<button>` with hover background and visible focus ring. */
export const Clickable: Story = {
  args: {
    onClick: () => {},
  },
};

export const ExplicitInitials: Story = {
  args: {
    name: "Équipe comptabilité",
    email: "compta@exemple.com",
    language: undefined,
    initials: "EC",
  },
};
