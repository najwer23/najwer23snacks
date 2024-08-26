The Form component is a reusable React functional component designed to handle form submissions in a structured and efficient manner. It encapsulates the logic for managing form data and provides a clean interface for developers to work with.

# Install

```js
yarn add @najwer23snacks/form --dev
```

```js
npm install @najwer23snacks/form --save-dev
```

# Example

```typescript
import { Form } from "@najwer23snacks/form";

export const Example = () => {

    const handleOnSubmit = (formData: Record<string, object>) => {
      console.log("Form:", formData)
    };

    return (
      <>
        <Form onSubmit={handleOnSubmit}>
          <div>
            <div><label>Name:</label></div>
              <input type="text" id="numberInput" name="name" className='error' />
            </div>

          <br />

          <div>
            <div><label>Password:</label></div>
            <input type="text" id="password" name="password" />
          </div>

          <br />

          <button type="submit">Submit</button>
        </Form>
      </>
    );
}
```

# Let's connect!

[![dev.to badge](https://img.shields.io/badge/-Portfolio-%239F2B68?style=flat&logo=GoogleChrome&logoColor=white)](https://najwer23.github.io/)
[![dev.to badge](https://img.shields.io/badge/-Résumé-%23017745?style=flat&logo=AdobeAcrobatReader&logoColor=white)](https://najwer23.github.io/resume/)
[![twitter badge](https://img.shields.io/badge/-najwer23-%231FA1F1?style=flat&logo=x&logoColor=white)](https://twitter.com/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%230177B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23ffffff?style=flat&logo=Leetcode)](https://leetcode.com/najwer23/)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23cb3837?style=flat&logo=Npm)](https://www.npmjs.com/~najwer23)
