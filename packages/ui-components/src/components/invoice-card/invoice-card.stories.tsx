import type { Meta, StoryObj } from "@storybook/react-vite";
import { InvoiceCard } from "./invoice-card";

const meta = {
  title: "Data Display/InvoiceCard",
  component: InvoiceCard,
  tags: ["autodocs"],
  argTypes: {
    reference: { control: "text" },
    amount: { control: "text" },
    meta: { control: "text" },
    status: { control: "object" },
    dueDate: { control: "object" },
  },
  args: {
    reference: "INV-2066639",
    status: { label: "En retard", tone: "error" },
    amount: "8 100 €",
    dueDate: { label: "Éch. 24 jan. 2026", tone: "danger" },
    meta: "Payé : 0 €",
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <InvoiceCard {...args} />
    </div>
  ),
} satisfies Meta<typeof InvoiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overdue: Story = {};

export const Issued: Story = {
  args: {
    reference: "INV-2105835",
    status: { label: "Émise", tone: "info" },
    amount: "5 200 €",
    dueDate: { label: "Éch. 8 fév. 2026", tone: "warning" },
    meta: "Payé : 2 000 €",
  },
};

export const Paid: Story = {
  args: {
    reference: "INV-2085112",
    status: { label: "Payée", tone: "success" },
    amount: "4 800 €",
    dueDate: { label: "Échue 10 jan. 2026", tone: "default" },
    meta: "Payé : 4 800 €",
  },
};

export const NoMeta: Story = {
  args: {
    reference: "INV-2111001",
    status: { label: "Émise", tone: "info" },
    amount: "1 200 €",
    dueDate: { label: "Éch. 15 mars 2026", tone: "default" },
    meta: undefined,
  },
};

export const Stacked: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <InvoiceCard
        reference="INV-2066639"
        status={{ label: "En retard", tone: "error" }}
        amount="8 100 €"
        dueDate={{ label: "Éch. 24 jan. 2026", tone: "danger" }}
        meta="Payé : 0 €"
      />
      <InvoiceCard
        reference="INV-2105835"
        status={{ label: "Émise", tone: "info" }}
        amount="5 200 €"
        dueDate={{ label: "Éch. 8 fév. 2026", tone: "warning" }}
        meta="Payé : 2 000 €"
      />
      <InvoiceCard
        reference="SIB-SAS-ENT-5086"
        status={{ label: "En retard", tone: "error" }}
        amount="2 900 €"
        dueDate={{ label: "Éch. 2 mars 2026", tone: "warning" }}
        meta="Payé : 0 €"
      />
    </div>
  ),
};
