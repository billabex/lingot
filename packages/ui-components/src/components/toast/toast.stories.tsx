import type { Meta, StoryObj } from "@storybook/react-vite";
import { Info, CircleCheck, TriangleAlert, CircleAlert, X } from "lucide-react";
import { Toast } from "./toast";
import { IconButton } from "../icon-button";

const closeBtn = <IconButton size="small" icon={<X size={16} />} aria-label="Close" />;

const meta = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
      description: "Color variant",
    },
    children: { control: "text", description: "Toast message" },
  },
  args: {
    children: "This is a notification message.",
    variant: "info",
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoToast: Story = {
  args: {
    variant: "info",
    icon: <Info size={16} />,
    children: "Information message.",
    closeButton: closeBtn,
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    icon: <CircleCheck size={16} />,
    children: "Operation completed.",
    closeButton: closeBtn,
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    icon: <TriangleAlert size={16} />,
    children: "Something needs attention.",
    closeButton: closeBtn,
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    icon: <CircleAlert size={16} />,
    children: "An error occurred.",
    closeButton: closeBtn,
  },
};

/** All variants stacked */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "400px" }}>
      <Toast variant="info" icon={<Info size={16} />} closeButton={closeBtn}>
        Info notification
      </Toast>
      <Toast variant="success" icon={<CircleCheck size={16} />} closeButton={closeBtn}>
        Success notification
      </Toast>
      <Toast variant="warning" icon={<TriangleAlert size={16} />} closeButton={closeBtn}>
        Warning notification
      </Toast>
      <Toast variant="error" icon={<CircleAlert size={16} />} closeButton={closeBtn}>
        Error notification
      </Toast>
    </div>
  ),
};
