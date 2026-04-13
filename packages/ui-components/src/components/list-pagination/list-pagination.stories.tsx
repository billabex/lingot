import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListPagination } from "./list-pagination";

const meta = {
  title: "Navigation/ListPagination",
  component: ListPagination,
  tags: ["autodocs"],
  argTypes: {
    page: { control: { type: "number", min: 1 }, description: "Current page (1-indexed)" },
    total: { control: { type: "number", min: 0 }, description: "Total items across all pages" },
    pageSize: { control: { type: "number", min: 1 }, description: "Items per page" },
    prevLabel: { control: "text", description: "Accessible label for Prev" },
    nextLabel: { control: "text", description: "Accessible label for Next" },
  },
  args: {
    page: 1,
    total: 30,
    pageSize: 25,
    onChange: () => {},
  },
} satisfies Meta<typeof ListPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const Stage = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 320 }}>{children}</div>
);

export const FirstPage: Story = {
  render: (args) => (
    <Stage>
      <ListPagination {...args} onChange={() => {}} />
    </Stage>
  ),
};

export const MiddlePage: Story = {
  render: () => (
    <Stage>
      <ListPagination page={2} total={120} pageSize={25} onChange={() => {}} />
    </Stage>
  ),
};

export const LastPage: Story = {
  render: () => (
    <Stage>
      <ListPagination page={5} total={120} pageSize={25} onChange={() => {}} />
    </Stage>
  ),
};

export const FrenchLocale: Story = {
  render: () => (
    <Stage>
      <ListPagination
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
    const ListPaginationDemo = () => {
      const [page, setPage] = useState(1);
      return (
        <ListPagination
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
        <ListPaginationDemo />
      </Stage>
    );
  },
};

export const EmptyState: Story = {
  render: () => (
    <Stage>
      <ListPagination
        page={1}
        total={0}
        pageSize={25}
        onChange={() => {}}
        formatLabel={(s, e, t) => `${s}–${e} sur ${t}`}
      />
    </Stage>
  ),
};
