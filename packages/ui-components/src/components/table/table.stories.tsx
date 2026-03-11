import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "./table";
import { TableRow } from "./table-row";
import { EmptyState } from "../empty-state";

const meta = {
  title: "Data Display/Table",
  component: Table,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <TableRow>
          <span style={{ flex: 1 }}>INV-001</span>
          <span style={{ flex: 1 }}>CEJIP SERVICES</span>
          <span style={{ flex: 0, minWidth: "80px" }}>29/10/2025</span>
          <span style={{ flex: 0, minWidth: "80px" }}>468,00 €</span>
        </TableRow>
        <TableRow>
          <span style={{ flex: 1 }}>INV-002</span>
          <span style={{ flex: 1 }}>ACME Corp</span>
          <span style={{ flex: 0, minWidth: "80px" }}>15/11/2025</span>
          <span style={{ flex: 0, minWidth: "80px" }}>1 250,00 €</span>
        </TableRow>
        <TableRow>
          <span style={{ flex: 1 }}>INV-003</span>
          <span style={{ flex: 1 }}>Tech Solutions</span>
          <span style={{ flex: 0, minWidth: "80px" }}>01/12/2025</span>
          <span style={{ flex: 0, minWidth: "80px" }}>3 400,00 €</span>
        </TableRow>
      </>
    ),
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHeader: Story = {
  args: {
    header: (
      <>
        <span style={{ flex: 1 }}>Facture</span>
        <span style={{ flex: 1 }}>Compte</span>
        <span style={{ flex: 0, minWidth: "80px" }}>Date</span>
        <span style={{ flex: 0, minWidth: "80px" }}>Montant</span>
      </>
    ),
  },
};

export const Empty: Story = {
  args: {
    header: (
      <>
        <span style={{ flex: 1 }}>Facture</span>
        <span style={{ flex: 1 }}>Compte</span>
        <span style={{ flex: 0, minWidth: "80px" }}>Date</span>
        <span style={{ flex: 0, minWidth: "80px" }}>Montant</span>
      </>
    ),
    children: <EmptyState variant="compact" title="No data" />,
  },
};
