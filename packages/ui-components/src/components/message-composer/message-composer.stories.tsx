import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MessageComposer } from "./message-composer";

const meta = {
  title: "Data Entry/MessageComposer",
  component: MessageComposer,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    placeholder: { control: "text" },
    disableSendWhenEmpty: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    placeholder: "Écrire un message...",
    disableSendWhenEmpty: true,
    disabled: false,
  },
} satisfies Meta<typeof MessageComposer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <MessageComposer
          {...args}
          value={value}
          onChange={setValue}
          onSend={(text) => {
            console.log("send", text);
            setValue("");
          }}
          onAttach={() => console.log("attach")}
        />
        <div style={{ fontFamily: "monospace", fontSize: 12, color: "#534840" }}>
          value: {JSON.stringify(value)}
        </div>
      </div>
    );
  },
};

export const Prefilled: Story = {
  args: {
    defaultValue: "Bonjour, je reviens vers vous au sujet de la facture #2024-08-001…",
  },
};

/** Read-only state — used when the parent task is closed or cancelled. */
export const Disabled: Story = {
  args: {
    defaultValue: "Cette tâche a été clôturée — la conversation est en lecture seule.",
    disabled: true,
  },
};
