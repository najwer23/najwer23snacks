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
        <Button
            ariaLabel="button-click"
            onClick={handleClick}
            text="Button"
            type="button"
        />
    );
}
```

# Let's connect!

- [Portfolio](https://najwer23.github.io/)
- [Github](https://github.com/najwer23)
- [Linkedin](https://www.linkedin.com/in/najwer23/)

# Author

Mariusz Najwer
