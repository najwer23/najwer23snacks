The Grid component is a versatile and essential tool for displaying structured data in a tabular format across various web and application interfaces. It organizes data into rows and columns, facilitating easy viewing and interaction with large datasets. Below is an overview of its key features and functionalities.

# Advantages

- grid can be based on number of columns
- custom padding margin and width
- breakpoints for diffrent devices mobile, tablet, desktop etc.

# Install

```js
yarn add @najwer23snacks/grid --dev
```

```js
npm install @najwer23snacks/grid --save-dev
```

# Example

```typescript
import { Grid } from "@najwer23snacks/grid";

export const Example = () => {
    return (
      <>
        <Grid layout="container" widthMax={800} padding="0 10px 0 10px">
          <Grid layout="columns" >
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i}>
                <div>{testText}</div>
              </div>
            ))}
          </Grid>
        </Grid>
      </>
    );
}
```

# CSS tokens

```css
:root {
}
```

# Let's connect!

- [Portfolio](https://najwer23.github.io/)
- [Github](https://github.com/najwer23)
- [Linkedin](https://www.linkedin.com/in/najwer23/)

# Author

Mariusz Najwer
