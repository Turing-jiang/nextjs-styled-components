## Example nextjs with styled-components ## 

This example features how you use styled-components in nextjs, also supports universal styles.

## Getting Started

**Install and run it**

```bash
$ npm install
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Do it step by step

**Create a nextjs project**

```bash
$ npx create-next-app nextjs-styled-components
```

**Install dependencies**  
```bash
npm i styled-components
npm i babel-plugin-styled-components -D
```
**Create .babelrc file and modify**  
```bash
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}
```
**Custom Document file**  
    - Create a file named _document.js in pages folder insert  

<details>
<summary>Click to see example code</summary>
<pre><code>
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
</code></pre>
</details>

**Use styled-components to modify index.js in pages folder**  

## Learn more
More information is available at: <a>https://nextjs.org/docs/getting-started</a>

Also see: <a>https://nextjs.org/docs/getting-started</a>
