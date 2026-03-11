import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./link";

const meta = {
  title: "Actions/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "subtle"],
      description: "Visual style variant",
    },
    children: { control: "text", description: "Link text" },
    href: { control: "text", description: "URL" },
  },
  args: {
    children: "Link",
    variant: "default",
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
    </div>
  ),
};
