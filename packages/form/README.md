The Form component is a reusable React functional component designed to handle form submissions in a structured and efficient manner. It encapsulates the logic for managing form data and provides a clean interface for developers to work with.

# Advantages

- Collect data from inputs based on name tag

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

- [Portfolio](https://najwer23.github.io/)
- [Github](https://github.com/najwer23)
- [Linkedin](https://www.linkedin.com/in/najwer23/)

# Author

Mariusz Najwer
