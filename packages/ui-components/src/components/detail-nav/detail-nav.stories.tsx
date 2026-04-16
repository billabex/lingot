import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DetailNav } from "./detail-nav";

const meta = {
  title: "Navigation/DetailNav",
  component: DetailNav,
  tags: ["autodocs"],
  args: {
    current: 1,
    total: 4,
    prevLabel: "Previous",
    nextLabel: "Next",
  },
} satisfies Meta<typeof DetailNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { current: 2, total: 4 },
};

export const FirstRecord: Story = {
  args: { current: 1, total: 4 },
};

export const LastRecord: Story = {
  args: { current: 4, total: 4 },
};

export const LocalizedLabels: Story = {
  args: {
    current: 1,
    total: 4,
    prevLabel: "Précédent",
    nextLabel: "Suivant",
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [current, setCurrent] = useState(args.current);
    return (
      <DetailNav
        {...args}
        current={current}
        onPrev={() => setCurrent((c) => c - 1)}
        onNext={() => setCurrent((c) => c + 1)}
      />
    );
  },
  args: { current: 1, total: 5 },
};
