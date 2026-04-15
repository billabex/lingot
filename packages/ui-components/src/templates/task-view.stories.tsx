import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { css } from "styled-system/css";
import { X, CheckCircle2, ExternalLink, Mail, Users } from "lucide-react";
import { AgedBalance } from "../components/aged-balance";
import { Badge } from "../components/badge";
import { Bubble, BubbleAttachment, BubbleAttachmentGroup, BubbleGroup } from "../components/bubble";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Chip, ChipGroup } from "../components/chip";
import { ContactCard } from "../components/contact-card";
import { Link } from "../components/link";
import { Input } from "../components/input";
import { InvoiceCard } from "../components/invoice-card";
import { ListItem } from "../components/list-item";
import { ListPagination } from "../components/list-pagination";
import { MessageComposer } from "../components/message-composer";
import { PanelHeader } from "../components/panel-header";
import { SectionTitle } from "../components/section-title";
import { StatusDot } from "../components/status-dot";
import { TabItem, Tabs } from "../components/tab-item";
import { Table } from "../components/table/table";
import { TableRow } from "../components/table/table-row";
import {
  TableSortHeader,
  type TableSortDirection,
} from "../components/table/table-sort-header";
import { Sidebar } from "../components/sidebar";
import { NavItem } from "../components/nav-item";
import { NotificationBadge } from "../components/notification-badge";

type TaskTab = "echanges" | "comms";

function TaskViewTemplate({ activeTab = "echanges" }: { activeTab?: TaskTab }) {
  return <TaskViewInner activeTab={activeTab} />;
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

/** Communications tab active — center panel shows the comm log table. */
export const WithCommunicationsTab: Story = {
  args: { activeTab: "comms" },
};

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

type DiscussionMessage = {
  side: "agent" | "user";
  author: string;
  date: string;
  body: string;
  attachments?: { name: string; href: string }[];
};

const discussion: DiscussionMessage[] = [
  {
    side: "agent",
    author: "Amelia Miller",
    date: "1 avr. 08:24",
    body:
      "J'ai analysé le ticket #4190686. Jaime Sánchez conteste 3 factures pour un total de 16 200 €. Il demande une preuve d'abonnement BREVO. Avez-vous les contrats ou confirmations d'abonnement pour DOSFARMASHOP ONLINE S.L. ?",
  },
  {
    side: "user",
    author: "Gilles SI",
    date: "1 avr. 09:30",
    body:
      "Voici les contrats pour DOSFARMASHOP. Utilisez-les pour répondre au refus de Jaime. L'abonnement était actif de janvier 2024 à décembre 2025.",
    attachments: [
      { name: "Contrat-BREVO-2024.pdf", href: "#" },
      { name: "Confirmation-abonnement.pdf", href: "#" },
    ],
  },
  {
    side: "agent",
    author: "Amelia Miller",
    date: "1 avr. 09:45",
    body:
      "Merci pour les documents. J'ai préparé une réponse formelle à Jaime incluant le contrat et la confirmation d'abonnement comme preuve. Je l'enverrai dans l'heure, sauf si vous souhaitez relire le brouillon avant.",
  },
  {
    side: "user",
    author: "Gilles SI",
    date: "1 avr. 10:10",
    body: "Envoyez directement, c'est bon.",
  },
];

type LogDirection = "in" | "out" | "planned";
type LogStatus = "Planifiée" | "Reçue" | "Envoyée";

type LogRow = {
  id: string;
  direction: LogDirection;
  date: string;
  subject: string;
  status: LogStatus;
};

const log: LogRow[] = [
  {
    id: "13",
    direction: "planned",
    date: "25/03/2026 09:00",
    subject:
      "Rappel formel avec mise en demeure — Dernier avis avant contentieux",
    status: "Planifiée",
  },
  {
    id: "0",
    direction: "in",
    date: "18/03/2026 10:42",
    subject: "Re: Rappel de paiement — FA00148823 — Contestation formelle",
    status: "Reçue",
  },
  {
    id: "3",
    direction: "out",
    date: "17/03/2026 09:00",
    subject: "Rappel de paiement — FA00148823 — Montant impayé de 16 200 €",
    status: "Envoyée",
  },
  {
    id: "12",
    direction: "in",
    date: "11/03/2026 15:30",
    subject: "Re: Rappel urgent — FA00148823 — Contestation de la dette",
    status: "Reçue",
  },
  {
    id: "11",
    direction: "out",
    date: "10/03/2026 09:00",
    subject: "Rappel urgent — FA00148823 — Mise en demeure sous 10 jours",
    status: "Envoyée",
  },
  {
    id: "10",
    direction: "out",
    date: "01/03/2026 09:00",
    subject:
      "Re: Suivi de votre dossier — Factures 2066639, 2105835 et SIB-SAS-ENT-5086",
    status: "Envoyée",
  },
];

const directionGlyph: Record<LogDirection, string> = {
  in: "↓",
  out: "↑",
  planned: "⏱",
};

const directionAccent: Record<LogDirection, "success" | "info" | "warning"> = {
  in: "success",
  out: "info",
  planned: "warning",
};

const statusVariant: Record<LogStatus, "warning" | "success" | "info"> = {
  Planifiée: "warning",
  Reçue: "success",
  Envoyée: "info",
};

/* Canonical company-logo tile — matches `Sidebar` story in the DS. */
const logoTile = css({
  width: "2rem",
  height: "2rem",
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

/* ---------- shell — mirrors Templates/Tasks Shell ---------- */

const shellPage = css({
  display: "flex",
  height: "100vh",
  bg: "bg.subtle",
  fontFamily: "body",
  color: "text.primary",
  fontSize: "body",
  overflow: "hidden",
});

const shellRail = css({
  flexShrink: 0,
  bg: "bg.subtle",
});

const shellMain = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  padding: "xl",
  paddingLeft: "md",
  minWidth: 0,
});

const shellCard = css({
  flex: 1,
  display: "flex",
  borderRadius: "md",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "border.default",
  bg: "bg.default",
  overflow: "hidden",
  minHeight: 0,
});

const listPanel = css({
  width: "17.5rem",
  flexShrink: 0,
  borderRightWidth: "1px",
  borderRightStyle: "solid",
  borderColor: "border.default",
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
});

const detailPanel = css({
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
});

const contextPanel = css({
  width: "18.75rem",
  flexShrink: 0,
  borderLeftWidth: "1px",
  borderLeftStyle: "solid",
  borderColor: "border.default",
  bg: "bg.subtle",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
});

const hrBottom = css({
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderColor: "border.default",
});

const hrTop = css({
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderColor: "border.default",
});

/* ---------- content blocks (token-based paddings) ---------- */

const listSearchBlock = css({
  paddingTop: "md",
  paddingBottom: "md",
  paddingX: "xl",
  display: "flex",
  flexDirection: "column",
  gap: "md",
});

const listScroll = css({
  flex: 1,
  overflowY: "auto",
  paddingX: "xl",
});

const detailSummaryBlock = css({
  paddingTop: "xl",
  paddingX: "2xl",
  flexShrink: 0,
});

const detailTabsWrap = css({
  paddingX: "2xl",
  flexShrink: 0,
});

const detailDiscussionBlock = css({
  flex: 1,
  overflowY: "auto",
  paddingX: "2xl",
  paddingY: "xl",
  display: "flex",
  flexDirection: "column",
  gap: "xl",
});

const detailComposerBlock = css({
  paddingY: "lg",
  paddingX: "2xl",
  flexShrink: 0,
});

const contextBlock = css({
  padding: "xl",
  display: "flex",
  flexDirection: "column",
  gap: "2xl",
});

const section = css({
  display: "flex",
  flexDirection: "column",
  gap: "lg",
});

/* ---------- typography helpers (DS tokens) ---------- */

const textMeta = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  color: "text.tertiary",
  marginBottom: "md",
});

const textDescription = css({
  fontSize: "body",
  lineHeight: "headline.sm",
  color: "text.primary",
  margin: 0,
  marginBottom: "xl",
});

const textListMetaDate = css({
  fontSize: "caption",
  lineHeight: "caption",
  color: "text.tertiary",
});

const textListMetaAmount = css({
  fontSize: "caption",
  lineHeight: "caption",
  fontWeight: "medium",
});

const accountName = css({
  fontSize: "headline.sm",
  lineHeight: "headline.sm",
  fontWeight: "medium",
  color: "text.primary",
});

const accountActionRow = css({
  marginTop: "xs",
});

const suiviLabel = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  fontWeight: "medium",
});

const suiviCard = css({
  padding: "lg",
});

const suiviStatusRow = css({
  display: "flex",
  alignItems: "center",
  gap: "md",
});

const suiviSub = css({
  marginTop: "sm",
  marginLeft: "xl",
});

const suiviActionsRow = css({
  marginTop: "lg",
  paddingTop: "lg",
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderColor: "border.subtle",
});

const suiviSecondaryRow = css({
  textAlign: "center",
  marginTop: "md",
});

const attachmentGroupSpacing = css({ marginTop: "md" });

/* ---------- comms tab — table column layout (mirrors Comms View) ---------- */

const detailCommsBlock = css({
  flex: 1,
  overflowY: "auto",
  paddingX: "2xl",
  paddingY: "xl",
});

const col = {
  channel: { width: 30, paddingRight: 4 },
  direction: { width: 26, paddingRight: 10 },
  date: { width: 140, paddingRight: 10 },
  subject: { flex: 1, paddingRight: 10 },
  status: { width: 90, textAlign: "right" as const },
};

const cellChannel = css({ display: "inline-flex", color: "text.tertiary" });
const cellDirectionBase = css({
  display: "inline-flex",
  fontSize: "body.sm",
  fontWeight: "semibold",
});
const cellDirectionColor: Record<LogDirection, string> = {
  in: css({ color: "status.success" }),
  out: css({ color: "status.info" }),
  planned: css({ color: "status.warning" }),
};
const cellDate = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  color: "text.secondary",
});

function TaskViewInner({ activeTab }: { activeTab: TaskTab }) {
  const [message, setMessage] = useState("");
  const sort: { col: "date" | "subject" | "status"; dir: TableSortDirection } = {
    col: "date",
    dir: "desc",
  };
  const openEditContactModal = () => {};

  return (
      <div className={shellPage}>
        {/* 48px icon rail — Sidebar is transparent, wrapper owns the bg */}
        <div className={shellRail}>
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
        <div className={shellMain}>
        <div className={shellCard}>
          {/* =================== LEFT PANEL =================== */}
          <section className={listPanel}>
            <div className={hrBottom}>
              <PanelHeader variant="card">
                <PanelHeader.Title>Tâches</PanelHeader.Title>
                <Badge variant="count" shape="square">30</Badge>
              </PanelHeader>
            </div>

            <div className={listSearchBlock}>
              <Input size="small" placeholder="Rechercher…" />
              <ChipGroup>
                <Chip variant="filter" active>
                  Action requise
                </Chip>
                <Chip variant="filter">En attente</Chip>
                <Chip variant="filter">Tout</Chip>
              </ChipGroup>
            </div>

            <div className={listScroll}>
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
                      <span className={textListMetaAmount}>{t.amount}</span>
                      <span className={textListMetaDate}>{t.date}</span>
                    </div>
                  }
                />
              ))}
            </div>

            <div className={hrTop}>
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
          <section className={detailPanel}>
            {/* Header */}
            <div className={hrBottom}>
              <PanelHeader variant="page">
                <PanelHeader.Title>Examiner le refus de Jaime</PanelHeader.Title>
                <Badge variant="error" shape="pill">Action requise</Badge>
                <PanelHeader.Spacer />
                <Button variant="ghost" size="small" leftIcon={<X size={14} />}>
                  Annuler la tâche
                </Button>
              </PanelHeader>
            </div>

            {/* Fixed task summary */}
            <div className={detailSummaryBlock}>
              <div className={textMeta}>
                DOSFARMASHOP ONLINE S.L. · Amelia Miller · il y a 2h
              </div>
              <p className={textDescription}>
                Jaime Sánchez (<Link href="#">jaime.sanchez@atida.com</Link>) a répondu au ticket #4190686, contestant la dette de 16 200 € pour les factures 2066639, 2105835 et SIB-SAS-ENT-5086 et demandant une preuve d'abonnement BREVO. Pourriez-vous vérifier nos dossiers pour DOSFARMASHOP ONLINE S.L. et fournir les contrats, confirmations d'abonnement ou documentation d'annulation liés à BREVO ? Dès réception, je préparerai une réponse formelle à Jaime Sánchez.
              </p>
            </div>

            {/* Tab bar — border spans the content column */}
            <div className={detailTabsWrap}>
              <Tabs>
                <TabItem active={activeTab === "echanges"}>
                  Échanges avec votre agent
                </TabItem>
                <TabItem active={activeTab === "comms"}>Communications</TabItem>
              </Tabs>
            </div>

            {activeTab === "echanges" ? (
              /* Discussion bubbles */
              <div className={detailDiscussionBlock}>
                {discussion.map((m, i) => (
                  <BubbleGroup key={i} side={m.side} author={m.author} date={m.date}>
                    <Bubble>
                      {m.body}
                      {m.attachments && (
                        <BubbleAttachmentGroup className={attachmentGroupSpacing}>
                          {m.attachments.map((a) => (
                            <BubbleAttachment key={a.name} name={a.name} href={a.href} />
                          ))}
                        </BubbleAttachmentGroup>
                      )}
                    </Bubble>
                  </BubbleGroup>
                ))}
              </div>
            ) : (
              /* Comm log table */
              <div className={detailCommsBlock}>
                <Table
                  density="compact"
                  header={
                    <>
                      <span style={col.channel} />
                      <span style={col.direction} />
                      <span style={col.date}>
                        <TableSortHeader
                          active={sort.col === "date"}
                          direction={sort.col === "date" ? sort.dir : "desc"}
                        >
                          Date
                        </TableSortHeader>
                      </span>
                      <span style={col.subject}>
                        <TableSortHeader
                          active={sort.col === "subject"}
                          direction={sort.col === "subject" ? sort.dir : "desc"}
                        >
                          Objet
                        </TableSortHeader>
                      </span>
                      <span style={col.status}>
                        <TableSortHeader
                          active={sort.col === "status"}
                          direction={sort.col === "status" ? sort.dir : "desc"}
                        >
                          Statut
                        </TableSortHeader>
                      </span>
                    </>
                  }
                >
                  {log.map((row) => (
                    <TableRow key={row.id} accent={directionAccent[row.direction]}>
                      <span style={col.channel} className={cellChannel}>
                        <Mail size={14} />
                      </span>
                      <span
                        style={col.direction}
                        className={`${cellDirectionBase} ${cellDirectionColor[row.direction]}`}
                      >
                        {directionGlyph[row.direction]}
                      </span>
                      <span style={col.date} className={cellDate}>
                        {row.date}
                      </span>
                      <span style={col.subject}>{row.subject}</span>
                      <span style={col.status}>
                        <Badge variant={statusVariant[row.status]}>
                          {row.status}
                        </Badge>
                      </span>
                    </TableRow>
                  ))}
                </Table>
              </div>
            )}

            {/* Composer */}
            <div className={detailComposerBlock}>
              <MessageComposer
                value={message}
                onChange={setMessage}
                placeholder="Écrire un message…"
                onSend={() => setMessage("")}
              />
            </div>
          </section>

          {/* =================== RIGHT PANEL =================== */}
          <aside className={contextPanel}>
            <div className={contextBlock}>

            {/* Account header — block with margin-bottom, NOT a fixed-height PanelHeader */}
            <div>
              <div className={accountName}>DOSFARMASHOP ONLINE S.L.</div>
              <div className={accountActionRow}>
                <Link href="#" size="sm" rightIcon={<ExternalLink size={12} />}>
                  Voir le compte client
                </Link>
              </div>
            </div>

            {/* Encours */}
            <div className={section}>
              <SectionTitle>Encours</SectionTitle>
              <AgedBalance
                total="16 200 €"
                buckets={[
                  { tone: "warning", label: "30-60j", value: 20 },
                  { tone: "danger", label: "60-90j", value: 80 },
                ]}
              />
            </div>

            {/* Suivi */}
            <div className={section}>
              <SectionTitle>Suivi</SectionTitle>
              <Card className={suiviCard}>
                <div className={suiviStatusRow}>
                  <StatusDot tone="success" />
                  <span className={suiviLabel}>Confié à l'agent</span>
                </div>
                <div className={suiviSub}>
                  <Badge variant="success" shape="pill">Relances en cours</Badge>
                </div>
                <div className={suiviActionsRow}>
                  <Button variant="secondary" size="small" fullWidth>
                    Suspendre les relances
                  </Button>
                </div>
                <div className={suiviSecondaryRow}>
                  <Link href="#" variant="tertiary" size="sm">
                    Reprendre en interne
                  </Link>
                </div>
              </Card>
            </div>

            {/* Contacts */}
            <div className={section}>
              <SectionTitle>Contacts</SectionTitle>
              <ContactCard
                name="Jaime Sánchez"
                email="jaime.sanchez@atida.com"
                language="ES"
                onClick={openEditContactModal}
              />
            </div>

            {/* Facturation */}
            <div className={section}>
              <SectionTitle>Facturation</SectionTitle>
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
          </aside>
        </div>
        </div>
      </div>
  );
}
