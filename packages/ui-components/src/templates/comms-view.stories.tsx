import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import { CheckCircle2, ExternalLink, Mail, Users } from "lucide-react";
import { Badge } from "../components/badge";
import { Input } from "../components/input";
import { Link } from "../components/link";
import { ListItem } from "../components/list-item";
import { ListPagination } from "../components/list-pagination";
import { NavItem } from "../components/nav-item";
import { NotificationBadge } from "../components/notification-badge";
import { PanelHeader } from "../components/panel-header";
import { Sidebar } from "../components/sidebar";
import { Table } from "../components/table/table";
import { TableRow } from "../components/table/table-row";
import {
  TableSortHeader,
  type TableSortDirection,
} from "../components/table/table-sort-header";

function CommsViewTemplate() {
  return <CommsViewInner />;
}

const meta = {
  title: "Templates/Comms View",
  component: CommsViewTemplate,
  parameters: { layout: "fullscreen" },
  tags: [],
} satisfies Meta<typeof CommsViewTemplate>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/* ---------- left-panel data — 11 threads, DOSFARMASHOP selected ---------- */

type ThreadStatus = "Planifiée" | "Reçue" | "Envoyée";
type ThreadBadgeVariant = "warning" | "success" | "info";

const threadStatusVariant: Record<ThreadStatus, ThreadBadgeVariant> = {
  Planifiée: "warning",
  Reçue: "success",
  Envoyée: "info",
};

type Thread = {
  account: string;
  subject: string;
  status: ThreadStatus;
  exchanges: string;
  date: string;
  active?: boolean;
};

const threads: Thread[] = [
  {
    account: "DOSFARMASHOP ONLINE S.L.",
    subject:
      "Rappel formel avec mise en demeure — FA00148823 — Dernier avis avant contentieux",
    status: "Planifiée",
    exchanges: "6 échanges",
    date: "25 mars 09:00",
    active: true,
  },
  {
    account: "Yoojo",
    subject:
      "Re: Rappel de paiement — Facture FA00152190 — Demande de vérification doublon comptable",
    status: "Reçue",
    exchanges: "4 échanges",
    date: "17 mars 14:20",
  },
  {
    account: "Markets Mojo Pvt Ltd",
    subject:
      "Re: Payment reminder — Invoice FA00149877 — Transfer initiated, allow 3-5 business days",
    status: "Reçue",
    exchanges: "2 échanges",
    date: "16 mars 09:15",
  },
  {
    account: "E.Miroglio EAD",
    subject:
      "Urgent: Relance finale avant transmission au service contentieux — FA00147201",
    status: "Planifiée",
    exchanges: "4 échanges",
    date: "19 mars 09:00",
  },
  {
    account: "Revive Ads",
    subject:
      "Relance #4 — Suivi après absence de réponse prolongée — FA00150334",
    status: "Planifiée",
    exchanges: "1 échange",
    date: "20 mars 09:00",
  },
  {
    account: "Nexus Digital GmbH",
    subject: "Zahlungserinnerung — Rechnung FA00153001 — Offener Betrag 3 200 €",
    status: "Planifiée",
    exchanges: "1 échange",
    date: "20 mars 14:00",
  },
  {
    account: "LuxTech Solutions GmbH",
    subject:
      "Rappel de paiement — Facture FA00154210 — Échéance dépassée de 45 jours",
    status: "Envoyée",
    exchanges: "1 échange",
    date: "19 mars 11:00",
  },
  {
    account: "Nordic Freight AB",
    subject:
      "Payment reminder — Invoice FA00155078 — Outstanding balance 18 900 €",
    status: "Envoyée",
    exchanges: "1 échange",
    date: "18 mars 09:00",
  },
  {
    account: "AquaPure Systems",
    subject: "Rappel de paiement — FA00155512",
    status: "Envoyée",
    exchanges: "1 échange",
    date: "17 mars 10:00",
  },
  {
    account: "Helios Ventures",
    subject: "Relance #3 — FA00156001",
    status: "Envoyée",
    exchanges: "1 échange",
    date: "16 mars 14:30",
  },
  {
    account: "EuroSteel Srl",
    subject: "Rappel de paiement — FA00156340",
    status: "Envoyée",
    exchanges: "1 échange",
    date: "15 mars 09:00",
  },
];

/* ---------- right-panel data — DOSFARMASHOP log, 6 rows (newest first) ---------- */

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
      "Rappel formel avec mise en demeure — FA00148823 — Dernier avis avant contentieux",
    status: "Planifiée",
  },
  {
    id: "0",
    direction: "in",
    date: "18/03/2026 10:42",
    subject:
      "Re: Rappel de paiement — Facture FA00148823 — Montant impayé de 16 200 € depuis le 10 janvier 2026",
    status: "Reçue",
  },
  {
    id: "3",
    direction: "out",
    date: "17/03/2026 09:00",
    subject:
      "Rappel de paiement — Facture FA00148823 — Montant impayé de 16 200 € depuis le 10 janvier 2026",
    status: "Envoyée",
  },
  {
    id: "12",
    direction: "in",
    date: "11/03/2026 15:30",
    subject:
      "Re: Rappel urgent — Facture FA00148823 — Contestation de la dette",
    status: "Reçue",
  },
  {
    id: "11",
    direction: "out",
    date: "10/03/2026 09:00",
    subject: "Rappel urgent — Facture FA00148823 — Mise en demeure sous 10 jours",
    status: "Envoyée",
  },
  {
    id: "10",
    direction: "out",
    date: "01/03/2026 09:00",
    subject:
      "Re: Suivi de votre dossier de recouvrement — Factures 2066639, 2105835 et SIB-SAS-ENT-5086",
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

/* ---------- shell — mirrors Templates/Task View ---------- */

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

const detailTableBlock = css({
  flex: 1,
  overflowY: "auto",
});

/* ---------- typography helpers ---------- */

const textListMetaExchanges = css({
  fontSize: "caption",
  lineHeight: "caption",
  fontWeight: "medium",
});

const textListMetaDate = css({
  fontSize: "caption",
  lineHeight: "caption",
  color: "text.tertiary",
});

const metaRow = css({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

/* ---------- table column layout (mirrors Table story) ---------- */

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

function CommsViewInner() {
  const sort: { col: "date" | "subject" | "status"; dir: TableSortDirection } = {
    col: "date",
    dir: "desc",
  };

  return (
    <div className={shellPage}>
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
          <NavItem variant="icon" aria-label="Tâches">
            <CheckCircle2 size={16} />
            <NotificationBadge count={25} />
          </NavItem>
          <NavItem variant="icon" active aria-label="Communications">
            <Mail size={16} />
          </NavItem>
          <NavItem variant="icon" aria-label="Comptes clients">
            <Users size={16} />
          </NavItem>
        </Sidebar>
      </div>

      <div className={shellMain}>
        <div className={shellCard}>
          {/* =================== LEFT PANEL — thread list =================== */}
          <section className={listPanel}>
            <div className={hrBottom}>
              <PanelHeader variant="card">
                <PanelHeader.Title>Communications</PanelHeader.Title>
                <Badge variant="count" shape="square">
                  {threads.length}
                </Badge>
              </PanelHeader>
            </div>

            <div className={listSearchBlock}>
              <Input size="small" placeholder="Rechercher un compte client…" />
            </div>

            <div className={listScroll}>
              {threads.map((t) => (
                <ListItem
                  key={t.account}
                  as="button"
                  active={t.active}
                  title={t.account}
                  titleTrailing={
                    <Badge
                      variant={threadStatusVariant[t.status]}
                      shape="pill"
                    >
                      {t.status}
                    </Badge>
                  }
                  preview={t.subject}
                  meta={
                    <div className={metaRow}>
                      <span className={textListMetaExchanges}>
                        {t.exchanges}
                      </span>
                      <span className={textListMetaDate}>{t.date}</span>
                    </div>
                  }
                />
              ))}
            </div>

            <div className={hrTop}>
              <ListPagination
                total={threads.length}
                pageSize={25}
                page={1}
                onChange={() => {}}
                formatLabel={(s, e, tot) => `${s}–${e} sur ${tot}`}
              />
            </div>
          </section>

          {/* =================== RIGHT PANEL — comm log =================== */}
          <section className={detailPanel}>
            <div className={hrBottom}>
              <PanelHeader variant="page">
                <PanelHeader.Title>DOSFARMASHOP ONLINE S.L.</PanelHeader.Title>
                <PanelHeader.Spacer />
                <Link
                  size="sm"
                  href="#"
                  rightIcon={<ExternalLink size={12} />}
                >
                  Voir le compte client
                </Link>
              </PanelHeader>
            </div>

            <div className={detailTableBlock}>
              <Table
                density="normal"
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
          </section>
        </div>
      </div>
    </div>
  );
}
