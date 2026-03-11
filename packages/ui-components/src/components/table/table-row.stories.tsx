import type { Meta, StoryObj } from "@storybook/react-vite";
import { TableRow } from "./table-row";

const meta = {
  title: "Data Display/TableRow",
  component: TableRow,
  tags: ["autodocs"],
  argTypes: {
    selected: { control: "boolean", description: "Selected state" },
  },
  args: {
    selected: false,
    children: (
      <>
        <span style={{ flex: 1 }}>User Name</span>
        <span style={{ flex: 1 }}>user@example.com</span>
        <span style={{ flex: 0, minWidth: "80px" }}>Active</span>
      </>
    ),
  },
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    selected: true,
    children: (
      <>
        <span style={{ flex: 1 }}>Jane Doe</span>
        <span style={{ flex: 1 }}>jane@example.com</span>
        <span style={{ flex: 0, minWidth: "80px" }}>Active</span>
      </>
    ),
  },
};

export const AllStates: Story = {
  render: (args) => (
    <div>
      <TableRow {...args}>
        <span style={{ flex: 1 }}>Alice Johnson</span>
        <span style={{ flex: 1 }}>alice@example.com</span>
        <span style={{ flex: 0, minWidth: "80px" }}>Active</span>
      </TableRow>
      <TableRow {...args} selected={true}>
        <span style={{ flex: 1 }}>Bob Smith</span>
        <span style={{ flex: 1 }}>bob@example.com</span>
        <span style={{ flex: 0, minWidth: "80px" }}>Inactive</span>
      </TableRow>
      <TableRow {...args}>
        <span style={{ flex: 1 }}>Charlie Brown</span>
        <span style={{ flex: 1 }}>charlie@example.com</span>
        <span style={{ flex: 0, minWidth: "80px" }}>Active</span>
      </TableRow>
    </div>
  ),
};
