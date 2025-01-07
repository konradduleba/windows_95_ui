/// <reference types="vitest" />

import { configDefaults, defineConfig, mergeConfig } from "vitest/config";
import { InlineConfig } from "vitest/node";

import viteConfig from "./vite.config";

const TEST_CONFIG: InlineConfig = {
  globals: true,
  environment: "jsdom",
  setupFiles: "./src/tests/setup-files.ts",
  exclude: [...configDefaults.exclude, "**/e2e/**"],
  css: {
    include: new RegExp(/.+/),
    modules: {
      classNameStrategy: "stable",
    },
  },
};

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: TEST_CONFIG,
  })
);
