import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react, { Options } from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { lingui } from "@lingui/vite-plugin";
// import json from '@vitejs/plugin-json';

const REACT_PLUGIN_CONFIG: Options = {
  babel: {
    plugins: ["macros"],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(REACT_PLUGIN_CONFIG), tsconfigPaths(), dts(), lingui()],
});
