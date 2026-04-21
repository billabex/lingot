import type { Meta, StoryObj } from "@storybook/react-vite";
import { SettingsRow } from "./settings-row";
import { Button } from "../button";

const meta = {
  title: "Data Display/SettingsRow",
  component: SettingsRow,
  tags: ["autodocs"],
  args: {
    label: "Nom de l'organisation",
    value: "WE ARE BOLD",
    trailing: (
      <Button variant="secondary" size="small">
        Modifier
      </Button>
    ),
  },
} satisfies Meta<typeof SettingsRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LabelOnly: Story = {
  args: {
    label: "Domaine email de l'organisation",
    value: undefined,
    trailing: undefined,
  },
};

export const WithDescription: Story = {
  args: {
    label: "Nom",
    description: "Mettre à jour votre prénom et nom.",
    value: "Claire Jourdan",
  },
};

export const WithDestructiveAction: Story = {
  args: {
    label: "Supprimer le compte",
    description:
      "Supprimer définitivement votre compte et toutes les données associées. Cette action est irréversible.",
    value: undefined,
    trailing: (
      <Button variant="destructive" size="small">
        Supprimer mon compte
      </Button>
    ),
  },
};

export const Stack: Story = {
  render: () => (
    <div>
      <SettingsRow
        label="Nom de l'organisation"
        value="WE ARE BOLD"
        trailing={
          <Button variant="secondary" size="small">
            Modifier
          </Button>
        }
      />
      <SettingsRow
        label="Domaine email de l'organisation"
        value="wearebold.co"
        trailing={
          <Button variant="secondary" size="small">
            Modifier
          </Button>
        }
      />
      <SettingsRow
        label="Délai supplémentaire après la date d'échéance"
        value="30 jours"
        trailing={
          <Button variant="secondary" size="small">
            Modifier
          </Button>
        }
      />
    </div>
  ),
};
