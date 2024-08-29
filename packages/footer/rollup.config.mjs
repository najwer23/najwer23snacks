import { rollup } from "../../rollup.global.mjs"

export default rollup(
  "src/Footer.tsx",
  [
    {
      file: "dist/footer.js",
      format: "cjs",
    },
    {
      file: "dist/footer.mjs",
      format: "es",
    },
  ],
)
