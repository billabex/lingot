import { useState, type CSSProperties, type MouseEvent } from "react";

export type CommDetailProps = {
  /** Subject line displayed in the meta grid (Objet field) */
  subject?: string;
};

const labelStyle: CSSProperties = {
  display: "inline-block",
  minWidth: 80,
  fontWeight: 500,
  color: "#534840", // text.secondary
  marginRight: 8,
};

const toggleStyle: CSSProperties = {
  border: "none",
  background: "transparent",
  color: "#b5634b", // text.link (terracotta.400)
  cursor: "pointer",
  fontSize: 12,
  padding: 0,
  marginTop: 4,
  marginRight: 16,
  display: "inline-block",
};

const mutedValueStyle: CSSProperties = { color: "#9c8e82" /* text.tertiary */ };
const valueStyle: CSSProperties = { color: "#1c1917" };
const attachmentLinkStyle: CSSProperties = {
  color: "#b5634b", // text.link (terracotta.400)
  textDecoration: "underline",
  textUnderlineOffset: 2,
  marginRight: 12,
};

/**
 * Reference content layout for `TableRowDetail` — mirrors the prototype's
 * `.comm-log-meta` + `.comm-log-body` structure. Each toggle link is rendered
 * inline-block right after its associated block (signature toggle → after signature,
 * quoted toggle → after quoted). When neither block is visible, both toggles
 * naturally flow on the same line directly under the body text.
 */
export function CommDetail({
  subject = "Re: Rappel urgent — Facture FA00148823 — Contestation de la dette",
}: CommDetailProps) {
  const [showSig, setShowSig] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <div>
      {/* Meta grid — 2 columns. Cc/Cci omitted when empty (matches prototype design). */}
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
        <div>
          <span style={labelStyle}>De</span>
          <span style={valueStyle}>Jaime Rodriguez &lt;jaime@dosfarmashop.es&gt;</span>
        </div>
        <div>
          <span style={labelStyle}>À</span>
          <span style={valueStyle}>Camille Montagnon &lt;camille@billabex.com&gt;</span>
        </div>
        <div>
          <span style={labelStyle}>Cc</span>
          <span style={mutedValueStyle}>—</span>
        </div>
        <div>
          <span style={labelStyle}>Cci</span>
          <span style={mutedValueStyle}>—</span>
        </div>
        <div>
          <span style={labelStyle}>Objet</span>
          <span style={valueStyle}>{subject}</span>
        </div>
        <div>
          <span style={labelStyle}>Pièces jointes</span>
          <a href="#" style={attachmentLinkStyle} onClick={stop}>
            FA00148823.pdf
          </a>
          <a href="#" style={attachmentLinkStyle} onClick={stop}>
            Historique-relances.pdf
          </a>
        </div>
      </div>

      {/* Body — text + inline signature/quoted blocks + their toggle links. */}
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
        {`Estimada Sra:

Negamos la existencia de votre dette. No hemos tramitado la baja y no reconocemos importe alguno como debido.

`}
        {showSig && (
          <div
            style={{
              color: "#9c8e82", // text.tertiary
              marginTop: 12,
              whiteSpace: "pre-wrap",
            }}
          >
            {`Atentamente,
Jaime Rodriguez`}
          </div>
        )}

        <button
          type="button"
          onClick={(e) => {
            stop(e);
            setShowSig((v) => !v);
          }}
          style={toggleStyle}
        >
          {showSig ? "Masquer la signature" : "Afficher la signature"}
        </button>

        {showQuote && (
          <div
            style={{
              marginTop: 12,
              padding: "12px 16px",
              borderLeft: "3px solid #e3dbd2", // border.default
              color: "#9c8e82", // text.tertiary
              fontSize: 13,
              lineHeight: "20px",
              whiteSpace: "pre-wrap",
            }}
          >
            {`Le 17/03/2026 09:00, Camille Montagnon <camille@billabex.com> a écrit :
> Estimado Sr. Rodriguez,
>
> Nous nous permettons de vous contacter une nouvelle fois au sujet de la facture FA00148823 d'un montant de 16 200 €.
>
> Cordialement,
> Camille Montagnon`}
          </div>
        )}

        <button
          type="button"
          onClick={(e) => {
            stop(e);
            setShowQuote((v) => !v);
          }}
          style={toggleStyle}
        >
          {showQuote ? "Masquer le message précédent" : "Voir le message précédent"}
        </button>
      </div>
    </div>
  );
}
