import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "./pagination";

const meta = {
  title: "Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: {
    page: 1,
    total: 30,
    pageSize: 25,
    onChange: () => {},
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const Stage = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 320 }}>{children}</div>
);

export const FirstPage: Story = {
  render: (args) => (
    <Stage>
      <Pagination {...args} onChange={() => {}} />
    </Stage>
  ),
};

export const MiddlePage: Story = {
  render: () => (
    <Stage>
      <Pagination page={2} total={120} pageSize={25} onChange={() => {}} />
    </Stage>
  ),
};

export const LastPage: Story = {
  render: () => (
    <Stage>
      <Pagination page={5} total={120} pageSize={25} onChange={() => {}} />
    </Stage>
  ),
};

export const FrenchLocale: Story = {
  render: () => (
    <Stage>
      <Pagination
        page={1}
        total={30}
        pageSize={25}
        onChange={() => {}}
        formatLabel={(s, e, t) => `${s}–${e} sur ${t}`}
        prevLabel="Page précédente"
        nextLabel="Page suivante"
      />
    </Stage>
  ),
};

export const Interactive: Story = {
  render: () => {
    const PaginationDemo = () => {
      const [page, setPage] = useState(1);
      return (
        <Pagination
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
        <PaginationDemo />
      </Stage>
    );
  },
};

export const EmptyState: Story = {
  render: () => (
    <Stage>
      <Pagination
        page={1}
        total={0}
        pageSize={25}
        onChange={() => {}}
        formatLabel={(s, e, t) => `${s}–${e} sur ${t}`}
      />
    </Stage>
  ),
};
