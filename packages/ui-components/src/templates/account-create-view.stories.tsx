import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import {
  CheckCircle2,
  Download,
  Maximize,
  Menu,
  MessageCircleMore,
  Minus,
  MoreVertical,
  NotebookTabs,
  Paperclip,
  PenTool,
  Plus,
  Printer,
  Redo2,
  RotateCw,
  Undo2,
  UploadCloud,
  X,
} from "lucide-react";
import { Breadcrumb } from "../components/breadcrumb";
import { Button } from "../components/button";
import { FormField } from "../components/form-field";
import { IconButton } from "../components/icon-button";
import { Input } from "../components/input";
import { NavItem } from "../components/nav-item";
import { Select } from "../components/select";
import { SectionHeader } from "../components/section-header";
import { Sidebar } from "../components/sidebar";
import { Spinner } from "../components/spinner";
import { Stepper } from "../components/stepper/stepper";
import { StepperItem, type StepperItemState } from "../components/stepper/stepper-item";
import { logoTile, shellMain, shellPage, shellRail } from "./_shell";

type Step = "upload" | "processing" | "account" | "contact" | "invoice";
type MatchMode = "new" | "existing";

interface AccountCreateViewTemplateProps {
  step?: Step;
  /** Account OCR match — `new` shows the full form; `existing` shows a picker with a ghost escape. */
  accountMatch?: MatchMode;
  /** Contact OCR match — `new` shows the full form; `existing` shows a picker with a ghost escape. */
  contactMatch?: MatchMode;
}

const meta = {
  title: "Templates/Account Create View",
  component: AccountCreateViewTemplate,
  parameters: { layout: "fullscreen" },
  tags: [],
  argTypes: {
    step: {
      control: { type: "radio" },
      options: ["upload", "processing", "account", "contact", "invoice"],
    },
    accountMatch: {
      control: { type: "radio" },
      options: ["new", "existing"],
    },
    contactMatch: {
      control: { type: "radio" },
      options: ["new", "existing"],
    },
  },
} satisfies Meta<typeof AccountCreateViewTemplate>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Empty drop zone — the entry screen. */
export const Upload: Story = { args: { step: "upload" } };

/** OCR parsing — stepper appears, PDF viewer renders on the right. */
export const Processing: Story = { args: { step: "processing" } };

/** Step 1 — new account created from the OCR'd invoice. */
export const StepAccount: Story = {
  args: { step: "account", accountMatch: "new" },
};

/** Step 1 variant — invoice matched an existing account. */
export const StepAccountExisting: Story = {
  args: { step: "account", accountMatch: "existing" },
};

/** Step 2 — new contact. */
export const StepContact: Story = {
  args: { step: "contact", contactMatch: "new" },
};

/** Step 2 variant — contact matched an existing contact on the account. */
export const StepContactExisting: Story = {
  args: { step: "contact", contactMatch: "existing" },
};

/** Step 3 — invoice details + billing address. */
export const StepInvoice: Story = { args: { step: "invoice" } };

/* ---------- layout ---------- */

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
  overflow: "hidden",
  minHeight: 0,
});

const formColumn = css({
  flex: "1 1 0",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  minHeight: 0,
});

const formInner = css({
  maxWidth: "36rem",
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

const inlineRow = css({
  display: "flex",
  gap: "md",
});

const inlineField = css({ flex: "0 0 10rem" });
const inlineFieldGrow = css({ flex: "1 1 0" });

/* ---------- upload step ---------- */

const uploadCenter = css({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "3xl",
  minHeight: 0,
});

const dropzoneTitle = css({
  fontSize: "body",
  lineHeight: "body",
  fontWeight: "semibold",
  color: "text.primary",
  margin: 0,
});

const dropzone = css({
  width: "100%",
  maxWidth: "32rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "xl",
  padding: "3xl",
  borderRadius: "md",
  borderWidth: "2px",
  borderStyle: "dashed",
  borderColor: "border.default",
  bg: "bg.default",
  color: "text.secondary",
  textAlign: "center",
});

const dropzoneIcon = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.5rem",
  height: "2.5rem",
  color: "text.tertiary",
});

const dropzoneCopy = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  color: "text.secondary",
  margin: 0,
});

/* ---------- processing state ---------- */

const processingCenter = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "md",
  padding: "3xl",
});


const processingHeadline = css({
  fontSize: "body",
  lineHeight: "body",
  fontWeight: "semibold",
  color: "text.primary",
  margin: 0,
});

const processingSub = css({
  fontSize: "body.sm",
  lineHeight: "body.sm",
  color: "text.tertiary",
  margin: 0,
});

/* ---------- stepper ---------- */

const WIZARD_STEPS = [
  { key: "account", label: "Compte" },
  { key: "contact", label: "Contact" },
  { key: "invoice", label: "Facture" },
] as const;

function stepState(current: Step, target: (typeof WIZARD_STEPS)[number]["key"]): StepperItemState {
  const currentIdx = WIZARD_STEPS.findIndex((s) => s.key === current);
  const targetIdx = WIZARD_STEPS.findIndex((s) => s.key === target);
  if (currentIdx === -1) return "upcoming"; // upload / processing
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

/* ---------- form steps ----------
 * Each step has two shapes depending on the OCR match:
 *   - `new`      — full form visible.
 *   - `existing` — form hidden; a pre-selected picker shows the matched
 *                  record and a ghost button lets the user fall back to
 *                  creating a new one. Same pattern for Account and Contact.
 */

function AccountStep({ match }: { match: MatchMode }) {
  if (match === "existing") {
    return (
      <>
        <SectionHeader
          title="Compte"
          description="Un compte existant a été identifié à partir de la facture. La facture y sera rattachée."
        />
        <FormField label="Compte existant">
          <Select defaultValue="omorovicza">
            <option value="omorovicza">Omorovicza Cosmetics</option>
            <option value="omorovicza-group">Omorovicza Group Ltd</option>
          </Select>
        </FormField>
        <Button variant="ghost" size="small" leftIcon={<Plus size={14} />}>
          Créer un nouveau compte à la place
        </Button>
      </>
    );
  }
  return (
    <>
      <SectionHeader title="Informations du compte" />
      <FormField label="Nom du compte">
        <Input defaultValue="Omorovicza Cosmetics" />
      </FormField>
      <FormField label="Devise">
        <Select defaultValue="GBP">
          <option value="GBP">Livre sterling britannique (£)</option>
          <option value="EUR">Euro (€)</option>
          <option value="USD">Dollar américain ($)</option>
        </Select>
      </FormField>
      <FormField label="Rue">
        <Input defaultValue="Space One, Beadon Road, Hammersmith" />
      </FormField>
      <div className={inlineRow}>
        <FormField label="Code postal" className={inlineField}>
          <Input defaultValue="W60EA" />
        </FormField>
        <FormField label="Ville" className={inlineFieldGrow}>
          <Input defaultValue="London" />
        </FormField>
      </div>
      <FormField label="Pays">
        <Select defaultValue="GB">
          <option value="GB">Royaume-Uni</option>
          <option value="FR">France</option>
          <option value="US">États-Unis</option>
        </Select>
      </FormField>
    </>
  );
}

function ContactStep({ match }: { match: MatchMode }) {
  if (match === "existing") {
    return (
      <>
        <SectionHeader
          title="Contact"
          description="Un contact existant a été identifié sur ce compte."
        />
        <FormField label="Contact existant">
          <Select defaultValue="camille">
            <option value="camille">
              Camille Montagnon — camille@omorovicza.com
            </option>
            <option value="jaime">
              Jaime Rodriguez — jaime@omorovicza.com
            </option>
          </Select>
        </FormField>
        <Button variant="ghost" size="small" leftIcon={<Plus size={14} />}>
          Créer un nouveau contact à la place
        </Button>
      </>
    );
  }
  return (
    <>
      <SectionHeader
        title="Contact"
        description="Nécessaire pour que l'agent puisse démarrer les relances."
      />
      <FormField
        label="Nom complet"
        helper="Si le nom complet est inconnu, collez simplement l'adresse e-mail du contact. L'agent adaptera la salutation en conséquence (« Bonjour » ou « Bonjour [Nom] »)."
      >
        <Input defaultValue="Camille Montagnon" />
      </FormField>
      <FormField label="Email">
        <Input type="email" defaultValue="camille@omorovicza.com" />
      </FormField>
      <FormField label="Langue">
        <Select defaultValue="fr">
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="de">Deutsch</option>
          <option value="it">Italiano</option>
        </Select>
      </FormField>
    </>
  );
}

function InvoiceStep() {
  return (
    <>
      <SectionHeader title="Informations de la facture" />
      <FormField label="Numéro de facture">
        <Input defaultValue="I240126000406" />
      </FormField>
      <div className={inlineRow}>
        <FormField label="Date d'émission" className={inlineFieldGrow}>
          <Input type="date" defaultValue="2024-01-26" />
        </FormField>
        <FormField label="Date d'échéance" className={inlineFieldGrow}>
          <Input type="date" defaultValue="2024-02-25" />
        </FormField>
      </div>
      <div className={inlineRow}>
        <FormField label="Montant total" className={inlineFieldGrow}>
          <Input defaultValue="14 284,80" />
        </FormField>
        <FormField label="Montant des taxes" className={inlineFieldGrow}>
          <Input defaultValue="2 380,80" />
        </FormField>
      </div>
      <div className={inlineRow}>
        <FormField label="Montant payé" className={inlineFieldGrow}>
          <Input defaultValue="0,00" />
        </FormField>
        <FormField
          label="Numéro de bon de commande"
          className={inlineFieldGrow}
        >
          <Input placeholder="Facultatif" />
        </FormField>
      </div>
      <SectionHeader title="Adresse de facturation" />
      <FormField label="Rue">
        <Input defaultValue="Space One, Beadon Road, Hammersmith" />
      </FormField>
      <div className={inlineRow}>
        <FormField label="Code postal" className={inlineField}>
          <Input defaultValue="W60EA" />
        </FormField>
        <FormField label="Ville" className={inlineFieldGrow}>
          <Input defaultValue="London" />
        </FormField>
      </div>
      <FormField label="Pays">
        <Select defaultValue="GB">
          <option value="GB">Royaume-Uni</option>
          <option value="FR">France</option>
          <option value="US">États-Unis</option>
        </Select>
      </FormField>
    </>
  );
}

/* ---------- PDF viewer mock ----------
 * Mimics Chrome's built-in PDF viewer — dark toolbar + centered invoice
 * sheet — so the OCR'd document sits next to the form during the wizard.
 * The viewer is foreign chrome outside the Billabex palette, so the cool
 * hardcoded grays are intentional and scoped to this fixture.
 */

const pdfViewer = css({
  flex: "1 1 0",
  display: "flex",
  flexDirection: "column",
  bg: "#525659",
  borderLeftWidth: "1px",
  borderLeftStyle: "solid",
  borderColor: "border.default",
  overflow: "hidden",
  minHeight: 0,
});

const pdfToolbar = css({
  display: "flex",
  alignItems: "center",
  gap: "xs",
  paddingInline: "md",
  paddingBlock: "xs",
  bg: "#323639",
  color: "#ffffff",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderColor: "#1f2124",
  flexWrap: "wrap",
});

const pdfToolbarGroup = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "3xs",
});

const pdfToolbarSpacer = css({ flex: 1 });

const pdfToolbarButton = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.75rem",
  height: "1.75rem",
  borderRadius: "sm",
  bg: "transparent",
  border: "none",
  color: "#ffffff",
  cursor: "pointer",
  transition: "background 120ms ease",
  _hover: { bg: "#4a4e52" },
  _focusVisible: {
    outline: "none",
    ring: "2px",
    ringColor: "border.focus",
    ringOffset: "-2px",
  },
});

const pdfPageInfo = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "3xs",
  fontSize: "caption",
  lineHeight: "caption",
  paddingInline: "xs",
});

const pdfPageBox = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "1.5rem",
  paddingInline: "xs",
  paddingBlock: "3xs",
  bg: "#1f2124",
  borderRadius: "3xs",
  fontWeight: "medium",
});

const pdfScroll = css({
  flex: 1,
  overflowY: "auto",
  padding: "xl",
  display: "flex",
  justifyContent: "center",
  minHeight: 0,
});

const pdfSheet = css({
  width: "100%",
  maxWidth: "32rem",
  aspectRatio: "1 / 1.414",
  bg: "bg.default",
  padding: "xl",
  display: "flex",
  flexDirection: "column",
  gap: "lg",
  fontSize: "caption",
  lineHeight: "caption",
  color: "text.primary",
  boxShadow: "sm",
});

const pdfHeader = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "lg",
});

const pdfLogo = css({
  width: "3rem",
  height: "3rem",
  borderRadius: "full",
  bg: "action.primary",
  color: "text.inverse",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "semibold",
  flexShrink: 0,
});

const pdfTitle = css({
  fontSize: "h3",
  lineHeight: "h3",
  fontWeight: "semibold",
  margin: 0,
});

const pdfMeta = css({
  display: "grid",
  gridTemplateColumns: "auto auto",
  columnGap: "sm",
  rowGap: "3xs",
  justifyContent: "end",
  textAlign: "right",
});

const pdfAddresses = css({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "xl",
  color: "text.secondary",
});

const pdfAddressBlock = css({
  display: "flex",
  flexDirection: "column",
  gap: "3xs",
});

const pdfTable = css({
  display: "grid",
  gridTemplateColumns: "1fr 3rem 4rem 3rem 4rem",
  columnGap: "sm",
  rowGap: "xs",
  paddingBlock: "sm",
  borderTopWidth: "1px",
  borderBottomWidth: "1px",
  borderStyle: "solid",
  borderColor: "border.default",
});

const pdfTableHead = css({
  fontWeight: "semibold",
  color: "text.tertiary",
  textTransform: "uppercase",
  fontSize: "caption",
});

const pdfTotals = css({
  marginLeft: "auto",
  minWidth: "14rem",
  display: "grid",
  gridTemplateColumns: "1fr auto",
  columnGap: "xl",
  rowGap: "3xs",
});

const pdfTotalsDue = css({
  fontWeight: "semibold",
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderColor: "border.default",
  paddingTop: "3xs",
  gridColumn: "1 / -1",
  display: "grid",
  gridTemplateColumns: "1fr auto",
  columnGap: "xl",
});

function PdfToolbarButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button type="button" className={pdfToolbarButton} aria-label={label}>
      {icon}
    </button>
  );
}

function PdfPreview() {
  return (
    <div className={pdfViewer}>
      <div className={pdfToolbar}>
        <div className={pdfToolbarGroup}>
          <PdfToolbarButton icon={<Menu size={14} />} label="Contours" />
          <span className={pdfPageInfo}>
            <span className={pdfPageBox}>1</span>
            <span>/</span>
            <span>1</span>
          </span>
        </div>
        <div className={pdfToolbarSpacer} />
        <div className={pdfToolbarGroup}>
          <PdfToolbarButton icon={<Minus size={14} />} label="Zoom arrière" />
          <PdfToolbarButton icon={<Plus size={14} />} label="Zoom avant" />
          <PdfToolbarButton
            icon={<Maximize size={14} />}
            label="Adapter à la page"
          />
          <PdfToolbarButton icon={<RotateCw size={14} />} label="Pivoter" />
          <PdfToolbarButton icon={<PenTool size={14} />} label="Annoter" />
        </div>
        <div className={pdfToolbarSpacer} />
        <div className={pdfToolbarGroup}>
          <PdfToolbarButton icon={<Undo2 size={14} />} label="Annuler" />
          <PdfToolbarButton icon={<Redo2 size={14} />} label="Rétablir" />
          <PdfToolbarButton
            icon={<UploadCloud size={14} />}
            label="Enregistrer dans Drive"
          />
          <PdfToolbarButton icon={<Download size={14} />} label="Télécharger" />
          <PdfToolbarButton icon={<Printer size={14} />} label="Imprimer" />
          <PdfToolbarButton
            icon={<MoreVertical size={14} />}
            label="Plus d'options"
          />
        </div>
      </div>
      <div className={pdfScroll}>
        <div className={pdfSheet}>
          <div className={pdfHeader}>
            <div className={pdfLogo}>R</div>
            <div>
              <h3 className={pdfTitle}>INVOICE</h3>
              <div className={pdfMeta}>
                <span>INVOICE</span>
                <span>I240126000406</span>
                <span>DATE</span>
                <span>01/26/2024</span>
                <span>TOTAL</span>
                <span>£14,284.80</span>
                <span>TERMS</span>
                <span>Net 30</span>
                <span>DUE DATE</span>
                <span>02/25/2024</span>
              </div>
            </div>
          </div>
          <div className={pdfAddresses}>
            <div className={pdfAddressBlock}>
              <strong>SQUARANCE LTD</strong>
              <span>11 Old Jewry</span>
              <span>EC2R 8DU London</span>
              <span>United Kingdom</span>
            </div>
            <div className={pdfAddressBlock}>
              <strong>Bill To</strong>
              <strong>Omorovicza Cosmetics</strong>
              <span>Space One, Beadon Road</span>
              <span>Hammersmith W60EA London</span>
              <span>United Kingdom</span>
            </div>
          </div>
          <div className={pdfTable}>
            <span className={pdfTableHead}>Description</span>
            <span className={pdfTableHead}>Units</span>
            <span className={pdfTableHead}>Unit Price</span>
            <span className={pdfTableHead}>VAT</span>
            <span className={pdfTableHead}>Amount</span>
            <span>RiseUp - Licenses</span>
            <span>300</span>
            <span>£39.68</span>
            <span>20%</span>
            <span>£11,904.00</span>
          </div>
          <div className={pdfTotals}>
            <span>Total excl. VAT</span>
            <span>£11,904.00</span>
            <span>VAT (20%)</span>
            <span>£2,380.80</span>
            <span>Total</span>
            <span>£14,284.80</span>
            <div className={pdfTotalsDue}>
              <span>Amount Due</span>
              <span>£14,284.80</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- footer actions ----------
 * Cancel lives in the top-right close (×). The footer stays action-only —
 * right-aligned Précédent + Continuer / Ajouter. Rendered from the
 * processing state onward so the layout is stable; the primary action is
 * disabled during OCR.
 */

function WizardFooter({ step }: { step: Step }) {
  const primaryLabel = step === "invoice" ? "Ajouter" : "Continuer";
  const showBack = step === "contact" || step === "invoice";
  const primaryDisabled = step === "processing";

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

function AccountCreateViewTemplate({
  step = "account",
  accountMatch = "new",
  contactMatch = "new",
}: AccountCreateViewTemplateProps) {
  const showStepper = step !== "upload";
  const showFooter = step !== "upload";

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
            <MessageCircleMore size={16} />
          </NavItem>
          <NavItem variant="icon" active aria-label="Comptes clients">
            <NotebookTabs size={16} />
          </NavItem>
        </Sidebar>
      </div>

      <div className={shellMain}>
        <div className={wizardCard}>
          <div className={wizardTopBar}>
            <Breadcrumb
              items={[
                { label: "Comptes clients", href: "#" },
                { label: "Nouveau compte" },
              ]}
            />
            <IconButton
              size="small"
              aria-label="Fermer"
              icon={<X size={16} />}
            />
          </div>

          {showStepper && (
            <div className={stepperBar}>
              <WizardStepper step={step} />
            </div>
          )}

          {step === "upload" ? (
            <div className={uploadCenter}>
              <div className={dropzone}>
                <h2 className={dropzoneTitle}>Ajouter un compte</h2>
                <span className={dropzoneIcon}>
                  <Paperclip size={24} />
                </span>
                <p className={dropzoneCopy}>
                  Déposez votre facture (PDF) ou cliquez sur le bouton pour la
                  sélectionner. L'agent créera le compte, le contact et la
                  facture à partir du document.
                </p>
                <Button variant="primary">Sélectionner un fichier</Button>
              </div>
            </div>
          ) : (
            <div className={wizardBody}>
              <div className={formColumn}>
                <div className={formInner}>
                  {step === "processing" ? (
                    <div className={processingCenter}>
                      <Spinner size="large" label="Vérification de votre fichier" />
                      <h2 className={processingHeadline}>
                        Vérification de votre fichier…
                      </h2>
                      <p className={processingSub}>
                        Cette opération peut prendre quelques secondes.
                      </p>
                    </div>
                  ) : step === "account" ? (
                    <AccountStep match={accountMatch} />
                  ) : step === "contact" ? (
                    <ContactStep match={contactMatch} />
                  ) : (
                    <InvoiceStep />
                  )}
                </div>
              </div>
              <PdfPreview />
            </div>
          )}

          {showFooter && <WizardFooter step={step} />}
        </div>
      </div>
    </div>
  );
}
