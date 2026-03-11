import type { Preview } from "@storybook/react-vite";
import "../../../packages/ui-components/styled-system/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    layout: "centered",
  },
};

export default preview;
