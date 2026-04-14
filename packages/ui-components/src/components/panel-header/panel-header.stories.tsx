import type { Meta, StoryObj } from "@storybook/react-vite";
import { X, ExternalLink, ChevronRight } from "lucide-react";
import { Badge } from "../badge";
import { Breadcrumb } from "../breadcrumb";
import { Link } from "../link";
import { PanelHeader } from "./panel-header";

const meta = {
  title: "Layout/PanelHeader",
  component: PanelHeader,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["page", "card"],
      description:
        '"page" — center panels (padding.page, gap md). "card" — left list or right aside (padding.card, space-between).',
    },
    children: { control: false },
  },
  args: {
    variant: "page",
  },
} satisfies Meta<typeof PanelHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Page — Task detail (center). Title + badge + destructive ghost button. */
export const PageTaskDetail: Story = {
  args: {
    variant: "page",
    children: (
      <>
        <PanelHeader.Title>Examiner le refus de Jaime</PanelHeader.Title>
        <Badge variant="warning">Action requise</Badge>
        <PanelHeader.Spacer />
        <button
          type="button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            background: "none",
            border: "none",
            cursor: "pointer",
            font: "inherit",
            fontSize: 13,
            color: "var(--colors-action-destructive)",
            padding: "6px 12px",
            borderRadius: 4,
          }}
        >
          <X size={14} /> Annuler la tâche
        </button>
      </>
    ),
  },
};

/** Page — Comm thread detail (center). Title + trailing link with icon. */
export const PageCommDetail: Story = {
  args: {
    variant: "page",
    children: (
      <>
        <PanelHeader.Title>DOSFARMASHOP ONLINE S.L.</PanelHeader.Title>
        <PanelHeader.Spacer />
        <Link href="#">
          Voir le compte client <ExternalLink size={12} />
        </Link>
      </>
    ),
  },
};

/** Page — Account detail (center). Breadcrumb + two trailing links. */
export const PageAccountDetail: Story = {
  args: {
    variant: "page",
    children: (
      <>
        <Breadcrumb
          items={[
            { label: "Comptes clients", href: "#" },
            { label: "DOSFARMASHOP ONLINE S.L." },
          ]}
        />
        <PanelHeader.Spacer />
        <Link href="#">
          Voir les tâches <ChevronRight size={12} />
        </Link>
        <Link href="#">
          Voir les communications <ChevronRight size={12} />
        </Link>
      </>
    ),
  },
};

/** Card — Task list (left). Title + count badge. */
export const CardTaskList: Story = {
  args: {
    variant: "card",
    children: (
      <>
        <PanelHeader.Title>Tâches</PanelHeader.Title>
        <Badge variant="count" shape="square">
          30
        </Badge>
      </>
    ),
  },
};

/** Card — Comm list (left). Title + count badge. */
export const CardCommList: Story = {
  args: {
    variant: "card",
    children: (
      <>
        <PanelHeader.Title>Communications</PanelHeader.Title>
        <Badge variant="count" shape="square">
          11
        </Badge>
      </>
    ),
  },
};

/** Card — Right aside (task detail). Account name + icon as a single link. Only the link is clickable. */
export const CardAside: Story = {
  args: {
    variant: "card",
    children: (
      <Link href="#">
        DOSFARMASHOP ONLINE S.L. <ExternalLink size={12} />
      </Link>
    ),
  },
};
