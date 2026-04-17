import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import {
  CheckCircle2,
  ChevronRight,
  Mail,
  Pencil,
  Plus,
  Users,
} from "lucide-react";
import { AgedBalance } from "../components/aged-balance";
import { Badge } from "../components/badge";
import { Breadcrumb } from "../components/breadcrumb";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { ContactCard } from "../components/contact-card";
import { IconButton } from "../components/icon-button";
import { InfoRow } from "../components/info-row";
import { Link } from "../components/link";
import { NavItem } from "../components/nav-item";
import { PanelHeader } from "../components/panel-header";
import { SectionTitle } from "../components/section-title";
import { Sidebar } from "../components/sidebar";
import { StatusDot } from "../components/status-dot";
import { Table } from "../components/table/table";
import { TableRow } from "../components/table/table-row";
import {
  TableSortHeader,
  type TableSortDirection,
} from "../components/table/table-sort-header";
import { TablePagination } from "../components/table-pagination";
import { logoTile, shellCard, shellMain, shellPage, shellRail } from "./_shell";

const meta = {
  title: "Templates/Account Detail View",
  component: AccountDetailViewTemplate,
  parameters: { layout: "fullscreen" },
  tags: [],
} satisfies Meta<typeof AccountDetailViewTemplate>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/* ---------- data ---------- */

type DocStatus =
  | { label: "En retard"; variant: "error" }
  | { label: "Émise"; variant: "info" }
  | { label: "Appliqué"; variant: "success" };

type DocType =
  | { label: "Facture"; variant: "neutral" }
  | { label: "Avoir"; variant: "info" };

type DocRow = {
  id: string;
  reference: string;
  amount: string;
  amountTone?: "success";
  status: DocStatus;
  dueDate: string;
  type: DocType;
};

const docs: DocRow[] = [
  {
    id: "inv-2066639",
    reference: "INV-2066639",
    amount: "8 100 €",
    status: { label: "En retard", variant: "error" },
    dueDate: "10/01/2026",
    type: { label: "Facture", variant: "neutral" },
  },
  {
    id: "inv-2105835",
    reference: "INV-2105835",
    amount: "5 200 €",
    status: { label: "Émise", variant: "info" },
    dueDate: "25/01/2026",
    type: { label: "Facture", variant: "neutral" },
  },
  {
    id: "sib-sas-ent-5086",
    reference: "SIB-SAS-ENT-5086",
    amount: "2 900 €",
    status: { label: "En retard", variant: "error" },
    dueDate: "15/02/2026",
    type: { label: "Facture", variant: "neutral" },
  },
  {
    id: "av-2024-001",
    reference: "AV-2024-001",
    amount: "-1 200 €",
    amountTone: "success",
    status: { label: "Appliqué", variant: "success" },
    dueDate: "10/02/2026",
    type: { label: "Avoir", variant: "info" },
  },
];

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

/* ---------- header pieces ---------- */

const headerLinks = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "xl",
});

/* ---------- center panel body ---------- */

const tableScroll = css({
  flex: 1,
  overflowY: "auto",
});

const col = {
  reference: { flex: 1, paddingRight: 16 },
  amount: { width: 140, paddingRight: 16, textAlign: "right" as const },
  status: { width: 120, paddingRight: 16 },
  dueDate: { width: 130, paddingRight: 16 },
  type: { width: 100 },
};

const cellReference = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  fontWeight: "medium",
  color: "text.primary",
});

const cellAmountBase = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  fontWeight: "medium",
  color: "text.primary",
});

const cellAmountCredit = css({ color: "status.success" });

const cellDueDate = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  color: "text.secondary",
});

/* ---------- right sidebar ---------- */

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

const accountName = css({
  fontSize: "headline.sm",
  lineHeight: "headline.sm",
  fontWeight: "medium",
  color: "text.primary",
});

const accountSub = css({
  fontSize: "caption.soft",
  lineHeight: "caption.soft",
  color: "text.tertiary",
  marginTop: "xs",
});

const suiviCard = css({ padding: "lg" });

const suiviStatusRow = css({
  display: "flex",
  alignItems: "center",
  gap: "md",
});

const suiviLabel = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  fontWeight: "medium",
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

function AccountDetailViewTemplate() {
  const sort: {
    col: "reference" | "amount" | "status" | "dueDate" | "type";
    dir: TableSortDirection;
  } = {
    col: "dueDate",
    dir: "asc",
  };
  const openEditContactModal = () => {};

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
          </NavItem>
          <NavItem variant="icon" aria-label="Communications">
            <Mail size={16} />
          </NavItem>
          <NavItem variant="icon" active aria-label="Comptes clients">
            <Users size={16} />
          </NavItem>
        </Sidebar>
      </div>

      <div className={shellMain}>
        <div className={shellCard}>
          {/* =================== CENTER PANEL =================== */}
          <section className={detailPanel}>
            {/* Header — single-row panel header: breadcrumb + trailing quick-links, bordered. */}
            <div className={hrBottom}>
              <PanelHeader variant="page">
                <Breadcrumb
                  items={[
                    { label: "Comptes clients", href: "#" },
                    { label: "DOSFARMASHOP ONLINE S.L." },
                  ]}
                />
                <PanelHeader.Spacer />
                <span className={headerLinks}>
                  <Link
                    href="#"
                    size="sm"
                    rightIcon={<ChevronRight size={14} />}
                  >
                    Voir les tâches
                  </Link>
                  <Link
                    href="#"
                    size="sm"
                    rightIcon={<ChevronRight size={14} />}
                  >
                    Voir les communications
                  </Link>
                </span>
              </PanelHeader>
            </div>

            {/* Invoice / credit-note table */}
            <div className={tableScroll}>
              <Table
                density="normal"
                header={
                  <>
                    <span style={col.reference}>
                      <TableSortHeader
                        active={sort.col === "reference"}
                        direction={
                          sort.col === "reference" ? sort.dir : "asc"
                        }
                      >
                        Numéro
                      </TableSortHeader>
                    </span>
                    <span style={col.amount}>
                      <TableSortHeader
                        active={sort.col === "amount"}
                        direction={sort.col === "amount" ? sort.dir : "desc"}
                      >
                        Solde restant dû
                      </TableSortHeader>
                    </span>
                    <span style={col.status}>
                      <TableSortHeader
                        active={sort.col === "status"}
                        direction={sort.col === "status" ? sort.dir : "asc"}
                      >
                        Statut
                      </TableSortHeader>
                    </span>
                    <span style={col.dueDate}>
                      <TableSortHeader
                        active={sort.col === "dueDate"}
                        direction={sort.col === "dueDate" ? sort.dir : "asc"}
                      >
                        Échéance
                      </TableSortHeader>
                    </span>
                    <span style={col.type}>
                      <TableSortHeader
                        active={sort.col === "type"}
                        direction={sort.col === "type" ? sort.dir : "asc"}
                      >
                        Type
                      </TableSortHeader>
                    </span>
                  </>
                }
              >
                {docs.map((doc) => (
                  <TableRow key={doc.id}>
                    <span style={col.reference} className={cellReference}>
                      {doc.reference}
                    </span>
                    <span
                      style={col.amount}
                      className={
                        doc.amountTone === "success"
                          ? `${cellAmountBase} ${cellAmountCredit}`
                          : cellAmountBase
                      }
                    >
                      {doc.amount}
                    </span>
                    <span style={col.status}>
                      <Badge variant={doc.status.variant} shape="pill">
                        {doc.status.label}
                      </Badge>
                    </span>
                    <span style={col.dueDate} className={cellDueDate}>
                      {doc.dueDate}
                    </span>
                    <span style={col.type}>
                      <Badge
                        variant={doc.type.variant}
                        shape="square"
                        size="xs"
                      >
                        {doc.type.label}
                      </Badge>
                    </span>
                  </TableRow>
                ))}
              </Table>
            </div>

            {/* Pagination — sticks to bottom (owns its own top border) */}
            <TablePagination
              page={1}
              total={docs.length}
              pageSize={25}
              onChange={() => {}}
              formatLabel={(s, e, t) => `${s}–${e} sur ${t} documents`}
              prevLabel="Page précédente"
              nextLabel="Page suivante"
            />
          </section>

          {/* =================== RIGHT PANEL =================== */}
          <aside className={contextPanel}>
            <div className={contextBlock}>
              {/* Account header */}
              <div>
                <div className={accountName}>DOSFARMASHOP ONLINE S.L.</div>
                <div className={accountSub}>Créé le 12 février 2026</div>
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
                    <Badge variant="success" shape="pill">
                      Relances en cours
                    </Badge>
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
                <SectionTitle
                  trailing={
                    <IconButton
                      icon={<Plus size={14} />}
                      aria-label="Ajouter un contact"
                    />
                  }
                >
                  Contacts
                </SectionTitle>
                <ContactCard
                  name="Jaime Sánchez"
                  email="jaime.sanchez@atida.com"
                  language="ES"
                  onClick={openEditContactModal}
                />
              </div>

              {/* Informations */}
              <div className={section}>
                <SectionTitle
                  trailing={
                    <IconButton
                      icon={<Pencil size={14} />}
                      aria-label="Modifier les informations"
                    />
                  }
                >
                  Informations
                </SectionTitle>
                <InfoRow label="Nom" value="DOSFARMASHOP ONLINE S.L." />
                <InfoRow label="Adresse" value="C/ Mayor 12, Madrid" />
                <InfoRow label="Pays" value="Espagne" />
                <InfoRow label="Devise" value="EUR" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
