import { rollup } from "../../rollup.global.mjs"

export default rollup(
  "src/validator.ts",
  [
    {
      file: "dist/validator.js",
      format: "cjs",
    },
    {
      file: "dist/validator.mjs",
      format: "es",
    },
  ],
)
