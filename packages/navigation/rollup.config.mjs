import { rollup } from "../../rollup.global.mjs"

export default rollup(
  "src/Navigation.tsx",
  [
    {
      file: "dist/navigation.js",
      format: "cjs",
    },
    {
      file: "dist/navigation.mjs",
      format: "es",
    },
  ],
)
