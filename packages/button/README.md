This project features a simple and reusable button component built with React, TypeScript and CSS module. The button is designed to be accessible and customizable, making it suitable for various applications.

# Advantages

- Small size
- CSS modules

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
  --n23snack-button-font-family: var(--n23snack-font-family);
  --n23snack-button-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
```

# Let's connect!

- [Portfolio](https://najwer23.github.io/)
- [Github](https://github.com/najwer23)
- [Linkedin](https://www.linkedin.com/in/najwer23/)

# Author

Mariusz Najwer
