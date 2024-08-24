import { rollup } from "../../rollup.global.mjs"

export default rollup(
  "src/Button.tsx",
  [
    {
      file: "dist/button.js",
      format: "cjs",
    },
    {
      file: "dist/button.mjs",
      format: "es",
    },
  ],
)
