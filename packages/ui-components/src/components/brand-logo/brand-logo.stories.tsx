import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrandLogo } from "./brand-logo";

const meta = {
  title: "Data Display/BrandLogo",
  component: BrandLogo,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "radio", options: ["google", "microsoft", "billabex"] },
    size: { control: { type: "number", min: 12, max: 96, step: 2 } },
  },
  args: { name: "google", size: 18 },
} satisfies Meta<typeof BrandLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Google: Story = { args: { name: "google" } };
export const Microsoft: Story = { args: { name: "microsoft" } };
export const Billabex: Story = { args: { name: "billabex", size: 22 } };

/** All three marks side by side at their intended default sizes. */
export const AllBrands: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
      <BrandLogo name="google" />
      <BrandLogo name="microsoft" />
      <BrandLogo name="billabex" size={22} />
    </div>
  ),
};

/** Standalone use with accessible labelling (e.g. logo atop an onboarding page). */
export const BillabexAccessible: Story = {
  args: {},
  render: () => (
    <BrandLogo name="billabex" size={22} role="img" aria-label="Billabex" />
  ),
};
