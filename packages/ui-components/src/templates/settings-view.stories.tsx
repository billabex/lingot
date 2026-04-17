import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import { CheckCircle2, Mail, Trash2, Users, X } from "lucide-react";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { FormField } from "../components/form-field";
import { IconButton } from "../components/icon-button";
import { Input } from "../components/input";
import { Modal } from "../components/modal";
import { NavItem } from "../components/nav-item";
import { PageHeader } from "../components/page-header";
import { SectionHeader } from "../components/section-header";
import { SelectMenu } from "../components/select-menu";
import { SettingsRow } from "../components/settings-row";
import { Sidebar } from "../components/sidebar";
import { TabItem, Tabs } from "../components/tab-item";
import { Table } from "../components/table/table";
import { TableRow } from "../components/table/table-row";
import { TableSortHeader } from "../components/table/table-sort-header";
import { Toggle } from "../components/toggle";
import { logoTile, shellDoc, shellDocInner, shellMain, shellPage, shellRail } from "./_shell";

type SettingsTab = "preferences" | "profile" | "members" | "connections";

const meta = {
  title: "Templates/Settings View",
  component: SettingsViewTemplate,
  parameters: { layout: "fullscreen" },
  tags: [],
  args: { activeTab: "preferences" satisfies SettingsTab },
} satisfies Meta<typeof SettingsViewTemplate>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Preferences: Story = {};
export const Profile: Story = { args: { activeTab: "profile" } };
export const Members: Story = { args: { activeTab: "members" } };
export const MembersInviteModalOpen: Story = {
  args: { activeTab: "members", inviteModalOpen: true },
};
export const Connections: Story = { args: { activeTab: "connections" } };

/* ---------- shell — mirrors other account templates ---------- */

const tabsWrap = css({ marginTop: "sm" });

const rowStack = css({ display: "flex", flexDirection: "column" });

const tableCol = {
  name: { flex: 1, paddingRight: 16 },
  status: { width: "10rem", paddingRight: 16 },
  created: { width: "10rem", paddingRight: 16 },
  actions: { width: "auto", whiteSpace: "nowrap" as const, textAlign: "right" as const },
};

const memberCol = {
  email: { flex: 1, paddingRight: 16 },
  actions: { width: "3rem", textAlign: "right" as const },
};

const tableCellMuted = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  color: "text.secondary",
});

const modalBackdrop = css({
  position: "fixed",
  inset: 0,
  bg: "rgba(15, 15, 15, 0.48)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100,
});

const modalBody = css({
  display: "flex",
  flexDirection: "column",
  gap: "md",
});

const modalDescription = css({
  margin: 0,
  fontSize: "body.sm",
  lineHeight: "body.sm",
  color: "text.secondary",
});

const tableCellPrimary = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  fontWeight: "medium",
  color: "text.primary",
});

interface SettingsViewTemplateProps {
  activeTab?: SettingsTab;
  inviteModalOpen?: boolean;
}

function SettingsViewTemplate({
  activeTab = "preferences",
  inviteModalOpen = false,
}: SettingsViewTemplateProps) {
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
            <PageHeader title="Paramètres" />

            <div className={tabsWrap}>
              <Tabs aria-label="Sections des paramètres">
                <TabItem active={activeTab === "preferences"}>
                  Préférences
                </TabItem>
                <TabItem active={activeTab === "profile"}>Profil</TabItem>
                <TabItem active={activeTab === "members"}>Membres</TabItem>
                <TabItem active={activeTab === "connections"}>Connexions</TabItem>
              </Tabs>
            </div>

            {activeTab === "preferences" && <PreferencesPanel />}
            {activeTab === "profile" && <ProfilePanel />}
            {activeTab === "members" && (
              <MembersPanel inviteModalOpen={inviteModalOpen} />
            )}
            {activeTab === "connections" && <ConnectionsPanel />}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Préférences tab ---------- */

function PreferencesPanel() {
  const [autoAssignNewAccounts, setAutoAssignNewAccounts] = useState(true);

  return (
    <>
      <SectionHeader
        title="Général"
        description="Ces informations seront utilisées dans les communications avec vos clients et pour identifier les membres de votre équipe."
      />
      <div className={rowStack}>
        <SettingsRow
          label="Nom de l'organisation"
          value="WE ARE BOLD"
          trailing={
            <Button variant="secondary" size="small">
              Modifier
            </Button>
          }
        />
        <SettingsRow
          label="Domaine email de l'organisation"
          value="wearebold.co"
          trailing={
            <Button variant="secondary" size="small">
              Modifier
            </Button>
          }
        />
      </div>

      <SectionHeader
        title="Gestion avancées des relances"
        description="Définissez le comportement par défaut de l'agent à la création d'un compte et le délai supplémentaire avant la première relance."
      />
      <div className={rowStack}>
        <SettingsRow
          label="Confier les nouveaux comptes à l'agent"
          description="Quand activée, l'agent planifie automatiquement des relances pour chaque nouveau compte créé. Sinon, le compte reste en gestion interne tant qu'il n'est pas confié manuellement à l'agent."
          trailing={
            <Toggle
              checked={autoAssignNewAccounts}
              onToggle={setAutoAssignNewAccounts}
              aria-label="Confier les nouveaux comptes à l'agent par défaut"
            />
          }
        />
        <SettingsRow
          label="Délai supplémentaire après la date d'échéance"
          description="Décalez la première relance envoyée par l'agent. Si aucun délai n'est défini, l'agent appliquera ses règles de relance, par défaut."
          value="30 jours"
          trailing={
            <Button variant="secondary" size="small">
              Modifier
            </Button>
          }
        />
      </div>
    </>
  );
}

/* ---------- Profil tab ---------- */

const languageOptions = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
];

function ProfilePanel() {
  return (
    <div className={rowStack}>
      <SettingsRow
        label="Nom"
        description="Mettre à jour votre prénom et nom."
        value="Claire Jourdan"
        trailing={
          <Button variant="secondary" size="small">
            Modifier
          </Button>
        }
      />
      <SettingsRow
        label="Mot de passe"
        description="Mettre à jour votre mot de passe."
        trailing={
          <Button variant="secondary" size="small">
            Modifier
          </Button>
        }
      />
      <SettingsRow
        label="Langue"
        description="Changer la langue utilisée dans l'application."
        trailing={<SelectMenu options={languageOptions} defaultValue="fr" />}
      />
      <SettingsRow
        label="Cookies"
        description="Gérer vos préférences en matière de cookies et de suivi."
        trailing={
          <Button variant="secondary" size="small">
            Gérer
          </Button>
        }
      />
      <SettingsRow
        label="Supprimer le compte"
        description="Supprimer définitivement votre compte et toutes les données associées. Cette action est irréversible."
        trailing={
          <Button variant="destructive" size="small">
            Supprimer
          </Button>
        }
      />
    </div>
  );
}

/* ---------- Membres tab ---------- */

const members: { email: string; canRemove: boolean }[] = [
  { email: "claire-ext@wearebold.co", canRemove: false },
  { email: "eh@wearebold.co", canRemove: true },
];

function MembersPanel({ inviteModalOpen = false }: { inviteModalOpen?: boolean }) {
  const [isInviteOpen, setIsInviteOpen] = useState(inviteModalOpen);
  const closeInvite = () => setIsInviteOpen(false);

  return (
    <>
      <SectionHeader
        title="Membres"
        trailing={
          <Button
            variant="primary"
            size="small"
            onClick={() => setIsInviteOpen(true)}
          >
            Ajouter un membre
          </Button>
        }
      />
      <Table
        density="normal"
        header={
          <>
            <span style={memberCol.email}>
              <TableSortHeader>Email</TableSortHeader>
            </span>
            <span style={memberCol.actions} aria-hidden="true" />
          </>
        }
      >
        {members.map((member) => (
          <TableRow key={member.email}>
            <span style={memberCol.email} className={tableCellPrimary}>
              {member.email}
            </span>
            <span style={memberCol.actions}>
              {member.canRemove && (
                <IconButton
                  size="small"
                  aria-label={`Retirer ${member.email}`}
                  icon={<Trash2 size={14} />}
                />
              )}
            </span>
          </TableRow>
        ))}
      </Table>

      {isInviteOpen && (
        <div className={modalBackdrop}>
          <Modal
            title="Inviter un membre"
            closeButton={
              <IconButton
                size="small"
                aria-label="Fermer"
                icon={<X size={16} />}
                onClick={closeInvite}
              />
            }
            onClose={closeInvite}
            footer={<Button variant="primary">Envoyer l'invitation</Button>}
          >
            <div className={modalBody}>
              <p className={modalDescription}>
                Le membre recevra un e-mail l'invitant à créer un compte. Il
                rejoindra automatiquement votre organisation une fois
                l'inscription finalisée.
              </p>
              <FormField label="Email">
                <Input type="email" placeholder="membre@exemple.com" />
              </FormField>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}

/* ---------- Connexions tab ---------- */

type ConnectionStatus = "active" | "error" | "incomplete";

const connections: {
  id: string;
  name: string;
  created: string;
  status: ConnectionStatus;
}[] = [
  { id: "pennylane", name: "Pennylane", created: "16/03/2026 15:25", status: "active" },
  { id: "zoho", name: "Zoho Books", created: "14/04/2026 09:42", status: "error" },
  { id: "draft", name: "Pennylane", created: "17/04/2026 11:08", status: "incomplete" },
];

const rowActionsCell = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "sm",
});

function statusBadge(status: ConnectionStatus) {
  if (status === "active") return <Badge variant="success">Active</Badge>;
  if (status === "error") return <Badge variant="error">Erreur</Badge>;
  return <Badge variant="warning">Incomplète</Badge>;
}

function ConnectionsPanel() {
  return (
    <>
      <SectionHeader
        title="Connexions"
        trailing={
          <Button variant="primary" size="small">
            Ajouter une connexion
          </Button>
        }
      />
      <Table
        density="normal"
        header={
          <>
            <span style={tableCol.name}>
              <TableSortHeader>Connexion</TableSortHeader>
            </span>
            <span style={tableCol.status}>
              <TableSortHeader>Statut</TableSortHeader>
            </span>
            <span style={tableCol.created}>
              <TableSortHeader>Créée le</TableSortHeader>
            </span>
            <span style={tableCol.actions} aria-hidden="true" />
          </>
        }
      >
        {connections.map((connection) => (
          <TableRow key={connection.id}>
            <span style={tableCol.name} className={tableCellPrimary}>
              {connection.name}
            </span>
            <span style={tableCol.status}>{statusBadge(connection.status)}</span>
            <span style={tableCol.created} className={tableCellMuted}>
              {connection.created}
            </span>
            <span style={tableCol.actions}>
              <span className={rowActionsCell}>
                {connection.status === "incomplete" && (
                  <Button variant="secondary" size="small">
                    Reprendre l'activation
                  </Button>
                )}
                <IconButton
                  size="small"
                  aria-label={`Supprimer ${connection.name}`}
                  icon={<Trash2 size={14} />}
                />
              </span>
            </span>
          </TableRow>
        ))}
      </Table>
    </>
  );
}
