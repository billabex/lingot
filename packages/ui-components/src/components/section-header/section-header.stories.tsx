import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionHeader } from "./section-header";
import { Button } from "../button";

const meta = {
  title: "Navigation/SectionHeader",
  component: SectionHeader,
  tags: ["autodocs"],
  args: {
    title: "Informations de l'organisation",
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    description:
      "Ces informations seront utilisées dans les communications avec vos clients et pour identifier les membres de votre équipe.",
  },
};

export const ShortTitle: Story = {
  args: {
    title: "Membres",
    description: undefined,
  },
};

export const WithTrailingAction: Story = {
  args: {
    title: "Connexions",
    trailing: <Button variant="primary">Ajouter une connexion</Button>,
  },
};
