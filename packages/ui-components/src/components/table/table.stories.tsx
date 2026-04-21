import { Fragment, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import { CircleCheck, Mail } from "lucide-react";
import { Table } from "./table";
import { TableRow } from "./table-row";
import { TableRowDetail } from "./table-row-detail";
import { TableSortHeader, type TableSortDirection } from "./table-sort-header";
import { CommDetail } from "./comm-detail";
import { PlannedCommDetail } from "./planned-comm-detail";
import { Badge } from "../badge";
import { EmptyState } from "../empty-state";

const invoiceCol = {
  ref: { width: 120, paddingRight: 16 },
  account: { flex: 1, paddingRight: 16 },
  date: { width: 120, paddingRight: 16 },
  amount: { width: 120, textAlign: "right" as const },
};

const invoiceHeader = (
  <>
    <span style={invoiceCol.ref}>
      <TableSortHeader>Facture</TableSortHeader>
    </span>
    <span style={invoiceCol.account}>
      <TableSortHeader>Compte</TableSortHeader>
    </span>
    <span style={invoiceCol.date}>
      <TableSortHeader active direction="desc">
        Date
      </TableSortHeader>
    </span>
    <span style={invoiceCol.amount}>
      <TableSortHeader>Montant</TableSortHeader>
    </span>
  </>
);

const meta = {
  title: "Data Display/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    density: {
      control: { type: "radio" },
      options: ["normal", "compact"],
    },
  },
  args: {
    density: "normal",
    children: (
      <>
        <TableRow>
          <span style={invoiceCol.ref}>INV-001</span>
          <span style={invoiceCol.account}>CEJIP SERVICES</span>
          <span style={invoiceCol.date}>29/10/2025</span>
          <span style={invoiceCol.amount}>468,00 €</span>
        </TableRow>
        <TableRow>
          <span style={invoiceCol.ref}>INV-002</span>
          <span style={invoiceCol.account}>ACME Corp</span>
          <span style={invoiceCol.date}>15/11/2025</span>
          <span style={invoiceCol.amount}>1 250,00 €</span>
        </TableRow>
        <TableRow>
          <span style={invoiceCol.ref}>INV-003</span>
          <span style={invoiceCol.account}>Tech Solutions</span>
          <span style={invoiceCol.date}>01/12/2025</span>
          <span style={invoiceCol.amount}>3 400,00 €</span>
        </TableRow>
      </>
    ),
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHeader: Story = { args: { header: invoiceHeader } };

export const Empty: Story = {
  args: {
    header: invoiceHeader,
    children: (
      <EmptyState
        className={css({ width: "100%" })}
        icon={<CircleCheck />}
        title="Aucune communication"
        description="Importez vos factures pour commencer."
      />
    ),
  },
};

/* -------------------------------------------------------------------------- */
/* Communications — shared pattern used in Task module (compact)              */
/* and Communications module (normal).                                        */
/* -------------------------------------------------------------------------- */

type CommRow = {
  id: string;
  direction: "in" | "out" | "planned";
  date: string;
  subject: string;
  status: "Reçu" | "Envoyé" | "Planifié";
  statusVariant: "success" | "info" | "warning";
  accent: "success" | "info" | "warning";
};

const commRows: CommRow[] = [
  {
    id: "1",
    direction: "in",
    date: "14/04/2026 09:32",
    subject: "Re: Facture 2024-08-001 — paiement effectué",
    status: "Reçu",
    statusVariant: "success",
    accent: "success",
  },
  {
    id: "2",
    direction: "out",
    date: "13/04/2026 17:05",
    subject: "Relance paiement — échéance 01/04",
    status: "Envoyé",
    statusVariant: "info",
    accent: "info",
  },
  {
    id: "3",
    direction: "planned",
    date: "16/04/2026 08:00",
    subject: "Relance automatique — J+30",
    status: "Planifié",
    statusVariant: "warning",
    accent: "warning",
  },
];

/* Column layout — widths include each cell's own right-padding. `gap: 0` on the row
   means inter-cell spacing is owned by the cell (matches the prototype). Layout only — no typography. */
const col = {
  channel: { width: 30, paddingRight: 4 },
  direction: { width: 26, paddingRight: 10 },
  date: { width: 140, paddingRight: 10 },
  subject: { flex: 1, paddingRight: 10 },
  status: { width: 90, textAlign: "right" as const },
};

/* Per-column data typography — applied inline on the cell only (not the header). */
const cellType = {
  channel: { display: "inline-flex" as const, color: "#9c8e82" /* text.tertiary */ },
  direction: { display: "inline-flex" as const, fontSize: 12, fontWeight: 600 },
  date: { fontSize: 12, color: "#534840" /* text.secondary */ },
};

const accentColor: Record<
  "success" | "info" | "warning" | "error",
  string
> = {
  success: "#067647",
  info: "#1e4a8a",
  warning: "#b54708",
  error: "#a63d2b",
};

const directionGlyph: Record<CommRow["direction"], string> = {
  in: "↓",
  out: "↑",
  planned: "⏱",
};

function CommsTable({ density }: { density: "compact" | "normal" }) {
  const [sort, setSort] = useState<{ col: "date" | "subject" | "status"; dir: TableSortDirection }>(
    { col: "date", dir: "desc" },
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const toggle = (id: string) => setExpandedId((current) => (current === id ? null : id));

  const handleSort = (col: typeof sort.col) =>
    setSort((s) =>
      s.col === col ? { col, dir: s.dir === "asc" ? "desc" : "asc" } : { col, dir: "desc" },
    );

  return (
    <Table
      density={density}
      header={
        <>
          <span style={col.channel} />
          <span style={col.direction} />
          <span style={col.date}>
            <TableSortHeader
              active={sort.col === "date"}
              direction={sort.col === "date" ? sort.dir : "desc"}
              onClick={() => handleSort("date")}
            >
              Date
            </TableSortHeader>
          </span>
          <span style={col.subject}>
            <TableSortHeader
              active={sort.col === "subject"}
              direction={sort.col === "subject" ? sort.dir : "desc"}
              onClick={() => handleSort("subject")}
            >
              Sujet
            </TableSortHeader>
          </span>
          <span style={col.status}>
            <TableSortHeader
              active={sort.col === "status"}
              direction={sort.col === "status" ? sort.dir : "desc"}
              onClick={() => handleSort("status")}
            >
              Statut
            </TableSortHeader>
          </span>
        </>
      }
    >
      {commRows.map((row) => {
        const open = expandedId === row.id;
        return (
          <Fragment key={row.id}>
            <TableRow
              accent={row.accent}
              selected={open}
              onClick={() => toggle(row.id)}
              style={{ cursor: "pointer" }}
            >
              <span style={{ ...col.channel, ...cellType.channel }}>
                <Mail size={14} />
              </span>
              <span
                style={{ ...col.direction, ...cellType.direction, color: accentColor[row.accent] }}
              >
                {directionGlyph[row.direction]}
              </span>
              <span style={{ ...col.date, ...cellType.date }}>{row.date}</span>
              <span style={col.subject}>{row.subject}</span>
              <span style={col.status}>
                <Badge variant={row.statusVariant}>{row.status}</Badge>
              </span>
            </TableRow>
            {open && (
              <TableRowDetail>
                {row.direction === "planned" ? (
                  <PlannedCommDetail subject={row.subject} />
                ) : (
                  <CommDetail subject={row.subject} />
                )}
              </TableRowDetail>
            )}
          </Fragment>
        );
      })}
    </Table>
  );
}

/** Compact density — matches the Task module center panel (narrow width). */
export const CommunicationsCompact: Story = {
  args: { density: "compact" },
  parameters: { controls: { include: ["density"] } },
  render: (args) => (
    <div style={{ maxWidth: 720 }}>
      <CommsTable density={args.density ?? "compact"} />
    </div>
  ),
};

/** Normal density — matches the Communications module (full-width screen). */
export const CommunicationsNormal: Story = {
  args: { density: "normal" },
  parameters: { controls: { include: ["density"] } },
  render: (args) => (
    <div style={{ width: "100%" }}>
      <CommsTable density={args.density ?? "normal"} />
    </div>
  ),
};
