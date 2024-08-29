This is a collection of custom React hooks that provide a wide range of functionality to enhance your application's development experience. These hooks are designed to be reusable, efficient, and easy to integrate into your projects. Whether you need to handle window resizing, manage form state, or interact with the browser's storage, this library has you covered.

# Install

```js
yarn add @najwer23snacks/hooks --dev
```

```js
npm install @najwer23snacks/hooks --save-dev
```

# Example

```typescript
import { useWindowSize } from '@najwer23snacks/hooks';

const MyComponent = () => {
  const { width, height } = useWindowSize(300); // 300 ms debounce delay

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
  );
};
```

# Let's connect!

[![dev.to badge](https://img.shields.io/badge/-Portfolio-%239F2B68?style=flat&logo=GoogleChrome&logoColor=white)](https://najwer23.github.io/)
[![dev.to badge](https://img.shields.io/badge/-Résumé-%23017745?style=flat&logo=AdobeAcrobatReader&logoColor=white)](https://najwer23.github.io/resume/)
[![twitter badge](https://img.shields.io/badge/-najwer23-%231FA1F1?style=flat&logo=x&logoColor=white)](https://twitter.com/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%230177B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23ffffff?style=flat&logo=Leetcode)](https://leetcode.com/najwer23/)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23cb3837?style=flat&logo=Npm)](https://www.npmjs.com/~najwer23)
