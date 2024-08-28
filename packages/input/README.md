The Input component is a customizable and validated input field designed for use in React applications. It provides built-in validation capabilities and error handling, making it easy to integrate user input forms with real-time feedback.

# Install

```js
yarn add @najwer23snacks/input --dev
```

```js
npm install @najwer23snacks/input --save-dev
```

# Example

```typescript
import { Input } from "@najwer23snacks/input";

export const Example = () => {

    return (
        <>
        <FormStory onSubmit={handleOnSubmit}>
          <Input
            type="text"
            name="name"
            validatorOptions={{
              empty: true,
              email: true,
            }} />

          <Input
            type="text"
            name="pass"
          />

          <Button type="submit">Submit</Button>
        </FormStory>
      </>
    );
}
```

# CSS tokens

```css
:root {
  /* Fonts */
  --n23snack-font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica,
    Cantarell, Ubuntu, roboto, noto, arial, sans-serif;

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
```

# Let's connect!

[![dev.to badge](https://img.shields.io/badge/-Portfolio-%239F2B68?style=flat&logo=GoogleChrome&logoColor=white)](https://najwer23.github.io/)
[![dev.to badge](https://img.shields.io/badge/-Résumé-%23017745?style=flat&logo=AdobeAcrobatReader&logoColor=white)](https://najwer23.github.io/resume/)
[![twitter badge](https://img.shields.io/badge/-najwer23-%231FA1F1?style=flat&logo=x&logoColor=white)](https://twitter.com/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%230177B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23ffffff?style=flat&logo=Leetcode)](https://leetcode.com/najwer23/)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23cb3837?style=flat&logo=Npm)](https://www.npmjs.com/~najwer23)
