import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import { Badge } from "../badge";
import { ListItem } from "./list-item";

const meta = {
  title: "Data Display/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  args: {
    title: "Acme Corp",
    preview: "Invoice #1204 — payment confirmation",
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

/* Meta-row cell styles, properly themed via Panda css() */
const amountCls = css({
  fontFamily: "body",
  fontSize: "body.sm",
  lineHeight: "body.sm",
  fontWeight: "medium",
  color: "text.primary",
});
const agingErrorCls = css({
  fontFamily: "body",
  fontSize: "caption",
  lineHeight: "caption",
  fontWeight: "medium",
  color: "status.error",
});
const agingWarnCls = css({
  fontFamily: "body",
  fontSize: "caption",
  lineHeight: "caption",
  fontWeight: "medium",
  color: "status.warning",
});
const timeCls = css({
  fontFamily: "body",
  fontSize: "caption",
  lineHeight: "caption",
  fontWeight: "regular",
  color: "text.tertiary",
  marginLeft: "auto",
});
const contactCls = css({
  fontFamily: "body",
  fontSize: "caption.xs",
  lineHeight: "caption.xs",
  fontWeight: "regular",
  color: "text.tertiary",
});

const listShell = css({
  width: "360px",
  padding: "md",
  display: "flex",
  flexDirection: "column",
  gap: "xs",
  bg: "bg.default",
  borderRadius: "md",
  border: "1px solid",
  borderColor: "border.subtle",
});

const Shell = ({ children }: { children: React.ReactNode }) => (
  <div className={listShell}>{children}</div>
);

/* ─── Single-item states ─────────────────────────────────────────────── */

export const Default: Story = {
  render: (args) => (
    <Shell>
      <ListItem as="button" {...args} onClick={() => {}} />
    </Shell>
  ),
};

export const Active: Story = {
  render: (args) => (
    <Shell>
      <ListItem as="button" active {...args} onClick={() => {}} />
    </Shell>
  ),
};

export const WithStatusBadge: Story = {
  render: (args) => (
    <Shell>
      <ListItem
        as="button"
        {...args}
        titleTrailing={<Badge variant="error">Action</Badge>}
        onClick={() => {}}
      />
    </Shell>
  ),
};

export const WithReplyAccent: Story = {
  render: (args) => (
    <Shell>
      <ListItem as="button" accent="reply" {...args} onClick={() => {}} />
    </Shell>
  ),
};

/* ─── Tasks module — full task-item layout ───────────────────────────── */

export const TaskModule: Story = {
  render: () => (
    <Shell>
      <ListItem
        as="button"
        title="Acme Corp"
        titleTrailing={<Badge variant="error">Action</Badge>}
        preview="Invoice #1204 — 14 days overdue"
        meta={
          <>
            <span className={amountCls}>€1,240.00</span>
            <span className={agingErrorCls}>14d overdue</span>
            <span className={timeCls}>10:30 AM</span>
          </>
        }
        sub="3 open disputes"
        onClick={() => {}}
      />
      <ListItem
        as="button"
        active
        title="Beta Industries"
        titleTrailing={<Badge variant="warning">Waiting</Badge>}
        preview="1st dunning — reminder scheduled"
        meta={
          <>
            <span className={amountCls}>€3,420.50</span>
            <span className={agingWarnCls}>5d</span>
            <span className={timeCls}>Yesterday</span>
          </>
        }
        onClick={() => {}}
      />
      <ListItem
        as="button"
        title="Gamma Holdings"
        titleTrailing={<Badge variant="success">Received</Badge>}
        preview="Payment confirmation"
        meta={
          <>
            <span className={amountCls}>€890.00</span>
            <span className={timeCls}>Apr 10</span>
          </>
        }
        onClick={() => {}}
      />
      <ListItem
        as="button"
        title="Delta Labs"
        titleTrailing={<Badge variant="info">Sent</Badge>}
        preview="1st dunning sent"
        meta={
          <>
            <span className={amountCls}>€560.00</span>
            <span className={timeCls}>Apr 08</span>
          </>
        }
        onClick={() => {}}
      />
    </Shell>
  ),
};

/* ─── Communications module — same layout, accent for replies ──────── */

export const CommsModule: Story = {
  render: () => (
    <Shell>
      <ListItem
        as="button"
        accent="reply"
        title="Jane Doe — Acme Corp"
        titleTrailing="2h"
        preview="Thanks for the update, I'll confirm with finance…"
        meta={
          <>
            <Badge variant="error">Reply</Badge>
            <span className={contactCls}>jane.doe@acme.com</span>
          </>
        }
        onClick={() => {}}
      />
      <ListItem
        as="button"
        active
        title="Marie Curie — Gamma SAS"
        titleTrailing="1d"
        preview="Question about the invoice breakdown"
        meta={
          <>
            <Badge variant="info">Sent</Badge>
            <span className={contactCls}>marie@gamma.fr</span>
          </>
        }
        onClick={() => {}}
      />
      <ListItem
        as="button"
        title="Alan Turing — Delta Labs"
        titleTrailing="3d"
        preview="Re: payment schedule"
        meta={
          <>
            <Badge variant="warning">Planned</Badge>
            <span className={contactCls}>alan@delta.co</span>
          </>
        }
        onClick={() => {}}
      />
    </Shell>
  ),
};
