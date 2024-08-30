import{j as n}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as t}from"./index-CcnH5Kt0.js";import{ae as i}from"./index-CzoGZ0In.js";import"./index-RYns6xqu.js";import"./iframe-BBA_2GH6.js";import"../sb-preview/runtime.js";import"./index-D16Yfzz8.js";import"./index-D-8MO0q_.js";import"./index-B23dhaOI.js";import"./index-DrFu-skq.js";function o(s){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Doc"}),`
`,n.jsx(e.h1,{id:"najwer23snacks",children:"najwer23snacks"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://najwer23.github.io/najwer23snacks",rel:"nofollow",children:n.jsx(e.img,{src:"https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white",alt:"Storybook"})})," ",n.jsx(e.a,{href:"https://github.com/najwer23/najwer23snacks",rel:"nofollow",children:n.jsx(e.img,{src:"https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub"})})," ",n.jsx(e.a,{href:"https://www.npmjs.com/search?q=najwer23snacks",rel:"nofollow",children:n.jsx(e.img,{src:"https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white",alt:"NPM"})})]}),`
`,n.jsx(e.p,{children:'A design system is a comprehensive collection of reusable components, guidelines, and standards that help teams create consistent and cohesive digital products. It serves as a "single source of truth," ensuring that design and development processes are streamlined across various platforms and teams.'}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Reusable UI Components"}),`
`,n.jsx(e.li,{children:"Documentation and Guidelines"}),`
`,n.jsx(e.li,{children:"Style Guides"}),`
`,n.jsx(e.li,{children:"Design Tokens"}),`
`,n.jsx(e.li,{children:"Tree shaking"}),`
`]}),`
`,n.jsx(e.h1,{id:"benefits-of-using-a-design-system",children:"Benefits of Using a Design System"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Increased Efficiency: By providing pre-made components, design systems reduce the time spent on repetitive tasks, allowing teams to focus on more complex design challenges."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Consistency Across Products: A design system ensures that all products share a unified look and feel, which enhances brand recognition and user experience. This is crucial for companies with multiple products or teams working in silos."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Improved Collaboration: With a shared language and framework, design systems facilitate better communication among designers, developers, and other stakeholders, reducing misunderstandings and misalignments."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Scalability: As products evolve, design systems allow for easy updates and scalability. Changes made to components can be reflected across all products, ensuring consistency."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Quality Control: A design system simplifies the review process by providing clear guidelines and standards, making it easier to identify inconsistencies and maintain high-quality design."}),`
`]}),`
`]}),`
`,n.jsx(e.h1,{id:"install",children:"Install"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`yarn add najwer23snacks --dev
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`npm install najwer23snacks --save-dev
`})}),`
`,n.jsx(e.h1,{id:"example",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { Button } from "najwer23snacks/lib/button";

export const Example = () => {
    const handleClick = () => {
        console.log("Button clicked!");
    };

    return (
        <Button onClick={handleClick}>
            Click!
        </Button>
    );
}
`})}),`
`,n.jsx(e.h1,{id:"css-tokens",children:"CSS tokens"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Colors are the smiles of nature."}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`:root {
  /* Fonts */
  --n23snack-font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica,
    Cantarell, Ubuntu, roboto, noto, arial, sans-serif;

  /* Button */
  --n23snack-button-bg-color: #00a76f;
  --n23snack-button-bg-color-hover: #007867;
  --n23snack-button-bg-color-active: #004b50;
  --n23snack-button-bg-color-focus: #00b8d9;
  --n23snack-button-bg-color-disabled: #919eab;
  --n23snack-button-font-color: #ffffff;
  --n23snack-button-font-size: 18px;
  --n23snack-button-font-weight: 700;
  --n23snack-button-font-family: var(--n23snack-font-family);
  --n23snack-button-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  /* TextBox */
  --n23snack-textbox-h1-font-color: black;
  --n23snack-textbox-h2-font-color: black;
  --n23snack-textbox-h3-font-color: black;
  --n23snack-textbox-p-font-color: black;
  --n23snack-textbox-a-font-color: orange;
  --n23snack-textbox-a-font-color-hover: orangered;

  /* Input */
  --n23snacks-input-label-font-size: 16px;
  --n23snacks-input-label-font-family: var(--n23snack-font-family);
  --n23snacks-input-label-font-weight: 700;
  --n23snacks-input-label-font-color: #161925;

  --n23snacks-input-input-font-size: 18px;
  --n23snacks-input-input-font-family: var(--n23snack-font-family);
  --n23snacks-input-input-font-weight: 600;
  --n23snacks-input-input-font-color: #161925;
  --n23snacks-input-input-border-color: #161925;
  --n23snacks-input-input-placeholder-font-weight: auto;

  --n23snacks-input-error-font-size: 14px;
  --n23snacks-input-error-font-family: var(--n23snack-font-family);
  --n23snacks-input-error-font-weight: 600;
  --n23snacks-input-error-font-color: #ff3333;
}
`})}),`
`,n.jsx(e.h1,{id:"lets-connect",children:"Let's connect!"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://najwer23.github.io/",rel:"nofollow",children:n.jsx(e.img,{src:"https://img.shields.io/badge/-Portfolio-%239F2B68?style=flat&logo=GoogleChrome&logoColor=white",alt:"dev.to badge"})}),`
`,n.jsx(e.a,{href:"https://najwer23.github.io/resume/",rel:"nofollow",children:n.jsx(e.img,{src:"https://img.shields.io/badge/-R%C3%A9sum%C3%A9-%23017745?style=flat&logo=AdobeAcrobatReader&logoColor=white",alt:"dev.to badge"})}),`
`,n.jsx(e.a,{href:"https://twitter.com/najwer23",rel:"nofollow",children:n.jsx(e.img,{src:"https://img.shields.io/badge/-najwer23-%231FA1F1?style=flat&logo=x&logoColor=white",alt:"twitter badge"})}),`
`,n.jsx(e.a,{href:"https://www.linkedin.com/in/najwer23",rel:"nofollow",children:n.jsx(e.img,{src:"https://img.shields.io/badge/-najwer23-%230177B5?style=flat&logo=linkedin",alt:"dev.to badge"})}),`
`,n.jsx(e.a,{href:"https://leetcode.com/najwer23/",rel:"nofollow",children:n.jsx(e.img,{src:"https://img.shields.io/badge/-najwer23-%23ffffff?style=flat&logo=Leetcode",alt:"dev.to badge"})}),`
`,n.jsx(e.a,{href:"https://www.npmjs.com/~najwer23",rel:"nofollow",children:n.jsx(e.img,{src:"https://img.shields.io/badge/-najwer23-%23cb3837?style=flat&logo=Npm",alt:"dev.to badge"})})]})]})}function u(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{u as default};
