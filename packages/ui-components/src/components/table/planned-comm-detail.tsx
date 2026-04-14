import type { CSSProperties } from "react";
import { ActionBar } from "../action-bar";
import { Button } from "../button";

export type PlannedCommDetailProps = {
  /** Subject line displayed in the meta grid (Objet field) */
  subject?: string;
  /** Scheduled send date/time displayed in the meta grid */
  scheduledAt?: string;
  /** Called when the user clicks "Modifier" — typically opens an edit modal. */
  onEdit?: () => void;
  /** Called when the user clicks "Envoyer maintenant" — bypasses the schedule. */
  onSendNow?: () => void;
};

const labelStyle: CSSProperties = {
  display: "inline-block",
  minWidth: 80,
  fontWeight: 500,
  color: "#534840", // text.secondary
  marginRight: 8,
};

/**
 * Reference content layout for a planned follow-up row detail — meta grid +
 * message preview + an `ActionBar` with edit / send-now actions. Counterpart to
 * `CommDetail` for rows where `direction === "planned"`.
 */
export function PlannedCommDetail({
  subject = "Relance automatique — J+30",
  scheduledAt = "16/04/2026 08:00",
  onEdit,
  onSendNow,
}: PlannedCommDetailProps) {
  const stop = (fn?: () => void) => (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    fn?.();
  };

  return (
    <div>
      {/* Meta grid — 2 columns. Mirrors CommDetail. */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px 32px",
          marginBottom: 16,
          fontSize: 13,
          lineHeight: "20px",
        }}
      >
        {(
          [
            ["De", "Camille Montagnon <camille@billabex.com>"],
            ["À", "Jaime Rodriguez <jaime@dosfarmashop.es>"],
            ["Facture", "FA00148823"],
            ["Étape", "Relance #7"],
            ["Objet", subject],
            ["Envoi prévu", scheduledAt],
          ] as const
        ).map(([label, value]) => (
          <div key={label}>
            <span style={labelStyle}>{label}</span>
            <span style={{ color: "#1c1917" }}>{value}</span>
          </div>
        ))}
      </div>

      {/* Body — draft preview. */}
      <div
        style={{
          borderTop: "1px solid #f5f0eb", // border.subtle
          paddingTop: 12,
          fontSize: 14,
          lineHeight: "22px",
          color: "#1c1917",
          whiteSpace: "pre-wrap",
        }}
      >
        {`Bonjour,

Nous revenons vers vous concernant la facture FA00148823, toujours en attente de règlement. Merci de bien vouloir procéder au paiement sous 7 jours.

Cordialement,
Camille Montagnon`}
      </div>

      <ActionBar topBorder onClick={(e) => e.stopPropagation()}>
        <Button variant="secondary" onClick={stop(onEdit)}>
          Modifier
        </Button>
        <Button variant="primary" onClick={stop(onSendNow)}>
          Envoyer maintenant
        </Button>
      </ActionBar>
    </div>
  );
}
