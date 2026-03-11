import type { Meta, StoryObj } from "@storybook/react-vite";
import { X } from "lucide-react";
import { Modal } from "./modal";
import { Button } from "../button";
import { IconButton } from "../icon-button";

const meta = {
  title: "Feedback/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Modal title" },
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

/** Full example */
export const FullExample: Story = {
  render: () => (
    <Modal
      title="Delete Item"
      closeButton={<IconButton size="small" icon={<X size={16} />} aria-label="Close" />}
      footer={
        <>
          <Button variant="secondary">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </>
      }
    >
      Are you sure you want to delete this item? This action cannot be undone.
    </Modal>
  ),
};
