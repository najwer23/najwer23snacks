import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "./src/Button.tsx",
    output: [
      {
        file: "dist/button.js",
        format: "cjs",
      },
      {
        file: "dist/button.mjs",
        format: "es",
      },
    ],
  },
].map((entry) => ({
  ...entry,
  external: ["react/jsx-runtime"],
  plugins: [
    peerDepsExternal(),
		resolve(),
		typescript(),
		postcss({
			extensions: [".css"],
			minimize: true,
			modules: true
		}),
		terser(),
  ],
}));