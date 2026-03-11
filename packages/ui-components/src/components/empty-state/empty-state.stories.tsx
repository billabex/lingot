import type { Meta, StoryObj } from "@storybook/react-vite";
import { Inbox, FileSearch } from "lucide-react";
import { EmptyState } from "./empty-state";
import { bg, text } from "@billabex/ui-tokens";

const meta = {
  title: "Data Display/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "compact"],
      description: "Size variant",
    },
    title: { control: "text", description: "Title" },
    description: { control: "text", description: "Description" },
  },
  args: {
    title: "No items found",
    description: "Try adjusting your search or filters.",
    variant: "default",
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Inbox size={48} />,
    title: "No messages",
    description: "Your inbox is empty. New messages will appear here.",
  },
};

export const Compact: Story = {
  args: {
    variant: "compact",
    icon: <FileSearch size={32} />,
    title: "No results",
    description: "Try a different search term.",
  },
};

export const WithAction: Story = {
  args: {
    icon: <Inbox size={48} />,
    title: "No invoices yet",
    description: "Create your first invoice to get started.",
    action: (
      <button
        style={{
          padding: "6px 12px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: bg.inverse.hex,
          color: text.inverse.hex,
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Create Invoice
      </button>
    ),
  },
};

/** Without icon */
export const NoIcon: Story = {
  args: {
    title: "Nothing here",
    description: "There's nothing to display at the moment.",
  },
};
