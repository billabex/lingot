import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import { CheckCircle2, Mail, Users, X } from "lucide-react";
import { Avatar } from "../components/avatar";
import { Banner } from "../components/banner";
import { Breadcrumb } from "../components/breadcrumb";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { FormField } from "../components/form-field";
import { IconButton } from "../components/icon-button";
import { NavItem } from "../components/nav-item";
import { SectionHeader } from "../components/section-header";
import { SelectMenu } from "../components/select-menu";
import { Sidebar } from "../components/sidebar";
import { Spinner } from "../components/spinner";
import { Stepper } from "../components/stepper/stepper";
import { StepperItem, type StepperItemState } from "../components/stepper/stepper-item";
import { Toggle } from "../components/toggle";
import { OAuthPermissionsPanel } from "./_permissions";
import { logoTile, shellMain, shellPage, shellRail } from "./_shell";

type Step = "selection" | "connection" | "configuration" | "syncing";
type Connector = "pennylane" | "zoho";

interface ConnectionCreateViewTemplateProps {
  step?: Step;
  /** Which connector the user has chosen. `null` on the Selection step before a pick. */
  connector?: Connector | null;
  /** Auto-assign toggle state, mirroring the global "Gestion avancée des relances" preference. */
  autoAssign?: boolean;
}

const meta = {
  title: "Templates/Connection Create View",
  component: ConnectionCreateViewTemplate,
  parameters: { layout: "fullscreen" },
  tags: [],
  argTypes: {
    step: {
      control: { type: "radio" },
      options: ["selection", "connection", "configuration", "syncing"],
    },
    connector: {
      control: { type: "radio" },
      options: [null, "pennylane", "zoho"],
    },
    autoAssign: { control: "boolean" },
  },
  args: { autoAssign: true },
} satisfies Meta<typeof ConnectionCreateViewTemplate>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Step 1 — connector picker, none chosen. Primary CTA disabled. */
export const Selection: Story = {
  args: { step: "selection", connector: null },
};

/** Step 1 variant — Zoho Books selected (accent border); Pennylane still pickable. */
export const SelectionZohoSelected: Story = {
  args: { step: "selection", connector: "zoho" },
};

/**
 * Step 2 — Generic OAuth2 permissions panel. Applies to any connector using
 * an OAuth2 authorization workflow; only the connector name is interpolated.
 */
export const Connection: Story = {
  args: { step: "connection", connector: "pennylane" },
};

/**
 * Step 3 variant — Pennylane configuration: no datacenter readout since
 * Pennylane is EU-only. Reuses the Préférences › Gestion avancée des
 * relances section verbatim so the auto-assign decision lives where the
 * sync reads it at activation.
 */
export const ConfigurationPennylane: Story = {
  args: { step: "configuration", connector: "pennylane", autoAssign: true },
};

/**
 * Step 3 variant — Zoho Books configuration: same as Pennylane plus the
 * datacenter readout chosen at Step 1.
 */
export const ConfigurationZoho: Story = {
  args: { step: "configuration", connector: "zoho", autoAssign: true },
};

/** Step 4 — Sync in progress, 5–10min. Soft reminder points back to Préférences. */
export const Syncing: Story = {
  args: { step: "syncing", connector: "pennylane" },
};

/* ---------- layout (mirrors account-create-view wizard idiom) ---------- */

const wizardCard = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  borderRadius: "md",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "border.default",
  bg: "bg.default",
  overflow: "hidden",
  minHeight: 0,
});

const wizardTopBar = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBlock: "lg",
  paddingInline: "3xl",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderColor: "border.default",
});

const stepperBar = css({
  display: "flex",
  justifyContent: "center",
  paddingBlock: "lg",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderColor: "border.default",
});

const wizardBody = css({
  flex: 1,
  display: "flex",
  overflowY: "auto",
  minHeight: 0,
});

const formInner = css({
  maxWidth: "40rem",
  width: "100%",
  margin: "0 auto",
  paddingBlock: "3xl",
  paddingInline: "3xl",
  display: "flex",
  flexDirection: "column",
  gap: "xl",
});

const wizardFooter = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "sm",
  paddingBlock: "lg",
  paddingInline: "3xl",
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderColor: "border.default",
  bg: "bg.default",
});

/* ---------- stepper ---------- */

const WIZARD_STEPS = [
  { key: "selection", label: "Sélection" },
  { key: "connection", label: "Connexion" },
  { key: "configuration", label: "Configuration" },
  { key: "syncing", label: "Synchronisation" },
] as const;

function stepState(current: Step, target: (typeof WIZARD_STEPS)[number]["key"]): StepperItemState {
  const currentIdx = WIZARD_STEPS.findIndex((s) => s.key === current);
  const targetIdx = WIZARD_STEPS.findIndex((s) => s.key === target);
  if (targetIdx < currentIdx) return "completed";
  if (targetIdx === currentIdx) return "active";
  return "upcoming";
}

function WizardStepper({ step }: { step: Step }) {
  return (
    <Stepper>
      {WIZARD_STEPS.map((s, i) => (
        <StepperItem key={s.key} state={stepState(step, s.key)} stepNumber={i + 1}>
          {s.label}
        </StepperItem>
      ))}
    </Stepper>
  );
}

const CONNECTOR_NAMES: Record<Connector, string> = {
  pennylane: "Pennylane",
  zoho: "Zoho Books",
};

/* ---------- Selection step ---------- */

const connectorGrid = css({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "lg",
});

const connectorCardInner = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "sm",
  padding: "2xl",
});

const connectorName = css({
  fontSize: "body",
  lineHeight: "body",
  fontWeight: "semibold",
  color: "text.primary",
});

const CONNECTORS = [
  { id: "pennylane" as const, name: "Pennylane", initials: "P" },
  { id: "zoho" as const, name: "Zoho Books", initials: "Z" },
];

const DATACENTER_OPTIONS = [
  { value: "us", label: "États-Unis" },
  { value: "eu", label: "Europe" },
  { value: "in", label: "Inde" },
  { value: "au", label: "Australie" },
  { value: "jp", label: "Japon" },
  { value: "ca", label: "Canada" },
  { value: "cn", label: "Chine" },
  { value: "sa", label: "Arabie Saoudite" },
];

const ORGANISATION_OPTIONS: Record<Connector, { value: string; label: string }[]> = {
  pennylane: [
    { value: "billabex", label: "Billabex SAS" },
    { value: "sandbox", label: "Sandbox Comptabilité d'engagement — quentin@billabex.com" },
  ],
  zoho: [
    { value: "billabex", label: "Billabex (20103580030)" },
    { value: "sandbox", label: "Sandbox Comptabilité d'engagement — quentin@billabex.com" },
  ],
};

function SelectionStep({ connector }: { connector: Connector | null }) {
  return (
    <>
      <SectionHeader
        title="Sélectionner un connecteur"
        description="Choisissez le connecteur à configurer pour synchroniser vos données."
      />
      <div role="radiogroup" aria-label="Connecteur" className={connectorGrid}>
        {CONNECTORS.map((c) => {
          const isSelected = connector === c.id;
          return (
            <Card
              key={c.id}
              interactive
              selected={isSelected}
              role="radio"
              aria-checked={isSelected}
              aria-label={c.name}
            >
              <div className={connectorCardInner}>
                <Avatar size="large" initials={c.initials} />
                <span className={connectorName}>{c.name}</span>
              </div>
            </Card>
          );
        })}
      </div>
      {connector === "zoho" && (
        <FormField
          label="Datacenter"
          helper="Sélectionnez la région où réside votre compte Zoho Books."
        >
          <SelectMenu options={DATACENTER_OPTIONS} defaultValue="eu" />
        </FormField>
      )}
    </>
  );
}

/* ---------- Connection step (OAuth2, connector-agnostic) ---------- */

function ConnectionStep({ connector }: { connector: Connector }) {
  const name = CONNECTOR_NAMES[connector];
  return (
    <>
      <SectionHeader
        title={`Billabex souhaite accéder à votre compte ${name}`}
        description={`Vous serez redirigé vers ${name} pour autoriser l'accès. Billabex ne pourra jamais écrire dans votre comptabilité.`}
      />
      <OAuthPermissionsPanel
        allowedLabel="Billabex pourra :"
        deniedLabel="Billabex ne pourra pas :"
      />
    </>
  );
}

/* ---------- Configuration step ---------- */

const autoAssignBody = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "3xs",
});

const autoAssignLabel = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  fontWeight: "semibold",
  color: "text.primary",
});

const autoAssignDescription = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  color: "text.secondary",
  margin: 0,
});

function ConfigurationStep({
  connector,
  autoAssign,
}: {
  connector: Connector;
  autoAssign: boolean;
}) {
  const name = CONNECTOR_NAMES[connector];
  return (
    <>
      <SectionHeader
        title={`Configurer la connexion ${name}`}
        description="Dernière étape avant d'importer vos comptes et factures. La synchronisation peut prendre 5 à 10 minutes."
      />

      {connector === "zoho" && (
        <FormField label="Datacenter">
          <SelectMenu options={DATACENTER_OPTIONS} defaultValue="eu" />
        </FormField>
      )}

      <FormField
        label="Organisation"
        helper="Billabex synchronisera les données de cette organisation."
      >
        <SelectMenu
          options={ORGANISATION_OPTIONS[connector]}
          defaultValue="billabex"
        />
      </FormField>

      <Banner variant="neutral">
        <div className={autoAssignBody}>
          <span className={autoAssignLabel}>
            Confier les nouveaux comptes à l'agent
          </span>
          <p className={autoAssignDescription}>
            Quand activée, l'agent planifie automatiquement des relances pour
            chaque nouveau compte créé. Sinon, le compte reste en gestion
            interne tant qu'il n'est pas confié manuellement à l'agent.
          </p>
        </div>
        <Toggle
          checked={autoAssign}
          aria-label="Confier les nouveaux comptes à l'agent"
        />
      </Banner>
    </>
  );
}

/* ---------- Syncing step ---------- */

const syncingHeader = css({
  display: "flex",
  alignItems: "center",
  gap: "md",
});

const syncingTitle = css({
  fontSize: "headline.sm",
  lineHeight: "headline.sm",
  fontWeight: "semibold",
  color: "text.primary",
  margin: 0,
});

const syncingCopy = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  color: "text.secondary",
  margin: 0,
});

function SyncingStep({ connector }: { connector: Connector }) {
  const name = CONNECTOR_NAMES[connector];
  return (
    <>
      <div className={syncingHeader}>
        <Spinner size="medium" label="Synchronisation en cours" />
        <h2 className={syncingTitle}>Synchronisation en cours</h2>
      </div>
      <p className={syncingCopy}>
        Nous importons vos factures et comptes depuis {name}. Cette opération
        prend 5 à 10 minutes. Vous pouvez fermer cette page — une notification
        vous préviendra une fois la synchronisation terminée.
      </p>
      <Banner variant="info">
        <span>
          Les comptes importés seront créés selon votre préférence{" "}
          <strong>Confier les nouveaux comptes à l'agent</strong>, définie dans
          Préférences › Gestion avancée des relances.
        </span>
      </Banner>
    </>
  );
}

/* ---------- footer ---------- */

function WizardFooter({
  step,
  connector,
}: {
  step: Step;
  connector: Connector | null;
}) {
  if (step === "syncing") {
    return (
      <div className={wizardFooter}>
        <Button variant="secondary">Fermer</Button>
      </div>
    );
  }

  const primaryLabel =
    step === "selection"
      ? "Suivant"
      : step === "connection"
        ? "Accepter"
        : "Activer la connexion";

  const primaryDisabled = step === "selection" && connector === null;
  const showBack = step !== "selection";

  return (
    <div className={wizardFooter}>
      {showBack && <Button variant="secondary">Précédent</Button>}
      <Button variant="primary" disabled={primaryDisabled}>
        {primaryLabel}
      </Button>
    </div>
  );
}

/* ---------- main template ---------- */

function ConnectionCreateViewTemplate({
  step = "selection",
  connector = null,
  autoAssign = true,
}: ConnectionCreateViewTemplateProps) {
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
        <div className={wizardCard}>
          <div className={wizardTopBar}>
            <Breadcrumb
              items={[
                { label: "Paramètres", href: "#" },
                { label: "Connexions", href: "#" },
                { label: "Nouvelle connexion" },
              ]}
            />
            <IconButton
              size="small"
              aria-label="Fermer"
              icon={<X size={16} />}
            />
          </div>

          <div className={stepperBar}>
            <WizardStepper step={step} />
          </div>

          <div className={wizardBody}>
            <div className={formInner}>
              {step === "selection" && (
                <SelectionStep connector={connector} />
              )}
              {step === "connection" && connector && (
                <ConnectionStep connector={connector} />
              )}
              {step === "configuration" && connector && (
                <ConfigurationStep
                  connector={connector}
                  autoAssign={autoAssign}
                />
              )}
              {step === "syncing" && connector && (
                <SyncingStep connector={connector} />
              )}
            </div>
          </div>

          <WizardFooter step={step} connector={connector} />
        </div>
      </div>
    </div>
  );
}
