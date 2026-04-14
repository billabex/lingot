import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActionBar } from "./action-bar";
import { Button } from "../button";

const meta = {
  title: "Layout/ActionBar",
  component: ActionBar,
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: { type: "radio" },
      options: ["start", "end", "between"],
    },
    topBorder: { control: "boolean" },
  },
  args: {
    align: "start",
    topBorder: false,
    children: (
      <>
        <Button variant="secondary">Modifier</Button>
        <Button variant="primary">Envoyer maintenant</Button>
      </>
    ),
  },
  parameters: { layout: "padded" },
} satisfies Meta<typeof ActionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default — actions aligned to the start. */
export const Default: Story = {};

/** End-aligned — common in modal footers. */
export const End: Story = { args: { align: "end" } };

/** With top border — closes a detail panel or modal body. */
export const WithTopBorder: Story = { args: { topBorder: true } };
