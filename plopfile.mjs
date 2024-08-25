// https://medium.com/@aldinofrizal/file-creation-automation-with-plop-b18d09d77360

export default function (plop) {
  // package
  plop.setGenerator('package', {
    description: 'plop generating package.. Type name: ',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Package:',
      },
    ],

    actions: [
      {
        type: 'add',
        path: 'packages/{{lowerCase name}}/src/{{name}}.tsx',
        templateFile: 'plop/templates/Component.txt',
      },
      {
        type: 'add',
        path: 'packages/{{lowerCase name}}/src/{{name}}.module.css',
        templateFile: 'plop/templates/CSSmodule.txt',
      },
      {
        type: 'add',
        path: 'packages/{{lowerCase name}}/.eslintrc.js',
        templateFile: 'plop/templates/Eslintrc.txt',
      },
      {
        type: 'add',
        path: 'packages/{{lowerCase name}}/global.d.ts',
        templateFile: 'plop/templates/Global.txt',
      },
      {
        type: 'add',
        path: 'packages/{{lowerCase name}}/tsconfig.json',
        templateFile: 'plop/templates/TsConfig.txt',
      },
      {
        type: 'add',
        path: 'packages/{{lowerCase name}}/rollup.config.mjs',
        templateFile: 'plop/templates/RollupConfig.txt',
      },
      {
        type: 'add',
        path: 'packages/{{lowerCase name}}/README.md',
        templateFile: 'plop/templates/Readme.txt',
      },
      {
        type: 'add',
        path: 'packages/{{lowerCase name}}/package.json',
        templateFile: 'plop/templates/PackageJson.txt',
      },
      {
        type: 'add',
        path: 'apps/docs/stories/{{name}}.stories.tsx',
        templateFile: 'plop/templates/Stories.txt',
      }
    ],
  });
}
