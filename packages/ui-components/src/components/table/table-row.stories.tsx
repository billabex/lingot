import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail } from "lucide-react";
import { TableRow } from "./table-row";
import { TableRowDetail } from "./table-row-detail";
import { Badge } from "../badge";
import type { TableRowAccent } from "./table-row.recipe";

/* Layout only — widths + per-cell padding. `gap: 0` on the row means each cell owns its own right-padding. */
const col = {
  channel: { width: 30, paddingRight: 4 },
  direction: { width: 26, paddingRight: 10 },
  date: { width: 140, paddingRight: 10 },
  subject: { flex: 1, paddingRight: 10 },
  status: { width: 90, textAlign: "right" as const },
};

/* Per-column data typography. */
const cellType = {
  channel: { display: "inline-flex" as const, color: "#9c8e82" /* text.tertiary */ },
  direction: { display: "inline-flex" as const, fontSize: 12, fontWeight: 600 },
  date: { fontSize: 12, color: "#534840" /* text.secondary */ },
};

const accentColor: Record<Exclude<TableRowAccent, "none">, string> = {
  success: "#067647",
  info: "#1e4a8a",
  warning: "#b54708",
  error: "#a63d2b",
};

function sampleChildren(accent: TableRowAccent, glyph = "↓", date = "14/04/2026 09:32", subject = "Re: Facture 2024-08-001 — paiement effectué", badge: { label: string; variant: "success" | "info" | "warning" | "error" } = { label: "Reçu", variant: "success" }) {
  return (
    <>
      <span style={{ ...col.channel, ...cellType.channel }}>
        <Mail size={14} />
      </span>
      <span
        style={{
          ...col.direction,
          ...cellType.direction,
          color: accent === "none" ? undefined : accentColor[accent],
        }}
      >
        {glyph}
      </span>
      <span style={{ ...col.date, ...cellType.date }}>{date}</span>
      <span style={col.subject}>{subject}</span>
      <span style={col.status}>
        <Badge variant={badge.variant}>{badge.label}</Badge>
      </span>
    </>
  );
}

const meta = {
  title: "Data Display/TableRow",
  component: TableRow,
  tags: ["autodocs"],
  argTypes: {
    density: {
      control: { type: "radio" },
      options: ["normal", "compact"],
    },
    accent: {
      control: { type: "radio" },
      options: ["none", "success", "info", "warning", "error"],
    },
    selected: { control: "boolean" },
  },
  args: {
    density: "normal",
    accent: "success",
    selected: false,
    children: sampleChildren("success"),
  },
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default — idle row. `accent` is metadata; the colored left-border only renders when `selected` is true. */
export const Default: Story = {};

/** Selected — accent left-border only, no bg tint. Border color tracks `accent`. */
export const Selected: Story = { args: { selected: true } };

/** Compact — 38px min-height, 12px horizontal padding. Typography stays 13/20. */
export const Compact: Story = { args: { density: "compact" } };

/** All accents (selected) — the four accent colors rendered as the active left-border. */
export const Accents: Story = {
  parameters: { controls: { include: ["density"] } },
  render: (args) => (
    <div>
      {(
        [
          { accent: "success", label: "Reçu", glyph: "↓", variant: "success" as const },
          { accent: "info", label: "Envoyé", glyph: "↑", variant: "info" as const },
          { accent: "warning", label: "Planifié", glyph: "⏱", variant: "warning" as const },
          { accent: "error", label: "Échec", glyph: "⚠", variant: "error" as const },
        ] as const
      ).map(({ accent, label, glyph, variant }) => (
        <TableRow key={accent} {...args} accent={accent} selected>
          {sampleChildren(accent, glyph, "14/04/2026 09:32", `Accent: ${accent}`, { label, variant })}
        </TableRow>
      ))}
    </div>
  ),
};

/** Interactive — click the row to toggle selected + reveal a `TableRowDetail` sibling. */
export const WithDetail: Story = {
  parameters: { controls: { include: ["density"] } },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <TableRow
          {...args}
          selected={open}
          accent="info"
          onClick={() => setOpen((v) => !v)}
          style={{ cursor: "pointer" }}
        >
          {sampleChildren(
            "info",
            "↑",
            "13/04/2026 17:05",
            "Relance paiement — échéance 01/04",
            { label: "Envoyé", variant: "info" },
          )}
        </TableRow>
        {open && (
        <TableRowDetail>
          <div style={{ fontSize: 13, lineHeight: 1.5 }}>
            <strong style={{ fontWeight: 500, marginRight: 8 }}>De</strong>
            agent@billabex.com
            <br />
            Bonjour, nous vous rappelons que la facture n°2024-08-001 est arrivée à échéance.
          </div>
        </TableRowDetail>
        )}
      </div>
    );
  },
};
