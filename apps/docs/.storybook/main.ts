// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
import { resolve, dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  // Colocated stories: stories live next to components in ui-components
  stories: [
    "../../../packages/ui-components/src/**/*.stories.@(ts|tsx)",
    "../stories/**/*.mdx",
  ],

  addons: ["@storybook/addon-links", "@storybook/addon-docs"],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  viteFinal(config) {
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "styled-system": resolve(__dirname, "../../../packages/ui-components/styled-system"),
    };
    return config;
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  }
};

export default config;
