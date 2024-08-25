import { rollup } from "../../rollup.global.mjs"

export default rollup(
  "src/Grid.tsx",
  [
    {
      file: "dist/grid.js",
      format: "cjs",
    },
    {
      file: "dist/grid.mjs",
      format: "es",
    },
  ],
)
