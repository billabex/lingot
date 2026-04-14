import type { Meta, StoryObj } from "@storybook/react-vite";
import { TableRowDetail } from "./table-row-detail";
import { CommDetail } from "./comm-detail";
import { PlannedCommDetail } from "./planned-comm-detail";

const meta = {
  title: "Data Display/TableRowDetail",
  component: TableRowDetail,
  tags: ["autodocs"],
  args: {
    children: <CommDetail />,
  },
} satisfies Meta<typeof TableRowDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default — sent/received comm detail: meta grid + body + inline toggles for signature & quoted thread. */
export const Default: Story = {};

/** Planned follow-up — meta grid + draft preview + `ActionBar` with Modifier / Envoyer maintenant. */
export const Planned: Story = {
  args: { children: <PlannedCommDetail /> },
};
