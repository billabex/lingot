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
  paddingTop: "6xl",
  paddingBottom: "4xl",
  paddingInline: "2xl",
});

const logoBlock = css({
  marginBottom: "3xl",
});

const card = css({
  width: "100%",
  maxWidth: "26.25rem",
  paddingBlock: "3xl",
  paddingInline: "3xl",
  display: "flex",
  flexDirection: "column",
});

const stepperBlock = css({
  alignSelf: "center",
  marginBottom: "2xl",
});

const cardHead = css({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  marginBottom: "2xl",
});

const cardTitle = css({
  fontSize: "headlineSm",
  fontWeight: "bold",
  color: "text.primary",
  marginBottom: "xs",
});

const cardSubtitle = css({
  fontSize: "caption",
  color: "text.tertiary",
});

const contextLine = css({
  fontSize: "caption",
  color: "text.tertiary",
  textAlign: "center",
  lineHeight: "body",
  marginTop: "-lg",
  marginBottom: "xl",
});

const ssoGroup = css({
  display: "flex",
  flexDirection: "column",
  gap: "md",
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
  marginBlock: "xl",
  _before: labeledDividerRule,
  _after: labeledDividerRule,
});

const fieldMb = css({
  marginBottom: "lg",
});

const passwordRules = css({
  display: "flex",
  flexDirection: "column",
  gap: "3xs",
  listStyle: "none",
  marginBottom: "lg",
});

const passwordRule = css({
  display: "flex",
  alignItems: "center",
  gap: "xs",
  fontSize: "caption",
  color: "text.tertiary",
});

const formFooter = css({
  fontSize: "caption",
  color: "text.tertiary",
  textAlign: "center",
  lineHeight: "body",
  marginTop: "xl",
});

const trustStrip = css({
  display: "flex",
  flexDirection: "column",
  gap: "md",
  marginTop: "xl",
  paddingTop: "xl",
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

const trialLine = css({
  fontSize: "caption",
  color: "text.tertiary",
  textAlign: "center",
  marginTop: "xl",
});

const agentCardsGroup = css({
  display: "flex",
  flexDirection: "column",
  gap: "md",
});

const agentCardBody = css({
  display: "flex",
  alignItems: "flex-start",
  gap: "lg",
  paddingBlock: "lg",
  paddingInline: "xl",
});

const agentInfo = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "xs",
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
    <Stepper className={stepperBlock}>
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

      <div className={ssoGroup}>
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

      <FormField label="Email" className={fieldMb}>
        <Input type="email" placeholder="vous@entreprise.com" />
      </FormField>

      {passwordVisible && (
        <>
          <FormField label="Mot de passe" className={fieldMb}>
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

      <p className={formFooter}>
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

function CompanyStep() {
  return (
    <>
      <div className={cardHead}>
        <h1 className={cardTitle}>Votre entreprise</h1>
        <p className={cardSubtitle}>Un champ, c'est tout.</p>
      </div>

      <p className={contextLine}>
        Votre agent agit au nom de Revoptim, notre agence externalisée. Vous
        reprenez le contrôle sans rompre la relation client.
      </p>

      <FormField label="Nom de l'entreprise" className={fieldMb}>
        <Input type="text" placeholder="Ex : Studio Kairos" defaultValue="Studio Kairos" />
      </FormField>

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

      <p className={contextLine}>
        Chaque agent dispose de sa propre identité et d'une adresse email dédiée
        @revoptim.com.
      </p>

      <div role="radiogroup" aria-label="Agent" className={agentCardsGroup}>
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
                    <Chip variant="static" tone={a.color}>{a.gender}</Chip>
                  </div>
                  <Chip variant="static" tone={a.color}>{a.email}</Chip>
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
      <BrandLogo
        name="billabex"
        size={22}
        role="img"
        aria-label="Billabex"
        className={logoBlock}
      />
      <Card variant="elevated" className={card}>
        <OnboardingStepper step={step} />
        {step === 1 && <SignUpStep stage={signUpStage} />}
        {step === 2 && <CompanyStep />}
        {step === 3 && <PickAgentStep selected={selectedAgent} />}
      </Card>
      {step === 1 && (
        <p className={trialLine}>
          Essai gratuit 30 jours · Sans carte bancaire
        </p>
      )}
    </div>
  );
}
