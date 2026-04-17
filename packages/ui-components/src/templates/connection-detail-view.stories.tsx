import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import { CheckCircle2, Mail, Users } from "lucide-react";
import { Badge } from "../components/badge";
import { Banner } from "../components/banner";
import { Button } from "../components/button";
import { NavItem } from "../components/nav-item";
import { PageHeader } from "../components/page-header";
import { SectionHeader } from "../components/section-header";
import { SettingsRow } from "../components/settings-row";
import { Sidebar } from "../components/sidebar";
import { StatCard, StatCardGroup } from "../components/stat-card";
import { OAuthPermissionsPanel } from "./_permissions";
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
              <Banner
                variant="error"
                action={
                  <Button variant="primary" size="small">
                    Reconnecter
                  </Button>
                }
              >
                La dernière synchronisation a échoué. L'accès accordé à
                Billabex a peut-être expiré — reconnectez-vous à {name} pour
                rétablir la synchronisation.
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
            <OAuthPermissionsPanel />

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
