import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import { CheckCircle2, Mail, Users, XCircle } from "lucide-react";
import { Badge } from "../components/badge";
import { Banner } from "../components/banner";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { NavItem } from "../components/nav-item";
import { PageHeader } from "../components/page-header";
import { SectionHeader } from "../components/section-header";
import { SettingsRow } from "../components/settings-row";
import { Sidebar } from "../components/sidebar";
import { StatCard, StatCardGroup } from "../components/stat-card";
import { logoTile, shellDoc, shellDocInner, shellMain, shellPage, shellRail } from "./_shell";

type Connector = "pennylane" | "zoho";
type Status = "active" | "error";

interface ConnectionDetailViewTemplateProps {
  connector?: Connector;
  status?: Status;
}

const meta = {
  title: "Templates/Connection Detail View",
  component: ConnectionDetailViewTemplate,
  parameters: { layout: "fullscreen" },
  tags: [],
  argTypes: {
    connector: { control: "radio", options: ["pennylane", "zoho"] },
    status: { control: "radio", options: ["active", "error"] },
  },
  args: { connector: "pennylane", status: "active" },
} satisfies Meta<typeof ConnectionDetailViewTemplate>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Pennylane, active connection — the default healthy state. */
export const Default: Story = {};

/** Zoho Books, active — adds the datacenter row in Configuration. */
export const ZohoActive: Story = { args: { connector: "zoho", status: "active" } };

/** Sync failure — error banner at top; Statut stat flips to destructive. */
export const SyncError: Story = {
  args: { connector: "pennylane", status: "error" },
};

/* ---------- layout ---------- */

const statGroupWrap = css({ marginBlock: "lg" });

const rowStack = css({ display: "flex", flexDirection: "column" });

const permissionsPanelInner = css({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "xl",
  padding: "xl",
});

const permissionsColumn = css({
  display: "flex",
  flexDirection: "column",
  gap: "sm",
});

const permissionsHeading = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  fontWeight: "semibold",
  color: "text.primary",
  margin: 0,
});

const permissionsList = css({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "xs",
});

const permissionRow = css({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  alignItems: "start",
  columnGap: "xs",
  fontSize: "body.sm",
  lineHeight: "body.sm",
  color: "text.secondary",
});

const permissionIcon = css({
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  height: "1.125rem",
});

const permissionIconAllow = css({ color: "status.success" });
const permissionIconDeny = css({ color: "text.tertiary" });

const ALLOWED = [
  "Synchroniser automatiquement vos factures et avoirs",
  "Importer vos comptes clients et leurs contacts",
  "Collecter les paiements associés aux factures",
];
const DENIED = [
  "Modifier ou créer des factures ou avoirs",
  "Modifier ou créer des comptes ou contacts",
  "Modifier vos informations de paiement",
];

/* ---------- main template ---------- */

const CONNECTOR_NAMES: Record<Connector, string> = {
  pennylane: "Pennylane",
  zoho: "Zoho Books",
};

function ConnectionDetailViewTemplate({
  connector = "pennylane",
  status = "active",
}: ConnectionDetailViewTemplateProps) {
  const name = CONNECTOR_NAMES[connector];
  const statusBadge =
    status === "active" ? (
      <Badge variant="success">Active</Badge>
    ) : (
      <Badge variant="error">Erreur</Badge>
    );

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
          <NavItem variant="icon" aria-label="Comptes clients">
            <Users size={16} />
          </NavItem>
        </Sidebar>
      </div>

      <div className={shellMain}>
        <div className={shellDoc}>
          <div className={shellDocInner}>
            <PageHeader
              breadcrumb={[
                { label: "Paramètres", href: "#" },
                { label: "Connexions", href: "#" },
                { label: name },
              ]}
              title={name}
            />

            {status === "error" && (
              <Banner variant="error">
                <span>
                  La dernière synchronisation a échoué. Vérifiez que l'accès
                  accordé à Billabex est toujours valide depuis votre compte
                  {" "}
                  {name}.
                </span>
              </Banner>
            )}

            <div className={statGroupWrap}>
              <StatCardGroup>
                <StatCard label="Statut">{statusBadge}</StatCard>
                <StatCard label="Connecteur">{name}</StatCard>
                <StatCard label="Créée le">16 mars 2026</StatCard>
              </StatCardGroup>
            </div>

            <SectionHeader
              title="Permissions"
              description="Accès accordé par votre compte à Billabex lors de l'autorisation OAuth."
            />
            <Card>
              <div className={permissionsPanelInner}>
                <div className={permissionsColumn}>
                  <h3 className={permissionsHeading}>Billabex peut :</h3>
                  <ul className={permissionsList}>
                    {ALLOWED.map((text) => (
                      <li key={text} className={permissionRow}>
                        <span
                          className={`${permissionIcon} ${permissionIconAllow}`}
                        >
                          <CheckCircle2 size={14} />
                        </span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={permissionsColumn}>
                  <h3 className={permissionsHeading}>Billabex ne peut pas :</h3>
                  <ul className={permissionsList}>
                    {DENIED.map((text) => (
                      <li key={text} className={permissionRow}>
                        <span
                          className={`${permissionIcon} ${permissionIconDeny}`}
                        >
                          <XCircle size={14} />
                        </span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            <SectionHeader
              title="Configuration"
              description="Le nom est utilisé dans Billabex. L'organisation et le datacenter sont définis à la connexion et ne peuvent pas être modifiés."
            />
            <div className={rowStack}>
              <SettingsRow
                label="Nom"
                value={name}
                trailing={
                  <Button variant="secondary" size="small">
                    Modifier
                  </Button>
                }
              />
              <SettingsRow
                label="Organisation"
                value={
                  connector === "zoho"
                    ? "Billabex (20103580030)"
                    : "Billabex SAS"
                }
              />
              {connector === "zoho" && (
                <SettingsRow label="Datacenter" value="Europe" />
              )}
            </div>

            <SectionHeader title="Zone de danger" />
            <div className={rowStack}>
              <SettingsRow
                label="Supprimer la connexion"
                description="Supprime définitivement la connexion et ses paramètres. Action irréversible."
                trailing={
                  <Button variant="destructive" size="small">
                    Supprimer
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
