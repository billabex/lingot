import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListFilter, Paperclip } from "lucide-react";
import { Chip } from "./chip";
import { ChipGroup } from "./chip-group";

const meta = {
  title: "Navigation/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filter", "removable", "static"],
      description: "Chip behavior",
    },
    active: {
      control: "boolean",
      description: "Active filter state (filter variant only)",
    },
    children: { control: "text", description: "Chip label" },
  },
  args: {
    variant: "filter",
    active: false,
    children: "Action requise",
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Filter variant (default) ────────────────────────────────────── */

export const FilterDefault: Story = {
  args: { children: "En attente" },
};

export const FilterActive: Story = {
  args: { children: "Action requise", active: true } as never,
};

export const FilterWithIcon: Story = {
  args: {
    leftIcon: <ListFilter size={16} />,
    children: "Filtres",
  },
};

export const FilterGroup: Story = {
  render: () => (
    <ChipGroup>
      <Chip active>Action requise</Chip>
      <Chip>En attente</Chip>
      <Chip>Tout</Chip>
    </ChipGroup>
  ),
};

/* ── Removable variant ───────────────────────────────────────────── */

export const Removable: Story = {
  args: {
    variant: "removable",
    children: "jane.doe@acme.com",
    onRemove: () => {},
  } as never,
};

export const RemovableWithIcon: Story = {
  render: () => (
    <Chip
      variant="removable"
      leftIcon={<Paperclip size={14} />}
      onRemove={() => {}}
    >
      contract-v3.pdf
    </Chip>
  ),
};

export const RemovableGroup: Story = {
  render: () => (
    <ChipGroup>
      <Chip variant="removable" onRemove={() => {}}>
        jane.doe@acme.com
      </Chip>
      <Chip variant="removable" onRemove={() => {}}>
        john.smith@beta.co
      </Chip>
      <Chip variant="removable" onRemove={() => {}}>
        marie@gamma.fr
      </Chip>
    </ChipGroup>
  ),
};

/* ── Static variant ──────────────────────────────────────────────── */

export const StaticTag: Story = {
  args: { variant: "static", children: "Read-only tag" } as never,
};
