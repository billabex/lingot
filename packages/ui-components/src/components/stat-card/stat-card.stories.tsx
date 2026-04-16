import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import { StatCard } from "./stat-card";
import { StatCardGroup } from "./stat-card-group";
import { Badge } from "../badge";

const dangerValue = css({ color: "status.error" });

const meta = {
  title: "Data Display/StatCard",
  component: StatCard,
  tags: ["autodocs"],
  args: {
    label: "Montant total",
    children: "8 100,00 €",
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StatCardGroup>
      <StatCard label="Statut de la facture">
        <Badge variant="error">En retard</Badge>
      </StatCard>
      <StatCard label="Statut du paiement">
        <Badge variant="error">Non payé</Badge>
      </StatCard>
      <StatCard label="Montant total">8 100,00 €</StatCard>
      <StatCard label="Solde restant">
        <span className={dangerValue}>8 100,00 €</span>
      </StatCard>
    </StatCardGroup>
  ),
};

export const AllText: Story = {
  render: () => (
    <StatCardGroup>
      <StatCard label="Clients">1 248</StatCard>
      <StatCard label="Factures">7 432</StatCard>
      <StatCard label="Encaissé ce mois">143 220 €</StatCard>
    </StatCardGroup>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <StatCardGroup>
      <StatCard label="Abonnement">
        <Badge variant="success">Actif</Badge>
      </StatCard>
      <StatCard label="Synchronisation">
        <Badge variant="info">Pennylane</Badge>
      </StatCard>
      <StatCard label="Statut">
        <Badge variant="neutral">En attente</Badge>
      </StatCard>
    </StatCardGroup>
  ),
};
