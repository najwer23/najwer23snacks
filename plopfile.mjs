// https://medium.com/@aldinofrizal/file-creation-automation-with-plop-b18d09d77360

export default function (plop) {

	plop.setGenerator("controller", {
		description: "plop generating controller..",

		prompts: [
			{
				type: "input",
				name: "name",
				message: "Component:",
			},
		],

		actions: [
			{
				type: "add",
				path: "src/stories/{{lowerCase name}}/{{name}}.stories.tsx",
				templateFile: "templates/Story.txt",
			},
			{
				type: "add",
				path: "src/stories/{{lowerCase name}}/{{name}}.tsx",
				templateFile: "templates/Main.txt",
			},
			{
				type: "add",
				path: "src/stories/{{lowerCase name}}/{{name}}.module.css",
				templateFile: "templates/CSS.txt",
			},
			{
				type: "add",
				path: "src/stories/{{lowerCase name}}/index.ts",
				templateFile: "templates/Index.txt",
			},
			{
				type: "add",
				path: "src/stories/{{lowerCase name}}/{{name}}.types.ts",
				templateFile: "templates/Types.txt",
			},
		],
	});

}
