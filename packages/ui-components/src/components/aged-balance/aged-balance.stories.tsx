import type { Meta, StoryObj } from "@storybook/react-vite";
import { AgedBalance } from "./aged-balance";

const meta = {
  title: "Data Display/AgedBalance",
  component: AgedBalance,
  tags: ["autodocs"],
  argTypes: {
    total: { control: "text", description: "Pre-formatted total amount" },
    buckets: { control: "object", description: "Aging buckets (tone, label, value)" },
  },
  args: {
    total: "16 200 €",
    buckets: [
      { tone: "warning", label: "30-60j", value: 20 },
      { tone: "danger", label: "60-90j", value: 80 },
    ],
  },
  render: (args) => (
    <div style={{ width: 280 }}>
      <AgedBalance {...args} />
    </div>
  ),
} satisfies Meta<typeof AgedBalance>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleBucket: Story = {
  args: {
    total: "3 200 €",
    buckets: [{ tone: "warning", label: "30-60j", value: 100 }],
  },
};

export const AllBuckets: Story = {
  args: {
    total: "42 500 €",
    buckets: [
      { tone: "success", label: "0-30j", value: 12000 },
      { tone: "warning", label: "30-60j", value: 8500 },
      { tone: "danger", label: "60-90j", value: 15000 },
      { tone: "critical", label: "+90j", value: 7000 },
    ],
  },
};

export const Empty: Story = {
  args: {
    total: "0 €",
    buckets: [
      { tone: "success", label: "0-30j", value: 0 },
      { tone: "warning", label: "30-60j", value: 0 },
      { tone: "danger", label: "60-90j", value: 0 },
      { tone: "critical", label: "+90j", value: 0 },
    ],
  },
};
