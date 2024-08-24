The TextBox component is a flexible and reusable React component designed to render various types of text elements, including headings (h1, h2, h3), paragraphs (p), and links (a). It allows for easy customization of text elements while maintaining consistent styling across the application

# Advantages

- Best practices for text element sizes on websites
- fluid size of elements
- h1,h2,h3,p can be link

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

- [Portfolio](https://najwer23.github.io/)
- [Github](https://github.com/najwer23)
- [Linkedin](https://www.linkedin.com/in/najwer23/)

# Author

Mariusz Najwer
