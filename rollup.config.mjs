import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";

// import { Button } from "najwer23storybook/lib/Button";
// https://rollupjs.org/configuration-options/
// https://prateeksurana.me/blog/react-component-library-using-storybook-7/

import * as fs from "fs";

const getFiles = (dir, filesIn, query) => {
	const files = filesIn || [];
	const fsFiles = fs.readdirSync(dir);
	for (var i in fsFiles) {
		const name = dir + "/" + fsFiles[i];
		if (fs.statSync(name).isDirectory()) {
			getFiles(name, files, query);
		} else if (name.includes(query)) {
			files.push(name);
		}
	}
	return files;
};

const filesIndexTs = getFiles("src/stories/", [], "index.ts").map(
	(v) => v.split("//").at(-1).split("/")[0]
);

const Input = Object.fromEntries(
	filesIndexTs.map((v) => [
		`${v.slice(0, 1).toUpperCase() + v.slice(1)}`,
		`src/stories/${v}/index.ts`,
	])
);

// console.log(Input);

export default {
	input: Input,
	output: {
		dir: "lib",
		format: "esm",
		// sourcemap: true,
	},
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
};