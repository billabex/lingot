import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import { CheckCircle2, Mail, Pause, Users } from "lucide-react";
import { Badge } from "../components/badge";
import { BulkActionBar } from "../components/bulk-action-bar";
import { Button } from "../components/button";
import { Checkbox } from "../components/checkbox";
import { Chip, ChipGroup } from "../components/chip";
import { Input } from "../components/input";
import { NavItem } from "../components/nav-item";
import { PanelHeader } from "../components/panel-header";
import { Sidebar } from "../components/sidebar";
import { Table } from "../components/table/table";
import { TableRow } from "../components/table/table-row";
import {
  TableSortHeader,
  type TableSortDirection,
} from "../components/table/table-sort-header";
import { TablePagination } from "../components/table-pagination";

function AccountsViewTemplate({
  selectedIds = [],
}: {
  selectedIds?: string[];
}) {
  return <AccountsViewInner selectedIds={selectedIds} />;
}

const meta = {
  title: "Templates/Accounts View",
  component: AccountsViewTemplate,
  parameters: { layout: "fullscreen" },
  tags: [],
} satisfies Meta<typeof AccountsViewTemplate>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Bulk selection — 3 rows checked, surfacing the select-all banner. */
export const WithSelection: Story = {
  args: { selectedIds: ["dosfarmashop", "yoojo", "emiroglio"] },
};

/* ---------- data ---------- */

type FollowUp =
  | { label: "Relances en cours"; variant: "success" }
  | { label: "Relances suspendues"; variant: "warning" }
  | { label: "Aucune intervention"; variant: "neutral" };

type Source =
  | { label: "Pennylane"; variant: "neutral" }
  | { label: "Aucune"; variant: "count" };

type Account = {
  id: string;
  name: string;
  outstanding: string;
  followUp: FollowUp;
  source: Source;
};

const accounts: Account[] = [
  {
    id: "dosfarmashop",
    name: "DOSFARMASHOP ONLINE S.L.",
    outstanding: "16 200 €",
    followUp: { label: "Relances en cours", variant: "success" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "yoojo",
    name: "Yoojo",
    outstanding: "8 200 €",
    followUp: { label: "Relances en cours", variant: "success" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "markets-mojo",
    name: "Markets Mojo Pvt Ltd",
    outstanding: "4 100 €",
    followUp: { label: "Aucune intervention", variant: "neutral" },
    source: { label: "Aucune", variant: "count" },
  },
  {
    id: "emiroglio",
    name: "E.Miroglio EAD",
    outstanding: "12 800 €",
    followUp: { label: "Relances en cours", variant: "success" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "revive-ads",
    name: "Revive Ads",
    outstanding: "6 750 €",
    followUp: { label: "Relances en cours", variant: "success" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "techflow",
    name: "TechFlow SaaS",
    outstanding: "9 400 €",
    followUp: { label: "Relances suspendues", variant: "warning" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "greenleaf",
    name: "GreenLeaf Bio",
    outstanding: "2 100 €",
    followUp: { label: "Relances en cours", variant: "success" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "adventure-camp",
    name: "Adventure Camp",
    outstanding: "3 500 €",
    followUp: { label: "Aucune intervention", variant: "neutral" },
    source: { label: "Aucune", variant: "count" },
  },
  {
    id: "nexus",
    name: "Nexus Digital GmbH",
    outstanding: "3 200 €",
    followUp: { label: "Relances en cours", variant: "success" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "solaris",
    name: "Solaris Energy Ltd",
    outstanding: "7 600 €",
    followUp: { label: "Relances en cours", variant: "success" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "brightpath",
    name: "BrightPath Consulting",
    outstanding: "5 300 €",
    followUp: { label: "Relances suspendues", variant: "warning" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "cloudsync",
    name: "CloudSync IO",
    outstanding: "1 800 €",
    followUp: { label: "Relances en cours", variant: "success" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "pharma-direct",
    name: "Pharma Direct SA",
    outstanding: "14 500 €",
    followUp: { label: "Relances en cours", variant: "success" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "logitrans",
    name: "LogiTrans Iberia",
    outstanding: "5 800 €",
    followUp: { label: "Relances en cours", variant: "success" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "datavault",
    name: "DataVault Inc",
    outstanding: "9 300 €",
    followUp: { label: "Aucune intervention", variant: "neutral" },
    source: { label: "Aucune", variant: "count" },
  },
  {
    id: "aquapure",
    name: "AquaPure Systems",
    outstanding: "22 100 €",
    followUp: { label: "Relances en cours", variant: "success" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "helios",
    name: "Helios Ventures",
    outstanding: "4 700 €",
    followUp: { label: "Relances en cours", variant: "success" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "meditech",
    name: "MediTech Solutions",
    outstanding: "31 400 €",
    followUp: { label: "Relances suspendues", variant: "warning" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "nordic-freight",
    name: "Nordic Freight AB",
    outstanding: "18 900 €",
    followUp: { label: "Relances en cours", variant: "success" },
    source: { label: "Pennylane", variant: "neutral" },
  },
  {
    id: "eurosteel",
    name: "EuroSteel Srl",
    outstanding: "27 600 €",
    followUp: { label: "Relances en cours", variant: "success" },
    source: { label: "Pennylane", variant: "neutral" },
  },
];

const TOTAL_ACCOUNTS = 60;

/* ---------- shell — mirrors Templates/Accounts Shell ---------- */

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

const fullPanel = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
});

const hrBottom = css({
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderColor: "border.default",
});

const controlsBlock = css({
  paddingX: "2xl",
  paddingY: "lg",
  display: "flex",
  alignItems: "center",
  gap: "md",
});

const controlsSpacer = css({ flex: 1 });

const searchField = css({ width: "17.5rem", flexShrink: 0 });

const tableScroll = css({
  flex: 1,
  overflowY: "auto",
});

/* ---------- select-all banner — terracotta tint per prototype ---------- */

const selectAllBanner = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "sm",
  paddingX: "padding.page",
  paddingY: "md",
  bg: "terracotta.300",
  color: "terracotta.500",
  fontSize: "caption",
  lineHeight: "caption",
  fontWeight: "regular",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderColor: "border.subtle",
});

const selectAllLink = css({
  color: "terracotta.400",
  fontWeight: "medium",
  textDecoration: "underline",
  textUnderlineOffset: "2px",
  cursor: "pointer",
  _hover: { color: "terracotta.500" },
});

/* ---------- table column layout ---------- */

const col = {
  select: {
    width: 36,
    paddingRight: 8,
    display: "flex" as const,
    alignItems: "center" as const,
  },
  name: { flex: 1, paddingRight: 16 },
  outstanding: { width: 120, paddingRight: 16, textAlign: "right" as const },
  followUp: { width: 180, paddingRight: 16 },
  source: { width: 120 },
};

const cellName = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  fontWeight: "medium",
  color: "text.primary",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const cellOutstanding = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  fontWeight: "medium",
  color: "text.primary",
});

function AccountsViewInner({ selectedIds }: { selectedIds: string[] }) {
  const selected = new Set(selectedIds);
  const sort: { col: "name" | "outstanding" | "followUp" | "source"; dir: TableSortDirection } = {
    col: "name",
    dir: "asc",
  };
  const allChecked =
    selectedIds.length > 0 && selectedIds.length === accounts.length;

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
          <section className={fullPanel}>
            {/* Header — title + count. No border: title and controls share
               the same visual block per prototype. */}
            <PanelHeader variant="page">
              <PanelHeader.Title>Comptes clients</PanelHeader.Title>
              <Badge variant="count" shape="square">
                {TOTAL_ACCOUNTS}
              </Badge>
            </PanelHeader>

            {/* Controls row — search + filters + pause-all */}
            <div className={`${controlsBlock} ${hrBottom}`}>
              <span className={searchField}>
                <Input
                  size="small"
                  placeholder="Rechercher un compte client…"
                />
              </span>
              <ChipGroup>
                <Chip variant="filter" active>
                  Confiés à l'agent
                </Chip>
                <Chip variant="filter">Suivis en interne</Chip>
              </ChipGroup>
              <span className={controlsSpacer} />
              <Button
                variant="secondary"
                size="small"
                leftIcon={<Pause size={14} />}
              >
                Suspendre toutes les relances
              </Button>
            </div>

            {/* Select-all banner — visible when rows are selected. Terracotta
               tint per prototype — uses a plain styled anchor (not the DS Link)
               so the banner's color palette stays self-contained. */}
            {selected.size > 0 && (
              <div className={selectAllBanner}>
                <span>{selected.size} comptes clients sélectionnés.</span>
                <a href="#" className={selectAllLink}>
                  Sélectionner les {TOTAL_ACCOUNTS} comptes confiés à l'agent
                </a>
              </div>
            )}

            {/* Table */}
            <div className={tableScroll}>
              <Table
                density="normal"
                header={
                  <>
                    <span style={col.select}>
                      <Checkbox
                        checked={allChecked}
                        onChange={() => {}}
                        aria-label="Tout sélectionner"
                      />
                    </span>
                    <span style={col.name}>
                      <TableSortHeader
                        active={sort.col === "name"}
                        direction={sort.col === "name" ? sort.dir : "asc"}
                      >
                        Nom
                      </TableSortHeader>
                    </span>
                    <span style={col.outstanding}>
                      <TableSortHeader
                        active={sort.col === "outstanding"}
                        direction={
                          sort.col === "outstanding" ? sort.dir : "desc"
                        }
                      >
                        Encours
                      </TableSortHeader>
                    </span>
                    <span style={col.followUp}>
                      <TableSortHeader
                        active={sort.col === "followUp"}
                        direction={sort.col === "followUp" ? sort.dir : "asc"}
                      >
                        Suivi de l'agent
                      </TableSortHeader>
                    </span>
                    <span style={col.source}>
                      <TableSortHeader
                        active={sort.col === "source"}
                        direction={sort.col === "source" ? sort.dir : "asc"}
                      >
                        Source
                      </TableSortHeader>
                    </span>
                  </>
                }
              >
                {accounts.map((account) => {
                  const isSelected = selected.has(account.id);
                  return (
                    <TableRow key={account.id} selected={isSelected}>
                      <span style={col.select}>
                        <Checkbox
                          checked={isSelected}
                          onChange={() => {}}
                          aria-label={`Sélectionner ${account.name}`}
                        />
                      </span>
                      <span style={col.name} className={cellName}>
                        {account.name}
                      </span>
                      <span style={col.outstanding} className={cellOutstanding}>
                        {account.outstanding}
                      </span>
                      <span style={col.followUp}>
                        <Badge
                          variant={account.followUp.variant}
                          shape="pill"
                        >
                          {account.followUp.label}
                        </Badge>
                      </span>
                      <span style={col.source}>
                        <Badge
                          variant={account.source.variant}
                          shape="square"
                          size="xs"
                        >
                          {account.source.label}
                        </Badge>
                      </span>
                    </TableRow>
                  );
                })}
              </Table>
            </div>

            {/* Bulk action bar — surfaces when rows are selected */}
            {selected.size > 0 && (
              <BulkActionBar
                count={`${selected.size} sélectionnés`}
                closeLabel="Effacer la sélection"
                onClose={() => {}}
              >
                <BulkActionBar.Action>Reprendre en interne</BulkActionBar.Action>
              </BulkActionBar>
            )}

            {/* Pagination — always visible, sticks to the bottom */}
            <TablePagination
              page={1}
              total={accounts.length}
              pageSize={25}
              onChange={() => {}}
              formatLabel={(s, e, t) => `${s}–${e} sur ${t} comptes clients`}
              prevLabel="Page précédente"
              nextLabel="Page suivante"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
