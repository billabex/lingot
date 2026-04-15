import type { Meta, StoryObj } from "@storybook/react-vite";
import { Trash2, X } from "lucide-react";
import { Modal } from "./modal";
import { Button } from "../button";
import { FormField } from "../form-field";
import { IconButton } from "../icon-button";
import { Input } from "../input";
import { SelectMenu } from "../select-menu";

const meta = {
  title: "Feedback/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Modal title" },
    size: { control: "radio", options: ["sm", "md"] },
  },
  args: {
    title: "Modal Title",
    children: "Modal content goes here.",
    closeButton: <IconButton size="small" icon={<X size={16} />} aria-label="Close" />,
    footer: (
      <>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </>
    ),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutFooter: Story = {
  args: {
    title: "Information",
    footer: undefined,
    children: "This modal has no footer actions.",
  },
};

export const WithoutCloseButton: Story = {
  args: {
    title: "Confirm Action",
    closeButton: undefined,
    children: "Are you sure you want to proceed?",
  },
};

/**
 * Confirmation — `size="sm"` (360px), one short sentence of body copy,
 * `Annuler` + primary CTA. Used for lightweight confirm-before-doing flows
 * (e.g. "Reprendre en interne", "Suspendre toutes les relances").
 */
export const Confirmation: Story = {
  render: () => (
    <Modal
      size="sm"
      title="Reprendre en interne"
      closeButton={<IconButton size="small" icon={<X size={16} />} aria-label="Fermer" />}
      footer={
        <>
          <Button variant="secondary">Annuler</Button>
          <Button variant="primary">Reprendre en interne</Button>
        </>
      }
    >
      Reprendre le suivi en interne pour 1 compte client ?
    </Modal>
  ),
};

/**
 * Form — `size="md"` (480px), `FormField` body, `Annuler` + primary CTA.
 * Used for add/edit flows (e.g. "Ajouter un contact", "Modifier les informations").
 */
export const Form: Story = {
  render: () => (
    <Modal
      title="Ajouter un contact"
      closeButton={<IconButton size="small" icon={<X size={16} />} aria-label="Fermer" />}
      footer={
        <>
          <Button variant="secondary">Annuler</Button>
          <Button variant="primary">Ajouter</Button>
        </>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <FormField label="Email">
          <Input type="email" placeholder="email@exemple.com" />
        </FormField>
        <FormField label="Nom">
          <Input placeholder="Nom complet" />
        </FormField>
        <SelectMenu
          label="Langue"
          placeholder="Sélectionner une langue"
          options={[
            { value: "fr", label: "Français" },
            { value: "en", label: "English" },
            { value: "es", label: "Español" },
          ]}
        />
      </div>
    </Modal>
  ),
};

/**
 * FormWithDestructive — Same as `Form`, plus a destructive trash `IconButton`
 * on the left of the footer. A flex-grow spacer pushes the `Annuler` + primary
 * pair to the right. Used for edit flows that also allow deletion.
 */
export const FormWithDestructive: Story = {
  render: () => (
    <Modal
      title="Modifier le contact"
      closeButton={<IconButton size="small" icon={<X size={16} />} aria-label="Fermer" />}
      footer={
        <>
          <IconButton
            size="small"
            icon={<Trash2 size={16} />}
            aria-label="Supprimer le contact"
            style={{ color: "var(--colors-status-error)" }}
          />
          <span style={{ flex: 1 }} />
          <Button variant="secondary">Annuler</Button>
          <Button variant="primary">Enregistrer</Button>
        </>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <FormField label="Email">
          <Input type="email" defaultValue="jaime.sanchez@atida.com" />
        </FormField>
        <FormField label="Nom">
          <Input defaultValue="Jaime Sánchez" />
        </FormField>
        <SelectMenu
          label="Langue"
          defaultValue="es"
          options={[
            { value: "fr", label: "Français" },
            { value: "en", label: "English" },
            { value: "es", label: "Español" },
          ]}
        />
      </div>
    </Modal>
  ),
};

/**
 * LongForm — Same primitives, denser body with multiple fields. Demonstrates
 * that the modal scales cleanly for richer edit flows (e.g. account info, a
 * planned follow-up).
 */
export const LongForm: Story = {
  render: () => (
    <Modal
      title="Modifier les informations"
      closeButton={<IconButton size="small" icon={<X size={16} />} aria-label="Fermer" />}
      footer={
        <>
          <Button variant="secondary">Annuler</Button>
          <Button variant="primary">Enregistrer</Button>
        </>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <FormField label="Nom">
          <Input defaultValue="DOSFARMASHOP ONLINE S.L." />
        </FormField>
        <FormField label="Adresse">
          <Input defaultValue="C/ Mayor 12, Madrid" />
        </FormField>
        <SelectMenu
          label="Pays"
          defaultValue="es"
          options={[
            { value: "es", label: "Espagne" },
            { value: "fr", label: "France" },
            { value: "de", label: "Allemagne" },
          ]}
        />
        <SelectMenu
          label="Devise"
          defaultValue="eur"
          options={[
            { value: "eur", label: "EUR" },
            { value: "usd", label: "USD" },
            { value: "gbp", label: "GBP" },
          ]}
        />
      </div>
    </Modal>
  ),
};
