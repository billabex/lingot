import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import { CheckCircle2, Circle } from "lucide-react";
import { Avatar } from "../components/avatar";
import { BrandLogo } from "../components/brand-logo";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Chip } from "../components/chip";
import { FormField } from "../components/form-field";
import { Input } from "../components/input";
import { Link } from "../components/link";
import { SelectMenu } from "../components/select-menu";
import { Stepper } from "../components/stepper/stepper";
import { StepperItem, type StepperItemState } from "../components/stepper/stepper-item";

type Step = 1 | 2 | 3;
type SignUpStage = "email" | "password";
type AgentId = "sophie" | "thomas" | "camille";

interface OnboardingViewTemplateProps {
  step?: Step;
  /** Sign-up stage for step 1 — `email` hides the password field, `password` reveals it with live rules. */
  signUpStage?: SignUpStage;
  /** Which agent persona is picked on step 3. `null` = no selection. */
  selectedAgent?: AgentId | null;
}

const meta = {
  title: "Templates/Onboarding View",
  component: OnboardingViewTemplate,
  parameters: { layout: "fullscreen" },
  tags: [],
  argTypes: {
    step: { control: { type: "radio" }, options: [1, 2, 3] },
    signUpStage: { control: { type: "radio" }, options: ["email", "password"] },
    selectedAgent: {
      control: { type: "radio" },
      options: [null, "sophie", "thomas", "camille"],
    },
  },
} satisfies Meta<typeof OnboardingViewTemplate>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Step 1 — email entered, password field not yet revealed. */
export const SignUpEmail: Story = {
  args: { step: 1, signUpStage: "email" },
};

/** Step 1 variant — password field revealed with live-rules checklist. */
export const SignUpPassword: Story = {
  args: { step: 1, signUpStage: "password" },
};

/** Step 2 — company name + sector. */
export const Company: Story = { args: { step: 2 } };

/** Step 3 — pick agent, no selection yet. */
export const PickAgent: Story = {
  args: { step: 3, selectedAgent: null },
};

/** Step 3 variant — Sophie picked (primary-accent border + bg tint). */
export const PickAgentSelected: Story = {
  args: { step: 3, selectedAgent: "sophie" },
};

/* ---------- layout ---------- */

const page = css({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  bg: "bg.subtle",
  paddingBlock: "3xl",
  paddingInline: "xl",
  gap: "xl",
});

const card = css({
  width: "100%",
  maxWidth: "26.25rem",
  padding: "3xl",
  display: "flex",
  flexDirection: "column",
  gap: "md",
});

const stepperCentered = css({
  alignSelf: "center",
});

const cardHead = css({
  display: "flex",
  flexDirection: "column",
  gap: "3xs",
  textAlign: "center",
});

const cardTitle = css({
  fontSize: "headlineSm",
  fontWeight: "bold",
  color: "text.primary",
});

const cardSubtitle = css({
  fontSize: "caption",
  color: "text.tertiary",
});

const captionCenter = css({
  fontSize: "caption",
  color: "text.tertiary",
  textAlign: "center",
  lineHeight: "body",
});

const stack = css({
  display: "flex",
  flexDirection: "column",
  gap: "sm",
});

const labeledDividerRule = {
  content: '""',
  flex: 1,
  height: "1px",
  bg: "border.default",
} as const;

const labeledDivider = css({
  display: "flex",
  alignItems: "center",
  gap: "sm",
  fontSize: "caption",
  color: "text.tertiary",
  fontWeight: "semibold",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  _before: labeledDividerRule,
  _after: labeledDividerRule,
});

const passwordRules = css({
  display: "flex",
  flexDirection: "column",
  gap: "3xs",
  listStyle: "none",
  paddingBlock: "xs",
});

const passwordRule = css({
  display: "flex",
  alignItems: "center",
  gap: "xs",
  fontSize: "caption",
  color: "text.tertiary",
});

const trustStrip = css({
  display: "flex",
  flexDirection: "column",
  gap: "xs",
  paddingTop: "md",
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderColor: "border.default",
});

const trustItem = css({
  display: "flex",
  alignItems: "center",
  gap: "xs",
  fontSize: "caption",
  color: "text.secondary",
  "& > svg": { color: "status.success", flexShrink: 0 },
});

const agentCardBody = css({
  display: "flex",
  alignItems: "flex-start",
  gap: "md",
  padding: "md",
});

const agentInfo = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "3xs",
  minWidth: 0,
});

const agentNameRow = css({
  display: "flex",
  alignItems: "center",
  gap: "xs",
  flexWrap: "wrap",
});

const agentName = css({
  fontSize: "body",
  fontWeight: "bold",
  color: "text.primary",
});

const agentExample = css({
  fontSize: "caption",
  color: "text.secondary",
  fontStyle: "italic",
  lineHeight: "body",
});

/* ---------- stepper ---------- */

const STEPS = [
  { key: 1 as const, label: "Compte" },
  { key: 2 as const, label: "Entreprise" },
  { key: 3 as const, label: "Agent" },
];

function stepState(current: Step, target: Step): StepperItemState {
  if (target < current) return "completed";
  if (target === current) return "active";
  return "upcoming";
}

function OnboardingStepper({ step }: { step: Step }) {
  return (
    <Stepper className={stepperCentered}>
      {STEPS.map((s) => (
        <StepperItem
          key={s.key}
          state={stepState(step, s.key)}
          stepNumber={s.key}
        >
          {s.label}
        </StepperItem>
      ))}
    </Stepper>
  );
}

/* ---------- Step 1 — sign up ---------- */

const PASSWORD_RULES = [
  "Au moins 12 caractères",
  "Au moins une lettre minuscule",
  "Au moins une lettre majuscule",
  "Au moins un chiffre",
  "Au moins un caractère spécial",
];

const TRUST_ITEMS = [
  "1 500+ comptes clients suivis par nos agents",
  "Garantie 90 jours : 3× l'abonnement recouvré ou remboursé",
  "Opérationnel en 5 minutes",
];

function SignUpStep({ stage }: { stage: SignUpStage }) {
  const passwordVisible = stage === "password";
  return (
    <>
      <div className={cardHead}>
        <h1 className={cardTitle}>Créer votre compte</h1>
        <p className={cardSubtitle}>Commencez en 5 minutes, sans engagement.</p>
      </div>

      <div className={stack}>
        <Button
          variant="secondary"
          fullWidth
          leftIcon={<BrandLogo name="google" aria-hidden="true" />}
        >
          Continuer avec Google
        </Button>
        <Button
          variant="secondary"
          fullWidth
          leftIcon={<BrandLogo name="microsoft" aria-hidden="true" />}
        >
          Continuer avec Microsoft
        </Button>
      </div>

      <div className={labeledDivider}>
        <span>ou par email</span>
      </div>

      <FormField label="Email">
        <Input type="email" placeholder="vous@entreprise.com" />
      </FormField>

      {passwordVisible && (
        <>
          <FormField label="Mot de passe">
            <Input type="password" placeholder="Mot de passe" />
          </FormField>
          <ul className={passwordRules}>
            {PASSWORD_RULES.map((rule) => (
              <li key={rule} className={passwordRule}>
                <Circle size={14} aria-hidden="true" />
                {rule}
              </li>
            ))}
          </ul>
        </>
      )}

      <Button variant="primary" fullWidth>
        {passwordVisible ? "Créer mon compte" : "Continuer"}
      </Button>

      <p className={captionCenter}>
        En continuant, vous acceptez nos <Link href="#">conditions</Link>.
        <br />
        Déjà un compte ? <Link href="#">Se connecter</Link>
      </p>

      <div className={trustStrip}>
        {TRUST_ITEMS.map((item) => (
          <div key={item} className={trustItem}>
            <CheckCircle2 size={16} aria-hidden="true" />
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------- Step 2 — company ---------- */

const SECTOR_OPTIONS = [
  { value: "consulting", label: "Conseil & Consulting" },
  { value: "dev", label: "Développement & IT" },
  { value: "marketing", label: "Marketing & Communication" },
  { value: "formation", label: "Formation" },
  { value: "architecture", label: "Architecture & Design" },
  { value: "comptabilite", label: "Comptabilité & Finance" },
  { value: "juridique", label: "Juridique" },
  { value: "sante", label: "Santé" },
  { value: "btp", label: "BTP & Construction" },
  { value: "commerce", label: "Commerce & Distribution" },
  { value: "industrie", label: "Industrie & Production" },
  { value: "autre", label: "Autre" },
];

function CompanyStep() {
  return (
    <>
      <div className={cardHead}>
        <h1 className={cardTitle}>Votre entreprise</h1>
        <p className={cardSubtitle}>2 champs, c'est tout.</p>
      </div>

      <p className={captionCenter}>
        Votre agent agit au nom de Revoptim, notre agence externalisée. Vous
        reprenez le contrôle sans rompre la relation client.
      </p>

      <FormField label="Nom de l'entreprise">
        <Input type="text" placeholder="Ex : Studio Kairos" defaultValue="Studio Kairos" />
      </FormField>

      <SelectMenu
        label="Secteur d'activité"
        options={SECTOR_OPTIONS}
        defaultValue="consulting"
      />

      <Button variant="primary" fullWidth>
        Continuer
      </Button>
    </>
  );
}

/* ---------- Step 3 — pick agent ---------- */

type AgentPersona = {
  id: AgentId;
  name: string;
  initials: string;
  email: string;
  gender: string;
  example: string;
  color: string;
};

const AGENTS: AgentPersona[] = [
  {
    id: "sophie",
    name: "Sophie Martin",
    initials: "SM",
    email: "sophie.martin@revoptim.com",
    gender: "Féminin",
    example: "« Je suis chargée de compte, mandatée par votre entreprise. »",
    color: "#c2727d",
  },
  {
    id: "thomas",
    name: "Thomas Durand",
    initials: "TD",
    email: "thomas.durand@revoptim.com",
    gender: "Masculin",
    example: "« Je suis chargé de compte, mandaté par votre entreprise. »",
    color: "#4a6fa5",
  },
  {
    id: "camille",
    name: "Camille Bernard",
    initials: "CB",
    email: "camille.bernard@revoptim.com",
    gender: "Neutre",
    example:
      "« Je suis chargé.e de compte, en charge du suivi pour votre entreprise. »",
    color: "#b5634b",
  },
];

function PickAgentStep({ selected }: { selected: AgentId | null }) {
  return (
    <>
      <div className={cardHead}>
        <h1 className={cardTitle}>Recrutez votre agent</h1>
        <p className={cardSubtitle}>
          Choisissez le style rédactionnel de votre agent.
        </p>
      </div>

      <p className={captionCenter}>
        Chaque agent dispose de sa propre identité et d'une adresse email dédiée
        @revoptim.com.
      </p>

      <div role="radiogroup" aria-label="Agent" className={stack}>
        {AGENTS.map((a) => {
          const isSelected = selected === a.id;
          return (
            <Card
              key={a.id}
              interactive
              selected={isSelected}
              accent={a.color}
              role="radio"
              aria-checked={isSelected}
              aria-label={a.name}
            >
              <div className={agentCardBody}>
                <Avatar size="large" initials={a.initials} tone={a.color} />
                <div className={agentInfo}>
                  <div className={agentNameRow}>
                    <span className={agentName}>{a.name}</span>
                    <Chip variant="static">{a.gender}</Chip>
                  </div>
                  <Chip variant="static">{a.email}</Chip>
                  <span className={agentExample}>{a.example}</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}

/* ---------- template ---------- */

function OnboardingViewTemplate({
  step = 1,
  signUpStage = "email",
  selectedAgent = null,
}: OnboardingViewTemplateProps) {
  return (
    <div className={page}>
      <BrandLogo name="billabex" size={22} role="img" aria-label="Billabex" />
      <Card variant="elevated" className={card}>
        <OnboardingStepper step={step} />
        {step === 1 && <SignUpStep stage={signUpStage} />}
        {step === 2 && <CompanyStep />}
        {step === 3 && <PickAgentStep selected={selectedAgent} />}
      </Card>
      {step === 1 && (
        <p className={captionCenter}>
          Essai gratuit 30 jours · Sans carte bancaire
        </p>
      )}
    </div>
  );
}
