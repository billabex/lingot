import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { TablePagination } from "./table-pagination";

const meta = {
  title: "Navigation/TablePagination",
  component: TablePagination,
  tags: ["autodocs"],
  argTypes: {
    page: { control: { type: "number", min: 1 } },
    total: { control: { type: "number", min: 0 } },
    pageSize: { control: { type: "number", min: 1 } },
  },
  args: {
    page: 1,
    total: 60,
    pageSize: 25,
    onChange: () => {},
  },
} satisfies Meta<typeof TablePagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const Stage = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "100%", maxWidth: 960 }}>{children}</div>
);

export const FirstPage: Story = {
  render: (args) => (
    <Stage>
      <TablePagination {...args} onChange={() => {}} />
    </Stage>
  ),
};

export const MiddlePage: Story = {
  render: () => (
    <Stage>
      <TablePagination page={2} total={60} pageSize={25} onChange={() => {}} />
    </Stage>
  ),
};

export const SinglePage: Story = {
  render: () => (
    <Stage>
      <TablePagination
        page={1}
        total={21}
        pageSize={25}
        onChange={() => {}}
        formatLabel={(s, e, t) => `${s}–${e} sur ${t} comptes clients`}
      />
    </Stage>
  ),
};

export const FrenchLocale: Story = {
  render: () => (
    <Stage>
      <TablePagination
        page={1}
        total={60}
        pageSize={25}
        onChange={() => {}}
        formatLabel={(s, e, t) => `${s}–${e} sur ${t} comptes clients`}
        prevLabel="Page précédente"
        nextLabel="Page suivante"
      />
    </Stage>
  ),
};

export const Interactive: Story = {
  render: () => {
    const Demo = () => {
      const [page, setPage] = useState(1);
      return (
        <TablePagination
          page={page}
          total={120}
          pageSize={25}
          onChange={setPage}
          formatLabel={(s, e, t) => `${s}–${e} sur ${t}`}
        />
      );
    };
    return (
      <Stage>
        <Demo />
      </Stage>
    );
  },
};
