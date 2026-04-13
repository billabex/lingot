import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../badge";
import { ListItem } from "./list-item";

const meta = {
  title: "Data Display/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  args: {
    title: "Acme Corp",
    preview: "Re: invoice #1204 — payment confirmation",
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const List = (children: React.ReactNode, bg = "var(--colors-bg-default)") => (
  <div
    style={{
      width: 360,
      background: bg,
      padding: 12,
      borderRadius: 12,
      border: "1px solid var(--colors-border-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
    }}
  >
    {children}
  </div>
);

/* ─── Task list (variant="task") ─────────────────────────────────────── */

export const TaskDefault: Story = {
  render: () =>
    List(
      <ListItem
        as="button"
        variant="task"
        title="Acme Corp"
        titleTrailing={<Badge variant="error">Action</Badge>}
        preview="Invoice #1204 — 14 days overdue"
        meta={
          <>
            <span style={{ fontSize: 13, lineHeight: "18px", fontWeight: 500 }}>
              €1,240.00
            </span>
            <span
              style={{
                fontSize: 12,
                lineHeight: "16px",
                fontWeight: 500,
                color: "var(--colors-status-error)",
              }}
            >
              14d overdue
            </span>
            <span
              style={{
                marginLeft: "auto",
                fontSize: 12,
                lineHeight: "16px",
                color: "var(--colors-text-tertiary)",
              }}
            >
              10:30 AM
            </span>
          </>
        }
        sub="3 open disputes"
        onClick={() => {}}
      />
    ),
};

export const TaskActive: Story = {
  render: () =>
    List(
      <ListItem
        as="button"
        variant="task"
        active
        title="Beta Industries"
        titleTrailing={<Badge variant="warning">Waiting</Badge>}
        preview="Follow-up on 1st dunning"
        onClick={() => {}}
      />
    ),
};

export const TaskList: Story = {
  render: () =>
    List(
      <>
        <ListItem
          as="button"
          variant="task"
          title="Acme Corp"
          titleTrailing={<Badge variant="error">Action</Badge>}
          preview="Invoice #1204 — 14d overdue"
          onClick={() => {}}
        />
        <ListItem
          as="button"
          variant="task"
          active
          title="Beta Industries"
          titleTrailing={<Badge variant="warning">Waiting</Badge>}
          preview="Reminder scheduled"
          onClick={() => {}}
        />
        <ListItem
          as="button"
          variant="task"
          title="Gamma Holdings"
          titleTrailing={<Badge variant="success">Received</Badge>}
          preview="Payment confirmation"
          onClick={() => {}}
        />
        <ListItem
          as="button"
          variant="task"
          title="Delta Labs"
          titleTrailing={<Badge variant="info">Sent</Badge>}
          preview="1st dunning sent"
          onClick={() => {}}
        />
      </>
    ),
};

/* ─── Communications thread list (variant="thread") ──────────────────── */

export const ThreadDefault: Story = {
  render: () =>
    List(
      <ListItem
        as="button"
        variant="thread"
        title="Jane Doe — Acme Corp"
        titleTrailing="2h"
        preview="Thanks for the update, I'll confirm with finance…"
        meta={
          <>
            <Badge variant="info">Sent</Badge>
            <span
              style={{
                fontSize: 11,
                lineHeight: "16px",
                color: "var(--colors-text-tertiary)",
              }}
            >
              jane.doe@acme.com
            </span>
          </>
        }
        onClick={() => {}}
      />,
      "var(--colors-bg-default)"
    ),
};

export const ThreadWithReplyAccent: Story = {
  render: () =>
    List(
      <ListItem
        as="button"
        variant="thread"
        accent="reply"
        title="John Smith — Beta Industries"
        titleTrailing="5m"
        preview="Received your reminder, I'll process payment today"
        meta={
          <>
            <Badge variant="error">Reply</Badge>
            <span
              style={{
                fontSize: 11,
                lineHeight: "16px",
                color: "var(--colors-text-tertiary)",
              }}
            >
              john.smith@beta.co
            </span>
          </>
        }
        onClick={() => {}}
      />
    ),
};

export const ThreadActive: Story = {
  render: () =>
    List(
      <ListItem
        as="button"
        variant="thread"
        active
        title="Marie Curie — Gamma SAS"
        titleTrailing="1d"
        preview="Question about the invoice breakdown"
        onClick={() => {}}
      />
    ),
};

export const ThreadList: Story = {
  render: () =>
    List(
      <>
        <ListItem
          as="button"
          variant="thread"
          accent="reply"
          title="Jane Doe — Acme Corp"
          titleTrailing="2h"
          preview="Thanks for the update…"
          onClick={() => {}}
        />
        <ListItem
          as="button"
          variant="thread"
          active
          title="Marie Curie — Gamma SAS"
          titleTrailing="1d"
          preview="Question about the invoice"
          onClick={() => {}}
        />
        <ListItem
          as="button"
          variant="thread"
          title="Alan Turing — Delta Labs"
          titleTrailing="3d"
          preview="Re: payment schedule"
          onClick={() => {}}
        />
        <ListItem
          as="button"
          variant="thread"
          title="Ada Lovelace — Epsilon"
          titleTrailing="1w"
          preview="Dunning #2 follow-up"
          onClick={() => {}}
        />
      </>,
      "var(--colors-bg-default)"
    ),
};
