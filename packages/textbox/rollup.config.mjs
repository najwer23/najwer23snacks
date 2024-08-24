import { rollup } from "../../rollup.global.mjs"

export default rollup(
  "src/TextBox.tsx",
  [
    {
      file: "dist/textbox.js",
      format: "cjs",
    },
    {
      file: "dist/textbox.mjs",
      format: "es",
    },
  ],
)
