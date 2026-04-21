import { CheckCircle2, XCircle } from "lucide-react";
import { css } from "styled-system/css";
import { Card } from "../components/card";

const panelInner = css({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "xl",
  padding: "xl",
});

const column = css({
  display: "flex",
  flexDirection: "column",
  gap: "sm",
});

const heading = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  fontWeight: "semibold",
  color: "text.primary",
  margin: 0,
});

const list = css({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "xs",
});

const row = css({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  alignItems: "start",
  columnGap: "xs",
  fontSize: "body.sm",
  lineHeight: "body.sm",
  color: "text.secondary",
});

const iconSlot = css({
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  height: "1.125rem",
});

const iconAllow = css({ color: "status.success" });
const iconDeny = css({ color: "text.tertiary" });

/**
 * OAuth scope summary used across Connection create and Connection detail
 * templates. Kept in `templates/` (not `components/`) until a third consumer
 * exists — at which point it becomes a proper DS component.
 */
export const OAUTH_ALLOWED = [
  "Synchroniser automatiquement vos factures et avoirs",
  "Importer vos comptes clients et leurs contacts",
  "Collecter les paiements associés aux factures",
];

export const OAUTH_DENIED = [
  "Modifier ou créer des factures ou avoirs",
  "Modifier ou créer des comptes ou contacts",
  "Modifier vos informations de paiement",
];

export function OAuthPermissionsPanel({
  allowedLabel = "Billabex peut :",
  deniedLabel = "Billabex ne peut pas :",
  allowed = OAUTH_ALLOWED,
  denied = OAUTH_DENIED,
}: {
  allowedLabel?: string;
  deniedLabel?: string;
  allowed?: string[];
  denied?: string[];
}) {
  return (
    <Card>
      <div className={panelInner}>
        <div className={column}>
          <h3 className={heading}>{allowedLabel}</h3>
          <ul className={list}>
            {allowed.map((text) => (
              <li key={text} className={row}>
                <span className={`${iconSlot} ${iconAllow}`}>
                  <CheckCircle2 size={14} />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className={column}>
          <h3 className={heading}>{deniedLabel}</h3>
          <ul className={list}>
            {denied.map((text) => (
              <li key={text} className={row}>
                <span className={`${iconSlot} ${iconDeny}`}>
                  <XCircle size={14} />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
