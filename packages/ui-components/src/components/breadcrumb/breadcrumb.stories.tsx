import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumb } from "./breadcrumb";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Documents", href: "/documents" },
      { label: "Current Page" },
    ],
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TwoItems: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Current" },
    ],
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Category", href: "/category" },
      { label: "Subcategory", href: "/category/sub" },
      { label: "Page" },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Page" },
    ],
    separator: <span style={{ color: "#9c8e82" }}>/</span>,
  },
};
