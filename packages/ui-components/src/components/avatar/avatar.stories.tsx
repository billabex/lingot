import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./avatar";

const UserIcon = () => (
  <svg viewBox="0 0 16 16" width="60%" height="60%" fill="none" style={{ display: "block" }}>
    <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth={1.5} />
    <path
      d="M2.5 14c1-2.4 3.2-3.8 5.5-3.8s4.5 1.4 5.5 3.8"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

const meta = {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
      description: "Avatar size (24 / 32 / 40 px)",
    },
    initials: { control: "text", description: "Initials (1–2 chars)" },
    icon: { control: false, description: "Icon fallback" },
    label: { control: "text", description: "Accessible label" },
  },
  args: {
    size: "medium",
    initials: "JS",
    label: "Jaime Sánchez",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {};

export const IconFallback: Story = {
  args: {
    initials: undefined,
    icon: <UserIcon />,
    label: "Contact inconnu",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Avatar size="small" initials="JS" label="Jaime Sánchez — small" />
      <Avatar size="medium" initials="JS" label="Jaime Sánchez — medium" />
      <Avatar size="large" initials="JS" label="Jaime Sánchez — large" />
    </div>
  ),
};

export const ContactRow: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: 280,
        padding: 8,
      }}
    >
      <Avatar initials="JS" label="Jaime Sánchez" />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 500 }}>Jaime Sánchez</div>
        <div style={{ fontSize: 12, color: "#9c8e82" }}>jaime.sanchez@atida.com</div>
      </div>
    </div>
  ),
};
