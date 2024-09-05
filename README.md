This package provides a comprehensive collection of design system assets, including a variety of components, styles, and guidelines. These resources are designed to streamline the creation of cohesive and user-friendly interfaces across multiple applications and platforms, ensuring consistency and an improved user experience.

# najwer23snacks

[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://najwer23.github.io/najwer23snacks) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/najwer23/najwer23snacks) [![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/search?q=najwer23snacks)

A design system is a comprehensive collection of reusable components, guidelines, and standards that help teams create consistent and cohesive digital products. It serves as a "single source of truth," ensuring that design and development processes are streamlined across various platforms and teams.

1. Reusable UI Components
2. Documentation and Guidelines
3. Style Guides
4. Design Tokens
5. Tree shaking

# Benefits of Using a Design System

- Increased Efficiency: By providing pre-made components, design systems reduce the time spent on repetitive tasks, allowing teams to focus on more complex design challenges.

- Consistency Across Products: A design system ensures that all products share a unified look and feel, which enhances brand recognition and user experience. This is crucial for companies with multiple products or teams working in silos.

- Improved Collaboration: With a shared language and framework, design systems facilitate better communication among designers, developers, and other stakeholders, reducing misunderstandings and misalignments.

- Scalability: As products evolve, design systems allow for easy updates and scalability. Changes made to components can be reflected across all products, ensuring consistency.

- Quality Control: A design system simplifies the review process by providing clear guidelines and standards, making it easier to identify inconsistencies and maintain high-quality design.

# Install

```js
yarn add najwer23snacks --dev
```

```js
npm install najwer23snacks --save-dev
```

# Example

```typescript
import { Button } from "najwer23snacks/lib/button";

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
```

# CSS tokens

```css
:root {
  /* Fonts */
  --n23snacks-font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica,
    Cantarell, Ubuntu, roboto, noto, arial, sans-serif;

  /* Button */
  --n23snacks-button-bg-color: #00a76f;
  --n23snacks-button-bg-color-hover: #007867;
  --n23snacks-button-bg-color-active: #004b50;
  --n23snacks-button-bg-color-focus: #00b8d9;
  --n23snacks-button-bg-color-disabled: #919eab;
  --n23snacks-button-font-color: #ffffff;
  --n23snacks-button-font-size: 18px;
  --n23snacks-button-font-weight: 700;
  --n23snacks-button-font-family: var(--n23snacks-font-family);
  --n23snacks-button-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
```

# Let's connect!

[![dev.to badge](https://img.shields.io/badge/-Portfolio-%239F2B68?style=flat&logo=GoogleChrome&logoColor=white)](https://najwer23.github.io/)
[![dev.to badge](https://img.shields.io/badge/-Résumé-%23017745?style=flat&logo=AdobeAcrobatReader&logoColor=white)](https://najwer23.github.io/resume/)
[![twitter badge](https://img.shields.io/badge/-najwer23-%231FA1F1?style=flat&logo=x&logoColor=white)](https://twitter.com/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%230177B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23ffffff?style=flat&logo=Leetcode)](https://leetcode.com/najwer23/)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23cb3837?style=flat&logo=Npm)](https://www.npmjs.com/~najwer23)
