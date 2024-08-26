The Grid component is a versatile and essential tool for displaying structured data across various web and application interfaces. It organizes data into rows and columns, facilitating easy viewing and interaction with large datasets. Below is an overview of its key features and functionalities.

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

# Let's connect!

[![dev.to badge](https://img.shields.io/badge/-Portfolio-%239F2B68?style=flat&logo=GoogleChrome&logoColor=white)](https://najwer23.github.io/)
[![dev.to badge](https://img.shields.io/badge/-Résumé-%23017745?style=flat&logo=AdobeAcrobatReader&logoColor=white)](https://najwer23.github.io/resume/)
[![twitter badge](https://img.shields.io/badge/-najwer23-%231FA1F1?style=flat&logo=x&logoColor=white)](https://twitter.com/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%230177B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/najwer23)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23ffffff?style=flat&logo=Leetcode)](https://leetcode.com/najwer23/)
[![dev.to badge](https://img.shields.io/badge/-najwer23-%23cb3837?style=flat&logo=Npm)](https://www.npmjs.com/~najwer23)
