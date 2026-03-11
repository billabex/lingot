import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "styled-system": resolve(__dirname, "styled-system"),
    },
  },
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
      },
      formats: ["es"],
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@billabex/ui-tokens",
        "@billabex/ui-preset",
        /^@pandacss/,
      ],
      output: {
        assetFileNames: "styles[extname]",
      },
    },
  },
});
