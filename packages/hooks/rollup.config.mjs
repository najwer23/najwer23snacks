import { rollup } from "../../rollup.global.mjs"

export default rollup(
  "src/index.tsx",
  [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.mjs",
      format: "es",
    },
  ],
)
