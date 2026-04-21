import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./link";

const meta = {
  title: "Actions/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "subtle", "tertiary"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["md", "sm"],
      description: "Type scale",
    },
    children: { control: "text", description: "Link text" },
    href: { control: "text", description: "URL" },
  },
  args: {
    children: "Link",
    variant: "default",
    size: "md",
    href: "#",
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Default Link", href: "#" },
};

export const Subtle: Story = {
  args: { children: "Subtle Link", variant: "subtle", href: "#" },
};

/** All variants side by side */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Link href="#">Default</Link>
      <Link href="#" variant="subtle">Subtle</Link>
      <Link href="#" variant="tertiary">Tertiary</Link>
    </div>
  ),
};

/** Both sizes side by side */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Link href="#" size="md">Medium (14/20)</Link>
      <Link href="#" size="sm">Small (13/18)</Link>
    </div>
  ),
};

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/** With trailing icon (e.g. external-link arrow) */
export const WithRightIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Link href="#" size="sm" rightIcon={<ExternalLinkIcon />}>
        Voir le compte client
      </Link>
      <Link href="#" size="md" rightIcon={<ExternalLinkIcon />}>
        Open in new tab
      </Link>
    </div>
  ),
};
