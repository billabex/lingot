import type { Meta, StoryObj } from "@storybook/react-vite";
import { Download } from "lucide-react";
import { PageHeader } from "./page-header";
import { Button } from "../button";
import { IconButton } from "../icon-button";

const meta = {
  title: "Navigation/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  args: {
    title: "Facture INV-2066639",
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBreadcrumb: Story = {
  args: {
    breadcrumb: [
      { label: "Comptes clients", href: "#" },
      { label: "DOSFARMASHOP ONLINE S.L." },
    ],
    title: "DOSFARMASHOP ONLINE S.L.",
  },
};

export const WithBreadcrumbAndActions: Story = {
  args: {
    breadcrumb: [
      { label: "Factures", href: "#" },
      { label: "INV-2066639" },
    ],
    title: "Facture INV-2066639",
    actions: (
      <Button variant="secondary" size="small" leftIcon={<Download size={14} />}>
        Télécharger le PDF
      </Button>
    ),
  },
};

export const WithAction: Story = {
  args: {
    actions: (
      <Button variant="secondary" size="small" leftIcon={<Download size={14} />}>
        Télécharger le PDF
      </Button>
    ),
  },
};

export const WithMultipleActions: Story = {
  args: {
    title: "Paramètres",
    actions: (
      <>
        <Button variant="secondary" size="small">
          Annuler
        </Button>
        <Button variant="primary" size="small">
          Enregistrer
        </Button>
      </>
    ),
  },
};

export const WithIconAction: Story = {
  args: {
    actions: (
      <IconButton
        aria-label="More options"
        size="small"
        icon={
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        }
      />
    ),
  },
};
