import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { BulkActionBar } from "./bulk-action-bar";

const meta = {
  title: "Feedback/BulkActionBar",
  component: BulkActionBar,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    closeLabel: { control: "text" },
  },
  args: {
    count: "21 sélectionnés",
    closeLabel: "Effacer la sélection",
    onClose: () => {},
    children: <Button size="small">Reprendre en interne</Button>,
  },
} satisfies Meta<typeof BulkActionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Stage = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "100%", maxWidth: 960 }}>{children}</div>
);

export const SingleAction: Story = {
  render: (args) => (
    <Stage>
      <BulkActionBar {...args} />
    </Stage>
  ),
};

export const MultipleActions: Story = {
  args: {
    children: (
      <>
        <Button size="small">Reprendre en interne</Button>
        <Button size="small">Exporter</Button>
      </>
    ),
  },
  render: (args) => (
    <Stage>
      <BulkActionBar {...args} />
    </Stage>
  ),
};

export const WithoutClose: Story = {
  args: { onClose: undefined },
  render: (args) => (
    <Stage>
      <BulkActionBar {...args} />
    </Stage>
  ),
};
