import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import { Badge } from "../badge";
import { ListItem } from "./list-item";

const meta = {
  title: "Data Display/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  args: {
    title: "DOSFARMASHOP",
    preview: "Examiner le refus de Jaime",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Shared cell styles for the meta row, Panda-tokenized ─────────── */
const amountCls = css({
  fontFamily: "body",
  fontSize: "body.sm",
  lineHeight: "body.sm",
  fontWeight: "medium",
  color: "text.primary",
});
const dateCls = css({
  fontFamily: "body",
  fontSize: "caption",
  lineHeight: "caption",
  fontWeight: "regular",
  color: "text.tertiary",
  marginLeft: "auto",
});
const exchangesCls = css({
  fontFamily: "body",
  fontSize: "body.sm",
  lineHeight: "body.sm",
  fontWeight: "regular",
  color: "text.primary",
});

/* ── Stage: a fixed-width canvas so truncation and layout are honest ─ */
const stage = css({ width: "320px" });
const Stage = ({ children }: { children: React.ReactNode }) => (
  <div className={stage}>{children}</div>
);

/* ── Component states ─────────────────────────────────────────────── */

export const Default: Story = {
  render: (args) => (
    <Stage>
      <ListItem as="button" {...args} onClick={() => {}} />
    </Stage>
  ),
};

export const Active: Story = {
  render: (args) => (
    <Stage>
      <ListItem as="button" active {...args} onClick={() => {}} />
    </Stage>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Stage>
      <ListItem as="button" disabled {...args} onClick={() => {}} />
    </Stage>
  ),
};

/* ── Slot variations ──────────────────────────────────────────────── */

export const WithStatusBadge: Story = {
  render: (args) => (
    <Stage>
      <ListItem
        as="button"
        {...args}
        titleTrailing={<Badge variant="error">Action requise</Badge>}
        onClick={() => {}}
      />
    </Stage>
  ),
};

export const WithMeta: Story = {
  render: (args) => (
    <Stage>
      <ListItem
        as="button"
        {...args}
        titleTrailing={<Badge variant="error">Action requise</Badge>}
        meta={
          <>
            <span className={amountCls}>16 200 €</span>
            <span className={dateCls}>1 avr. 10:24</span>
          </>
        }
        onClick={() => {}}
      />
    </Stage>
  ),
};

export const WithSub: Story = {
  render: (args) => (
    <Stage>
      <ListItem
        as="button"
        {...args}
        titleTrailing={<Badge variant="error">Action requise</Badge>}
        sub="3 litiges ouverts"
        onClick={() => {}}
      />
    </Stage>
  ),
};

/* ── Truncation sanity check ──────────────────────────────────────── */

export const LongTitleAndPreview: Story = {
  render: () => (
    <Stage>
      <ListItem
        as="button"
        title="DOSFARMASHOP ONLINE SERVICES LIMITED"
        titleTrailing={<Badge variant="warning">Planifiée</Badge>}
        preview="Rappel formel avec mise en demeure et suspension du compte client"
        meta={
          <>
            <span className={exchangesCls}>6 échanges</span>
            <span className={dateCls}>25 mars 09:00</span>
          </>
        }
        onClick={() => {}}
      />
    </Stage>
  ),
};

/* ── Full example — how a real row looks in Tasks / Comms ─────────── */

export const FullExample: Story = {
  render: () => (
    <Stage>
      <ListItem
        as="button"
        title="DOSFARMASHOP"
        titleTrailing={<Badge variant="error">Action requise</Badge>}
        preview="Examiner le refus de Jaime"
        meta={
          <>
            <span className={amountCls}>16 200 €</span>
            <span className={dateCls}>1 avr. 10:24</span>
          </>
        }
        onClick={() => {}}
      />
    </Stage>
  ),
};
