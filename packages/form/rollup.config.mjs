import { rollup } from "../../rollup.global.mjs"

export default rollup(
  "src/Form.tsx",
  [
    {
      file: "dist/form.js",
      format: "cjs",
    },
    {
      file: "dist/form.mjs",
      format: "es",
    },
  ],
)
