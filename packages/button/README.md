This project features a simple and reusable button component built with React, TypeScript and CSS module. The button is designed to be accessible and customizable, making it suitable for various applications.

# Install

```js
yarn add @najwer23snacks/button --dev
```

```js
npm install @najwer23snacks/button --save-dev
```

# Example

```typescript
import { Button } from "@najwer23snacks/button";

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
  --n23snack-button-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
```

# Let's connect!

[![dev.to badge](https://img.shields.io/badge/-Portfolio-%239F2B68?style=flat&logo=GoogleChrome&logoColor=white)](https://najwer23.github.io/)
[![dev.to badge](https://img.shields.io/badge/-Résumé-%23017745?style=flat&logo=AdobeAcrobatReader&logoColor=white)](https://najwer23.github.io/resume/)
[![twitter badge](https://img.shields.io/badge/-najwer23-%231FA1F1?style=flat&logo=x&logoColor=white)](https://twitter.com/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%230177B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23ffffff?style=flat&logo=Leetcode)](https://leetcode.com/najwer23/)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23cb3837?style=flat&logo=Npm)](https://www.npmjs.com/~najwer23)
