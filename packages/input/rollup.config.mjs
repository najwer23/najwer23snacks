import { rollup } from "../../rollup.global.mjs"

export default rollup(
  "src/Input.tsx",
  [
    {
      file: "dist/input.js",
      format: "cjs",
    },
    {
      file: "dist/input.mjs",
      format: "es",
    },
  ],
)
