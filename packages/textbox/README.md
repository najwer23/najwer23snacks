The TextBox component is a flexible and reusable React component designed to render various types of text elements, including headings (h1, h2, h3), paragraphs (p), and links (a). It allows for easy customization of text elements while maintaining consistent styling across the application

# Install

```js
yarn add @najwer23snacks/textbox --dev
```

```js
npm install @najwer23snacks/textbox --save-dev
```

# Example

```typescript
import { TextBox } from "@najwer23snacks/textbox";

export const Example = () => {

    return (
        <TextBox tag={"h3"}>hello</TextBox>
    );
}
```

# CSS tokens

```css
:root {
  /* Fonts */
  --n23snack-font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica,
    Cantarell, Ubuntu, roboto, noto, arial, sans-serif;

  /* TextBox */
  --n23snack-textbox-h1-font-color: black;
  --n23snack-textbox-h2-font-color: black;
  --n23snack-textbox-h3-font-color: black;
  --n23snack-textbox-p-font-color: black;
  --n23snack-textbox-a-font-color: orange;
  --n23snack-textbox-a-font-color-hover: orangered;
}
```

# Let's connect!

[![dev.to badge](https://img.shields.io/badge/-Portfolio-%239F2B68?style=flat&logo=GoogleChrome&logoColor=white)](https://najwer23.github.io/)
[![dev.to badge](https://img.shields.io/badge/-Résumé-%23017745?style=flat&logo=AdobeAcrobatReader&logoColor=white)](https://najwer23.github.io/resume/)
[![twitter badge](https://img.shields.io/badge/-najwer23-%231FA1F1?style=flat&logo=x&logoColor=white)](https://twitter.com/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%230177B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23ffffff?style=flat&logo=Leetcode)](https://leetcode.com/najwer23/)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23cb3837?style=flat&logo=Npm)](https://www.npmjs.com/~najwer23)
