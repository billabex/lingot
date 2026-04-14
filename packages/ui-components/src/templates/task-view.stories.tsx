import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { css } from "styled-system/css";
import { X, CheckCircle2, Mail, Users } from "lucide-react";
import { AgedBalance } from "../components/aged-balance";
import { Avatar } from "../components/avatar";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Chip, ChipGroup } from "../components/chip";
import { IconButton } from "../components/icon-button";
import { Input } from "../components/input";
import { InvoiceCard } from "../components/invoice-card";
import { ListItem } from "../components/list-item";
import { ListPagination } from "../components/list-pagination";
import { MessageComposer } from "../components/message-composer";
import { PanelHeader } from "../components/panel-header";
import { SectionTitle } from "../components/section-title";
import { StatusDot } from "../components/status-dot";
import { TabItem } from "../components/tab-item";
import { Table } from "../components/table";
import { TableRow } from "../components/table/table-row";
import { Sidebar } from "../components/sidebar";
import { NavItem } from "../components/nav-item";
import { NotificationBadge } from "../components/notification-badge";

function TaskViewTemplate() {
  return <TaskViewInner />;
}

const meta = {
  title: "Templates/Task View",
  component: TaskViewTemplate,
  parameters: { layout: "fullscreen" },
  tags: [],
} satisfies Meta<typeof TaskViewTemplate>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const tasks = [
  { company: "DOSFARMASHOP", title: "Examiner le refus de Jaime", amount: "16 200 €", date: "1 avr. 10:24", active: true },
  { company: "Yoojo", title: "Vérifier la demande de doublon", amount: "8 200 €", date: "1 avr. 08:15" },
  { company: "Markets Mojo Pvt Ltd", title: "Autoriser l'accès au compte", amount: "4 100 €", date: "31 mars 14:02" },
  { company: "E.Miroglio EAD", title: "Fournir les coordonnées bancaires à Tsveta", amount: "12 800 €", date: "30 mars 17:45" },
  { company: "Revive Ads", title: "Examiner la demande d'échéancier", amount: "6 750 €", date: "29 mars 11:30" },
  { company: "Nexus Digital GmbH", title: "Relancer après absence de réponse", amount: "3 200 €", date: "29 mars 09:18" },
  { company: "Solaris Energy Ltd", title: "Confirmer la réception du virement", amount: "7 600 €", date: "28 mars 16:05" },
  { company: "Pharma Direct SA", title: "Vérifier le bon de commande manquant", amount: "14 500 €", date: "27 mars 10:40" },
];

const comms: Array<{
  date: string;
  subject: string;
  status: { label: string; tone: "info" | "success" | "warning" };
  statusDot: "info" | "success" | "warning";
}> = [
  { date: "25/03/2026 09:00", subject: "Rappel formel avec mise en demeure — Dernier avis avant contentieux", status: { label: "Planifiée", tone: "warning" }, statusDot: "warning" },
  { date: "18/03/2026 10:42", subject: "Re: Rappel de paiement — FA00148823 — Contestation formelle", status: { label: "Reçue", tone: "success" }, statusDot: "success" },
  { date: "17/03/2026 09:00", subject: "Rappel de paiement — FA00148823 — Montant impayé de 16 200 €", status: { label: "Envoyée", tone: "info" }, statusDot: "info" },
  { date: "11/03/2026 15:30", subject: "Re: Rappel urgent — FA00148823 — Contestation de la dette", status: { label: "Reçue", tone: "success" }, statusDot: "success" },
  { date: "10/03/2026 09:00", subject: "Rappel urgent — FA00148823 — Mise en demeure sous 10 jours", status: { label: "Envoyée", tone: "info" }, statusDot: "info" },
  { date: "01/03/2026 09:00", subject: "Re: Suivi de votre dossier — Factures 2066639, 2105835 et SIB-SAS-ENT-5086", status: { label: "Envoyée", tone: "info" }, statusDot: "info" },
];

/* Canonical company-logo tile — matches `Sidebar` story in the DS. */
const logoTile = css({
  width: "32px",
  height: "32px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  bg: "action.primary",
  color: "text.inverse",
  borderRadius: "sm",
  fontFamily: "body",
  fontWeight: "semibold",
  fontSize: "caption",
  cursor: "pointer",
  border: "none",
  transition: "background 120ms ease",
  _hover: { bg: "action.primaryHover" },
  _active: { bg: "neutral.500" },
});

const panel: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
};

const hr: React.CSSProperties = {
  borderBottom: "1px solid var(--colors-border-default)",
};

function TaskViewInner() {
  const [message, setMessage] = useState("");

  return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          background: "var(--colors-bg-subtle)",
          fontFamily: "var(--fonts-body)",
          color: "var(--colors-text-primary)",
          fontSize: 14,
          overflow: "hidden",
        }}
      >
        {/* 48px icon rail — Sidebar is transparent, wrapper owns the bg */}
        <div style={{ flexShrink: 0, background: "var(--colors-bg-subtle)" }}>
        <Sidebar
          header={
            <button
              type="button"
              className={logoTile}
              aria-label="Changer d'entreprise"
              aria-haspopup="menu"
            >
              B
            </button>
          }
        >
          <NavItem variant="icon" active aria-label="Tâches">
            <CheckCircle2 size={16} />
            <NotificationBadge count={25} />
          </NavItem>
          <NavItem variant="icon" aria-label="Communications">
            <Mail size={16} />
          </NavItem>
          <NavItem variant="icon" aria-label="Comptes clients">
            <Users size={16} />
          </NavItem>
        </Sidebar>
        </div>

        {/* Main area — 16px padding around the card, 8px on the left (rail side) */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            padding: "16px 16px 16px 8px",
            minWidth: 0,
          }}
        >
        <div
          style={{
            flex: 1,
            borderRadius: 12,
            border: "1px solid var(--colors-border-default)",
            background: "var(--colors-bg-default)",
            display: "flex",
            overflow: "hidden",
            minHeight: 0,
          }}
        >
          {/* =================== LEFT PANEL =================== */}
          <section style={{ ...panel, width: 280, borderRight: "1px solid var(--colors-border-default)" }}>
            <div style={hr}>
              <PanelHeader variant="card">
                <PanelHeader.Title>Tâches</PanelHeader.Title>
                <Badge variant="count" shape="square">30</Badge>
              </PanelHeader>
            </div>

            <div style={{ padding: "8px 16px 12px", display: "flex", flexDirection: "column", gap: 8 }}>
              <Input size="small" placeholder="Rechercher…" />
              <ChipGroup>
                <Chip variant="filter" active>
                  Action requise
                </Chip>
                <Chip variant="filter">En attente</Chip>
                <Chip variant="filter">Tout</Chip>
              </ChipGroup>
            </div>

            <div style={{ flex: 1, overflowY: "auto" }}>
              {tasks.map((t, i) => (
                <ListItem
                  key={i}
                  as="button"
                  active={t.active}
                  title={t.company}
                  titleTrailing={<Badge variant="error" shape="pill">Action requise</Badge>}
                  preview={t.title}
                  meta={
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                      <span style={{ fontWeight: 500 }}>{t.amount}</span>
                      <span style={{ color: "var(--colors-text-tertiary)" }}>{t.date}</span>
                    </div>
                  }
                />
              ))}
            </div>

            <div style={{ ...hr, borderBottom: 0, borderTop: "1px solid var(--colors-border-default)" }}>
              <ListPagination
                total={30}
                pageSize={25}
                page={1}
                onChange={() => {}}
                formatLabel={(s, e, t) => `${s}–${e} sur ${t}`}
              />
            </div>
          </section>

          {/* =================== CENTER PANEL (no border — neighbours own theirs) =================== */}
          <section style={{ ...panel, flex: 1, minWidth: 0 }}>
            {/* Header */}
            <div style={hr}>
              <PanelHeader variant="page">
                <PanelHeader.Title>Examiner le refus de Jaime</PanelHeader.Title>
                <Badge variant="error" shape="pill">Action requise</Badge>
                <PanelHeader.Spacer />
                <Button variant="ghost" size="small" leftIcon={<X size={14} />}>
                  Annuler la tâche
                </Button>
              </PanelHeader>
            </div>

            {/* Fixed task summary + tabs */}
            <div style={{ padding: "16px 24px 0", flexShrink: 0 }}>
              <div style={{ fontSize: 13, lineHeight: "18px", color: "var(--colors-text-tertiary)", marginBottom: 8 }}>
                DOSFARMASHOP ONLINE S.L. · Amelia Miller · il y a 2h
              </div>
              <p style={{ fontSize: 14, lineHeight: "24px", margin: 0, marginBottom: 16 }}>
                Jaime Sánchez (<a href="#" style={{ color: "var(--colors-text-link)" }}>jaime.sanchez@atida.com</a>) a répondu au ticket #4190686, contestant la dette de 16 200 € pour les factures 2066639, 2105835 et SIB-SAS-ENT-5086 et demandant une preuve d'abonnement BREVO. Pourriez-vous vérifier nos dossiers pour DOSFARMASHOP ONLINE S.L. et fournir les contrats, confirmations d'abonnement ou documentation d'annulation liés à BREVO ? Dès réception, je préparerai une réponse formelle à Jaime Sánchez.
              </p>
              <div style={{ display: "flex", gap: 0, borderBottom: "1px solid var(--colors-border-default)" }}>
                <TabItem active>Échanges avec votre agent</TabItem>
                <TabItem>Communications</TabItem>
              </div>
            </div>

            {/* Comms table */}
            <div style={{ flex: 1, overflowY: "auto", padding: "0 24px" }}>
              <Table
                density="compact"
                header={
                  <TableRow>
                    <div style={{ flex: "0 0 140px", color: "var(--colors-text-tertiary)", fontSize: 12 }}>Date</div>
                    <div style={{ flex: 1, color: "var(--colors-text-tertiary)", fontSize: 12 }}>Objet</div>
                    <div style={{ flex: "0 0 90px", color: "var(--colors-text-tertiary)", fontSize: 12, textAlign: "right" }}>Statut</div>
                  </TableRow>
                }
              >
                {comms.map((c, i) => (
                  <TableRow key={i}>
                    <div style={{ flex: "0 0 140px", color: "var(--colors-text-tertiary)", fontSize: 12 }}>{c.date}</div>
                    <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: 8 }}>
                      <StatusDot size="small" tone={c.statusDot} />
                      <span
                        style={{
                          fontSize: 13,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {c.subject}
                      </span>
                    </div>
                    <div style={{ flex: "0 0 90px", display: "flex", justifyContent: "flex-end" }}>
                      <Badge variant={c.status.tone} shape="pill">{c.status.label}</Badge>
                    </div>
                  </TableRow>
                ))}
              </Table>
            </div>

            {/* Composer */}
            <div style={{ ...hr, borderBottom: 0, borderTop: "1px solid var(--colors-border-default)", padding: "12px 24px", flexShrink: 0 }}>
              <MessageComposer
                value={message}
                onChange={setMessage}
                placeholder="Écrire un message…"
                onSend={() => setMessage("")}
              />
            </div>
          </section>

          {/* =================== RIGHT PANEL =================== */}
          <aside
            style={{
              width: 300,
              flexShrink: 0,
              borderLeft: "1px solid var(--colors-border-default)",
              background: "var(--colors-bg-subtle)",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
            }}
          >
            <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Account header — block with margin-bottom, NOT a fixed-height PanelHeader */}
            <div>
              <a
                href="#"
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: "24px",
                  color: "var(--colors-text-primary)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                DOSFARMASHOP ONLINE S.L.
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <div style={{ fontSize: 12, color: "var(--colors-text-tertiary)", lineHeight: "16px", marginTop: 4 }}>
                Créé le 12 février 2026
              </div>
            </div>

            {/* Encours */}
            <div>
              <SectionTitle>Encours</SectionTitle>
              <div style={{ marginTop: 8 }}>
                <AgedBalance
                  total="16 200 €"
                  buckets={[
                    { tone: "warning", label: "30-60j", value: 20 },
                    { tone: "danger", label: "60-90j", value: 80 },
                  ]}
                />
              </div>
            </div>

            {/* Suivi */}
            <div>
              <SectionTitle>Suivi</SectionTitle>
              <div style={{ marginTop: 8, background: "var(--colors-bg-default)", border: "1px solid var(--colors-border-default)", borderRadius: 8, padding: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <StatusDot tone="success" />
                  <span style={{ fontSize: 13, fontWeight: 500 }}>Confié à l'agent</span>
                </div>
                <div style={{ fontSize: 12, color: "var(--colors-text-tertiary)", marginTop: 4, marginLeft: 16 }}>
                  Relances en cours
                </div>
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--colors-border-subtle)" }}>
                  <Button variant="secondary" size="small" style={{ width: "100%", justifyContent: "center" }}>
                    Suspendre les relances
                  </Button>
                </div>
                <div style={{ textAlign: "center", marginTop: 8 }}>
                  <a
                    href="#"
                    style={{
                      fontSize: 12,
                      color: "var(--colors-text-tertiary)",
                      textDecoration: "underline",
                      textUnderlineOffset: 2,
                    }}
                  >
                    Reprendre en interne
                  </a>
                </div>
              </div>
            </div>

            {/* Contacts */}
            <div>
              <SectionTitle
                trailing={
                  <IconButton
                    size="small"
                    aria-label="Ajouter un contact"
                    icon={
                      <svg viewBox="0 0 16 16" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
                        <path d="M8 3v10M3 8h10" />
                      </svg>
                    }
                  />
                }
              >
                Contacts
              </SectionTitle>
              <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 12, padding: 8 }}>
                <Avatar initials="JS" label="Jaime Sánchez" />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>Jaime Sánchez</div>
                  <div style={{ fontSize: 12, color: "var(--colors-text-tertiary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    jaime.sanchez@atida.com
                  </div>
                </div>
                <span style={{ fontSize: 10, fontWeight: 600, color: "var(--colors-text-tertiary)", letterSpacing: "0.04em" }}>
                  ES
                </span>
              </div>
            </div>

            {/* Facturation */}
            <div>
              <SectionTitle>Facturation</SectionTitle>
              <div style={{ marginTop: 4 }}>
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
                  dueDate={{ label: "Éch. 8 fév. 2026", tone: "danger" }}
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
            </div>
            </div>
          </aside>
        </div>
        </div>
      </div>
  );
}
