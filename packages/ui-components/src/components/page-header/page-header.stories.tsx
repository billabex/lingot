import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageHeader } from "./page-header";
import { Breadcrumb } from "../breadcrumb";

const meta = {
  title: "Navigation/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  args: {
    children: (
      <Breadcrumb
        items={[
          { label: "Parent", href: "#" },
          { label: "Child", href: "#" },
          { label: "Current" },
        ]}
      />
    ),
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleItem: Story = {
  args: {
    children: <Breadcrumb items={[{ label: "Dashboard" }]} />,
  },
};
