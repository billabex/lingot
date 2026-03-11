import type { Meta, StoryObj } from "@storybook/react-vite";
import { InfoRow } from "./info-row";

const meta = {
  title: "Components/InfoRow",
  component: InfoRow,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Row label" },
    value: { control: "text", description: "Row value" },
    variant: {
      control: "select",
      options: ["default", "link"],
      description: "Value display variant",
    },
    href: { control: "text", description: "Link URL (when variant is link)" },
  },
  args: {
    label: "Status",
    value: "Active",
    variant: "default",
  },
} satisfies Meta<typeof InfoRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Company", value: "Billabex" },
};

export const Link: Story = {
  args: {
    label: "Website",
    value: "billabex.com",
    variant: "link",
    href: "https://billabex.com",
  },
};

/** Multiple info rows example */
export const InfoList: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "300px" }}>
      <InfoRow label="Company" value="Billabex" />
      <InfoRow label="Email" value="contact@billabex.com" variant="link" href="mailto:contact@billabex.com" />
      <InfoRow label="Status" value="Active" />
      <InfoRow label="Plan" value="Enterprise" />
    </div>
  ),
};
