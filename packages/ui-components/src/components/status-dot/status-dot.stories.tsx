import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusDot } from "./status-dot";

const meta = {
  title: "Data Display/StatusDot",
  component: StatusDot,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["small", "medium"],
      description: "Dot size (medium = 8px, small = 6px)",
    },
    tone: {
      control: "inline-radio",
      options: ["neutral", "success", "warning", "danger", "info"],
      description: "Semantic tone",
    },
    label: { control: "text", description: "Accessible label (optional)" },
  },
  args: {
    size: "medium",
    tone: "neutral",
  },
} satisfies Meta<typeof StatusDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const row: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontSize: 12,
  color: "#534840",
};

export const AllTones: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={row}><StatusDot tone="neutral" label="Neutral" /> Neutral</div>
      <div style={row}><StatusDot tone="success" label="Success" /> Success</div>
      <div style={row}><StatusDot tone="warning" label="Warning" /> Warning</div>
      <div style={row}><StatusDot tone="danger" label="Danger" /> Danger</div>
      <div style={row}><StatusDot tone="info" label="Info" /> Info</div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div style={row}><StatusDot size="small" tone="success" /> small (6px)</div>
      <div style={row}><StatusDot size="medium" tone="success" /> medium (8px)</div>
    </div>
  ),
};
