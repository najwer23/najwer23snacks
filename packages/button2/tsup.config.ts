import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/button2.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));
