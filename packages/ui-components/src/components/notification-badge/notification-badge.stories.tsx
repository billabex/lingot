import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail, Bell } from "lucide-react";
import { NotificationBadge } from "./notification-badge";

const meta = {
  title: "Feedback/NotificationBadge",
  component: NotificationBadge,
  tags: ["autodocs"],
  args: { count: 25 },
} satisfies Meta<typeof NotificationBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

const iconHost = {
  position: "relative" as const,
  width: 32,
  height: 32,
  borderRadius: 8,
  background: "var(--colors-bg\\.muted)",
  color: "var(--colors-text\\.secondary)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Host = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: "inline-flex",
      padding: 12,
      background: "var(--colors-bg\\.subtle)",
      borderRadius: 12,
    }}
  >
    <div style={iconHost}>{children}</div>
  </div>
);

export const Default: Story = {
  render: (args) => (
    <Host>
      <Mail size={16} />
      <NotificationBadge {...args} />
    </Host>
  ),
};

export const OverflowMax: Story = {
  render: () => (
    <Host>
      <Bell size={16} />
      <NotificationBadge count={128} />
    </Host>
  ),
};

export const CustomMax: Story = {
  render: () => (
    <Host>
      <Bell size={16} />
      <NotificationBadge count={12} max={9} />
    </Host>
  ),
};

export const HiddenWhenZero: Story = {
  render: () => (
    <Host>
      <Mail size={16} />
      <NotificationBadge count={0} />
    </Host>
  ),
};

export const ShowsZero: Story = {
  render: () => (
    <Host>
      <Mail size={16} />
      <NotificationBadge count={0} showZero />
    </Host>
  ),
};
